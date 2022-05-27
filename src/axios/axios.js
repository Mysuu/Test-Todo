import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.1.23:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  async (config) => {
    const token = getLocalAccessToken();
    if (token) {
      config.headers["Authorization"] = "Bearer " + token; // for Spring Boot back-end
      // config.headers["x-access-token"] = token; // for Node.js Express back-end
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res; //k có lỗi
  },
  async (err) => {
    const originalConfig = err.config;
    if (originalConfig.url !== "/user/sign-in" && err.response) {
      //nếu đang ở khác màn đăng nhập và có lỗi thì xử lý
      // Access Token was expired
      if (err.response.status === 401) {
        //check xem phải lỗi 401 k
        console.log("refresh");
        try {
          const accessToken = await instance.post("/user/reissue", {
            //call api lấy token mới
            refreshToken: getLocalRefreshToken(),
          });
          //xử lý lưu token mới vào Bearer
          const user = {
            accessToken: accessToken.data,
            refreshToken: getLocalRefreshToken(),
          };
          window.localStorage.setItem("user", JSON.stringify(user)); //setItem đặt tên key ở localStorage
          instance.defaults.headers.common["Authorization"] =
            "Bearer " + accessToken.data;
          return instance(originalConfig); //trả về instance
        } catch (error) {
          localStorage.removeItem("user");
          window.location.href = "/";
        }
      }
    }
    return Promise.reject(err);
  }
);

const getLocalAccessToken = () => {
  const accessToken = JSON.parse(
    window.localStorage.getItem("user") //user ở localStorage
  ).accessToken;
  return accessToken;
};

const getLocalRefreshToken = () => {
  const refreshToken = JSON.parse(
    window.localStorage.getItem("user")
  ).refreshToken;
  return refreshToken;
};

export default instance;

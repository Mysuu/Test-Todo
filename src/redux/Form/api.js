import axios from "axios";

const dataLogin = async (user) => {
  const res = await axios.post("http://192.168.1.23:3000/user/sign-in", {
    username: user.username,
    password: user.password,
  });
  if (res.data.accessToken) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }
  return res.data;
};

const dataSignup = async (user) => {
  const res = await axios.post("http://192.168.1.23:3000/user", {
    username: user.username,
    password: user.password,
  });
  return res.data;
};

export { dataLogin, dataSignup };

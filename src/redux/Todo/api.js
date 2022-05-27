// import axios from "axios";
import axios from "../../axios/axios";

const getAllTodoApi = async (page) => {
  const res = await axios.get(`/todo?page=${page}`);
  return res.data;
};

const createTodoApi = async (payload) => {
  const res = await axios.post("/todo", {
    title: payload,
    is_finished: false,
  });
  return res.data;
};

const deleteTodoApi = async (payload) => {
  // const accessToken = JSON.parse(localStorage.getItem("user")).accessToken;
  // axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  await axios.delete(`/todo/${payload}`);
};

const updateTodoDataApi = async (payload) => {
  // const accessToken = JSON.parse(localStorage.getItem("user")).accessToken;
  // axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const res = await axios.patch("/todo", {
    title: payload.title,
    is_finished: false,
    _id: payload._id,
  });
  return res.data;
};

export { createTodoApi, getAllTodoApi, deleteTodoApi, updateTodoDataApi };

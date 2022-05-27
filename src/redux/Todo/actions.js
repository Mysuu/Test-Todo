export const GET_ALL_TODO = "GET_ALL_TODO";
export const GET_ALL_TODO_SUCCESS = "GET_ALL_TODO_SUCCESS";
export const GET_ALL_TODO_FAILED = "GET_ALL_TODO_FAILED";
export const CREATE_TODO = "CREATE_TODO";
export const CREATE_TODO_SUCCESS = "CREATE_TODO_SUCCESS";
export const CREATE_TODO_FAILED = "CREATE_TODO_FAILED";
export const DELETE_TODO = "DELETE_TODO";
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";
export const DELETE_TODO_FAILED = "DELETE_TODO_FAILED";
export const UPDATE_TODO = "UPDATE_TODO";
export const UPDATE_TODO_SUCCESS = "UPDATE_TODO_SUCCESS";
export const UPDATE_TODO_FAILED = "UPDATE_TODO_FAILED";
export const EDIT_TODO = "EDIT_TODO";

const getAllTodo = (page) => {
  return {
    type: GET_ALL_TODO,
    page,
  };
};

const createTodo = (input, page) => {
  //payload là tham so truyen vao
  return {
    type: CREATE_TODO,
    input,
    page,
  };
};

const deleteTodo = (todo, page) => {
  return {
    type: DELETE_TODO,
    todo,
    page,
  };
};

const updateTodo = (payload) => {
  return {
    type: UPDATE_TODO,
    payload,
  };
};

const editTodo = (payload) => {
  return {
    type: EDIT_TODO,
    payload,
  };
};

export { getAllTodo, createTodo, deleteTodo, updateTodo, editTodo };

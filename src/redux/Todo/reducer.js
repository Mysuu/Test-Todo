import {
  CREATE_TODO_SUCCESS,
  DELETE_TODO_SUCCESS,
  GET_ALL_TODO_SUCCESS,
  UPDATE_TODO_SUCCESS,
  EDIT_TODO,
} from "./actions";

const initState = {
  data: [],
  count: 0,
  valueEdit: null,
};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_TODO_SUCCESS:
      return {
        ...state,
        ...action.getAllTodoData,
      };
    case CREATE_TODO_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case DELETE_TODO_SUCCESS:
      const newTodo = state.data.filter((todo) => action.payload !== todo._id);
      return {
        ...state,
        data: newTodo,
      };
    case EDIT_TODO:
      return {
        ...state,
        valueEdit: action.payload,
      };
    case UPDATE_TODO_SUCCESS:
      const valueTodoEdit = state.data.map((todo) => {
        if (todo._id === action.updateTodoData._id) {
          todo = action.updateTodoData;
        }
        return todo;
      });
      return {
        ...state,
        data: valueTodoEdit,
        valueEdit: null,
      };
    default:
      return state;
  }
};

export default todoReducer;

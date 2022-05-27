import { combineReducers } from "redux";
import formReducer from "./Form/reducer";
import todoReducer from "./Todo/reducer";

const rootReducer = combineReducers({
  formReducer,
  todoReducer,
});

export default rootReducer;

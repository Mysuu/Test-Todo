import { AUTO_LOGIN, LOGIN_SUCCESS, LOG_OUT, SIGN_UP_SUCCESS } from "./actions";

const initState = {
  isLogin: false,
  user: "",
};

const formReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
        user: action.login,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        isLogin: false,
        user: action.signup,
      };
    case LOG_OUT:
      return {
        ...state,
        user: "",
        isLogin: false,
      };
    case AUTO_LOGIN:
      return {
        isLogin: true,
      };
    default:
      return state;
  }
};

export default formReducer;

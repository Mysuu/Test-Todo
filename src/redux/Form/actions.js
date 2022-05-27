export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const SIGN_UP = "SIGN_UP";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILED = "SIGN_UP_FAILED";
export const LOG_OUT = "LOG_OUT";
export const AUTO_LOGIN = "AUTO_LOGIN";

const login = (payload) => {
  return {
    type: LOGIN,
    payload,
  };
};

const singup = (payload) => {
  return {
    type: SIGN_UP,
    payload,
  };
};

const logout = (payload) => {
  return {
    type: LOG_OUT,
    payload,
  };
};

const autoLogin = (payload) => {
  return {
    type: AUTO_LOGIN,
    payload,
  };
};
export { login, singup, logout, autoLogin };

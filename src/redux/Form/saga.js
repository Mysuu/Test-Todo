import { call, put, takeLatest } from "redux-saga/effects";
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILED,
} from "./actions";
import { dataLogin, dataSignup } from "./api";

function* workGetDataLogin({ payload }) {
  try {
    const login = yield call(dataLogin, payload);
    yield put({ type: LOGIN_SUCCESS, login });
  } catch (error) {
    yield put({ type: LOGIN_FAILED });
  }
}

function* workGetDataSignup({ payload }) {
  try {
    const signup = yield call(dataSignup, payload);
    yield put({ type: SIGN_UP_SUCCESS, signup });
  } catch (error) {
    yield put({ type: SIGN_UP_FAILED });
  }
}

function* formSaga() {
  yield takeLatest(LOGIN, workGetDataLogin);
  yield takeLatest(SIGN_UP, workGetDataSignup);
}

export default formSaga;

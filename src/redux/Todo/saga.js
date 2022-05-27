import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import {
  CREATE_TODO,
  CREATE_TODO_SUCCESS,
  CREATE_TODO_FAILED,
  GET_ALL_TODO,
  GET_ALL_TODO_SUCCESS,
  GET_ALL_TODO_FAILED,
  DELETE_TODO,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILED,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAILED,
  UPDATE_TODO,
} from "./actions";
import {
  getAllTodoApi,
  createTodoApi,
  deleteTodoApi,
  updateTodoDataApi,
} from "./api";

function* workGetAllTodo({ page }) {
  try {
    const getAllTodoData = yield call(getAllTodoApi, page);
    yield put({ type: GET_ALL_TODO_SUCCESS, getAllTodoData });
  } catch (error) {
    yield put({ type: GET_ALL_TODO_FAILED });
  }
}

function* workCreateTodo({ input, page }) {
  try {
    const createTodoData = yield call(createTodoApi, input);
    yield put({ type: CREATE_TODO_SUCCESS, payload: createTodoData });
    yield put({ type: GET_ALL_TODO, page });
  } catch (error) {
    yield put({ type: CREATE_TODO_FAILED });
  }
}

function* workDeleteTodo({ todo, page }) {
  try {
    yield call(deleteTodoApi, todo);
    yield put({ type: DELETE_TODO_SUCCESS, todo });
    yield put({ type: GET_ALL_TODO, page });
  } catch (error) {
    yield put({ type: DELETE_TODO_FAILED });
  }
}

function* workUpdateTodo({ payload }) {
  try {
    const updateTodoData = yield call(updateTodoDataApi, payload);
    yield put({ type: UPDATE_TODO_SUCCESS, updateTodoData });
  } catch (error) {
    yield put({ type: UPDATE_TODO_FAILED });
  }
}

function* todoSaga() {
  yield takeEvery(GET_ALL_TODO, workGetAllTodo);
  yield takeLatest(CREATE_TODO, workCreateTodo);
  yield takeLatest(DELETE_TODO, workDeleteTodo);
  yield takeLatest(UPDATE_TODO, workUpdateTodo);
}

export default todoSaga;

import { all, fork } from "redux-saga/effects";
import formSaga from "./Form/saga";
import todoSaga from "./Todo/saga";

function* sagas() {
  yield all([fork(formSaga), fork(todoSaga)]);
}

export default sagas;

import { takeEvery, all } from "redux-saga/effects";
import articlesSaga from "./articlesSaga";
import authSaga from "./authSaga";

function* watchAll() {
  yield all([authSaga, articlesSaga]);
}

export default watchAll;

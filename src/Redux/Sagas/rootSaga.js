import { all, takeLatest } from "redux-saga/effects";
import { GET_USER, LOG_IN, LOG_OUT } from "../Ducks/UserDux";
import {
  handleGetUserInfo,
  handleLogin,
  handleLogout,
} from "./AuthenticationHandler";
import { watchGetAllNews } from "./NewsSaga";

export function* watcherSaga() {
  yield takeLatest(LOG_OUT, handleLogout);
  yield takeLatest(GET_USER, handleGetUserInfo);
  yield takeLatest(LOG_IN, handleLogin);
  yield all([
    // get all news saga
    watchGetAllNews(),
  ]);
}

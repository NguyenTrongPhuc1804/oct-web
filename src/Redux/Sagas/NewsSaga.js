import { call, put, takeLatest } from "redux-saga/effects";
import { baseServices } from "../../services/baseService";
import { STATUS_CODE } from "../../util/constants/settingSystem";
import { GET_ALL_NEWS, GET_ALL_NEWS_SAGA } from "../constants/NewsConstant";
import { DISPLAY_LOADING, HIDDEN_LOADING } from "../Ducks/notyfyDux";

function* getAllNews(action) {
  yield put({
    type: DISPLAY_LOADING,
  });
  try {
    const { data, status } = yield call(() => baseServices.get("news/allNews"));
    console.log(data);
    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: GET_ALL_NEWS,
        data,
      });
    }
    yield put({
      type: HIDDEN_LOADING,
    });
  } catch (err) {
    console.log(err);
  }
}
export function* watchGetAllNews(action) {
  yield takeLatest(GET_ALL_NEWS_SAGA, getAllNews);
}

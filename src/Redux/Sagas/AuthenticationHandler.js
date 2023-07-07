import { call, put } from "redux-saga/effects";
import {
  requestLogin,
  requestLogout,
  requsetUserProfile,
} from "../../API/authentication";
import { setLoading, showToast } from "../Ducks/notyfyDux";
import { redirect } from "react-router-dom";
import { resetUser, setUser } from "../Ducks/UserDux";

export function* handleLogout() {
  yield put(setLoading(true));
  try {
    const res = yield call(requestLogout);
    yield put(setLoading(false));

    if (res.status == 200) {
      redirect("/");
      yield put(
        showToast({
          title: "Đăng xuất thành công!",
          status: "success",
          duration: 2000,
          isClosable: true,
        })
      );
      localStorage.removeItem("KalaLoginData");
    } else {
      yield put(
        showToast({
          title: "Đăng xuất thất bại!",
          // description: e.response.data.message,
          status: "error",
          duration: 4000,
          isClosable: true,
        })
      );
    }
  } catch (error) {
    yield put(setLoading(false));
    yield put(
      showToast({
        title: "Đăng xuất thất bại!",
        // description: e.response.data.message,
        status: "error",
        duration: 4000,
        isClosable: true,
      })
    );
  }
}

export function* handleGetUserInfo() {
  yield put(setLoading(true));
  try {
    const res = yield call(requsetUserProfile);
    if (res.status === 200) {
      yield put(setLoading(false));
      yield put(setUser(res.data.user));
      yield put(
        showToast({
          title: "Đăng nhập thành công!",
          status: "success",
          duration: 4000,
          isClosable: true,
        })
      );
    }
  } catch (error) {
    console.log(error);
    yield put(setLoading(false));
    yield put(resetUser());
    yield put(
      showToast({
        title: "Phiên đăng nhập đã hết hạn!",
        description: error.response.data.message,
        status: "error",
        duration: 4000,
        isClosable: true,
      })
    );
  }
}

export function* handleLogin(action) {
  yield put(setLoading(true));

  try {
    const { username, password } = action;
    const res = yield call(requestLogin, username, password);
    if (res.status == 200) {
      yield put(setLoading(false));
      yield put(setUser(res.data));
      localStorage.setItem("KalaLoginData", JSON.stringify(res.data));
    }
  } catch (error) {
    console.log(error);
    yield put(setLoading(false));

    yield put(
      showToast({
        title: "Đăng nhập thất bại!",
        description: error.response.data.message,
        status: "error",
        duration: 4000,
        isClosable: true,
      })
    );
  }
}

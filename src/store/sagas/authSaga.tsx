import axios, { AxiosResponse } from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { getFromLocalStorage, getGithubUserProfile } from "../../helpers";
import { AxiosError } from "axios";
import { useNavigate } from "react-router";
import {
  getUserProfile,
  setLoginFailed,
  setUserProfile,
} from "../slices/authSlice";
import { setMessage } from "../slices/messageSlice";

type ParamsType = {
  type: string;
  payload: any;
};

function* workGetUserProfile(params: ParamsType) {
  const { code, navigate } = params.payload;

  try {
    const response: Promise<AxiosResponse<any, any>> = yield call(() =>
      getGithubUserProfile(code)
    );
    yield put(setUserProfile(response));
    yield navigate("/dashboard");
    window.location.reload();
  } catch (error: any) {
    const errorMessage = (error as AxiosError) && error?.response.data?.message;
    yield put(setLoginFailed(errorMessage));
    yield put(setMessage(errorMessage));
    yield navigate("/");
  }
}

function* authSaga() {
  yield takeEvery("auth/getUserProfile", workGetUserProfile);
}

export default authSaga;

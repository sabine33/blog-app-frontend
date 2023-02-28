import { AxiosError } from "axios";
import { put, call, takeLatest } from "redux-saga/effects";
import { Auth } from "../../helpers/api";
import { APIResponseType } from "../../types";
import { loginStart, loginSuccess, loginFail } from "../slices/authSlice";

const DASHBOARD_PATH = "/dashboard";
/**
 * Saga for handling login
 * @param action payload:code & navigate
 */
function* handleLogin(action: any): Generator<any, void, APIResponseType> {
  try {
    const { code, navigate } = action.payload;
    const response: APIResponseType = yield call(() =>
      Auth.doLoginWithGithubCode(code)
    );
    const { token, user } = response.data;
    yield put(loginSuccess({ token, user }));
    yield navigate(DASHBOARD_PATH);
  } catch (error) {
    yield put(loginFail((error as AxiosError).message));
  }
}

export function* authSaga() {
  yield takeLatest("auth/loginStart", handleLogin);
}

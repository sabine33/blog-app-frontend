import axios, { AxiosResponse } from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { getArticlesSuccess } from "../slices/articlesSlice";

const API_URL = import.meta.env.VITE_APP_API_URL + "articles";

function* workGetArticlesFetch() {
  const articles: Promise<AxiosResponse<any, any>> = yield call(() =>
    axios.get(API_URL)
  );
  yield put(getArticlesSuccess(articles));
}

function* articlesSaga() {
  yield takeEvery("articles/getArticlesFetch", workGetArticlesFetch);
}

export default articlesSaga;

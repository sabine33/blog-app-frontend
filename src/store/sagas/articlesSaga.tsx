import axios, { AxiosResponse } from "axios";
import { toast } from "react-hot-toast";
import { call, put, takeEvery } from "redux-saga/effects";
import { Article } from "../../helpers/apiHelper";
import { APIResponseType } from "../../types";
import { getArticlesSuccess, getArticleSuccess } from "../slices/articlesSlice";
import { setMessage } from "../slices/messageSlice";

const API_URL = import.meta.env.VITE_APP_API_URL + "articles";

function* workGetArticlesFetch() {
  try {
    const result: APIResponseType = yield call(() => Article.getArticles());
    yield put(getArticlesSuccess(result.data));
  } catch (ex) {
    console.log(ex);
  }
}

function* workCreateArticle(params: any) {
  const { article } = params.payload;
  try {
    const result: APIResponseType = yield call(() =>
      Article.createArticle({
        title: "Hello world",
        content: "test abc",
        userId: 100,
      })
    );
    alert(JSON.stringify(result));
    yield put(setMessage({ content: result.message, type: "notification" }));
  } catch (ex) {
    console.log(ex);
    yield put(
      setMessage({ content: "Failed to save article.", type: "error" })
    );
  }
}
function* workUpdateArticle(params: any) {
  const { id, article } = params.payload;
  try {
    const result: APIResponseType = yield call(() =>
      Article.updateArticle(+id, article)
    );
    yield put(setMessage({ content: result.message, type: "notification" }));
  } catch (ex) {
    console.log(ex);
    yield put(
      setMessage({ content: "Failed to save article.", type: "error" })
    );
  }
}
function* deleteArticle(params: any) {
  const { id } = params.payload;
  try {
    const result: APIResponseType = yield call(() => Article.deleteArticle(id));
    alert(JSON.stringify(result));

    yield put(setMessage({ content: result.message, type: "notification" }));
  } catch (ex) {
    console.log(ex);
    yield put(
      setMessage({ content: "Failed to delete article.", type: "error" })
    );
  }
}
function* fetchArticle(params: any) {
  const { id } = params.payload;
  console.log(id);
  try {
    const result: APIResponseType = yield call(() => Article.getArticle(id));
    yield put(getArticleSuccess(result.data));
    yield put(setMessage({ content: result.message, type: "notification" }));
  } catch (ex) {
    console.log(ex);
    yield put(
      setMessage({ content: "Failed to save article.", type: "error" })
    );
  }
}

function* articlesSaga() {
  yield takeEvery("articles/getArticlesFetch", workGetArticlesFetch);
  yield takeEvery("articles/onArticleCreate", workCreateArticle);
  yield takeEvery("articles/onArticleUpdate", workUpdateArticle);
  yield takeEvery("articles/onArticleDelete", deleteArticle);
  yield takeEvery("articles/onArticleFetch", fetchArticle);
}

export default articlesSaga;

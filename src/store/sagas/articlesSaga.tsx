import { takeLatest, put, call } from "redux-saga/effects";
import { Article, Auth } from "../../helpers/apiHelper";
import { APIResponseType } from "../../types";
import {
  articlesReceived,
  articlesRequestFailed,
  articlesReceivedForAdmin,
  articlesRequestFailedForAdmin,
} from "../slices/articlesSlice";
import { setMessage } from "../slices/messageSlice";

function* fetchArticles() {
  try {
    const response: APIResponseType = yield call(() => Article.getArticles());
    yield put(articlesReceived(response.data));
  } catch (error: any) {
    console.log(error);
    yield put(articlesRequestFailed(error.message));
  }
}
function* fetchArticlesForAdmin(action: any) {
  try {
    const { id } = action.payload;
    const response: APIResponseType = yield call(() => Article.getByAuthor(id));
    yield put(articlesReceivedForAdmin(response.data));
  } catch (error: any) {
    console.log(error);
    yield put(articlesRequestFailedForAdmin(error.message));
  }
}

function* addArticle(action: any) {
  try {
    const { article } = action.payload;
    const result: APIResponseType = yield call(() =>
      Article.createArticle(article)
    );
    yield put(
      setMessage({
        type: "notification",
        content: "Article added successfully.",
      })
    );
  } catch (error: any) {
    yield put(
      setMessage({
        type: "error",
        content: "Error adding article.",
      })
    );
  }
}

function* updateArticle(action: any) {
  try {
    const { id, article } = action.payload;
    // alert(JSON.stringify(article));

    const updated: APIResponseType = yield call(() =>
      Article.updateArticle(id, article)
    );
    yield put(
      setMessage({
        content: "Article successfully updated.",
        type: "notification",
      })
    );
  } catch (error: any) {
    yield put(
      setMessage({
        content: "Failed to update article.",
        type: "error",
      })
    );
  }
}

function* deleteArticle(action: any) {
  try {
    const { id } = action.payload;
    yield call(() => Article.deleteArticle(id));
    yield put(
      setMessage({
        content: "Article deleted successfully.",
        type: "notification",
      })
    );
  } catch (error: any) {
    yield put(setMessage({ content: "Unable to delete article." }));
  }
}

export function* watchArticles() {
  yield takeLatest("articles/articlesRequested", fetchArticles);
  yield takeLatest("articles/articleAdded", addArticle);
  yield takeLatest("articles/articleUpdated", updateArticle);
  yield takeLatest("articles/articleDeleted", deleteArticle);
  yield takeLatest("articles/articlesRequestedByAdmin", fetchArticlesForAdmin);
}

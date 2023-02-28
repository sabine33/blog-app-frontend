import { takeLatest, put, call } from "redux-saga/effects";
import { Article } from "../../helpers/api";
import { APIResponseType } from "../../types";
import {
  articlesReceived,
  articlesRequestFailed,
  articlesReceivedForAdmin,
  articlesRequestFailedForAdmin,
} from "../slices/articlesSlice";
import { setMessage } from "../slices/messageSlice";

/**
 * Fetches article from repo.
 */
function* fetchArticles() {
  try {
    const response: APIResponseType = yield call(() => Article.getArticles());
    yield put(articlesReceived(response.data));
  } catch (error: any) {
    console.log(error);
    yield put(articlesRequestFailed(error.message));
  }
}
/**
 * Fetch article for logged in user
 * @param action
 */
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

/**
 * Add new article to the database.
 * @param action
 */
function* addArticle(action: any) {
  try {
    const { article, navigate } = action.payload;
    const result: APIResponseType = yield call(() =>
      Article.createArticle(article)
    );
    yield put(
      setMessage({
        type: "notification",
        content: "Article added successfully.",
      })
    );
    yield navigate("/dashboard");
  } catch (error: any) {
    yield put(
      setMessage({
        type: "error",
        content: "Error adding article.",
      })
    );
  }
}

/**
 * Update existing article.
 * @param action
 */
function* updateArticle(action: any) {
  try {
    const { id, article, navigate } = action.payload;
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
    yield navigate("/dashboard");
  } catch (error: any) {
    yield put(
      setMessage({
        content: "Failed to update article.",
        type: "error",
      })
    );
  }
}
/**
 * Delete articles from the database.
 * @param action
 */
function* deleteArticle(action: any) {
  try {
    const { id, navigate } = action.payload;
    yield call(() => Article.deleteArticle(id));
    yield put(
      setMessage({
        content: "Article deleted successfully.",
        type: "notification",
      })
    );
    yield navigate("/dashboard");
  } catch (error: any) {
    alert(error.message);
    yield put(setMessage({ content: "Unable to delete article." }));
  }
}

export function* articlesSaga() {
  yield takeLatest("articles/articlesRequested", fetchArticles);
  yield takeLatest("articles/articleAdded", addArticle);
  yield takeLatest("articles/articleUpdated", updateArticle);
  yield takeLatest("articles/articleDeleted", deleteArticle);
  yield takeLatest("articles/articlesRequestedByAdmin", fetchArticlesForAdmin);
}

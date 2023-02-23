import { createSlice } from "@reduxjs/toolkit";
import { articles } from "../../constants/articles";

export const articlesSlice = createSlice({
  name: "cats",
  initialState: {
    articles: articles,
    isLoading: false,
    error: null,
  },
  reducers: {
    getArticlesFetch: (state) => {
      state.isLoading = false;
    },
    getArticlesSuccess: (state, action) => {
      state.articles = action.payload;
      state.isLoading = false;
    },
    getArticlesFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    },
    filterArticles: (state, action) => {
      state.articles = state.articles.filter(
        (article) => article.category == action.payload.category
      );
    },
  },
});
export const {
  getArticlesFetch,
  getArticlesSuccess,
  getArticlesFailure,
  filterArticles,
} = articlesSlice.actions;
export default articlesSlice.reducer;

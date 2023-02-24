import { createSlice } from "@reduxjs/toolkit";
import { articles } from "../../constants/articles";

export const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    articles: [],
    isLoading: false,
    error: null,
    article: null,
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
    filterArticles: (state, action) => {},
    onArticleCreate: (state, action) => {
      console.log(action.payload);
    },
    onArticleUpdate: (state, action) => {
      console.log("Updating...");
      console.log(action.payload);
    },
    onArticleDelete: (state, action) => {
      console.log(action.payload);
      console.log("deleting...");
    },
    onArticleFetch: (state, action) => {
      console.log(action.payload);
      state.isLoading = true;
    },
    getArticleSuccess: (state, action) => {
      state.article = action.payload;
      state.isLoading = false;
    },
  },
});
export const {
  getArticlesFetch,
  getArticlesSuccess,
  getArticlesFailure,
  filterArticles,
  onArticleCreate,
  onArticleUpdate,
  onArticleDelete,
  onArticleFetch,
  getArticleSuccess,
} = articlesSlice.actions;
export default articlesSlice.reducer;

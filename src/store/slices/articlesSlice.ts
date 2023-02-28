import { createSlice } from "@reduxjs/toolkit";
import { ArticleType } from "../../types";

type ArticleState = {
  articles: ArticleType[];
  loading: boolean;
  error: string | null;
};
const initialState: ArticleState = {
  articles: [],
  loading: false,
  error: null,
};

export const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    articlesRequested: (state) => {
      state.loading = true;
      state.error = null;
    },
    articlesReceived: (state, action) => {
      state.loading = false;
      state.error = null;
      state.articles = action.payload;
    },
    articlesRequestFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    articlesRequestedByAdmin: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    articlesReceivedForAdmin: (state, action) => {
      state.loading = false;
      state.error = null;
      state.articles = action.payload;
    },
    articlesRequestFailedForAdmin: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    articleAdded: (state, action) => {
      let article = action.payload;
      state.articles.push(article);
    },
    articleUpdated: (state, action) => {
      const { id, ...updatedArticle } = action.payload;
      const index = state.articles.findIndex((article) => article.id === id);
      if (index !== -1) {
        state.articles[index] = { ...state.articles[index], ...updatedArticle };
      }
    },
    articleDeleted: (state, action) => {
      state.articles = state.articles.filter(
        (article) => article.id !== action.payload
      );
    },
  },
});

export const {
  articlesRequested,
  articlesReceived,
  articlesRequestFailed,
  articleAdded,
  articleUpdated,
  articleDeleted,
  articlesReceivedForAdmin,
  articlesRequestedByAdmin,
  articlesRequestFailedForAdmin,
} = articlesSlice.actions;

export default articlesSlice.reducer;

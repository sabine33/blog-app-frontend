import { Provider } from "react-redux";
import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./slices/articlesSlice";
import articlesSaga from "./sagas/articlesSaga";

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
  },
  middleware: [saga],
});

saga.run(articlesSaga);

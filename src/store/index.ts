import { Provider } from "react-redux";
import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./slices/articlesSlice";
import authReducer from "./slices/authSlice";
import messageReducer from "./slices/messageSlice";
import { articlesSaga } from "./sagas/articlesSaga";
import { authSaga } from "./sagas/authSaga";

const sagaMiddleware = createSagaMiddleware();
/**
 * Entrypoint for a redux store
 */
export const store = configureStore({
  reducer: {
    articles: articlesReducer,
    auth: authReducer,
    message: messageReducer,
  },
  middleware: [sagaMiddleware],
  devTools: true,
});

sagaMiddleware.run(articlesSaga);
sagaMiddleware.run(authSaga);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

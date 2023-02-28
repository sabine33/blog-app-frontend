import React from "react";
import ReactDOM from "react-dom/client";
import { transitions, positions, Provider as AlertProvider } from "react-alert";

import App from "./App";
import "./styles/Main.scss";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import AlertTemplate from "react-alert-template-basic";

// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AlertProvider template={AlertTemplate} {...options}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </AlertProvider>
);

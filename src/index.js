import React from "react";
import ReactDOM from "react-dom";
import "./Scss/index.scss";
import "semantic-ui-css/semantic.min.css";
import App from "./App";
import { HashRouter as Router } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";

ReactDOM.render(
  <ToastProvider placement="bottom-center">
    <Router hashType="noslash">
      <App />
    </Router>
  </ToastProvider>,
  document.getElementById("root")
);

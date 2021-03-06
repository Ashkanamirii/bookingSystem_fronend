import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals";

// imports
import "bootstrap/dist/css/bootstrap.min.css";
// import "./components/auth/signUp/SignUpForm.css";

import "./styles/app.scss";

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

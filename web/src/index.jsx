import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./infrastructure/styles/global.css";
import bootstrap from "./infrastructure/bootstrap";
import Root from "./infrastructure/components/Root";

window.onload = async () => {
  await bootstrap();
  ReactDOM.render(<Root />, document.getElementById("root"));
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

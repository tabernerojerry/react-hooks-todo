import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import App from "./components/App";

import "./style.css";

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();

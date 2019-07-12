import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Hellas from "./Hellas";
import * as microsoftTeams from "@microsoft/teams-js";

try {
  microsoftTeams.initialize();
} catch (error) {}

ReactDOM.render(<Hellas />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

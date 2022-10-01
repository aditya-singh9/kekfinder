import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ItemsState from "./ItemsState";
import "./index.css";

ReactDOM.render(
  <StrictMode>
    <ItemsState>
    <App />
    </ItemsState>
  </StrictMode>,
  document.getElementById("root")
);

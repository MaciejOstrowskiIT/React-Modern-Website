import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Menu } from "./components/Menu";
import Wallet from "./components/Wallet";
import { OrderContextProvider } from "./context/OrderContextProvider";
// import * as ReactDOMClient from "react-dom/client";

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Menu /> */}
    <OrderContextProvider />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

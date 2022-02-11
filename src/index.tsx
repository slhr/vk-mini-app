import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";
import {store} from "./store";
import {createGlobalStyle} from "styled-components";

const Global = createGlobalStyle`

  input[type="date"] {
    position: relative;
  }

  input[type="date"]::-webkit-calendar-picker-indicator {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    width: auto;
    height: auto;
    color: transparent;
    background: transparent;
  }
  
  input[type="date"]::-webkit-inner-spin-button,
  input[type="date"]::-webkit-clear-button {
    z-index: 1;
  }
  
`;

ReactDOM.render(
    <>
        <Global/>
        <Provider store={store}>
            <App/>
        </Provider>
    </>,
    document.getElementById("root")
);


/**
 * framework imports
 */
import React      from "react";
import { render } from "react-dom";
/**
 * plugin imports
 */
import { Provider } from "react-redux";
/**
 * project imports
 */
import store   from "./store/index";
import { App } from "./components/App";

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
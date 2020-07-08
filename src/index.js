import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import App from "./App";
import rootStore from "./app/store/rootStore";

(async () => {
  const initialState = {};
  const store = rootStore(initialState);

  const rootEl = document.getElementById("root");
  const render = (Component, el) => {
    ReactDOM.render(
      <Provider store={store}>
        <Component dispatch={store.dispatch} />
      </Provider>,
      el
    );
  };

  render(App, rootEl);
})(window);

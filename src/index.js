import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./assets/style/index.scss"; // 引入css
import "antd/dist/antd.css";
import Root from "./router";
import store from "./store";

/* 初始化 */
ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById("app")
);

if (module.hot) {
  // 实现热更新
  module.hot.accept();
}

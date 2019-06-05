import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./assets/iconfont/iconfont.css"
import "antd/dist/antd.css";
import "./assets/style/index.scss"; // 引入css
import Root from "./router";
import store from "./store";

/* 初始化 */
ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById("app")
);

// 实现热更新
if (module.hot) {
  module.hot.accept();
}

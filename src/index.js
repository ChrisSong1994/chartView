import React  from "react";
import ReactDOM from 'react-dom';
import './assets/style/index.scss'; // 引入css
import 'antd/dist/antd.css';
import Root from './router';

/* 初始化 */
  ReactDOM.render(
    <Root/>,
    document.getElementById('app')
  );

if (module.hot) {
  // 实现热更新
  module.hot.accept();
}

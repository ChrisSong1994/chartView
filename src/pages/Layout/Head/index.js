import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Layout, Menu } from 'antd';
const { Header } = Layout;
import './style.scss'

class Head extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1"><Link to="/">首页</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/View">可视化</Link></Menu.Item>
          <Menu.Item key="3"><Link to="/Editer">编辑区</Link></Menu.Item>
        </Menu>
      </Header>
    )
  }
}

export default Head

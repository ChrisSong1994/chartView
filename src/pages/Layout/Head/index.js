import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Layout, Menu } from "antd";
const { Header } = Layout;
import "./style.scss";

class Head extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props)
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }

  matchSelectKey(pathName) {


  }

  render() {
    return (
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="home">
            <Link to="/">首页</Link>
          </Menu.Item>
          <Menu.Item key="view">
            <Link to="/view">可视化</Link>
          </Menu.Item>
          <Menu.Item key="data">
            <Link to="/data">数据管理</Link>
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}


export default withRouter(Head);

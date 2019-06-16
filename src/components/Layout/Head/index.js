import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Layout, Menu } from "antd";
const { Header } = Layout;
import "./style.scss";

class Head extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKey: 'view'
    }
  }

  componentDidMount() {
    const path = this.props.location.pathname
    this.mathPath(path)
  }

  mathPath(path) {
    let selectedKey
    if (path.includes('view') || (path === '/')) { selectedKey = 'view' }
    if (path.includes('data')) { selectedKey = 'data' }
    this.setState({ selectedKey })
  }


  render() {
    const { selectedKey } = this.state
    return (
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[selectedKey]}
          style={{ lineHeight: "64px" }}
          onSelect={(item) => {
            this.mathPath(item.key)
          }}>
          <Menu.Item key="view">
            <Link to="/">可视化</Link>
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

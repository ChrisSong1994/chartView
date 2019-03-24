import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "antd";

const { Content } = Layout;

import Head from "pages/Layout/Head";
import Foot from "pages/Layout/Foot";
import View from "pages/View";
import Home from "pages/Home";
import Editer from "pages/Editer";
import Data from "pages/Data";

export default class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editerHight: 0
    };
  }

  // 计算展示区高度
  calculateViewHeight() {
    let height =
      document.body.clientHeight || document.documentElement.clientHeight;
    this.setState({
      editerHight: height - 64 - 30
    });
  }

  componentWillMount() {
    this.calculateViewHeight();
  }

  componentDidMount() {
    window.onresize = () => {
      this.calculateViewHeight();
    };
  }

  render() {
    let { editerHight } = this.state;
    return (
      <Router>
        <Layout>
          <Head />
          <Content
            style={{
              marginTop: 64,
              height: editerHight
            }}
          >
            <div
              className="main"
              style={{ background: "#fff", width: "100%", height: "100%" }}
            >
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/View" component={View} />
                <Route path="/Data" component={Data} />
                <Route path="/Editer" component={Editer} />
              </Switch>
            </div>
          </Content>
          <Foot />
        </Layout>
      </Router>
    );
  }
}

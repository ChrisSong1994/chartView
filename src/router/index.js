import React, { Component } from "react";
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { Layout } from "antd";
import Head from "components/Layout/Head";
import Foot from "components/Layout/Foot";
import View from "pages/View";
import Data from "pages/Data";
import NotFound from 'pages/NotFound'

const { Content } = Layout;
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
      <Router  >
        <Layout>
          <Head />
          <Content style={{ marginTop: 64, height: editerHight }} >
            <div className="main" style={{ background: "#fff", width: "100%", height: "100%" }} >
              <Switch>
                <Route exact path="/" component={View} />
                <Route path="/view" component={View} />
                <Route path="/data" component={Data} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </Content>
          <Foot />
        </Layout>
      </Router>
    );
  }
}

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "antd";

const { Content } = Layout;

import Head from "pages/Layout/Head";
import Foot from "pages/Layout/Foot";
import View from "pages/View";
import Home from "pages/Home";
import Editer from "pages/Editer";

const getRouter = () => (
  <Router>
    <Layout>
      <Head />
      <Content
        style={{
          padding: "0 50px",
          marginTop: 64,
        }}
      >
        <div
          className="main"
          style={{ background: "#fff", width: "100%", height: "100%" }}
        >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/View" component={View} />
            <Route path="/Editer" component={Editer} />
          </Switch>
        </div>
      </Content>
      <Foot />
    </Layout>
  </Router>
);
export default getRouter;

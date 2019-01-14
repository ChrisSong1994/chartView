import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout, } from 'antd';

const { Content, Footer } = Layout;

import Head from 'pages/Layout/Head/index.js'
import View from 'pages/View';
import Home from 'pages/Home';
import Editer from "pages/Editer"

const getRouter = () => (
  <Router>
    <Layout>
      <Head />
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 1580 }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/View" component={View} />
            <Route path="/Editer" component={Editer} />
          </Switch>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        created by song @2019
    </Footer>
    </Layout>
  </Router>
);
export default getRouter;

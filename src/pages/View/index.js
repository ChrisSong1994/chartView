import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Button } from "antd";
import "./index.scss";
import List from './List'
import Edit from './Edit'

export default class Page1 extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Router>
            <Switch>
              <Route exact path="/view" component={List} />
              <Route path="/view/edit" component={Edit} />
            </Switch>
      </Router>
    );
  }
}
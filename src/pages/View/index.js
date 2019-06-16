import React, { Component } from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import List from './List'
import Edit from './Edit'

class View extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/view" component={List} />
          <Route path="/view/edit/:id" component={Edit} />
        </Switch>
      </Router>
    );
  }
}

export default View
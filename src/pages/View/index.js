import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Button } from "antd";
import Timer from "./components/canvas/timer";
import Star from "./components/canvas/star";
import "./index.scss";

export default class Page1 extends Component {
  constructor(){
    super()
  }

  render() {
    return (
      <Router>
        <div>
          <div className="view-type">
            <Link to="/View/timer">
              <Button type="primary">时钟</Button>
            </Link>
            <Link to="/View/star">
              <Button type="primary">五角星</Button>
            </Link>
          </div>
          <div className="view-box">
            <Switch>
              <Route exact path="/View" component={Timer} />
              <Route path="/View/timer" component={Timer} />
              <Route path="/View/star" component={Star} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

// function Child({ match }) {
//   if(match.params.id==='timer')
//   return Timer;
// }

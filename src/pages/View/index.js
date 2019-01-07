import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button } from "antd";
import Timer from "./components/canvas/timer";
import './index.scss'

export default class Page1 extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="view-type">
            <Link to="/timer">
              <Button type="primary">时钟</Button>
            </Link>
          </div>
          <div className="view-box">
            <Route path="/timer" component={Timer} />
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

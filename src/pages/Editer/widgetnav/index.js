import React, { Component } from "react";
import { Button } from "antd";

export default class WidgetNav extends Component {
  constructor(props) {
    super(props);
  }

  addWidget() {
    console.log(111)
  }

  render() {
    return (
      <nav className="widget-nav">
        <div className="widget-chart">
          <Button shape="circle" icon="plus" onClick={this.addWidget} />
        </div>
      </nav>
    );
  }
}

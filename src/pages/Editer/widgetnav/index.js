import React, { Component } from "react";
import { Button } from "antd";
import { getUniqueID } from "utils/util";

export default class WidgetNav extends Component {
  constructor(props) {
    super(props);
    this.addWidget = this.addWidget.bind(this);
  }

  addWidget() {
   
    const widget = {
      id:getUniqueID(),
      left: 50,
      top: 50,
      width: 100,
      height: 100
    };
    this.props.addWidget( widget);
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

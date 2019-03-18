import React, { Component } from "react";
import { Button } from "antd";
import { generateUUID } from "utils/util";
import PropTypes from "prop-types";
import { addWidget } from "store/window/action";

export default class WidgetNav extends Component {
  static propTypes = {
    dispatch: PropTypes.func
  };
  constructor(props) {
    super(props);
    this.addWidget = this.addWidget.bind(this);
  }

  addWidget() {
    const widget = {
      id: generateUUID(),
      left: 50,
      top: 50,
      width: 400,
      height: 350
    };
    this.props.dispatch(addWidget(widget));
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

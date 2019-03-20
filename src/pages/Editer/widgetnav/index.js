import React, { Component } from "react";
import { Button } from "antd";
import { generateUUID } from "utils/util";
import PropTypes from "prop-types";
import { addWidget } from "store/window/action";
import chartConfig from "modules/charts/chartConfig";

export default class WidgetNav extends Component {
  static propTypes = {
    dispatch: PropTypes.func
  };
  constructor(props) {
    super(props);
    this.addWidget = this.addWidget.bind(this);
  }

  addWidget(chartType) {
    console.log(chartType);
    const widget = {
      id: generateUUID(),
      ...chartConfig[chartType]
    };
    this.props.dispatch(addWidget(widget));
  }

  render() {
    return (
      <nav className="widget-nav">
        <div className="widget-chart">
          {Object.keys(chartConfig).map(item => {
            return (
              <Button key={item} onClick={this.addWidget.bind(this, item)}>
                {chartConfig[item].name}
              </Button>
            );
          })}
        </div>
      </nav>
    );
  }
}

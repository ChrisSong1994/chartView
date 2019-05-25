import React, { Component } from "react";
import { Button } from "antd";
import PropTypes from "prop-types";
import chartConfig from "modules/charts/chartConfig";

 class Panel extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    addWidget:PropTypes.func,
  };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="widget-nav">
        <div className="widget-chart">
          {Object.keys(chartConfig).map(item => {
            return (
              <Button className="widget-btn"
                key={item}
                draggable={true}
                data-type={chartConfig[item].type}
                data-name={chartConfig[item].name}
                onClick={this.props.addWidget.bind(this, item)}>
                {chartConfig[item].name}
              </Button>
            );
          })}
        </div>
      </nav>
    );
  }
}
export default Panel
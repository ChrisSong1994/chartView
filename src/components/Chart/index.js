import React, { Component } from "react";
import ChartCreator from "modules/charts";
import PropTypes from "prop-types";
import Event from "utils/event";
class Chart extends Component {
  static propTypes = {
    widget: PropTypes.object
  };
  constructor() {
    super();
  }

  componentDidMount() {
    this.createChart()
  }

  // 创建图表实例
  createChart() {
    ChartCreator.create(this.refs.chart, "line").then(chart => {
      this.chart = chart;
      this.chart.render();
      draggle.init();
      Event.on("widgetResize", size => {
        this.chart.resize();
      });
    });
  }

  render() {
    const { id, left, top, width, height } = this.props.widget;
    return (
      <div className="dragger" style={{ left, top, width, height }}>
        <div className="chart" ref="chart" id={id} />
        <span className="resize-handle" />
      </div>
    );
  }
}

export default Chart;

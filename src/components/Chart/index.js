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
    ChartCreator.create(this.refs.chart, "bar").then(chart => {
      this.chart = chart;
      this.chart.render();
      draggle.init();
      Event.on("widgetResize", (size) => {
        console.log(size)
        this.chart.resize({width:size.w,height:size.h});
      });
     
    });
  }

  createChart() {}
  render() {
    const { id, left, top, width, height } = this.props.widget;
    return (
      <div className="dragger">
        <div
          className="chart"
          ref="chart"
          id={id}
          style={{ left, top, width, height }}
        />
        <span className="resize-handle" />
      </div>
    );
  }
}

export default Chart;

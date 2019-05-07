import React, { Component } from "react";
import ChartCreator from "modules/charts";
import PropTypes from "prop-types";
import Event from "utils/event";

class Chart extends Component {
  static propTypes = {
    widget: PropTypes.object
  };
  constructor(props) {
    super(props);
    this.state = {
        left: props.widget.left,
        top: props.widget.top
    }
  }

  componentDidMount() {
    this.createChart();
  }

  // 创建图表实例
  createChart() {
    const { type } = this.props.widget;
    ChartCreator.create(this.refs.chart, type).then(chart => {
      this.chart = chart;
      this.chart.render();
      draggle.init();
      this.calculateReact()
      Event.on("widgetResize", size => {
        this.chart.resize();
        console.log(111)
      });
      // echart点击事件注册
      this.chart.on("click", params => {
        console.log(params);
      });
    });
  }

    // 计算边界条件（避免超出下和右边界）
  calculateReact() {
    const { left, top, width, height } = this.props.widget;
    const wrapWidth = draggle.$container.css("width")
    const wrapHeight = draggle.$container.css("height")
    if (parseInt(width + left) > parseInt(wrapWidth)) {
      this.setState({
        left: parseInt(wrapWidth) - width
      })
    }
    if (parseInt(height + top) > parseInt(wrapHeight)) {
      this.setState({
        top: parseInt(wrapHeight) - height
      })
    }
  }

  render() {
    const { id, width, height } = this.props.widget;
    const { left, top, } = this.state
    return (
      <div className="dragger" style={{ left, top, width, height }}>
        <div className="chart" ref="chart" id={id} />
        <span className="resize-handle" />
      </div>
    );
  }

  componentWillUnmount(){
    Event.removeListener("widgetResize")
  }
}

export default Chart;

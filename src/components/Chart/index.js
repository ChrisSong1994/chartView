import React, { Component, PureComponent } from "react";
import ChartCreator from "modules/charts";
import PropTypes from "prop-types";
import Event from "utils/event";
import {parseKeyToObj} from "utils/util"

class Chart extends PureComponent {
  static propTypes = {
    dispatch: PropTypes.func,
    widget: PropTypes.object,
    widgetId: PropTypes.string
  };
  constructor(props) {
    super(props);
    this.chart = null
    this.state = {
      left: props.widget.left,
      top: props.widget.top
    }
  }

  // 当组件的位置和尺寸改变的时候 处理
  componentWillReceiveProps(nextProps) {
    this.setState({
      left: nextProps.widget.left,
      top: nextProps.widget.top
    })
    if (nextProps.widget.width !== this.props.widget.width ||
      nextProps.widget.height !== this.props.widget.height) {
      this.chart.resize()
    }
  }

  componentDidMount() {
    this.createChart();
  }

  // 创建图表实例
  createChart() {
    const { widget, widgetId,dispatch } = this.props
    ChartCreator.create(this.refs.chart, widget.type).then(chart => {
      this.chart = chart;
      this.chart.render();
      draggle.init();
      this.calculateReact()
      // 尺寸改变
      Event.on("widgetResize", (id, size) => {
        if (id === widgetId) {
          this.chart.resize();
        }
      });

      // 样式更新
      Event.on("updateWidgetStyleSetting", (id, key,value) => {
        if (id === widgetId) {
          let style= parseKeyToObj(key,value)
          this.chart.setStyleSetting(style)
        }
      });

      // 数据更新
      Event.on("updateWidgetDataSetting", (id, data) => {
        if (id === widgetId) { }
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

  componentWillUnmount() {
    Event.removeListener("widgetResize")
  }
}

export default Chart;

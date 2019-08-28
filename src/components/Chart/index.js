import React, { Component, PureComponent } from "react";
import ChartCreator from "modules/charts";
import PropTypes from "prop-types";
import Event from "utils/event";
import { parseKeyToObj } from "utils/util"
import { is } from 'immutable'

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
      left: props.widget.get('left'),
      top: props.widget.get('top'),
      width: props.widget.get('width'),
      height: props.widget.get('height')
    }
  }


  // 当组件的位置和尺寸改变的时候 处理
  componentWillReceiveProps(nextProps) {
    if (!is(nextProps.widget.get('left'), this.props.widget.get('left')) ||
      !is(nextProps.widget.get('top'), this.props.widget.get('top'))) {
      this.setState({
        left: nextProps.widget.get('left'),
        top: nextProps.widget.get('top')
      })
    }

    if (!is(nextProps.widget.get('width'), this.props.widget.get('width')) ||
      !is(nextProps.widget.get('height'), this.props.widget.get('height'))) {
      this.setState({
        width: nextProps.widget.get('width'),
        height: nextProps.widget.get('height')
      }, () => {
        this.chart.resize()
      })
    }
  }

  componentDidMount() {
    this.createChart();
  }

  // 创建图表实例
  createChart() {
    const { widget, widgetId, dispatch } = this.props
    ChartCreator.create(this.refs.chart, widget.get('type')).then(chart => {
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
      Event.on("updateWidgetStyleSetting", (id, key, value) => {
        if (id === widgetId) {
          let style = parseKeyToObj(key, value)
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
    const left = this.props.widget.get('left')
    const top = this.props.widget.get('top')
    const width = this.props.widget.get('width')
    const height = this.props.widget.get('height')
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
    const id = this.props.widget.get('id')
    const backgroundType = this.props.widget.get('backgroundType')
    const background = this.props.widget.get('background')
    const { left, top, width, height } = this.state

    let backgroundValue = background
    if (backgroundType === "picture") {
      backgroundValue = `url(${background})`
    }
    return (
      <div className="dragger" style={{ left, top, width, height, background: backgroundValue }}>
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

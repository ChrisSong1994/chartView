import React, { Component } from "react";
import { connect } from "react-redux";
import Echarts from "echarts";
import "./index.scss";
import WidgetNav from "./widgetnav";
import Event from "utils/event";
import Content from "./content";

class Editer extends Component {
  constructor() {
    super();
    this.addWidget = this.addWidget.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
  }

  addWidget(widget) {
    draggle.addWidget(widget);
    this.createChart(widget.id);
  }

  createChart(id, option) {
    var myChart = Echarts.init(document.getElementById(id));

    myChart.setOption({
      grid: {
        left: "8%",
        top: 20,
        right: "4%",
        bottom: 30
      },
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    });
    Event.on("widgetResize", () => {
      myChart.resize();
    });
  }
  render() {
    const { widgets, window, activeWidgetId } = this.props;
    return (
      <section className="view">
        <div className="tools">工具栏</div>
        <div className="editer">
          <div className="left-panel">
            <WidgetNav addWidget={this.addWidget} />
          </div>
          <Content widgets={widgets} activeWidgetId={activeWidgetId} />
          <div className="right-panel">右侧边栏</div>
        </div>
      </section>
    );
  }
}
const mapStateToProps = state => {
  const { window } = state;
  return {
    window: window,
    activeWidgetId: window.activeWidgetId,
    widgets: window.widgets
  };
};

export default connect(mapStateToProps)(Editer);

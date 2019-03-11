import React, { Component } from "react";
import Echarts from "echarts";
import { findDOMNode } from "react-dom";
import "./index.scss";
import Draggle from "components/Draggle";
import WidgetNav from "./widgetnav";
import { generateUUID } from "utils/util";

const widgets = [
  // {
  //   id: generateUUID(),
  //   left: 50,
  //   top: 50,
  //   width: 400,
  //   height: 350
  // }
];
class Editer extends Component {
  constructor() {
    super();
    this.addWidget = this.addWidget.bind(this);
  }

  componentDidMount() {
    this.init(widgets);
  }

  // 初始化
  init(widgets) {
    const el = findDOMNode(this.refs.wrap);
    window.draggle = this.draggle = new Draggle(el, {
      widgets: widgets,
      widget_selector: ".dragger",
      resizeable: {
        handle: ".resize-handle",
        onStart: () => {
          console.log("start resizing");
        },
        onResize: datas => {
          console.log(datas);
        },
        onStop: () => {
          console.log("stop resizing");
        }
      },
      draggable: {
        onStart: () => {
          console.log("start moving");
        },
        onDrag: datas => {
          console.log(datas);
        },
        onStop: datas => {
          console.log("stop moving", datas);
        }
      }
    });
  }

  addWidget(widget) {
    this.draggle.addWidget(widget);
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
  }
  render() {
    return (
      <section className="view">
        <div className="tools">工具栏</div>
        <div className="editer">
          <div className="left-panel">
            <WidgetNav addWidget={this.addWidget} />
          </div>
          <div ref="wrap" className="content-wrap">
            {/* <div
              className="dragger"
              style={{ background: "blue", width: 100, height: 100 }}
            >
              <span className="resize-handle" />
            </div> */}
          </div>
          <div className="right-panel">右侧边栏</div>
        </div>
      </section>
    );
  }
}

export default Editer;

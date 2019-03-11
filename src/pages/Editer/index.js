import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import "./index.scss";
import Draggle from "components/Draggle";
import WidgetNav from "./widgetnav";

const widgets = [
  {
    id: "80204546",
    left: 50,
    top: 50,
    width: 100,
    height: 100
  }
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

  addWidget(id, widget) {
    this.draggle.addWidget(id, widget);
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

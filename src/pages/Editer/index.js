import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import "./index.scss";
import Draggle from "components/Draggle";
import WidgetNav from "./widgetnav";

const widgets = {
  "80204546": {
    left: 50,
    top: 50,
    width: 100,
    height: 100
  }
};
class Editer extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const el = findDOMNode(this.refs.wrap);
    this.draagle = new Draggle(el, {
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

  render() {
    return (
      <section className="view">
      <div className="tools">工具栏</div>
        <div className="editer">
          <div className="left-panel">
            左侧边栏
            <WidgetNav />
          </div>
          <div ref="wrap" className="content-wrap">
            <div
              className="dragger"
              style={{ background: "blue", width: 100, height: 100 }}
            >
              <span className="resize-handle" />
            </div>
          </div>
          <div className="right-panel">右侧边栏</div>
        </div>
      </section>
    );
  }
}

export default Editer;

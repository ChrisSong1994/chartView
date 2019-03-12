import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import Draggle from "components/Draggle";
import Event from "utils/event";

const widgets = [
  // {
  //   id: generateUUID(),
  //   left: 50,
  //   top: 50,
  //   width: 400,
  //   height: 350
  // }
];
class Content extends Component {
  constructor() {
    super();
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
          Event.emit("widgetResize", datas);
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
      <div className="content">
        <div ref="wrap" className="content-wrap">
          {/* <div
              className="dragger"
              style={{ background: "blue", width: 100, height: 100 }}
            >
              <span className="resize-handle" />
            </div> */}
        </div>
      </div>
    );
  }
}

export default Content;

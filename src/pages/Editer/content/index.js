import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import Draggle from "components/Draggle";
import Chart from "components/Chart";
import Event from "utils/event";
import PropTypes from "prop-types";
import { generateUUID } from "utils/util";
import {addWidget} from "store/window/action"

const widgets = [];
class Content extends Component {
  static propTypes = {
    dispatch:PropTypes.func,
    widgets: PropTypes.object,
    activeWidgetId: PropTypes.string
  };
  constructor() {
    super();
  }
  componentDidMount() {
    this.init(widgets);
    this.props.dispatch(addWidget({
      id: generateUUID(),
      left: 50,
      top: 50,
      width: 400,
      height: 350
    }))
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
    const {widgets,activeWidgetId} = this.props;
    const widget =widgets[activeWidgetId]
    return (
      <div className="content">
        <div ref="wrap" className="content-wrap">
          <Chart widget={widget}  />
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

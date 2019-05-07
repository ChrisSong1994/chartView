import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import Draggle from "components/Draggle";
import Chart from "components/Chart";
import Event from "utils/event";
import PropTypes from "prop-types";
import { setActiveWidgetId } from "store/window/action";

class Content extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    widgets: PropTypes.object,
    activeWidgetId: PropTypes.string
  };
  constructor() {
    super();
  }
  componentDidMount() {
    const { widgets } = this.props;
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
        onStart: (id) => {
          console.log("start resizing",id);
        },
        onResize: (id,size) => {
          Event.emit("widgetResize",id, size);
        },
        onStop: (id,size) => {
          console.log("stop resizing",id,size);
        }
      },
      draggable: {
        onStart: (id) => {
          console.log("start moving",id);
        },
        onDrag: (id,pos) => {
          console.log(id,pos);
        },
        onStop: (id,pos) => {
          console.log("stop moving", id,pos);
        }
      },
      click: {
        rightClick: () => {
          console.log("右击");
        },
        selectedClick: (id, player) => {
          this.props.dispatch(setActiveWidgetId(id));
        }
      }
    });
  }

  render() {
    const { widgets } = this.props;
    return (
      <div className="content">
        <div ref="wrap" className="content-wrap">
          {Object.keys(widgets).map(widgetId => {
            return <Chart key={widgetId} widget={widgets[widgetId]} />;
          })}
        </div>
      </div>
    );
  }
}

export default Content;

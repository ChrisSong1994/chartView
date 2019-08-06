import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import Draggle from "components/Draggle";
import Chart from "components/Chart";
import Event from "utils/event";
import PropTypes from "prop-types";
import { updateWidgetPosition } from "store/widgets/action";
import { setActiveWidgetId } from "store/window/action";
import ColorPicker from "components/ColorPicker";
import Zoom from "components/Zoom"
import { Map, merge } from 'immutable'
import _ from 'lodash'


const ColorModal = ColorPicker.ColorModal;

class Content extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    widgets: PropTypes.object,
    window: PropTypes.object,
    activeWidgetId: PropTypes.string
  };
  constructor() {
    super();
    this.handleDrag = _.throttle(this.handleDrag.bind(this), 100)
    this.handleResize = _.throttle(this.handleResize.bind(this), 100)
  }
  componentDidMount() {
    const { widgets } = this.props;
    this.init(widgets);
  }

  // 初始化
  init(widgets) {
    const el = findDOMNode(this.refs.wrap);
    window.draggle = this.draggle = new Draggle(el, {
      widgets: widgets.toJS(),
      widget_selector: ".dragger",
      resizeable: {
        handle: ".resize-handle",
        onStart: (id) => {
          // console.log("start resizing", id);
        },
        onResize: (id, size) => {
          this.handleResize(id, size)
        },
        onStop: (id, size) => {
          // console.log("stop resizing", id, size);
        }
      },
      draggable: {
        onStart: (id) => {
          // console.log("start moving", id);
        },
        onDrag: (id, pos) => {
          // console.log(id, pos);
          this.handleDrag(id, pos)
          // this.props.dispatch(updateWidgetPosition(id, { left: pos.x, top: pos.y }))
        },
        onStop: (id, pos) => {
          // console.log("stop moving", id, pos);
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


  handleDrag(id, pos) {
    this.props.dispatch(updateWidgetPosition(id, { left: pos.x, top: pos.y }))
  }

  handleResize(id, size) {
    Event.emit("widgetResize", id, size);
    this.props.dispatch(updateWidgetPosition(id, { width: size.w, height: size.h }))
  }

  createCharts() {
    const { widgets, dispatch } = this.props;
    const charts = []
    widgets.map(widget => {
      charts.push(
        <Chart
          dispatch={dispatch}
          key={widget.get('id')}
          widget={widget}
          widgetId={widget.get('id')}
        />
      )
    })
    return charts
  }

  render() {
    const { window } = this.props;
    const width = window.get('width')
    const height = window.get('height')
    const backgroundType = window.get('backgroundType')
    const background = window.get('background')

    let backgroundValue
    if (backgroundType !== 'color') {
      backgroundValue = `url(${background})`
    } else {
      backgroundValue = background
    }
    return (
      <div className="content">
        <div ref="wrap" className="content-wrap" style={{ width, height, background: backgroundValue }} >
          {this.createCharts()}
        </div>
        {/* 颜色选择组件 */}
        <ColorModal />
        {/* 缩放组件 */}
        <Zoom value={50} onChange={() => { }} />
      </div>
    );
  }
}

export default Content;

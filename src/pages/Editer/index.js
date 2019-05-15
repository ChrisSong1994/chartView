import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types"
import "./index.scss";
import { generateUUID } from "utils/util";
import { addWidget } from "store/window/action";
import chartConfig from "modules/charts/chartConfig";
import DragDrop from "components/Dragdrop"
import WidgetNav from "./widgetnav";
import Content from "./content";
import Panel from "./panel";

class Editer extends Component {
  static propTypes = {}
  constructor() {
    super();
    this.addWidget = this.addWidget.bind(this);
  }

  componentDidMount() {
    this.initDragDrop()
  }

  initDragDrop() {
    this.dragdrop = new DragDrop({
      drag: {
        elem: ".widget-btn",
        parentSelector: ".widget-nav",
        onStart: (event, elem) => {
          let type = elem.getAttribute("data-type")
          event.dataTransfer.setData("Text", type)
        }
      },
      drop: {
        elem: ".content-wrap",
        onDrop: (event, text) => {
          let position = {
            left: event.offsetX,
            top: event.offsetY
          }
          console.log(position, text)
          this.addWidget(text, position)
        }
      }
    })
  }

  addWidget(chartType, pos) {
    const widget = Object.assign({}, {
      id: generateUUID(),
      ...chartConfig[chartType]
    }, {
        // 合并拖入的坐标
        left: pos.left,
        top: pos.top
      })

    console.log(widget)
    this.props.dispatch(addWidget(widget));
  }

  render() {
    const { widgets, window, activeWidgetId, dispatch } = this.props;
    return (
      <section className="view">
        <div className="tools">工具栏</div>
        <div className="editer">
          <div className="left-panel">
            <WidgetNav dispatch={dispatch} addWidget={this.addWidget} />
          </div>
          <Content
            dispatch={dispatch}
            widgets={widgets}
            activeWidgetId={activeWidgetId}
          />
          <div className="right-panel">
            <Panel
              dispatch={dispatch}
              activeWidgetId={activeWidgetId}
              widgets={widgets}
              window={window}
            />
          </div>
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

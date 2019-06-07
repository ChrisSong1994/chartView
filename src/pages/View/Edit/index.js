import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types"
import "./index.scss";
import { generateUUID } from "utils/util";
import { addWidget } from "store/window/action";
import chartConfig from "modules/charts/chartConfig";
import DragDrop from "components/Dragdrop"
import Panel from "./panel";
import Content from "./content";
import Setting from "./setting";
import Tool from "./tool"

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
        elem: ".chart-selecor",
        parentSelector: ".widget-nav",
        onStart: (event, elem) => {
          let theme = elem.getAttribute("data-theme")
          let type = elem.getAttribute("data-type")
          event.dataTransfer.setData("DATA", `${theme}-${type}`)
        }
      },
      drop: {
        elem: ".content-wrap",
        onDrop: (event, data) => {
          let position = {
            left: event.offsetX,
            top: event.offsetY
          }
          const chartName = data.split('-')
          this.addWidget(chartName[0], chartName[1], position)
        }
      }
    })
  }

  addWidget(theme, chartType, pos) {
    const widget = Object.assign({}, {
      id: generateUUID(),
      ...chartConfig[theme].children[chartType]
    }, {
        // 合并拖入的坐标
        left: pos.left,
        top: pos.top
      })
    this.props.dispatch(addWidget(widget));
  }

  render() {
    const { widgets, window, activeWidgetId, dispatch } = this.props;
    return (
      <section className="view">
        <Tool dispatch={dispatch} window={window} />
        <div className="editer">
          <div className="left-panel">
            <Panel dispatch={dispatch} addWidget={this.addWidget} />
          </div>
          <Content
            dispatch={dispatch}
            widgets={widgets}
            window={window}
            activeWidgetId={activeWidgetId}
          />
          <div className="right-panel">
            <Setting
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

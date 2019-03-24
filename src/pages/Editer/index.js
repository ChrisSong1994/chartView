import React, { Component } from "react";
import { connect } from "react-redux";
import "./index.scss";
import WidgetNav from "./widgetnav";
import Content from "./content";
import Panel from "./panel";

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
            <Panel />
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

import React, { Component } from "react";
import { Tabs } from "antd";
import PropTypes from "prop-types"
import DataSetting from "./dataSetting";
import StyleSetting from "./styleSetting";
import WindowSetting from "./windowSetting";
const TabPane = Tabs.TabPane;

class Panel extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    window: PropTypes.object,
    activeWidgetId: PropTypes.string,
    widgets: PropTypes.object
  }

  constructor() {
    super();
    this.state = {
      activeKey: "windowSetting"
    };
    this.handleTabChange = this.handleTabChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.activeWidgetId) {
      this.setState({ activeKey: "windowSetting" })
    }
  }

  handleTabChange(activeKey) {
    this.setState({
      activeKey
    });
  }

  render() {
    const { activeKey } = this.state;
    const { dispatch, activeWidgetId, widgets } = this.props
    let widget = {}
    if (activeWidgetId && widgets[activeWidgetId]) {
      widget = widgets[activeWidgetId]
    }
    return (
      <div className="panel-setting">
        <Tabs activeKey={activeKey} onChange={this.handleTabChange}>
          <TabPane tab="窗口配置" key="windowSetting">
            <WindowSetting />
          </TabPane>
          {
            activeWidgetId ?
              <TabPane tab="样式配置" key="styleSetting">
                <StyleSetting
                  dispatch={dispatch}
                  activeWidgetId={activeWidgetId}
                  widget={widget}
                />
              </TabPane> : null
          }
          {
            activeWidgetId ?
              <TabPane tab="数据配置" key="dataSetting">
                <DataSetting
                  dispatch={dispatch}
                  activeWidgetId={activeWidgetId}
                  widget={widget}
                />
              </TabPane> : null
          }
        </Tabs>
      </div>
    );
  }
}

export default Panel;
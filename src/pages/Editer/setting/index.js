import React, { Component } from "react";
import { Tabs } from "antd";
import PropTypes from "prop-types"
import DataSetting from "./dataSetting";
import StyleSetting from "./styleSetting";
import WindowSetting from "./windowSetting";
const TabPane = Tabs.TabPane;

class Setting extends Component {
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
    const { dispatch, activeWidgetId, widgets, window } = this.props
    let widget, styleSetting, dataSetting
    if (activeWidgetId && widgets[activeWidgetId]) {
      widget = widgets[activeWidgetId]
      styleSetting = widget.styleSetting
      dataSetting = widget.dataSetting
    }

    return (
      <div className="panel-setting">
        <Tabs activeKey={activeKey} onChange={this.handleTabChange}>
          <TabPane tab="窗口配置" key="windowSetting">
            <WindowSetting
              window={window}
              dispatch={dispatch}
            />
          </TabPane>
          {
            activeWidgetId ?
              <TabPane tab="样式配置" key="styleSetting">
                <StyleSetting
                  dispatch={dispatch}
                  activeWidgetId={activeWidgetId}
                  data={styleSetting}
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
                  data={dataSetting}
                  widget={widget}
                />
              </TabPane> : null
          }
        </Tabs>
      </div>
    );
  }
}

export default Setting;
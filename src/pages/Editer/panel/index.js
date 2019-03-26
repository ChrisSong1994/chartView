import React, { Component } from "react";
import { Tabs } from "antd";
import DataSetting from "./dataSetting";
import StyleSetting from "./styleSetting";
import WindowSetting from "./windowSetting";
const TabPane = Tabs.TabPane;

export default class Panel extends Component {
  constructor() {
    super();
    this.state = {
      activeKey: "windowSetting"
    };
    this.handleTabChange = this.handleTabChange.bind(this);
  }

  handleTabChange(activeKey) {
    this.setState({
      activeKey
    });
  }

  render() {
    const { activeKey } = this.state;
    return (
      <div className="panel-setting">
        <Tabs  activeKey={activeKey} onChange={this.handleTabChange}>
          <TabPane tab="窗口配置" key="windowSetting">
            <WindowSetting />
          </TabPane>
          <TabPane tab="样式配置" key="styleSetting">
            <StyleSetting/>
          </TabPane>
          <TabPane tab="数据配置" key="dataSetting">
            <DataSetting/>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

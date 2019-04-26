import React, { Component } from "react";
import Config from "modules/charts/config"
import Form from "components/Form"
import ChartOptionSettingItem from "../components/ChartOptionSettingItem"

class StyleSetting extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    const styleConfig = Config.getConfig("bar")
    console.log(styleConfig)
  }
  render() {
    const styleConfig = Config.getConfig("bar")

    return <div className="style-setting">
      <h3>样式配置</h3>
      {
        styleConfig.map((config, index) => {
          return (
            <ChartOptionSettingItem key={config.type} title={config.title}>
              <Form {...config} key={index} />
            </ChartOptionSettingItem>
          )
        })
      }
    </div>;
  }
}

export default StyleSetting;

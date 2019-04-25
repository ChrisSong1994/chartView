import React, { Component } from "react";
import Config from "modules/charts/config.js"
import Form from "components/Form"

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
            <Form {...config} key={index} ></Form>
          )
        })
      }
    </div>;
  }
}

export default StyleSetting;

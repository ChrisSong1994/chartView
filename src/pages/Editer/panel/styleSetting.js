import React, { Component } from "react";
import Config from "modules/charts/config.js"

class StyleSetting extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    const styleConfig = Config.getConfig("bar")
    console.log(styleConfig)
  }
  render() {
    return <div className="style-setting">样式配置</div>;
  }
}

export default StyleSetting;

import React, { Component } from "react";
import PropTypes from "prop-types"
import Config from "modules/charts/config"
import Form from "components/Form"
import ChartOptionSettingItem from "../components/ChartOptionSettingItem"

class StyleSetting extends Component {

  static propTypes = {
    dispatch: PropTypes.func,
    activeWidgetId: PropTypes.object,
    widget: PropTypes.object
  }

  constructor() {
    super();
  }

  componentDidMount() {
  
  }
  render() {
    const {widget,activeWidgetId} =this.props
    const styleConfig = Config.getConfig(widget.type)
    return <div className="style-setting">
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

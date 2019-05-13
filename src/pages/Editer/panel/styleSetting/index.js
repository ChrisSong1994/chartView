import React, { Component } from "react";
import PropTypes from "prop-types"
import Config from "modules/charts/config"
import Form from "components/Form"
import ChartOptionSettingItem from "../components/ChartOptionSettingItem"
import BaseSetting from "./baseSetting"
import Event from "utils/event";

class StyleSetting extends Component {

  static propTypes = {
    dispatch: PropTypes.func,
    activeWidgetId: PropTypes.string,
    widget: PropTypes.object
  }

  constructor(props) {
    super();
  }

  handleChange(key, value) {
    const { activeWidgetId } = this.props
    Event.emit("updateWidgetStyleSetting", activeWidgetId, key, value)
  }


  render() {
    const { widget, activeWidgetId, dispatch } = this.props
    const styleConfig = Config.getConfig(widget.type)
    console.log(styleConfig)
    return <div className="style-setting">
      <ChartOptionSettingItem key={"base-config"} title={"基础配置"}>
        <BaseSetting widget={widget} activeWidgetId={activeWidgetId} dispatch={dispatch} />
      </ChartOptionSettingItem>
      {
        styleConfig.map((config, index) => {
          return (
            <ChartOptionSettingItem key={config.type} title={config.title}>
              <Form
                {...config}
                activeWidgetId={activeWidgetId}
                onChange={this.handleChange.bind(this)}
                key={index} />
            </ChartOptionSettingItem>
          )
        })
      }
    </div>;
  }
}

export default StyleSetting;

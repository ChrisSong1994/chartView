import React, { Component } from "react";
import { Form, Input, Row, Col, InputNumber } from "antd";
import _ from "lodash";
import PropTypes from "prop-types"
import Color from "components/Form/Controls/Color"
import { updateWindowSetting } from "store/window/action"


const FormItem = Form.Item;
const formItemLayout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 15 }
};
class WindowSetting extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    window: PropTypes.object
  }
  constructor() {
    super();
    this.handleChangeValue = _.debounce(this.handleChangeValue, 300)
    this.handleChange = this.handleChange.bind(this);
  }

  handleChangeValue(name, value) {
    this.props.dispatch(updateWindowSetting(name, value))
    console.log(name, value)
  }

  handleChange(name, value) {
    if (name === "name") {
      value.persist()
      this.handleChangeValue(name, value.target.value)
    } else {
      this.handleChangeValue(name, value)
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { name, width, height, background } = this.props.window
    return (
      <div className="window-setting">
        <Form>
          <FormItem label="窗口名称" key="window-name" {...formItemLayout}>
            {getFieldDecorator("name", {
              initialValue: name || ""
            })(
              <Input onChange={this.handleChange.bind(this, "name")} />
            )}
          </FormItem>
          <FormItem label="窗口宽度" key="window-width" {...formItemLayout}>
            {getFieldDecorator("width", {
              initialValue: width || ""
            })(
              <InputNumber onChange={this.handleChange.bind(this, "width")} />
            )}
          </FormItem>
          <FormItem label="窗口高度" key="window-height" {...formItemLayout}>
            {getFieldDecorator("height", {
              initialValue: height || ""
            })(
              <InputNumber onChange={this.handleChange.bind(this, "height")} />
            )}
          </FormItem>
          <FormItem label="背景颜色" key="window-background" {...formItemLayout}>
            <Color value={background} onChange={this.handleChange.bind(this, "background")} />
          </FormItem>
        </Form>
      </div>
    );
  }
}

WindowSetting = Form.create()(WindowSetting)

export default WindowSetting

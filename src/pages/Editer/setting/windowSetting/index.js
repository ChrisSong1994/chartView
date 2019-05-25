import React, { Component } from "react";
import { Form, Input, Radio, InputNumber } from "antd";
import _ from "lodash";
import PropTypes from "prop-types"
import Color from "components/Form/Controls/Color"
import { updateWindowSetting } from "store/window/action"

const RadioGroup = Radio.Group;

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
    const { getFieldDecorator, getFieldValue } = this.props.form;
    const { name, width, height, backgroundType, background } = this.props.window
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
          <FormItem {...formItemLayout} label={'背景'}>
            {getFieldDecorator('backgroundType', {
              initialValue: backgroundType
            })(
              <RadioGroup onChange={(value) => { this.handleChange("backgroundType", value) }}>
                <Radio value="color">背景色</Radio>
                <Radio value="picture">背景图片</Radio>
              </RadioGroup>
            )}
          </FormItem>
          {
            getFieldValue(backgroundType) === "color" ?
              <FormItem {...formItemLayout} label={'颜色'}>
                <Color value={background} onChange={(value) => { this.handleChange("background", value) }} />
              </FormItem> :
              <FormItem {...formItemLayout} label={'背景图片'}>
                <Color value={background} onChange={(value) => { this.handleChange("background", value) }} />
              </FormItem>
          }
        </Form>
      </div>
    );
  }
}

WindowSetting = Form.create()(WindowSetting)

export default WindowSetting

import React, { Component } from "react";
import { Form, Input, Row, Col, InputNumber } from "antd";
import _ from "lodash";
const FormItem = Form.Item;
const formItemLayout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 15 }
};
class WindowSetting extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = _.debounce(() => {
    const setting = this.props.form.getFieldsValue();
    console.log(setting);
  }, 200);

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="window-setting">
        <Form>
          <FormItem label="窗口名称" key="window-name" {...formItemLayout}>
            {getFieldDecorator("windowName")(
              <Input onChange={this.handleChange} />
            )}
          </FormItem>
          <FormItem label="窗口宽度" key="window-width" {...formItemLayout}>
            {getFieldDecorator("windowSizeWidth")(
              <InputNumber onChange={this.handleChange} />
            )}
          </FormItem>
          <FormItem label="窗口高度" key="window-height" {...formItemLayout}>
            {getFieldDecorator("windowSizeHeight")(
              <InputNumber onChange={this.handleChange} />
            )}
          </FormItem>
        </Form>
      </div>
    );
  }
}
WindowSetting = Form.create({
  mapPropsToFields: props => {
    return {
      windowName: {
        value: ""
      },
      windowSizeWidth: {
        value: 100
      },
      windowSizeHeight: {
        value: 100
      }
    };
  }
})(WindowSetting);

export default WindowSetting;

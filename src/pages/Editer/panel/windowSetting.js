import React, { Component } from "react";
import { Form, Input } from "antd";
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
    const name = this.props.form.getFieldValue("windowName");
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
        </Form>
      </div>
    );
  }
}

export default Form.create({})(WindowSetting);

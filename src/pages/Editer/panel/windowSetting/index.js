import React, { Component } from "react";
import { Form, Input, Row, Col, InputNumber } from "antd";
import { connect } from 'react-redux'
import _ from "lodash";
import PropTypes from "prop-types"


const FormItem = Form.Item;
const formItemLayout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 15 }
};
class WindowSetting extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    window: PropTypes.object,
    activeWidgetId: PropTypes.object,
    widgets: PropTypes.object
  }
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
    const { name, width, height } = this.props.window
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
        </Form>
      </div>
    );
  }
}

WindowSetting=Form.create()(WindowSetting)

const mapStateToProps = state => {
  const { window } = state;
  return {
    window: window,
    activeWidgetId: window.activeWidgetId,
    widgets: window.widgets
  };
};
export default   connect(mapStateToProps)(WindowSetting) 

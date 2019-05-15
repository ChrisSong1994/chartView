import React, { Component } from "react";
import PropTypes from "prop-types"
import { Form, InputNumber } from 'antd'
import { updateWidgetPosition } from "store/window/action";

const FormItem = Form.Item
const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
}
class BaseSetting extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    activeWidgetId: PropTypes.string,
    widget: PropTypes.object
  }

  constructor() {
    super()
  }
  handleChange(type, value) {
    const { activeWidgetId, dispatch } = this.props
    const data = { [type]: value }
    dispatch(updateWidgetPosition(activeWidgetId, data))
  }

  render() {
    const { widget, form, activeWidgetId } = this.props
    const { getFieldDecorator } = form
    const { left, top, width, height } = widget
    return (
      <Form className="base-setting-form">
        <FormItem {...formItemLayout} label={'位置'}>
          <div className="input-number" >
            <span className="input-number-label">X</span>
            {getFieldDecorator('left', {
              initialValue: left
            })(
              <InputNumber
                min={0}
                max={2000}
                onChange={(value) => { this.handleChange("left", value) }}
              />
            )}
          </div>
          <div className="input-number" >
            <span className="input-number-label">Y</span>
            {getFieldDecorator('top', {
              initialValue: top
            })(
              <InputNumber
                min={0}
                max={2000}
                onChange={(value) => { this.handleChange("top", value) }}
              />
            )}
          </div>
        </FormItem>
        <FormItem {...formItemLayout} label={'尺寸'}>
          <div className="input-number" >
            <span className="input-number-label">W</span>
            {getFieldDecorator('width', {
              initialValue: width
            })(
              <InputNumber
                min={0}
                max={2000}
                onChange={(value) => { this.handleChange("width", value) }}
              />
            )}
          </div>

          <div className="input-number" >
            <span className="input-number-label">H</span>
            {getFieldDecorator('height', {
              initialValue: height
            })(
              <InputNumber
                min={0}
                max={2000}
                onChange={(value) => { this.handleChange("height", value) }}
              />
            )}
          </div>
        </FormItem>
      </Form>
    )
  }
}

export default Form.create()(BaseSetting)
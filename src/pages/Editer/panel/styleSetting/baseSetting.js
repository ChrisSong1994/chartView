import React, { Component } from "react";
import PropTypes from "prop-types"
import { Form, InputNumber } from 'antd'
const FormItem = Form.Item

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
}
class BaseSetting extends Component {
  constructor() {
    super()

  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form className="base-setting-form">
        <FormItem {...formItemLayout} label={'位置'}>
          <div className="input-number" >
            <span className="input-number-label">X</span>
            {getFieldDecorator('left')(
              <InputNumber min={0} max={100} precision={0} />
            )}
          </div>

          <div className="input-number" >
            <span className="input-number-label">Y</span>
            {getFieldDecorator('top')(
              <InputNumber min={0} max={100} precision={0} />
            )}
          </div>
        </FormItem>
        <FormItem {...formItemLayout} label={'尺寸'}>
          <div className="input-number" >
            <span className="input-number-label">W</span>
            {getFieldDecorator('width')(
              <InputNumber min={0} max={100} precision={0} />
            )}
          </div>

          <div className="input-number" >
            <span className="input-number-label">H</span>
            {getFieldDecorator('height')(
              <InputNumber min={0} max={100} precision={0} />
            )}
          </div>
        </FormItem>
      </Form>
    )
  }
}

export default Form.create()(BaseSetting)
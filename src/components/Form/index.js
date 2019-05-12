// 动态创建表单
import React, { Component } from "react"
import { Form } from "antd"
import PropTypes from "prop-types"
import FormControl from "./Control"

const FormItem = Form.Item
const formItemLayout = {
  labelCol: { span: 10 },
  wrapperCol: { span: 14 },
}
class FormComponent extends Component {
  static propTypes = {
    activeWidgetId: PropTypes.object,
    onChange: PropTypes.func
  }

  constructor() {
    super()
  }

  createFormItem(field, key) {
    return (
      <FormItem {...formItemLayout} key={key} label={field.label}>
        <FormControl
          {...field}
          onChange={this.handleChange.bind(this)}
          form={this.props.form}
        />
      </FormItem>
    )
  }

  handleChange(key, value) {
    this.props.onChange(key,value)
  }


  render() {
    const { fields } = this.props
    const Groups = fields.map((field, i) => this.createFormItem(field, i))

    return (
      <Form> {Groups} </Form>
    )
  }

}

export default Form.create()(FormComponent)  
// 动态创建表单
import React, { Component } from "react"
import { Form } from "antd"
import FormControl from "./Control"

const FormItem = Form.Item
const formItemLayout = {
  labelCol: { span: 10 },
  wrapperCol: { span: 14 },
}
class FormComponent extends Component {
  constructor() {
    super()
  }

  createFormItem(field, key) {
    return (
      <FormItem {...formItemLayout} key={key} >
        <FormControl
          {...field}
          form={this.props.form}
        />
      </FormItem>
    )

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
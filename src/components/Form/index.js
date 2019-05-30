// 动态创建表单
import React, { Component } from "react"
import { Form } from "antd"
import PropTypes from "prop-types"
import FormControl from "./Control"
import _ from "lodash"

const FormItem = Form.Item
const formItemLayout = {
  labelCol: { span: 10 },
  wrapperCol: { span: 14 },
}
class FormComponent extends Component {
  static propTypes = {
    activeWidgetId: PropTypes.object,
    onChange: PropTypes.func,
    data: PropTypes.object
  }

  constructor() {
    super()
  }

  // 组件生成器
  createFormItem(field, key) {
    const { data } = this.props
    let formItemProps = {
      key: key,
      className: name
    }
    if (field.hasOwnProperty("relName")) {
      this.relNameParse(field["relName"], formItemProps)
    }
    if (data.hasOwnProperty(field["name"])) {
      field["value"] = data[field["name"]]
    }

    return (
      <FormItem {...formItemLayout} {...formItemProps} label={field.label}>
        <FormControl
          {...field}
          onChange={this.handleChange.bind(this)}
          form={this.props.form}
        />
      </FormItem>
    )
  }


  // 解析关联设置
  relNameParse(relName, formItemProps) {
    if (!relName) return
    let [action, name] = relName.split('=')
    if (action === 'toggle') {
      let relValue = this.getFieldValue(name)
      formItemProps.className += relValue ? "show" : "hide"
    }
  }

  // 获取组件真实值
  getFieldValue(name) {
    const { data, fields } = this.props
    let value
    if (data.hasOwnProperty(name)) {
      value = data[name]
    } else {
      let field = _.find(fields, { action: 'toggle' })
      value = field["value"]
    }
    return value
  }

  // 组件change事件
  handleChange(key, value) {
    this.props.onChange(key, value)
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
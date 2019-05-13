import React, { Component } from 'react'
import PropTypes from "prop-types"
import Controls from './Controls'

class FormControl extends Component {
  static propTypes = {
    form: PropTypes.object,
    name: PropTypes.string,
    value: PropTypes.any,
    field: PropTypes.object,
    onChange: PropTypes.func
  }


  handleChange(val) {
    let value
    if (typeof val === "object" && val.target) {
      value = val.target.value
    }
    this.props.onChange(this.props.name, value)
  }


  render() {
    const { getFieldDecorator } = this.props.form
    const { name, value, type } = this.props
    let Control = null
    let props = Object.assign({}, this.props, { onChange: this.handleChange.bind(this) })
    // 控件名称
    let controlName = type.charAt(0).toUpperCase() + type.slice(1)
    // 动态生成控件
    if (controlName in Controls) {
      Control = React.createElement(Controls[controlName], { ...props })
    }

    return (
      <div className="form-control">
        {getFieldDecorator(name,
          { initialValue: value }
        )(Control)}
      </div>

    )
  }
}

export default FormControl

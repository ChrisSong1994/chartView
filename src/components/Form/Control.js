import React, { Component } from 'react'
import Controls from './Controls'

class FormControl extends Component {

  render() {
    const { getFieldDecorator } = this.props.form
    const { name, value, type } = this.props
    let Control = null
    let props = Object.assign({}, this.props)
    // 控件名称
    let controlName = type.charAt(0).toUpperCase() + type.slice(1)
    // 动态生成控件
    if (controlName in Controls) {
      Control = React.createElement(Controls[controlName], { ...props })
    }

    return (
      <div className="form-control">
        {getFieldDecorator(name, { initialValue: value })(Control)}
      </div>

    )
  }
}

export default FormControl

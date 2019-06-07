import React, { Component } from "react"
import { Select } from "antd"
import PropTypes from "prop-types"
const Option = Select.Option

class SelectWrap extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    options: PropTypes.array,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array
    ])
  }
  constructor() {
    super()
  }

  handleChange(value) {
    this.props.onChange(value)
  }

  render() {
    const { props } = this.props
    let mergeProps = Object.assign({}, this.props, {
      onChange: this.handleChange.bind(this)
    })
    return (
      <Select  {...mergeProps} >
        {
          props.options.map((option, index) => {
            return (
              <Option key={index} {...option} value={'' + option.value} disabled={option.disabled} title={option.label}>
                {option.label}
              </Option>
            )
          })
        }
      </Select>
    )
  }
}

export default SelectWrap
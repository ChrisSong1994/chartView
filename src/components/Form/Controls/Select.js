import React, { Component } from "react"
import { Select } from "antd"
import PropTypes from "prop-types"
const Option = Select.Option

class Select extends Component {
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

  render() {
    const { options } = this.props
    return (
      <Select>
        {
          options.map((option, index) => {
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

export default Input
import React, { Component } from 'react'
import reactCSS from 'reactcss'
import PropTypes from "prop-types"
import ColorPicker from "components/ColorPicker"
const ColorTrigger = ColorPicker.ColorTrigger
class Color extends Component {
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
  }
  constructor(props) {
    super()
  }

  render() {
    return (
      <ColorTrigger {...this.props} />
    )
  }
}

export default Color
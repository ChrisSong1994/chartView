import React, { Component } from 'react'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'
import PropTypes from "prop-types"

class ColorPicker extends Component {
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    name: PropTypes.name
  }
  constructor(props) {
    super()
    this.state = {
      displayColorPicker: false,
      color: props.value || "#fff"
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ color: nextProps.value })
  }


  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleChange = (color) => {
    this.setState({ color: color.hex })
    if (!this.props.name) {
      this.props.onChange(color.hex)
    } else {
      this.props.onChange(this.props.name, color.hex)
    }
  };

  render() {

    const styles = reactCSS({
      'default': {
        color: {
          width: '25px',
          height: '25px',
          borderRadius: '2px',
          background: this.state.color,
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
          left: "-60px"
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });

    return (
      <div>
        <div style={styles.swatch} onClick={this.handleClick}>
          <div style={styles.color} />
        </div>
        {this.state.displayColorPicker ? <div style={styles.popover}>
          <div style={styles.cover} onClick={this.handleClose} />
          <SketchPicker color={this.state.color} onChange={this.handleChange} />
        </div> : null}
      </div>
    )
  }
}

export default ColorPicker
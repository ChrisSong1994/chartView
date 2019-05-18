import React, { Component } from 'react'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'
import { connect } from "react-redux"
import PropTypes from "prop-types"

class ColorModal extends Component {
  constructor(props) {
    super()
    this.state = {
    }
  }



  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleChange = (color) => {
    this.setState({ color: color.hex })
    console.log(color)
  };

  render() {
    const { color } = this.props
    const styles = reactCSS({
      'default': {
        color: {
          width: '25px',
          height: '25px',
          borderRadius: '2px',
          background: this.state.color,
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
      <div className="color-modal" style={styles.popover}>
        <div style={styles.cover} onClick={this.handleClose} />
        <SketchPicker color={this.state.color} onChange={this.handleChange} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { color } = state;
  return {
    color: color
  };
};


export default connect(mapStateToProps)(ColorModal) 
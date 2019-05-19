import React, { Component } from 'react'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'
import { connect } from "react-redux"
import PropTypes from "prop-types"
import Event from "utils/event";
import { changeColor, updateColorModalStyle } from "store/color/action"

class ColorModal extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    onChange: PropTypes.func,
  }

  constructor(props) {
    super()
  }

  handleClose() {
    const style = { display: "none" }
    this.props.dispatch(updateColorModalStyle(style))
  };


  handleChange(color) {
    const { triggerId } = this.props.color
    this.props.dispatch(changeColor(color.hex))
    Event.emit(`colorChange_${triggerId}`, color.hex)
  };

  render() {
    const { color, style } = this.props.color

    const styles = reactCSS({
      'default': {
        popover: Object.assign({}, { position: 'fixed', zIndex: '2' }, style),
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
        <div style={styles.cover} onClick={this.handleClose.bind(this)} />
        <SketchPicker color={color} onChange={this.handleChange.bind(this)} />
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
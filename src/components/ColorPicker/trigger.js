import React, { Component } from 'react'
import reactCSS from 'reactcss'
import { connect } from "react-redux"
import PropTypes from "prop-types"
import Event from "utils/event";
import { updateColorModalStyle } from "store/color/action"

class ColorTrigger extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    value: PropTypes.string,
    onChange: PropTypes.func,
  }
  constructor(props) {
    super()
    this.state = {
    }
  }

  handleClick() {
    let style = {
      display: "block",
      left: 200,
      top: 200
    }
    this.props.dispatch(updateColorModalStyle(style))
  };

  componentDidMount() {
    Event.on("colorChange", this.handleChange.bind(this))
  }

  handleChange(color) {
    if (!this.props.onChange) return
    this.props.onChange(color)
  }

  render() {
    const { color } = this.props.color
    const styles = reactCSS({
      'default': {
        color: {
          width: '25px',
          height: '25px',
          borderRadius: '2px',
          background: color,
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        }
      },
    });

    return (
      <div>
        <div style={styles.swatch} onClick={this.handleClick.bind(this)}>
          <div style={styles.color} />
        </div>
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

export default connect(mapStateToProps)(ColorTrigger) 
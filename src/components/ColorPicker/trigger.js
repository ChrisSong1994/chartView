import React, { Component } from 'react'
import reactCSS from 'reactcss'
import { connect } from "react-redux"
import PropTypes from "prop-types"
import Event from "utils/event";
import { updateColorModalStyle, changeColor } from "store/color/action"

class ColorTrigger extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    value: PropTypes.string,
    onChange: PropTypes.func,
  }
  constructor(props) {
    super()
    this.state = {
      color: props.value || ""
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ color: nextProps.value })
  }

  handleClick(e) {
    const clientRectObject = document.body.getBoundingClientRect()
    console.log(clientRectObject)
    const targetRectObject = e.target.getBoundingClientRect();
    const left = targetRectObject.left - 240
    const bottom = clientRectObject.height - targetRectObject.top > 310 ?
      clientRectObject.height - targetRectObject.top - 310 : 20
    const { color } = this.state
    let style = {
      display: "block",
      left: left,
      bottom: bottom
    }
    this.props.dispatch(updateColorModalStyle(style))
    this.props.dispatch(changeColor(color))
  };

  componentDidMount() {
    Event.on("colorChange", this.handleChange.bind(this))
  }

  handleChange(color) {
    if (!this.props.onChange || !color) return
    this.props.onChange(color)
    this.setState({ color })
  }

  render() {
    const { color } = this.state
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

  componentWillUnmount() {
    Event.removeListener("colorChange")
  }
}

const mapStateToProps = state => {
  const { color } = state;
  return {
    color: color
  };
};

export default connect(mapStateToProps)(ColorTrigger) 
import React, { Component } from "react"
import { Slider, Icon } from 'antd'
import PropTypes from "prop-types"
import "./ index.scss"

class Zoom extends Component {

    static propTypes = {
        value: PropTypes.number,
        onChange: PropTypes.func
    }

    constructor(props) {
        super()
        this.state = { value: 50 }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            value: nextProps.value
        })
    }

    onChange(value) {
        this.setState({ value: value }, () => {
            this.props.onChange(value)
        })
    }

    onZoomValueCalt(type) {
        let newValue
        const { value } = this.state
        if (type === 'plus') {
            if (value !== 100) {
                newValue = value + 25
                this.setState({ value: newValue }, () => {
                    this.props.onChange(newValue)
                })
            }
        } else {
            if (value !== 0) {
                newValue = value - 25
                this.setState({ value: newValue }, () => {
                    this.props.onChange(newValue)
                })
            }
        }
    }

    render() {
        const { value } = this.state
        return (
            <div className="zoom-wrap">
                <span className="zoom-btn zoom-minus">
                    <Icon type="minus-circle" onClick={() => { this.onZoomValueCalt("minus") }} />
                </span>

                <Slider
                    className="zoom-slider"
                    step={25}
                    value={value}
                    tooltipVisible={false}
                    onChange={(value) => { this.onChange(value) }}
                />
                <span className="zoom-btn zoom-plus">
                    <Icon type="plus-circle" onClick={() => { this.onZoomValueCalt("plus") }} />
                </span>
            </div>
        )
    }
}

export default Zoom
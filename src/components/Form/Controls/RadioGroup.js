import React, { PropTypes, Component } from 'react'
import { Radio } from 'antd';
const RadioGroup = Radio.Group;

class RadioGroupWrap extends Component {
    constructor(props) {
        super()
    }

    handleChange(e) {
        const value = e.target.value
        this.props.onChange(value)
    }

    render() {
        const { props } = this.props
        let mergeProps = Object.assign({}, this.props, {
            onChange: this.handleChange.bind(this)
        })
        return (
            <RadioGroup {...mergeProps}>
                {props.radios.map(item => {
                    return <Radio key={item.value} value={item.value}>{item.label}</Radio>
                })}
            </RadioGroup>
        )
    }
}
export default RadioGroupWrap
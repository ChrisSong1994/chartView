import React, { PropTypes, Component } from 'react'
import { Checkbox } from 'antd'

class CheckboxWrap extends Component {
    constructor(props) {
        super()
    }

    handleChange(e) {
        const value = e.target.checked
        this.props.onChange(value)
    } 

    render() {
        const { value } = this.props
        let props = Object.assign({}, this.props, {
            onChange: this.handleChange.bind(this)
        })
        return (
            <Checkbox {...props} defaultChecked={value} />
        )
    }
}
export default CheckboxWrap
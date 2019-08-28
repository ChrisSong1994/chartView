import React, { Component } from "react";
import PropTypes from "prop-types"
import { Form, InputNumber, Radio } from 'antd'
import { updateWidgetPosition } from "store/widgets/action";
import Color from "components/Form/Controls/Color"
import { is } from 'immutable';

const RadioGroup = Radio.Group;
const FormItem = Form.Item
const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
}


class BaseSetting extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    activeWidgetId: PropTypes.string,
    widget: PropTypes.object
  }

  constructor() {
    super()
  }

  shouldComponentUpdate(nextProps) {
    if (is(this.props.widget, nextProps.widget) && is(this.props.activeWidgetId, nextProps.activeWidgetId)) {
      return false
    } else {
      return true
    }
  }

  handleChange(type, value) {
    const { activeWidgetId, dispatch } = this.props
    if (type === "backgroundType") {
      value = value.target.value
    }
    const data = { [type]: value }
    dispatch(updateWidgetPosition(activeWidgetId, data))
  }

  render() {
    const { widget, form, activeWidgetId } = this.props
    const { getFieldDecorator, getFieldValue } = form
    const left = widget.get('left')
    const top = widget.get('top')
    const width = widget.get('width')
    const height = widget.get('height')
    const backgroundType = widget.get('backgroundType')
    const background = widget.get('background')

    return (
      <Form className="base-setting-form">
        <FormItem {...formItemLayout} label={'位置'}>
          <div className="input-number" >
            <span className="input-number-label">X</span>
            {getFieldDecorator('left', {
              initialValue: left
            })(
              <InputNumber
                min={0}
                max={2000}
                onChange={(value) => { this.handleChange("left", value) }}
              />
            )}
          </div>
          <div className="input-number" >
            <span className="input-number-label">Y</span>
            {getFieldDecorator('top', {
              initialValue: top
            })(
              <InputNumber
                min={0}
                max={2000}
                onChange={(value) => { this.handleChange("top", value) }}
              />
            )}
          </div>
        </FormItem>
        <FormItem {...formItemLayout} label={'尺寸'}>
          <div className="input-number" >
            <span className="input-number-label">W</span>
            {getFieldDecorator('width', {
              initialValue: width
            })(
              <InputNumber
                min={0}
                max={2000}
                onChange={(value) => { this.handleChange("width", value) }}
              />
            )}
          </div>

          <div className="input-number" >
            <span className="input-number-label">H</span>
            {getFieldDecorator('height', {
              initialValue: height
            })(
              <InputNumber
                min={0}
                max={2000}
                onChange={(value) => { this.handleChange("height", value) }}
              />
            )}
          </div>
        </FormItem>
        <FormItem {...formItemLayout} label={'背景'}>
          {getFieldDecorator('backgroundType', {
            initialValue: backgroundType
          })(
            <RadioGroup onChange={(value) => { this.handleChange("backgroundType", value) }}>
              <Radio value="color">背景色</Radio>
              <Radio value="picture">背景图片</Radio>
            </RadioGroup>
          )}
        </FormItem>
        {
          getFieldValue(backgroundType) === "color" ?
            <FormItem {...formItemLayout} label={'颜色'}>
              <Color value={background} onChange={(value) => { this.handleChange("background", value) }} />
            </FormItem> :
            <FormItem {...formItemLayout} label={'背景图片'}>
              <Color value={background} onChange={(value) => { this.handleChange("background", value) }} />
            </FormItem>
        }
      </Form>
    )
  }
}

export default Form.create()(BaseSetting)
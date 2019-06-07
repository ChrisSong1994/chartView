import React, { Component } from 'react'
import PropTypes from "prop-types"
import { Collapse } from 'antd';

const Panel = Collapse.Panel;

class ChartOptionSettingItem extends Component {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array
    ])
  }

  constructor(props) {
    super()
  }

  render() {
    return (
      <Collapse defaultActiveKey={['1']}>
        <Panel header={this.props.title} key="1">
          {this.props.children}
        </Panel>
      </Collapse>
    )
  }
}

export default ChartOptionSettingItem

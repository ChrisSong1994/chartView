import React, { Component } from 'react'
import PropTypes from "prop-types"
import { Icon } from 'antd'
import classNames from 'classnames'

class ChartOptionSettingItem extends Component {
  static propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
    hide: PropTypes.bool,
    children: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array
    ]),
    sectionClassName: PropTypes.string,
  }

  constructor(props) {
    super()
    this.state = {
      show: props.hide ? false : true
    }
  }

  handleToggleMenu() {
    this.setState({
      show: !this.state.show
    })
  }

  render() {

    let className = 'item chart-option-setting-item legend-contain'

    if (this.props.className) {
      className = `${className} ${this.props.className}`
    }

    const sectionClassName = classNames(
      'main-contain',
      this.props.sectionClassName,
      { 'main-contain-show': this.state.show }
    )

    return (
      <div className={className}>
        <header className="header-contain" onClick={this.handleToggleMenu.bind(this)}>
          <p>{this.props.title}</p>
          <Icon type={this.state.show ? 'down' : 'up'} />
        </header>
        <section className={sectionClassName}
          style={{ display: `${this.state.show ? 'block' : 'none'}` }}>
          {this.props.children}
        </section>
      </div>
    )
  }
}

export default ChartOptionSettingItem

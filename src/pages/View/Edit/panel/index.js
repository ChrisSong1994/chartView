import React, { Component } from "react";
import PropTypes from "prop-types";
import chartConfig from "modules/charts/chartConfig";

class Panel extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    addWidget: PropTypes.func,
  };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="widget-nav">
        <div className="widget-chart">
          {Object.keys(chartConfig).map(theme => {
            return (
              <div className={theme} key={theme}>
                <div className="chart-title">{chartConfig[theme].title}</div>
                <ul>
                  {
                    Object.keys(chartConfig[theme].children).map(type => {
                      let chart = chartConfig[theme].children[type]
                      return (
                        <li
                          key={chart.type}
                          className="chart-selecor"
                          draggable={true}
                          data-theme={theme}
                          data-type={chart.type}
                          data-name={chart.name}
                          onClick={this.props.addWidget.bind(this, theme, chart.type)}>
                          <span className={`iconfont icon ${chart.icon}`} ></span>
                          <div className="chart-name">{chart.name}</div>
                        </li>)
                    })
                  }
                </ul>
              </div>
            );
          })}
        </div>
      </nav>
    );
  }
}
export default Panel
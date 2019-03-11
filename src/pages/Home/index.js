import React, { Component } from "react";
import { connect } from "react-redux";
import Echarts from "echarts";
import { Select } from "antd";
const Option = Select.Option;
import { addWidget } from "../../store/action";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.createChart("123",{})
  }
  popupScroll(e) {
    console.log(
      e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight
    ); // 获取
  }
  handleChange(value) {
    console.log(`selected ${value}`);
  }
  createChart(id, option) {
    var myChart = Echarts.init(document.getElementById(id));
    myChart.setOption({
      title: {
        text: "ECharts 入门示例"
      },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    });
  }

  render() {
    return (
      <div>
        <Select
          defaultValue="lucy"
          style={{ width: 120 }}
          onChange={this.handleChange}
          onPopupScroll={e => {
            this.popupScroll(e);
          }}
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="scscc">scscc</Option>
          <Option value="ssdsddsd">ssdsddsd</Option>
          <Option value="scscscscsc">scscscscsc</Option>
          <Option value="fbfbbfbfb">fbfbbfbfb</Option>
          <Option value="Yiminghe1">yiminghe1</Option>
          <Option value="Yiminghe2">yiminghe2</Option>
          <Option value="Yiminghe3">yiminghe3</Option>
          <Option value="Yiminghe4">yiminghe4</Option>
          <Option value="Yiminghe5">yiminghe5</Option>
        </Select>
        <div id="123" style={{width:"400px",height:"300px"}}></div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    widget: state.widget
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addwidget: widget => {
      dispatch(addWidget(widget));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

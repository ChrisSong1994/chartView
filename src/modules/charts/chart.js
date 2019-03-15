import Echarts from "echarts";

class Charts {
  constructor(option, el) {
    this.chart = Echarts.init(el);
    this.option = option;
  }

  // 设置
  setOption(option) {
    this.option = option;
    this.chart.setOption(option);
  }

  // 图表重置
  resize() {
    this.chart.resize();
  }

  // 监听
  on(eventName, callback) {
    if (this.chart) {
      this.chart.on(eventName, params => {
        callback(params);
      });
    }
  }

  // 图表销毁
  destroy() {
    this.chart.dispose();
  }
}

export default Charts;

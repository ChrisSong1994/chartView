import Echarts from "echarts";

class Charts {
  constructor(elem, theme, option) {
    this.chart = Echarts.init(elem);
    this.theme = theme;
    this.option = option;
  }

  // 设置配置
  setOption() {
    this.chart.setOption(this.option);
  }

  // 图表绘制
  render() {
    this.setOption(this.option);
  }

  // 图表重置
  resize(size = {}) {
    this.chart.resize(size);
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

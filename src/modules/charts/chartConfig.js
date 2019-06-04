const chartConfig = {
  basic: {
    title: '基础图表',
    children: {
      bar: {
        name: "柱状图",
        type: "bar",
        left: 50,
        top: 50,
        width: 400,
        height: 350,
        backgroundType: "color",
        background: "#fff",
        styleSetting: {},
        dataSetting: {}
      },
      pie: {
        name: "饼图",
        type: "pie",
        left: 100,
        top: 100,
        width: 350,
        height: 350,
        backgroundType: "color",
        background: "#fff",
        styleSetting: {},
        dataSetting: {}
      },
      line: {
        name: "折线图",
        type: "line",
        left: 150,
        top: 150,
        width: 400,
        height: 350,
        backgroundType: "color",
        background: "#fff",
        styleSetting: {},
        dataSetting: {}
      },
      scatter: {
        name: "散点图",
        type: "scatter",
        left: 200,
        top: 200,
        width: 400,
        height: 350,
        backgroundType: "color",
        background: "#fff",
        styleSetting: {},
        dataSetting: {}
      }
    }
  }

};

export default chartConfig;

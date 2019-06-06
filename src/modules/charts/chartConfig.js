const chartConfig = {
  basic: {
    title: '基础图表',
    children: {
      bar: {
        name: "柱状图",
        icon: "icon-bar",
        type: "bar",
        left: 50,
        top: 50,
        width: 400,
        height: 300,
        backgroundType: "color",
        background: "#fff",
        styleSetting: {},
        dataSetting: {}
      },
      pie: {
        name: "饼图",
        icon: "icon-pie",
        type: "pie",
        left: 100,
        top: 100,
        width: 300,
        height: 300,
        backgroundType: "color",
        background: "#fff",
        styleSetting: {},
        dataSetting: {}
      },
      line: {
        name: "折线图",
        icon: "icon-line",
        type: "line",
        left: 150,
        top: 150,
        width: 400,
        height: 300,
        backgroundType: "color",
        background: "#fff",
        styleSetting: {},
        dataSetting: {}
      },
      scatter: {
        name: "散点图",
        icon: "icon-scatter",
        type: "scatter",
        left: 200,
        top: 200,
        width: 400,
        height: 300,
        backgroundType: "color",
        background: "#fff",
        styleSetting: {},
        dataSetting: {}
      }
    }
  }

};

export default chartConfig;

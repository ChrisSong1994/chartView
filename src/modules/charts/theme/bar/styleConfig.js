
export default function () {
  return [
    {
      title: "X 轴",
      type: "xAxis",
      fields: [
        {
          name: "xAxis_axisLine_show",
          lable: "轴线",
          type: "checkbox",
          value: true,
          action: 'toggle'
        },
        // {
        //   name: "xAxis_axisLine_show",
        //   rel: "toggle:xAxis_axisLine_show",
        //   lable: "轴线",
        //   type: 'color',
        //   value: '#ccc',
        // }
      ]
    }
  ]
}

export default function () {
  return [
    {
      title: "X 轴",
      type: "xAxis",
      fields: [
        {
          name: "xAxis_axisLine_show",
          label: "轴线",
          type: "checkbox",
          value: true,
          action: 'toggle'
        },
        // {
        //   name: "xAxis_axisLine_show",
        //   rel: "toggle:xAxis_axisLine_show",
        //   label: "轴线",
        //   type: 'color',
        //   value: '#ccc',
        // }
      ]
    },
    {
      title: '值标签' ,
      type: 'labelValue',
      fields: [
        {
          name: "series_label_normal_show",
          label: "轴线",
          type: "checkbox",
          value: true,
          action: 'toggle'
        }
      ]
    }
  ]
}
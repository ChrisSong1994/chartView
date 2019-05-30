
export default function () {
  return [
    {
      title: "X 轴",
      type: "xAxis",
      fields: [
        {
          name: "xAxis_show",
          label: "轴线",
          type: "checkbox",
          value: false,
          action: 'toggle'
        }, {
          name: "xAxis_nameTextStyle_color",
          label: "轴线",
          type: "color",
          value: '#000'
        },
        {
          name: "xAxis_nameTextStyle_fontWeight",
          label: "轴线",
          type: "select",
          value: 'normal',
          props: {
            options: [
              {
                value: "normal",
                label: "normal"
              },
              {
                value: "bold",
                label: "bold"
              },
              {
                value: "bolder",
                label: "bolder"
              }, {
                value: "lighter",
                label: "lighter"
              }
            ]
          }
        },
        {
          name: "xAxis_axisLine_show",
          label: "轴线",
          type: "checkbox",
          value: false,
          action: 'toggle'
        },
      ]
    },
    {
      title: '值标签',
      type: 'labelValue',
      fields: [
        {
          name: "series_label_normal_show",
          label: "标签",
          type: "checkbox",
          value: false,
          action: 'toggle'
        },
        {
          relName: "toggle=series_label_normal_show",
          name: "series_label_normal_fontSize",
          label: "字体大小",
          type: "inputNumber",
          min: 12,
          max: 100,
          value: 12
        },
        {
          relName: "toggle=series_label_normal_show",
          name: "series_label_normal_color",
          label: "字体颜色",
          type: "color",
          value: "#ccc"
        }
      ]
    }, {
      title: "值系列",
      type: "series",
      fields: [
        {
          name: "series_itemStyle_color",
          label: "柱体颜色",
          type: "color",
          value: "#c23531",
        },
      ]
    }
  ]
}
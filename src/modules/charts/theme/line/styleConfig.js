
export default function () {
  return [
    {
      title: "标题",
      type: "title",
      fields: [
        {
          name: "title_show",
          label: "显示",
          type: "checkbox",
          value: true,
          action: 'toggle'
        },
        {
          relName: "toggle=title_show",
          name: "title_text",
          label: "标题内容",
          type: "input",
          value: "标准折线图",
        },
        {
          relName: "toggle=title_show",
          name: "title_x",
          label: "位置",
          type: "radioGroup",
          value: "center",
          props: {
            radios: [
              { value: "left", label: "居左" },
              { value: "center", label: "居中" },
              { value: "right", label: "居右" }
            ]
          }
        },
        {
          relName: "toggle=title_show",
          name: "title_textStyle_fontSize",
          label: "字体大小",
          type: "inputNumber",
          min: 12,
          max: 50,
          value: 18
        },
        {
          relName: "toggle=title_show",
          name: "title_textStyle_color",
          label: "字体颜色",
          type: "color",
          value: "#ccc"
        }
      ]
    },
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
        {
          name: "xAxis_axisLine_show",
          rel: "toggle:xAxis_axisLine_show",
          label: "轴线",
          type: 'color',
          value: '#ccc',
        }
      ]
    }
  ]
}
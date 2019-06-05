
export default function () {
  return [
    {
      title: "标题",
      type: "center",
      fields: [
        {
          name: "title_show",
          label: "显示",
          type: "checkbox",
          value: true,
          action: 'toggle'
        },
        {
          relname: "toggle=title_show",
          name: "title_text",
          label: "标题内容",
          type: "input",
          value: "标准柱状图",
        },
        {
          relname: "toggle=title_show",
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
          relname: "toggle=title_show",
          name: "title_textStyle_fontSize",
          label: "字体大小",
          type: "inputNumber",
          min: 12,
          max: 50,
          value: 18
        },
        {
          relname: "toggle=title_show",
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
          name: "xAxis_show",
          label: "轴名称",
          type: "checkbox",
          value: true,
          action: 'toggle'
        }, {
          name: "xAxis_nameTextStyle_color",
          label: "字体颜色",
          type: "color",
          value: '#000'
        },
        {
          name: "xAxis_nameTextStyle_fontWeight",
          label: "字体粗细",
          type: "radioGroup",
          value: "normal",
          props: {
            radios: [
              { value: "normal", label: "正常" },
              { value: "bloder", label: "较粗" },
              { value: "lighter", label: "较细" }
            ]
          }
        },
      ]
    },
    {
      title: '值标签',
      type: 'label',
      fields: [
        {
          name: "series_label_normal_show",
          label: "标签",
          type: "checkbox",
          value: false,
          action: 'toggle'
        },
        {
          relname: "toggle=series_label_normal_show",
          name: "series_label_normal_fontSize",
          label: "字体大小",
          type: "inputNumber",
          min: 12,
          max: 50,
          value: 12
        },
        {
          relname: "toggle=series_label_normal_show",
          name: "series_label_normal_color",
          label: "字体颜色",
          type: "color",
          value: "#ccc"
        }
      ]
    },
    {
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
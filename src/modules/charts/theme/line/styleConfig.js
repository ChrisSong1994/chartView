
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
          relname: "toggle=title_show",
          name: "title_text",
          label: "标题内容",
          type: "input",
          value: "标准折线图",
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
          relname: "toggle=xAxis_show",
          name: "xAxis_axisLabel_color",
          label: "字体颜色",
          type: "color",
          value: '#000'
        },
        {
          relname: "toggle=xAxis_show",
          name: "xAxis_axisLabel_fontWeight",
          label: "字体粗细",
          type: "radioGroup",
          value: 400,
          props: {
            radios: [
              { value: 400, label: "正常" },
              { value: 600, label: "较粗" },
              { value: 200, label: "较细" }
            ]
          }
        },
        {
          relname: "toggle=xAxis_show",
          name: "xAxis_axisLabel_fontSize",
          label: "字体大小",
          type: "inputNumber",
          min: 12,
          max: 50,
          value: 12
        },
        {
          name: "xAxis_axisLine_show",
          label: "轴线",
          type: "checkbox",
          value: true,
          action: 'toggle'
        }, {
          relname: "toggle=xAxis_axisLine_show",
          name: "xAxis_axisLine_lineStyle_color",
          label: "轴线颜色",
          type: "color",
          value: '#000'
        },
        {
          relname: "toggle=xAxis_axisLine_show",
          name: "xAxis_axisLine_lineStyle_width",
          label: "轴线宽度",
          type: "inputNumber",
          min: 1,
          max: 5,
          value: 1
        }
      ]
    },
    {
      title: "Y 轴",
      type: "yAxis",
      fields: [
        {
          name: "yAxis_show",
          label: "轴名称",
          type: "checkbox",
          value: true,
          action: 'toggle'
        }, {
          relname: "toggle=yAxis_show",
          name: "yAxis_axisLabel_color",
          label: "字体颜色",
          type: "color",
          value: '#000'
        },
        {
          relname: "toggle=yAxis_show",
          name: "yAxis_axisLabel_fontWeight",
          label: "字体粗细",
          type: "radioGroup",
          value: 400,
          props: {
            radios: [
              { value: 400, label: "正常" },
              { value: 600, label: "较粗" },
              { value: 200, label: "较细" }
            ]
          }
        },
        {
          relname: "toggle=yAxis_show",
          name: "yAxis_axisLabel_fontSize",
          label: "字体大小",
          type: "inputNumber",
          min: 12,
          max: 50,
          value: 12
        },
        {
          name: "yAxis_axisLine_show",
          label: "轴线",
          type: "checkbox",
          value: true,
          action: 'toggle'
        }, {
          relname: "toggle=yAxis_axisLine_show",
          name: "yAxis_axisLine_lineStyle_color",
          label: "轴线颜色",
          type: "color",
          value: '#000'
        },
        {
          relname: "toggle=yAxis_axisLine_show",
          name: "yAxis_axisLine_lineStyle_width",
          label: "轴线宽度",
          type: "inputNumber",
          min: 1,
          max: 5,
          value: 1
        }
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
          name: "series_label_normal_color",
          label: "字体颜色",
          type: "color",
          value: "#ccc"
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
          name: "series_label_normal_position",
          label: "标签位置",
          type: "select",
          value: "inside",
          props: {
            options: [
              { value: "top", label: "顶部" },
              { value: "inside", label: "内部-中间" },
              { value: "insideTop", label: "内部-顶部" },
              { value: "insideBottom", label: "内部-底部" }
            ]
          }
        }
      ]
    },
  ]
}
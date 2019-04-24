export default function () {
  return [
    {
      title: '饼图',
      type: 'position',
      fields: [
        {
          name: 'series_circleMode',
          label: '图形',
          type: 'radioGroup',
          props: {
            options: [
              {
                name: '圆形',
                value: 'full'
              },
              {
                name: '半圆',
                value: 'half'
              }
            ]
          },
          value: 'full'
        }
      ]
    }
  ]
}
export const ADD_WIDGET = "ADD_WIDGET"; // 添加组件
export const REMOVE_WIDGET = "REMOVE_WIDGET"; // 删除组件

export const addWidget = widget => {
  return { type: ADD_WIDGET, widget };
};

export const removeWidget = widgetId => {
  return { type: REMOVE_WIDGET, widgetId };
};

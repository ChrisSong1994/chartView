export const ADD_WIDGET = "ADD_WIDGET"; // 添加组件
export const REMOVE_WIDGET = "REMOVE_WIDGET"; // 删除组件
export const UPDATE_WIDGET_POSITION = "UPDATE_WIDGET_POSITION"; // 更新组件的位置信息
export const UPDATE_WIDGET_SIZE = "UPDATE_WIDGET_SIZE"; // 更新组件的尺寸信息
export const SET_ACTIVE_WIDGET_ID = "SET_ACTIVE_WIDGET_ID";
export const DELETE_ACTIVE_WIDGET_ID = "DELETE_ACTIVE_WIDGET_ID";

export const addWidget = widget => {
  return { type: ADD_WIDGET, widget };
};

export const removeWidget = widgetId => {
  return { type: REMOVE_WIDGET, widgetId };
};

export const updateWidgetPosition = (widgetId, position) => {
  return { type: UPDATE_WIDGET_POSITION, widgetId, position };
};

export const updateWidgetSize = (widgetId, size) => {
  return { type: UPDATE_WIDGET_SIZE, widgetId, size };
};

export const setActiveWidgetId = widgetId => {
  return { type: SET_ACTIVE_WIDGET_ID, widgetId };
};



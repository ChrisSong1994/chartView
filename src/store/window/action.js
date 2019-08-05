export const UPDATE_WINDOW_SETTING = "UPDATE_WINDOW_SETTING"
export const SET_ACTIVE_WIDGET_ID = "SET_ACTIVE_WIDGET_ID";

export const updateWindowSetting = (key, value) => {
  return { type: UPDATE_WINDOW_SETTING, key, value };
}

export const setActiveWidgetId = widgetId => {
  return { type: SET_ACTIVE_WIDGET_ID, widgetId };
};
export const ADD_WIDGET = "ADD_WIDGET";
export const REMOVE_WIDGET = "REMOVE_WIDGET";

export const addWidget = widget => {
  return { type: ADD_WIDGET, widget };
};

export const removeWidget = widgetId => {
  return { type: REMOVE_WIDGET, widgetId };
};

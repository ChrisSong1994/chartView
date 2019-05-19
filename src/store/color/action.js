export const CHANGE_COLOR = "CHANGE_COLOR"; //选择颜色
export const UPDATE_COLOR_MODAL_STYLE = "UPDATE_COLOR_MODAL_STYLE";
export const SET_COLOR_TRIGGER_ID = "SET_COLOR_TRIGGER_ID";

export function changeColor(color) {
  return { type: CHANGE_COLOR, color }
}

export function updateColorModalStyle(style) {
  return { type: UPDATE_COLOR_MODAL_STYLE, style }
}

export function setColorTriggerId(id) {
  return { type: SET_COLOR_TRIGGER_ID, id }
}
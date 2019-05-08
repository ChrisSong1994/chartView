import {
  ADD_WIDGET,
  REMOVE_WIDGET,
  UPDATE_WIDGET_POSITION,
  UPDATE_WIDGET_SIZE,
  SET_ACTIVE_WIDGET_ID,
} from "./action";

let initialState = {
  width: 1600,
  height: 900,
  name: "可视化",
  background: "",
  activeWidgetId: "",
  widgets: {
    yfy6657uhyhgt88: {
      id: "yfy6657uhyhgt88",
      name: "柱状图",
      type: "bar",
      left: 50,
      top: 50,
      width: 400,
      height: 350
    }
  }
};

const windowReducer = (state = initialState, action) => {
  let copyState = Object.assign({}, state)
  switch (action.type) {
    case ADD_WIDGET:
      copyState.widgets[action.widget.id] = action.widget
      return Object.assign({}, state, copyState)
    case REMOVE_WIDGET:
      state.widgets.delete(action.widgetId);
      return state
    case UPDATE_WIDGET_POSITION:
      copyState.widgets[action.widgetId] = Object.assign({}, copyState.widgets[action.widgetId], { ...action.position })
      return Object.assign({}, state, copyState)
    case UPDATE_WIDGET_SIZE:
      copyState.widgets[action.widgetId] = Object.assign({}, copyState.widgets[action.widgetId], { ...action.size })
      return Object.assign({}, state, copyState)
    case SET_ACTIVE_WIDGET_ID:
      copyState["activeWidgetId"] = action.widgetId
      return Object.assign({}, state, copyState)
    default:
      return state;
  }
};

export default windowReducer;

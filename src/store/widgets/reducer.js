import { fromJS, Map, isKeyed } from 'immutable'

import {
  ADD_WIDGET,
  REMOVE_WIDGET,
  UPDATE_WIDGET_POSITION,
  UPDATE_WIDGET_SIZE,
  SET_ACTIVE_WIDGET_ID,
  UPDATE_WIDGET_STYLE_SETTING,
  UPDATE_WINDOW_SETTING
} from "./action";


let initialState = Map({
  yfy6657uhyhgt88: Map({
    id: "yfy6657uhyhgt88",
    name: "柱状图",
    type: "bar",
    left: 50,
    top: 50,
    width: 400,
    height: 350,
    backgroundType: "color",
    background: "#fff",
    styleSetting: {},
    dataSetting: {}
  })
})



// 需要返回的是state的浅拷贝的对象，才能让引入props的组件触发 componentwillreciveprops钩子
const widgetsReducer = (state = initialState, action) => {
  // let copyState = Object.assign({}, state)
  switch (action.type) {
    case ADD_WIDGET:
      return state.set(action.widget.id, Map(action.widget))

    // case REMOVE_WIDGET:
    //   state.widgets.delete(action.widgetId);
    //   return Object.assign({}, state)

    // case UPDATE_WIDGET_POSITION:
    //   copyState.widgets[action.widgetId] = Object.assign({}, copyState.widgets[action.widgetId], { ...action.position })
    //   return Object.assign({}, state, copyState)

    // case UPDATE_WIDGET_SIZE:
    //   copyState.widgets[action.widgetId] = Object.assign({}, copyState.widgets[action.widgetId], { ...action.size })
    //   return Object.assign({}, state, copyState)

    // case SET_ACTIVE_WIDGET_ID:
    //   copyState["activeWidgetId"] = action.widgetId
    //   return Object.assign({}, state, copyState)

    // case UPDATE_WIDGET_STYLE_SETTING:
    //   copyState.widgets[action.widgetId].styleSetting = Object.assign({}, copyState.widgets[action.widgetId].styleSetting, { ...action.style })
    //   return Object.assign({}, state, copyState)

    default:
      return state;
  }
};


export default widgetsReducer;

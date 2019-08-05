import { fromJS, Map, isKeyed } from 'immutable'

import {
  UPDATE_WINDOW_SETTING,
  SET_ACTIVE_WIDGET_ID
} from "./action";


let initialState = Map({
  width: 1600,
  height: 900,
  name: "可视化",
  backgroundType: "color",
  background: "#ccc",
  activeWidgetId: ""
});

// 需要返回的是state的浅拷贝的对象，才能让引入props的组件触发 componentwillreciveprops钩子
const windowReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_WINDOW_SETTING:
      return state.set(action.key, action.value)

    case SET_ACTIVE_WIDGET_ID:
      return state.set('activeWidgetId', action.widgetId)
    default:
      return state;
  }
};

export default windowReducer;

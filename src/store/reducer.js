import { combineReducers } from "redux";
import { ADD_WIDGET, REMOVE_WIDGET } from "./action";

let initialState = {
  widgets: {} // {id:widget}
};
const widgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WIDGET:
      return Object.assign({}, state, { widgets: { ...action } });
    default:
      return state;
  }
};

const removeReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_WIDGET:
      state.widgets.delete(action.widgetId);
      return state;
    default:
      return state;
  }
};

const reducer = combineReducers({ widgetReducer, removeReducer });

export default reducer;

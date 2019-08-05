import { combineReducers } from 'redux-immutable';
import undoable, { includeAction, groupByActionTypes } from 'redux-undo'
import window from "./window/reducer";
import route from "./route/reducer";
import color from "./color/reducer"
import widgets from './widgets/reducer'

import { ADD_WIDGET, REMOVE_WIDGET ,UPDATE_WIDGET_POSITION} from './widgets/action'

const reducer = combineReducers({
  window: undoable(window),
  widgets: undoable(widgets, {
    limit: 10, // 限制记录栈长度
    filter: includeAction([ADD_WIDGET, REMOVE_WIDGET, UPDATE_WIDGET_POSITION]), // 需要回滚的操作
    groupBy: groupByActionTypes([UPDATE_WIDGET_POSITION])
  }),
  route,
  color
});

export default reducer;

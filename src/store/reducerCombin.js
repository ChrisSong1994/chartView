import { combineReducers } from "redux";
import window from "./window/reducer";
import route from "./route/reducer";
import color from "./color/reducer"

const reducer = combineReducers({ window, route, color });

export default reducer;

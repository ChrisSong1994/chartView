import { combineReducers } from "redux";
import window from "./window/reducer";
import route from "./route/reducer";

const reducer = combineReducers({ window, route });

export default reducer;

import { SET_ROUTER } from "./action";

let initialState = {
  router: ""
};

const routeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROUTER:
      return Object.assign({}, state, {
        router: action.router
      });
    default:
      return state;
  }
};

export default routeReducer;

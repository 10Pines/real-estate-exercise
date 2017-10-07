import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";

import session from "./session";
import signUp from "./sign-up";

export default combineReducers({
  session,
  signUp,
  router: routerReducer
});

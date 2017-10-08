import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";

import dashboard from "./dashboard";
import session from "./session";
import signUp from "./sign-up";

export default combineReducers({
  dashboard,
  session,
  signUp,
  router: routerReducer
});

import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";

import signUp from "./sign-up";

export default combineReducers({
  signUp,
  router: routerReducer
});

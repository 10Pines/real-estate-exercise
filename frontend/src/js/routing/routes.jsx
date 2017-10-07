import React from "react";
import {Route, Switch} from "react-router-dom";

import App from "components/app";
import HomePage from "components/home";
import SignUpPage from "components/sign-up";

export default () => (
  <App>
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/sign-up" component={SignUpPage}/>
    </Switch>
  </App>
);

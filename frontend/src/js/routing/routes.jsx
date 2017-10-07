import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import {connect} from "react-redux";

import App from "components/app";
import DashboardPage from "components/dashboard";
import HomePage from "components/home";
import SignUpPage from "components/sign-up";

const RootComponent = connect(
  (state) => ({session: state.session})
)(({session}) => (session.session ? <DashboardPage/> : <HomePage/>));

const NoUserComponent = connect(
  (state) => ({session: state.session})
)(({component: Component, session}) => (session.session ? <Redirect to="/"/> : <Component/>));

const NoUserRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={props => (
    <NoUserComponent component={Component}/>
  )}/>
);

export default () => {
  return (<App>
    <Switch>
      <Route exact path="/" component={RootComponent}/>
      <NoUserRoute exact path="/sign-up" component={SignUpPage}/>
    </Switch>
  </App>);
};

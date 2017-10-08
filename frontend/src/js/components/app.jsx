import React from "react";

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import signInActions from "front/actions/sign-in";

import {Button} from "semantic-ui-react";

require("sass/app");
const App = ({actions, session, children}) => (
  <div className="app">
    {session.session ? (<nav className="app__nav">
      <span className="nav__logo">Real State</span>
      <Button className="nav__sign-out" onClick={() => actions.signIn.signOut()}>Sign Out</Button>
    </nav>) : null}
    <div className="app__content">
      {children}
    </div>
  </div>
);

export default connect(
  (state) => ({session: state.session}),
  (dispatch) => ({
    actions: {
      signIn: bindActionCreators(signInActions, dispatch)
    }
  })
)(App);

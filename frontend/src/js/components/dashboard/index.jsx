import React, {Component} from "react";
import {connect} from "react-redux";

import {bindActionCreators} from "redux";

import signInActions from "front/actions/sign-in";

class Dashboard extends Component {
  render() {
    const {session} = this.props.session;

    return (<div className="dashboard">
      <div onClick={() => this.props.actions.signOut()}>Sign Out</div>
      <h3>Dashboard</h3>
      Hi {session.userId}
    </div>);
  }
}

export default connect(
  (state) => ({session: state.session}),
  (dispatch) => ({
    actions: bindActionCreators(signInActions, dispatch)
  })
)(Dashboard);

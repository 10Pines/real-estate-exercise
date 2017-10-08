import React, {Component} from "react";
import {connect} from "react-redux";

import {bindActionCreators} from "redux";

import {Loader} from "semantic-ui-react";

import dashboardActions from "front/actions/dashboard";

class Dashboard extends Component {
  componentDidMount() {
    this.props.actions.dashboard.fetchUser();
  }

  render() {
    const {loadingUser, loadingUserError, user} = this.props.dashboard;

    if (loadingUser) {
      return <Loader active inline content="Loading"/>;
    }

    if (loadingUserError) {
      return (<div className="dashboard__error">There was an error loading the user information</div>);
    }

    return (<div className="dashboard">
      <h3>Dashboard</h3>
      Hi {user.firstName}
    </div>);
  }
}

export default connect(
  (state) => ({dashboard: state.dashboard}),
  (dispatch) => ({
    actions: {
      dashboard: bindActionCreators(dashboardActions, dispatch)
    }
  })
)(Dashboard);

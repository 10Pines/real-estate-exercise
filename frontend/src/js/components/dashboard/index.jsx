import React, {Component} from "react";
import {connect} from "react-redux";

import {bindActionCreators} from "redux";

import {Loader} from "semantic-ui-react";

import dashboardActions from "front/actions/dashboard";
import signOutActions from "front/actions/sign-in";

import { push } from 'react-router-redux';

import { Button, Header, Icon, Modal } from 'semantic-ui-react';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {open: true}
  }

  componentDidMount() {
    this.props.actions.dashboard.fetchUser();
  }

  render() {
    const {loadingUser, loadingUserError, user} = this.props.dashboard;

    if (loadingUserError && loadingUserError.status === 401) {
      return <Modal open={this.state.open} basic size='small'>
        <Header icon='clock' content='Session expired' />
        <Modal.Content>
          <p>Your session has expired</p>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={() => { this.setState({ open: false }); this.props.actions.redirectToLogIn() }} inverted>
            <Icon name='checkmark' /> Ok
      </Button>
        </Modal.Actions>
      </Modal>;
    }

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
      dashboard: bindActionCreators(dashboardActions, dispatch),
      redirectToLogIn: () => { dispatch(signOutActions.signOut()); dispatch(push('/')) }
    }
  })
)(Dashboard);

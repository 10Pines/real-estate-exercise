import React, {Component} from "react";
import {Button, Checkbox} from "semantic-ui-react";

import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import signUpActions from "front/actions/sign-up";

const rolesCopy = {
  buyer: "I want to Buy",
  seller: "I want to Sell",
  agent: "I'm an Agent",
  vendor: "I'm a Vendor"
};

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.startSignUp = this.startSignUp.bind(this);

    this.state = {
      selectedRoles: []
    };
  }

  onRoleSelected(role, value) {
    let selectedRoles;
    if (value) {
      selectedRoles = [...this.state.selectedRoles, role];
    } else {
      selectedRoles = this.state.selectedRoles.filter(r => r !== role);
    }
    this.setState({selectedRoles});
  }

  startSignUp() {
    this.props.actions.start(this.state.selectedRoles);
    this.props.history.push("/sign-up");
  }

  render() {
    const checkboxes = Object.keys(rolesCopy).map(r => (
      <Checkbox key={r} className="sign-up__checkbox"
                label={{children: rolesCopy[r]}}
                checked={this.state.selectedRoles.includes(r)}
                onChange={(e, d) => this.onRoleSelected(r, d.checked)}/>
    ));

    return (<section className="home__sign-up">
      <h3>Visiting for the first time?</h3>
      <p>Tell us how we can help</p>
      <div className="home-sign-up__roles">
        {checkboxes}
      </div>
      <Button className="home-sign-up__go" color="green"
              onClick={this.startSignUp}
              disabled={this.state.selectedRoles.length === 0}>Go!</Button>
    </section>);
  }
}

export default withRouter(connect(
  (state) => ({}),
  (dispatch) => ({
    actions: bindActionCreators(signUpActions, dispatch)
  })
)(SignUp));

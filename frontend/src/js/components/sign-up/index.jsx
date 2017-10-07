import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import signUpActions from "front/actions/sign-up";

import rolesData from "h/roles";

import {Button} from "semantic-ui-react";

import GeneralStep from "./steps/general";
import BuyerStep from "./steps/buyer";
import SellerStep from "./steps/seller";
import AgentStep from "./steps/agent";
import VendorStep from "./steps/vendor";

const stepByRole = {
  general: GeneralStep,
  buyer: BuyerStep,
  seller: SellerStep,
  agent: AgentStep,
  vendor: VendorStep
};

require("sass/sign-up");

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.goNext = this.goNext.bind(this);
    this.finish = this.finish.bind(this);
  }

  goBack() {
    this.props.actions.back();
  }

  goNext() {
    this.props.actions.next();
  }

  finish() {
    this.props.actions.finish();
  }

  render() {
    const {roles, currentRole} = this.props.signUp;

    const currentRoleObj = rolesData.all[currentRole];

    const rolesLabels = roles.map(r => {
      const role = rolesData.all[r];
      const className = "sign-up__role";
      const done = role.order < currentRoleObj.order;
      const current = currentRoleObj === role;
      const fullClassName = className
        + (done ? ` ${className}--done` : "")
        + (current ? ` ${className}--current` : "");

      return (<div className={fullClassName} key={r}>
        {rolesData.all[r].name}
      </div>);
    });

    const CurrentRoleEl = stepByRole[currentRole];

    const isFirstStep = roles.indexOf(currentRole) === 0;
    const isLastStep = roles.indexOf(currentRole) === roles.length - 1;

    return (<div className="sign-up">
      <h3>Sign up</h3>
      <div className="sign-up__roles">
        {rolesLabels}
      </div>
      <CurrentRoleEl/>
      <div className="sign-up__actions">
        {isFirstStep ? null : (<Button className="sign-up__back" color="red" onClick={this.goBack}>Back</Button>)}
        {isLastStep ? null : (<Button className="sign-up__next" color="green" onClick={this.goNext}>Next</Button>)}
        {isLastStep ? (<Button className="sign-up__finish" color="green" onClick={this.finish}>Finish</Button>) : null}
      </div>
    </div>);
  }
}

export default connect(
  (state) => ({signUp: state.signUp}),
  (dispatch) => ({actions: bindActionCreators(signUpActions, dispatch)})
)(SignUp);

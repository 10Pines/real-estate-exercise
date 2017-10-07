import React, {Component} from "react";
import {Button, Form} from "semantic-ui-react";

import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import signInActions from "front/actions/sign-in";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.changed = this.changed.bind(this);
    this.signIn = this.signIn.bind(this);

    this.state = {
      email: "",
      password: ""
    };
  }

  changed(property) {
    return (data, el) => {
      this.setState({[property]: el.value});
    };
  }

  signIn() {
    this.props.actions.signIn(this.state.email, this.state.password);
  }

  render() {
    const {signingIn, signInError} = this.props.session;
    const {email, password} = this.state;

    const buttonDisabled = email.length === 0 || password.length === 0;

    return (<section className="home__sign-in">
      <h3>Already a member?</h3>
      <Form className="sign-in__form">
        <Form.Input className={"sign-in__field" + (signInError ? " sign-in__field--error" : "" )} placeholder="Email"
                    onChange={this.changed("email")} value={this.state.email}/>
        <Form.Input className={"sign-in__field" + (signInError ? " sign-in__field--error" : "" )} placeholder="Password"
                    type="password"
                    onChange={this.changed("password")} value={this.state.password}/>
        <Button className="sign-in__go" color="green"
                loading={signingIn} disabled={buttonDisabled}
                onClick={this.signIn}>Sign In</Button>
      </Form>
    </section>);
  }
}

export default connect(
  (state) => ({session: state.session}),
  (dispatch) => ({
    actions: bindActionCreators(signInActions, dispatch)
  })
)(SignIn);

import React, {Component} from "react";
import {Button, Form} from "semantic-ui-react";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    return (<section className="home__sign-in">
      <h3>Already a member?</h3>
      <Form className="sign-in__form">
        <Form.Input value={this.state.email} placeholder="Email"/>
        <Form.Input type="password" value={this.state.password} placeholder="Password"/>
        <Button className="sign-in__go" color="green">Sign In</Button>
      </Form>
    </section>);
  }
}

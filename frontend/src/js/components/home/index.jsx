import React from "react";
import SignIn from "components/home/sign-in";
import SignUp from "components/home/sign-up";

require("sass/home");
export default () => (
  <div className="home">
    <h1 className="home__title">Welcome to Real State</h1>
    <div className="home__sign-in-up">
      <SignIn/>
      <SignUp/>
    </div>
  </div>
);

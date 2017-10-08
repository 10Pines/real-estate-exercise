import React from "react";
import {Form} from "semantic-ui-react";

export default ({data, onPropertyChanged}) => (
  <div className="general">
    General
    <Form>
      <Form.Input placeholder="First Name" value={data.firstName}
                  onChange={(event, el) => onPropertyChanged("general", "firstName", el.value)}/>
      <Form.Input placeholder="Last Name" value={data.lastName}
                  onChange={(event, el) => onPropertyChanged("general", "lastName", el.value)}/>
      <Form.Input placeholder="Email" value={data.email}
                  onChange={(event, el) => onPropertyChanged("general", "email", el.value)}/>
      <Form.Input placeholder="Password" type="password" value={data.password}
                  onChange={(event, el) => onPropertyChanged("general", "password", el.value)}/>
      <Form.Input placeholder="Repeat password" type="password" value={data.passwordConfirmation}
                  onChange={(event, el) => onPropertyChanged("general", "passwordConfirmation", el.value)}/>
      <Form.Input placeholder="Cellphone" value={data.cellPhone}
                  onChange={(event, el) => onPropertyChanged("general", "cellPhone", el.value)}/>
      <Form.Input placeholder="Address" value={data.address}
                  onChange={(event, el) => onPropertyChanged("general", "address", el.value)}/>
    </Form>
  </div>
);

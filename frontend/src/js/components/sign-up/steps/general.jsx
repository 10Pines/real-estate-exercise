import React from "react";
import {Form} from "semantic-ui-react";

export default ({data, onPropertyChanged, errors}) => (
  <div className="general">
    General
    <Form>
      <Form.Input error={errors.firstName} placeholder="First Name" value={data.firstName}
                  onChange={(event, el) => onPropertyChanged("general", "firstName", el.value)}/>
      <Form.Input error={errors.lastName} placeholder="Last Name" value={data.lastName}
                  onChange={(event, el) => onPropertyChanged("general", "lastName", el.value)}/>
      <Form.Input error={errors.email} placeholder="Email" value={data.email}
                  onChange={(event, el) => onPropertyChanged("general", "email", el.value)}/>
      <Form.Input error={errors.password} placeholder="Password" type="password" value={data.password}
                  onChange={(event, el) => onPropertyChanged("general", "password", el.value)}/>
      <Form.Input error={errors.passwordConfirmation} placeholder="Repeat password" type="password" value={data.passwordConfirmation}
                  onChange={(event, el) => onPropertyChanged("general", "passwordConfirmation", el.value)}/>
      <Form.Input error={errors.cellphone} placeholder="Cellphone" value={data.cellphone}
                  onChange={(event, el) => onPropertyChanged("general", "cellphone", el.value)}/>
      <Form.Input error={errors.address} placeholder="Address" value={data.address}
                  onChange={(event, el) => onPropertyChanged("general", "address", el.value)}/>
    </Form>
  </div>
);

import React from "react";
import {Form} from "semantic-ui-react";

export default ({data, onPropertyChanged}) => (
  <div className="buyer">
    Buyer
    <Form>
      <Form.Input placeholder="Down payment" value={data.downPayment} onChange={(event, el) => onPropertyChanged("buyer", "downPayment", el.value)}/>
      <Form.Input placeholder="Purchase Method" value={data.purchaseMethod} onChange={(event, el) => onPropertyChanged("buyer", "purchaseMethod", el.value)}/>
    </Form>
  </div>
);

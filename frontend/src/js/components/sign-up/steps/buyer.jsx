import React from "react";
import {Form, Dropdown} from "semantic-ui-react";

export default ({data, onPropertyChanged}) => (
  <div className="buyer">
    Buyer
    <Form>
      <Form.Input placeholder="Down payment" value={data.downPayment} onChange={(event, el) => onPropertyChanged("buyer", "downPayment", el.value)}/>
      <Form.Input placeholder="Purchase Method" value={data.purchaseMethod} onChange={(event, el) => onPropertyChanged("buyer", "purchaseMethod", el.value)}/>
      <Form.Input placeholder="Maximum Purchase Price" value={data.maximumPurchasePrice} onChange={(event, el) => onPropertyChanged("buyer", "maximumPurchasePrice", el.value)}/>
      <Form.Input placeholder="Earnest Money Deposit" value={data.earnestMoneyDeposit} onChange={(event, el) => onPropertyChanged("buyer", "earnestMoneyDeposit", el.value)}/>
      <Form.Input placeholder="Closing Days" value={data.closingDays} onChange={(event, el) => onPropertyChanged("buyer", "closingDays", el.value)}/>
      <Dropdown placeholder="Approved" value={data.approved} fluid selection options={[{text: "Yes", value: true}, {text: "No", value: false}]} onChange={(event, el) => onPropertyChanged("buyer", "approved", el.value)}/>
    </Form>
  </div>
);

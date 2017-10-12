import React from "react";
import {Form, Dropdown} from "semantic-ui-react";

export default ({data, onPropertyChanged, errors}) => (
  <div className="buyer">
    Buyer
    <Form>
      <Form.Input error={errors.downPayment} placeholder="Down payment" value={data.downPayment} onChange={(event, el) => onPropertyChanged("buyer", "downPayment", el.value)}/>
      <Dropdown error={errors.purchaseMethod} placeholder="Purchase Method" value={data.purchaseMethod} fluid selection options={[{text:"Cash", value: "Cash"},{text: "FHA", value: "FHA"},{text: "VA", value: "VA"}, {text: "Conventional", value: "Conventional"}, {text: "Hard Money", value: "Hard Money"}, {text: "Other", value: "Other"}]} onChange={(event, el) => onPropertyChanged("buyer", "purchaseMethod", el.value)}/>
      <Form.Input error={errors.maximumPurchasePrice} placeholder="Maximum Purchase Price" value={data.maximumPurchasePrice} onChange={(event, el) => onPropertyChanged("buyer", "maximumPurchasePrice", el.value)}/>
      <Form.Input error={errors.earnestMoneyDeposit} placeholder="Earnest Money Deposit" value={data.earnestMoneyDeposit} onChange={(event, el) => onPropertyChanged("buyer", "earnestMoneyDeposit", el.value)}/>
      <Form.Input error={errors.closingDays} placeholder="Closing Days" value={data.closingDays} onChange={(event, el) => onPropertyChanged("buyer", "closingDays", el.value)}/>
      <Dropdown error={errors.approved} placeholder="Approved" value={data.approved} fluid selection options={[{text: "Yes", value: true}, {text: "No", value: false}]} onChange={(event, el) => onPropertyChanged("buyer", "approved", el.value)}/>
    </Form>
  </div>
);

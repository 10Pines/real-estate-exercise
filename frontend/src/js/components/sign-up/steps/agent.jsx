import React from "react";
import {Form} from "semantic-ui-react";

export default ({data, onPropertyChanged, errors}) => (
  <div className="agent">
    Agent
    <Form>
      <Form.Input error={errors.numberOfListingsClosedIn12Months} placeholder="Number of listings closed in 12 months" value={data.numberOfListingsClosedIn12Months}
                  onChange={(event, el) => onPropertyChanged("agent", "numberOfListingsClosedIn12Months", el.value)}/>
      <Form.Input error={errors.companyName} placeholder="Company Name" value={data.companyName}
                  onChange={(event, el) => onPropertyChanged("agent", "companyName", el.value)}/>
      <Form.Input error={errors.breNumber} placeholder="BRE Number" value={data.breNumber}
                  onChange={(event, el) => onPropertyChanged("agent", "breNumber", el.value)}/>
      <Form.Input error={errors.brokerBreNumber} placeholder="Broker BRE Number" value={data.brokerBreNumber}
                  onChange={(event, el) => onPropertyChanged("agent", "brokerBreNumber", el.value)}/>
      <Form.Input error={errors.companyAddress} placeholder="Company Address" value={data.companyAddress}
                  onChange={(event, el) => onPropertyChanged("agent", "companyAddress", el.value)}/>
    </Form>
  </div>
);

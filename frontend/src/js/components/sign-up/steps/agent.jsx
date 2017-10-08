import React from "react";
import {Form} from "semantic-ui-react";

export default ({data, onPropertyChanged}) => (
  <div className="agent">
    Agent
    <Form>
      <Form.Input placeholder="Number of listings closed in 12 months" value={data.numberOfListingsClosedIn12Months}
                  onChange={(event, el) => onPropertyChanged("agent", "numberOfListingsClosedIn12Months", el.value)}/>
      <Form.Input placeholder="Company Name" value={data.companyName}
                  onChange={(event, el) => onPropertyChanged("agent", "companyName", el.value)}/>
    </Form>
  </div>
);

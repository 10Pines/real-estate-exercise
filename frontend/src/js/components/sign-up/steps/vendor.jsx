import React from "react";
import {Form} from "semantic-ui-react";

export default ({data, onPropertyChanged}) => (
  <div className="vendor">
    Vendor
    <Form>
      <Form.Input placeholder="Type" value={data.type}
                  onChange={(event, el) => onPropertyChanged("vendor", "type", el.value)}/>
      <Form.Input placeholder="Company Name" value={data.companyName}
                  onChange={(event, el) => onPropertyChanged("vendor", "companyName", el.value)}/>
    </Form>
  </div>
);

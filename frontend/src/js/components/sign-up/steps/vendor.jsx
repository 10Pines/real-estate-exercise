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
      <Form.Input placeholder="Company Address" value={data.companyName}
                  onChange={(event, el) => onPropertyChanged("vendor", "companyAddress", el.value)}/>
      <Form.Input placeholder="Phone" value={data.phone}
                  onChange={(event, el) => onPropertyChanged("vendor", "phone", el.value)}/>
      <Form.Input placeholder="License (optional)" value={data.phone}
                  onChange={(event, el) => onPropertyChanged("vendor", "license", el.value)}/>
    </Form>
  </div>
);

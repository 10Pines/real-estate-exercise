import React from "react";
import {Form} from "semantic-ui-react";

export default ({data, onPropertyChanged, errors}) => (
  <div className="vendor">
    Vendor
    <Form>
      <Form.Input error={errors.type} placeholder="Type" value={data.type}
                  onChange={(event, el) => onPropertyChanged("vendor", "type", el.value)}/>
      <Form.Input error={errors.companyName} placeholder="Company Name" value={data.companyName}
                  onChange={(event, el) => onPropertyChanged("vendor", "companyName", el.value)}/>
      <Form.Input error={errors.companyAddress} placeholder="Company Address" value={data.companyAddress}
                  onChange={(event, el) => onPropertyChanged("vendor", "companyAddress", el.value)}/>
      <Form.Input error={errors.phone} placeholder="Phone" value={data.phone}
                  onChange={(event, el) => onPropertyChanged("vendor", "phone", el.value)}/>
      <Form.Input error={errors.license} placeholder="License (optional)" value={data.license}
                  onChange={(event, el) => onPropertyChanged("vendor", "license", el.value)}/>
    </Form>
  </div>
);

import React from "react";
import {Form} from "semantic-ui-react";

export default ({data, onPropertyChanged}) => (
  <div className="seller">
    Seller
    <Form>
      <Form.Input placeholder="Property Address" value={data.propertyAddress}
                  onChange={(event, el) => onPropertyChanged("seller", "propertyAddress", el.value)}/>
    </Form>
  </div>
);

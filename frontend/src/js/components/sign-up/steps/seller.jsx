import React from "react";
import {Form} from "semantic-ui-react";
import {DatePickerInput} from "rc-datepicker";

export default ({data, onPropertyChanged}) => (
  <div className="seller">
    Seller
    <Form>
      <Form.Input placeholder="Property Address" value={data.propertyAddress}
                  onChange={(event, el) => onPropertyChanged("seller", "propertyAddress", el.value)}/>
      <Form.Input placeholder="Property Price List" value={data.propertyPriceList}
                  onChange={(event, el) => onPropertyChanged("seller", "propertyPriceList", el.value)}/>
      <DatePickerInput placeholder="Estimated Selling Date" value={data.sellingDate}
                  onChange={(event, el) => {debugger; onPropertyChanged("seller", "sellingDate", el)}}/>
    </Form>
  </div>
);

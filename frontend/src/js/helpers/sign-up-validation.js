export default class SignUpValidation {
  validate(role, data) {
    return this[`validate_${role}`](data);
  }

  validate_general(data) {
    const errors = {};
    if (data.firstName.length === 0) {
      errors.firstName = "Empty";
    }
    if (!alphaAndSpaces(data.firstName)){
      errors.firstName = "Invalid first name";
    }
    if (data.lastName.length === 0) {
      errors.lastName = "Empty";
    }
    if (!alphaAndSpaces(data.lastName)){
      errors.lastName = "Invalid last name";
    }
    if (data.email.length === 0) {
      errors.email = "Empty";
    }
    if (!validEmail(data.email)){
      errors.email = "Invalid email";
    }
    if (data.password.length === 0) {
      errors.password = "Empty";
    }
    if (data.passwordConfirmation.length === 0) {
      errors.passwordConfirmation = "Empty";
    } else {
      if (data.password !== data.passwordConfirmation) {
        errors.passwordConfirmation = "Doesn't match";
      }
    }
    if (data.cellphone.length === 0) {
      errors.cellphone = "Empty";
    }
    if (!validCellphoneNumber(data.cellphone)){
      errors.cellphone = "Invalid cellphone";
    }
    if (data.address.length === 0) {
      errors.address = "Empty";
    }
    if (!validAddress(data.address)){
      errors.address = "Invalid address";
    }
    return errors;
  }

  validate_buyer(data) {
    const errors = {};
    if (data.downPayment.length === 0) {
      errors.downPayment = "Empty";
    }
    if (!validNumber(data.downPayment)){
      errors.downPayment = "Invalid Down Payment";
    }
    if (data.purchaseMethod.length === undefined) {
      errors.purchaseMethod = "Empty";
    }
    if (data.maximumPurchasePrice === undefined){
      errors.maximumPurchasePrice = "Empty";
    }
    if (!validNumber(data.maximumPurchasePrice)){
      errors.maximumPurchasePrice = "Invalid Maximum Purchase Price";
    }
    if (data.earnestMoneyDeposit === undefined){
      errors.earnestMoneyDeposit = "Empty";
    }
    if (!validNumber(data.earnestMoneyDeposit)){
      errors.earnestMoneyDeposit = "Invalid Earnest Money Deposit";
    }
    if (data.closingDays === undefined){
      errors.closingDays = "Empty";
    }
    if (!validNumber(data.closingDays)){
      errors.closingDays = "Invalid Closing Days";
    }
    if (data.approved === undefined){
      errors.approved = "Empty";
    }
    return errors;
  }

  validate_seller(data) {
    const errors = {};
    if (data.propertyAddress.length === 0) {
      errors.propertyAddress = "Empty";
    }
    if (!validAddress(data.propertyAddress)){
      errors.propertyAddress = "Invalid Property Address";
    }
    if (data.propertyPriceList === undefined){
      errors.propertyPriceList = "Empty";
    }
    if (!validNumber(data.propertyPriceList)){
      errors.propertyPriceList = "Invalid Property List"
    }
    return errors;
  }

  validate_agent(data) {
    const errors = {};
    if (data.numberOfListingsClosedIn12Months.length === 0) {
      errors.numberOfListingsClosedIn12Months = "Empty";
    }
    if (!validNumber(data.numberOfListingsClosedIn12Months)){
      errors.numberOfListingsClosedIn12Months = "Invalid Number Of Listings Closed In 12 Months";
    }
    if (data.companyName.length === 0){
      errors.companyName = "Empty";
    }
    if (!alphaAndSpaces(data.companyName)){
      errors.companyName = "Invalid Company Name";
    }
    if (data.breNumber.length === 0){
      errors.breNumber = "Empty";
    }
    if (data.brokerBreNumber.length === 0) {
      errors.brokerBreNumber = "Empty";
    }
    if (data.companyAddress.length === 0){
      errors.companyAddress = "Empty";
    }
    if (!validAddress(data.companyAddress)){
      errors.companyAddress = "Invalid Company Address";
    }
    return errors;
  }

  validate_vendor(data) {
    const errors = {};
    if (data.type.length === 0) {
      errors.type = "Empty";
    }
    if (data.companyName.length === 0) {
      errors.companyName = "Empty";
    }
    if (!alphaAndSpaces(data.companyName)){
      errors.companyName = "Invalid Company Name";
    }
    if (data.companyAddress === undefined) {
      errors.companyAddress = "Empty";
    }
    if (!validAddress(data.companyAddress)){
      errors.companyAddress = "Invalid Company Address";
    }
    if (data.phone === undefined){
      errors.phone = "Empty";
    }
    if (!validPhoneNumber(data.phone)){
      errors.phone = "Invalid Phone";
    }
    if (data.license === undefined){
      errors.license = "Empty";
    }
    return errors;
  }
}

function validEmail(email){
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function alphaAndSpaces(text){
    var re = /^[A-Za-z ]+$/;
    return re.test(text);
}

function validCellphoneNumber(cellphoneNumber){
    var re = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    return re.test(cellphoneNumber);
}

function validAddress(address){
  var re = /^\d+\s[A-z\s]{1,}/;
  return re.test(address);
}

function validNumber(number){
  var re = /^-?\d*(\.\d+)?$/;
  return re.test(number);
}

function validPhoneNumber(phoneNumber){
  var re = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
  return re.test(phoneNumber);
}

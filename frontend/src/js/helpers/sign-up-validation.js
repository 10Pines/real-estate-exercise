export default class SignUpValidation {
  validate(role, data) {
    return this[`validate_${role}`](data);
  }

  validate_general(data) {
    const errors = {};
    if (data.firstName.length === 0) {
      errors.firstName = "Empty";
    }
    if (data.email.length === 0) {
      errors.email = "Empty";
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
    return errors;
  }

  validate_buyer(data) {
    const errors = {};
    if (data.downPayment.length === 0) {
      errors.downPayment = "Empty";
    }
    return errors;
  }

  validate_seller(data) {
    const errors = {};
    if (data.propertyAddress.length === 0) {
      errors.propertyAddress = "Empty";
    }
    return errors;
  }

  validate_agent(data) {
    const errors = {};
    if (data.numberOfListingsClosedIn12Months.length === 0) {
      errors.numberOfListingsClosedIn12Months = "Empty";
    }
    return errors;
  }

  validate_vendor(data) {
    const errors = {};
    if (data.type.length === 0) {
      errors.type = "Empty";
    }
    return errors;
  }
}

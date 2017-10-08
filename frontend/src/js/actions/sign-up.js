import Services from "front/services";

import Cookies from "h/cookies";
import signInActions from "front/actions/sign-in";

export const names = {
  START: "SIGN_UP__START",
  BACK: "SIGN_UP__BACK",
  NEXT: "SIGN_UP__NEXT",
  PROPERTY_CHANGED: "SIGN_UP__PROPERTY_CHANGED",
  SET_ERRORS: "SIGN_UP__SET_ERRORS",
  SAVE_START: "SIGN_UP__SAVE_START",
  SAVE_SUCCESS: "SIGN_UP__SAVE_SUCCESS",
  SAVE_ERROR: "SIGN_UP__SAVE_ERROR"
};

const start = (roles) => ({
  type: names.START,
  roles
});

const back = () => ({
  type: names.BACK
});

const next = () => ({
  type: names.NEXT
});

const saveStart = () => ({
  type: names.SAVE_START
});

const saveSuccess = () => ({
  type: names.SAVE_SUCCESS
});

const saveError = () => ({
  type: names.SAVE_ERROR
});

const finish = () => (dispatch, getState) => {
  const data = getState().signUp.data;

  dispatch(saveStart());
  Services.api.signUp.signUp(data)
    .then((session) => {
      Services.changeToken(session.token);
      Cookies.set("session", JSON.stringify(session));
      dispatch(saveSuccess());
      const action = signInActions.success(session);
      dispatch(action);
    })
    .catch(() => dispatch(saveError()));
};

const propertyChanged = (role, property, value) => ({
  type: names.PROPERTY_CHANGED,
  role,
  property,
  value
});

const setErrors = (role, errors) => ({
  type: names.SET_ERRORS,
  role,
  errors
});

export default {
  start,
  back,
  next,
  finish,
  propertyChanged,
  setErrors
};

import Services from "front/services";

import Cookies from "h/cookies";

export const names = {
  START: "SIGN_IN__START",
  SUCCESS: "SIGN_IN__SUCCESS",
  ERROR: "SIGN_IN__ERROR",
  SIGN_OUT: "SIGN_IN__SIGN_OUT"
};

const start = () => ({
  type: names.START
});

const success = (session) => ({
  type: names.SUCCESS,
  session
});

const error = () => ({
  type: names.ERROR
});

const signIn = (user, password) => (dispatch) => {
  dispatch(start());
  Services.api.auth.signIn(user, password)
    .then((session) => {
      Cookies.set("session", JSON.stringify(session));
      dispatch(success(session));
    })
    .catch(() => dispatch(error()));
};

const signOut = () => {
  Cookies.set("session", null);
  return {type: names.SIGN_OUT};
};

export default {
  signIn,
  signOut
};

import Services from "front/services";

import Cookies from "h/cookies";
import signInActions from "front/actions/sign-in";

export const names = {
  FETCH_USER_START: "DASHBOARD__FETCH_USER_START",
  FETCH_USER_SUCCESS: "DASHBOARD__FETCH_USER_SUCCESS",
  FETCH_USER_ERROR: "DASHBOARD__FETCH_USER_ERROR"
};

const fetchUserStart = () => ({
  type: names.FETCH_USER_START
});

const fetchUserSuccess = (user) => ({
  type: names.FETCH_USER_SUCCESS,
  user
});

const fetchUserError = () => ({
  type: names.FETCH_USER_ERROR
});

const fetchUser = () => (dispatch) => {
  dispatch(fetchUserStart());
  Services.api.users.me()
    .then((user) => dispatch(fetchUserSuccess(user)))
    .catch(() => dispatch(fetchUserError()));
};

export default {
  fetchUser
};

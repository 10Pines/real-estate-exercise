import {names as dashboardActions} from "front/actions/dashboard";

export default function dashboard(state, action) {
  const defaultState = {
    loadingUser: true
  };

  if (!state) {
    return defaultState;
  }
  switch (action.type) {
    case dashboardActions.FETCH_USER_START: {
      return {
        ...state,
        loadingUser: true,
        loadingUserError: null,
        user: null
      };
    }
    case dashboardActions.FETCH_USER_SUCCESS: {
      return {
        ...state,
        loadingUser: false,
        user: action.user
      };
    }
    case dashboardActions.FETCH_USER_ERROR: {
      return {
        ...state,
        loadingUser: false,
        loadingUserError: action.error
      };
    }
    default:
      return state;
  }
};

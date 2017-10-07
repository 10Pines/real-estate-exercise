import {names as signInActions} from "front/actions/sign-in";

export default function signIn(state, action) {
  const defaultState = {};

  if (!state) {
    return defaultState;
  }
  switch (action.type) {
    case signInActions.START: {
      return {
        ...state,
        signingIn: true,
        session: null,
        signInError: null
      };
    }
    case signInActions.SUCCESS: {
      return {
        ...state,
        signingIn: false,
        session: action.session
      };
    }
    case signInActions.ERROR: {
      return {
        ...state,
        signingIn: false,
        signInError: true
      };
    }
    case signInActions.SIGN_OUT: {
      return {
        ...state,
        session: null
      };
    }
    default:
      return state;
  }
};

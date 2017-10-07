import {names as signUpActions} from "front/actions/sign-up";

export default function signUp(state, action) {
  const defaultState = {
    roles: ["general", "seller", "agent"],
    currentRole: "general"
  };

  if (!state) {
    return defaultState;
  }
  switch (action.type) {
    case signUpActions.START: {
      return {
        ...state,
        roles: ["general", ...action.roles],
        currentRole: "general"
      };
    }
    case signUpActions.BACK: {
      const roles = state.roles;
      const currentRoleIndex = roles.indexOf(state.currentRole);
      if (currentRoleIndex < 1) {
        return state;
      }
      return {
        ...state,
        currentRole: roles[currentRoleIndex - 1]
      };
    }
    case signUpActions.NEXT: {
      const roles = state.roles;
      const currentRoleIndex = roles.indexOf(state.currentRole);
      if (currentRoleIndex === roles.length - 1) {
        return state;
      }
      return {
        ...state,
        currentRole: roles[currentRoleIndex + 1]
      };
    }
    default:
      return state;
  }
};

import {names as signUpActions} from "front/actions/sign-up";

const EMPTY_DATA = {
  general: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    cellPhone: "",
    address: ""
  },
  buyer: {
    downPayment: "",
    purchaseMethod: ""
  },
  seller: {
    propertyAddress: ""
  },
  agent: {
    numberOfListingsClosedIn12Months: "",
    companyName: ""
  },
  vendor: {
    type: "",
    companyName: ""
  }
};

export default function signUp(state, action) {
  const defaultState = {
    roles: ["general", "seller", "agent"],
    currentRole: "general",
    errors: {},
    data: EMPTY_DATA
  };

  if (!state) {
    return defaultState;
  }
  switch (action.type) {
    case signUpActions.START: {
      return {
        ...state,
        saving: false,
        saveError: false,
        roles: ["general", ...action.roles],
        currentRole: "general",
        data: EMPTY_DATA
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
    case signUpActions.PROPERTY_CHANGED: {
      return {
        ...state,
        data: {
          ...state.data,
          [action.role]: {
            ...state.data[action.role],
            [action.property]: action.value
          }
        }
      };
    }
    case signUpActions.SET_ERRORS: {
      const newErrors = {...state.errors};
      delete newErrors[action.role];

      if (action.errors) {
        newErrors[action.role] = action.errors;
      }

      return {
        ...state,
        errors: newErrors
      };
    }
    case signUpActions.SAVE_START: {
      return {
        ...state,
        saving: true,
        saveError: false
      };
    }
    case signUpActions.SAVE_ERROR: {
      return {
        ...state,
        saving: false,
        saveError: true
      };
    }
    default:
      return state;
  }
};

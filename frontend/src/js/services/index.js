import AuthApiService from "front/services/api/auth";
import SignUpApiService from "front/services/api/sign-up";

export default {
  api: {
    auth: new AuthApiService(),
    signUp: new SignUpApiService()
  }
};

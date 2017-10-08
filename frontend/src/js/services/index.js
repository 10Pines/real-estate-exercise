import AuthApiService from "front/services/api/auth";
import SignUpApiService from "front/services/api/sign-up";
import UsersApiService from "front/services/api/users";

const api = {
  auth: new AuthApiService(),
  signUp: new SignUpApiService(),
  users: new UsersApiService()
};

export default {
  setup(apiUrl, token) {
    Object.keys(api).forEach(s => api[s].setup(apiUrl, token));
  },
  changeToken(token) {
    Object.keys(api).forEach(s => api[s].token = token);
  },
  api
};

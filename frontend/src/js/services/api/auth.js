import ApiService from "./api-service";

export default class AuthApiService extends ApiService {
  signIn(email, password) {
    const body = {email, password};
    return this.request("sign-in", {method: "POST", body});
  }
}

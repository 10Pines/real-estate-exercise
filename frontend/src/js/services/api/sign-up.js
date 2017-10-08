import ApiService from "./api-service";

export default class SignUpApiService extends ApiService {
  signUp(data) {
    return this.request("users/sign-up", {method: "POST", body: data});
  }
}

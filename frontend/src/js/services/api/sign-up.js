import ApiService from "./api-service";

export default class SignUpApiService extends ApiService {
  signUp(data) {
    return this.request("sign-up", {method: "POST", body: data});
  }
}

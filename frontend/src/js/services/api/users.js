import ApiService from "./api-service";

export default class UsersApiService extends ApiService {
  me() {
    return this.request("users/me");
  }
}

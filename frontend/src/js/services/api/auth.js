export default class AuthApiService {
  signIn(user, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "user" && password === "password") {
          resolve({session: "ABCDE", userId: 1});
        } else {
          reject({error: "Invalid"});
        }
      }, 1000);
    });
  }
}
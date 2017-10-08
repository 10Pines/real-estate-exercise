import Data from "./data";
window.Data = Data;

export default class AuthApiService {
  signIn(email, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = Data.users.find(u => u.email === email && u.password === password);
        if (user) {
          resolve({session: "ABCDE", userId: user.id});
        } else {
          reject({error: "Invalid"});
        }
      }, 1000);
    });
  }
}

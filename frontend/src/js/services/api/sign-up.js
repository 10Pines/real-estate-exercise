import Data from "./data";

export default class SignUpApiService {
  signUp(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const dataCopy = {...data};
        delete dataCopy.general;
        const user = {
          ...data.general,
          id: Data.users.length + 1,
          roles: {...dataCopy}
        };
        Data.users.push(user);

        resolve({session: "ABCDE", userId: user.id});
      }, 1000);
    });
  }
}

const AuthService = require("./auth");
const models = require("../models");
const User = models.User;

class UsersService {
  async signUp(data) {
    const dataCopy = {...data};
    delete dataCopy.general;
    const userAttr = {
      ...data.general
    };

    const user = await User.create(userAttr);
    return await AuthService.sessionFor(user.id);
  }

  async getUser(userId) {
    const user = await User.findById(userId);
    if (!user) {
      return {error: {status: 404, description: "User not found"}};
    }
    return {user};
  }
}

module.exports = new UsersService();
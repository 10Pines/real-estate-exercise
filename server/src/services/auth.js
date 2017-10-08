const crypto = require("crypto");
const models = require("../models");
const User = models.User;
const Session = models.Session;

class AuthService {
  async signIn(email, password) {
    const user = await User.findOne({where: {email: email, password: password}});
    if (!user) {
      return {error: {status: 401, description: "Invalid credentials"}};
    }
    return this.sessionFor(user.id);
  }

  async sessionFor(userId) {
    const token = crypto.randomBytes(64).toString("hex");
    const sessionAttrs = {userId: userId, token};
    await Session.create(sessionAttrs);
    return {session: sessionAttrs};
  }

  async getSession(token) {
    const session = await Session.findOne({where: {token}});
    if (!session) {
      return {error: {status: 401, description: "Token not valid"}};
    }
    return {session};
  }
}

module.exports = new AuthService();
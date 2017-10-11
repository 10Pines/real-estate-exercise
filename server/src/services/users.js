const AuthService = require("./auth");
const { User, Buyer, Agent, Vendor, Seller } = require("../models");

const hasSomeNonEmptyStringKey = (object) => {
  let result = false;
  for (let key in object) {
    if (object[key] !== '') {
      result = true;
    }
  }
  return result;
}

class UsersService {
  async signUp(data) {
    const dataCopy = {...data};
    delete dataCopy.general;
    const userAttr = {
      ...data.general
    };

    const user = await User.create(data.general);

    if(hasSomeNonEmptyStringKey(data.buyer)) {
      await Buyer.create({...data.buyer, userId: user.id});
    }
    if(hasSomeNonEmptyStringKey(data.seller)) {
      await Seller.create({...data.seller, userId: user.id});
    }
    if(hasSomeNonEmptyStringKey(data.agent)) {
      await Agent.create({...data.agent, userId: user.id});
    }
    if(hasSomeNonEmptyStringKey(data.vendor)) {
      await Vendor.create({...data.vendor, userId: user.id});
    }

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

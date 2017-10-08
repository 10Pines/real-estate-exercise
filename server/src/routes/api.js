const router = require("express").Router();

const Data = require("../data");

const delay = 200;

module.exports = function () {
  router.post("/sign-in", (req, res) => {
    setTimeout(() => {
      const user = Data.users.find(u => u.email === req.body.email && u.password === req.body.password);
      if (user) {
        const session = {token: Data.sessions.length + 1, userId: user.id};
        Data.sessions.push(session);
        res.send({session});
      } else {
        res.status(404).send({error: "Not found"});
      }
    }, delay);
  });
  router.post("/sign-up", (req, res) => {
    setTimeout(() => {
      const data = req.body;

      const dataCopy = {...data};
      delete dataCopy.general;
      const user = {
        ...data.general,
        id: Data.users.length + 1,
        roles: {...dataCopy}
      };
      Data.users.push(user);

      const session = {token: Data.sessions.length + 1, userId: user.id};
      Data.sessions.push(session);
      res.send({session});
    }, delay);
  });
  return router;
};

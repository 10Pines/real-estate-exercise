const router = require("express").Router();

const Data = require("../data");

const delay = 1200;

module.exports = function () {
  router.post("/sign-in", (req, res) => {
    setTimeout(() => {
      const user = Data.users.find(u => u.email === req.body.email && u.password === req.body.password);
      if (user) {
        const session = {token: String(Data.sessions.length + 1), userId: user.id};
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

      const session = {token: String(Data.sessions.length + 1), userId: user.id};
      Data.sessions.push(session);
      res.send({session});
    }, delay);
  });
  router.get("/me", (req, res) => {
    setTimeout(() => {
      const token = req.token;
      console.log("Token", req.token);
      console.log("Sessions", Data.sessions);
      const session = Data.sessions.find(s => s.token === token);
      console.log("FOUND SESSION22", session);
      if (!session) {
        return res.status(401).send({error: "Session not valid"});
      }

      const user = Data.users.find(u => u.id === session.userId);
      if (user) {
        return res.send(user);
      } else {
        return res.status(404).send({error: "User not found"});
      }
    }, delay);
  });
  return router;
};

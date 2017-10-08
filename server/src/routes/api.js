const router = require("express").Router();
const crypto = require("crypto");

const models = require("../models");
const User = models.User;
const Session = models.Session;

const Data = require("../data");

const delay = 1200;

module.exports = function () {
  router.post("/sign-in", (req, res) => {
    setTimeout(() => {
      User.findOne({where: {email: req.body.email, password: req.body.password}})
        .then(user => {
          if (!user) {
            return res.status(404).send({error: "Not found"});
          }
          const token = crypto.randomBytes(64).toString("hex");
          const sessionAttrs = {userId: user.id, token};
          return Session.create(sessionAttrs)
            .then(session => {
              res.send({session: sessionAttrs});
            });
        })
        .catch((e) => {
          console.log(e);
          res.status(500).end();
        });
    }, delay);
  });
  router.post("/sign-up", (req, res) => {
    setTimeout(() => {
      const data = req.body;

      const dataCopy = {...data};
      delete dataCopy.general;
      const userAttr = {
        ...data.general,
        id: Data.users.length + 1,
        roles: {...dataCopy}
      };
      User.create(userAttr)
        .then(user => {
          const token = crypto.randomBytes(64).toString("hex");
          const sessionAttrs = {userId: user.id, token};
          return Session.create(sessionAttrs)
            .then(session => {
              res.send({session: sessionAttrs});
            });
        })
        .catch((e) => {
          console.log(e);
          res.status(500).end();
        });
    }, delay);
  });
  router.get("/me", (req, res) => {
    setTimeout(() => {
      const token = req.token;

      Session.findOne({where: {token}})
        .then(session => {
          if (!session) {
            return res.status(401).send({error: "Session not valid"});
          }
          User.findById(session.userId)
            .then(user => {
              if (user) {
                return res.send(user);
              } else {
                return res.status(404).send({error: "User not found"});
              }
            });
        });
    }, delay);
  });
  return router;
};

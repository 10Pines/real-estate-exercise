const router = require("express").Router();

const AuthService = require("../services/auth");
const UsersService = require("../services/users");

const delay = 500;

module.exports = function () {
  router.post("/auth/sign-in", async (req, res) => {
    setTimeout(async () => {
      let result;
      try {
        result = await AuthService.signIn(req.body.email, req.body.password);
      } catch (e) {
        console.log(e);
        return res.status(500).end();
      }

      const error = result.error;
      if (error) {
        return res.status(error.status).send({error: error.description});
      }
      res.send({session: result.session});
    }, delay);
  });
  router.post("/users/sign-up", (req, res) => {
    setTimeout(async () => {
      try {
        const result = await UsersService.signUp(req.body);
        res.send({session: result.session});
      } catch (e) {
        console.error(e);
        return res.status(500).end();
      }
    }, delay);
  });
  router.get("/users/me", (req, res) => {
    setTimeout(async () => {
      const token = req.token;
      let result, userResult, error;
      try {
        result = await AuthService.getSession(token);
        let error = result.error;
        if (error) {
          return res.status(error.status).send({error: error.description});
        }
        userResult = await UsersService.getUser(result.session.userId);
        error = userResult.error;
        if (error) {
          return res.status(error.status).send({error: error.description});
        }
        res.send(userResult.user);
      } catch (e) {
        console.error(e);
        return res.status(500).end();
      }

    }, delay);
  });
  return router;
};

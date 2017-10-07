const router = require("express").Router();

module.exports = function (config) {
  const renderHome = (req, res) => {
    res.render("home", {
      config: config,
      clientConfig: JSON.stringify(config)
    });
  };

  router.get("/", (req, res) => renderHome(req, res));
  router.get("/*", (req, res) => renderHome(req, res));
  return router;
};

const client = require("./client");
const api = require("./api");

module.exports = {
  setup(app, config) {
    app.use("/api", api());
    app.use(client(config));
  }
};

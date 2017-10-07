const client = require("./client");

module.exports = {
  setup(app, config) {
    app.use(client(config));
  }
};

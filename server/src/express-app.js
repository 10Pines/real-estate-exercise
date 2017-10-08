const express = require("express");
const exphbs = require("express-handlebars");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const bearerToken = require('express-bearer-token');
const morgan = require("morgan");
const staticGzip = require("express-static-gzip");
const sslRedirect = require("heroku-ssl-redirect");
const vary = require("vary");
const compression = require("compression");

const Routes = require("./routes/routes");

const buildPath = __dirname + "/../../build";

const app = express();
app.disable("x-powered-by");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.engine(".hbs", exphbs({extname: ".hbs"}));
app.set("view engine", ".hbs");
app.set("views", buildPath + "/templates/");

app.use(bearerToken());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(compression());

if (process.env.NODE_ENV !== "test") {
  app.use(morgan("dev")); // Logs
}

if (process.env.FORCE_SSL) {
  app.use(sslRedirect());
}

if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test") {
  const webpack = require("webpack");
  const webpackConfig = require(__dirname + "/../../webpack.config.js").devConfigClient;
  const compiler = webpack(webpackConfig);

  app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
  }));

  app.use(require("webpack-hot-middleware")(compiler));
}

app.use(function (req, res, next) {
  vary(res, "Accept-Encoding");
  next();
});

app.use("/static", staticGzip(buildPath + "/static/", {maxAge: 30 * 24 * 60 * 60 * 1000}));

const config = {
  cssLink: process.env.NODE_ENV === "production",
  apiEndpoint: process.env.API_URL || "/api/"
};

Routes.setup(app, config);

module.exports = app;

var path = require("path");
var webpack = require("webpack");
var _ = require("lodash");

var buildOutput = path.join(__dirname, "build/static");
var StatsPlugin = require("stats-webpack-plugin");
var CompressionPlugin = require("compression-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var NameAllModulesPlugin = require("name-all-modules-plugin");

var baseConfig = {
  cache: true,
  entry: {
    app: ["./frontend/src/js/entries/client-entry.jsx"]
  },
  output: {
    path: buildOutput,
    publicPath: "/static",
    filename: "js/[name].[chunkhash].bundle.js",
    chunkFilename: "[chunkhash].js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".scss", ".css"],
    alias: {
      "front": path.join(__dirname, "frontend/src/js"),
      "components": path.join(__dirname, "frontend/src/js/components"),
      "h": path.join(__dirname, "frontend/src/js/helpers"),
      "sass": path.join(__dirname, "frontend/src/sass"),
      "server": path.join(__dirname, "server/src"),
      "front-test": path.join(__dirname, "frontend/test/js")
    }
  }
};

//PROD CONFIG
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var prodConfig = _.extend({}, _.cloneDeep(baseConfig), {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [{
          loader: "babel-loader",
          query: {
            cacheDirectory: true,
            plugins: ["lodash", ["lodash", {"id": "semantic-ui-react"}]],
            presets: ["es2015"]
          }
        }]
      },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader?-autoprefixer&importLoaders=2!postcss-loader!sass-loader"
        })
      }
    ]
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NamedChunksPlugin((chunk) => {
      if (chunk.name) {
        return chunk.name;
      }
      return chunk.modules.map(m => path.relative(m.context, m.request)).join("_");
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: module => /node_modules/.test(module.resource)
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "runtime"
    }),
    new NameAllModulesPlugin(),
    new ExtractTextPlugin({filename: "css/[name]-styles.[contenthash].css", allChunks: true}),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
      "process.env.WEBPACK_ENV": JSON.stringify("client")
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new StatsPlugin("stats-client-prod.json", {
      chunkModules: true,
      exclude: [/node_modules[\\\/]react/]
    }),
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, "build/templates/home.hbs"),
      template: "frontend/src/templates/home.hbs.ejs"
    })
  ]
});

// DEV CONFIG
var devConfig = _.extend({}, _.cloneDeep(baseConfig), {
  devtool: "eval",
  profile: true,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [{
          loader: "babel-loader",
          query: {
            cacheDirectory: true,
            plugins: ["lodash", ["lodash", {"id": "semantic-ui-react"}]],
            presets: ["es2015"]
          }
        }]
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader?sourceMap", "postcss-loader?sourceMap", "sass-loader?sourceMap"]
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: module => /node_modules/.test(module.resource)
    }),
    new webpack.LoaderOptionsPlugin({debug: true}),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development"),
      "process.env.WEBPACK_ENV": JSON.stringify("client")
    }),
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, "build/templates/home.hbs"),
      template: "frontend/src/templates/home.hbs.ejs"
    })
  ]
});
devConfig.entry.app.push(
  "webpack-hot-middleware/client"
);
devConfig.output.filename = "js/[name].bundle.js";

module.exports = _.extend({}, baseConfig,
  {
    prodConfig: prodConfig,
    devConfigClient: devConfig
  }
);

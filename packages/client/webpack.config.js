const webpack = require("webpack");
const path = require("path");

module.exports = [
  {
    devtool: "source-map",
    entry: ["./src/server.js"],
    externals: [
      (context, request, callback) => {
        if (request[0] !== "." && !request.startsWith("webpack")) {
          return callback(null, "commonjs " + request);
        }
        callback();
      }
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    },
    output: {
      path: path.join(__dirname, "lib"),
      filename: "server.js",
      library: "@patternplate/client",
      libraryTarget: "commonjs2"
    },
    plugins: [new webpack.NamedModulesPlugin()],
    target: "node"
  },
  {
    devtool: "source-map",
    entry: {
      client: "./src/client.js"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    },
    output: {
      path: path.join(__dirname, "lib", "static"),
      filename: "[name].js"
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: "vendors",
        minChunks: mod =>
          mod.context && mod.context.indexOf("node_modules") > -1
      })
    ]
  }
];

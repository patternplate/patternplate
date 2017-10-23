const webpack = require("webpack");
const path = require("path");

module.exports = [
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

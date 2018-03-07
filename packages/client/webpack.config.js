const webpack = require("webpack");
const path = require("path");

module.exports = [
  {
    entry: {
      client: "./src/client.js"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude(input) {
            if (input.indexOf('@patternplate') > - 1) {
              return false;
            }
            if (input.indexOf('node_modules') > -1) {
              return true;
            }
            return false;
          },
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "module:@patternplate/babel-preset",
                  {
                    targets: ["web"],
                    sources: ["react", "styled-components"]
                  }
                ]
              ]
            }
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

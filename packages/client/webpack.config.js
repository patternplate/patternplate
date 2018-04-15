const webpack = require("webpack");
const path = require("path");

module.exports = [
  {
    entry: {
      client: "./src/client.js"
    },
    mode: "development",
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
    optimization: {
      splitChunks: {
        name: "vendors",
        minChunks: 2
      },
    }
  },
  {
    entry: {
      "render-page": "./src/app/render-page"
    },
    target: "node",
    mode: "development",
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
                    targets: ["node"],
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
      libraryTarget: "commonjs2",
      path: path.join(__dirname, "lib", "app"),
      filename: "[name].js"
    },
  },
];

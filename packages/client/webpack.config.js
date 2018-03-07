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
  },
  {
    entry: {
      server: "./src/server.js",
      eject: "./src/eject.js",
      render: "./src/render.js"
    },
    externals: /^(express|chokidar|webpack|uglify-js|load-runner|ws|encoding|use|require-from-string|@patternplate\/demo-client|@patternplate\/demo-client|@patternplate\/webpack-entry)/,
    target: "node",
    node: {
      __dirname: true
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
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
      path: path.join(__dirname, "lib"),
      filename: "[name].js"
    }
  }
];

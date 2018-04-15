const webpack = require("webpack");
const ManifestPlugin = require("webpack-manifest-plugin");
const path = require("path");

module.exports = [
  {
    entry: {
      client: "./src/client.js"
    },
    devtool: "source-map",
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
    plugins: [
      new ManifestPlugin()
    ],
    output: {
      filename: "[name].[chunkhash].js",
      path: path.join(__dirname, "lib", "static")
    },
    optimization: {
      splitChunks: {
        chunks: "all",
        cacheGroups: {
          vendor: {
            chunks: "initial",
            name: "vendors",
            test: "vendor",
            enforce: true
          }
        }
      }
    }
  },
  process.env.NODE_ENV === "production" && {
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
    }
].filter(Boolean);

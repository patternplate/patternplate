const webpack = require("webpack");
const ManifestPlugin = require("webpack-manifest-plugin");
const path = require("path");
const yargsParser = require("yargs-parser");

const flags = yargsParser(process.argv.slice(2));

const client = {
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
          if (input.indexOf("@patternplate") > -1) {
            return false;
          }
          if (input.indexOf("node_modules") > -1) {
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
  plugins: [new ManifestPlugin()],
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
};

const widgets = {
  entry: {
    widgets: "./src/widgets.js"
  },
  devtool: "source-map",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude(input) {
          if (input.indexOf("@patternplate") > -1) {
            return false;
          }
          if (input.indexOf("node_modules") > -1) {
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
    filename: "[name].js",
    path: path.join(__dirname, "lib", "static")
  }
};

const renderPage = {
  entry: {
    "render-page": "./src/app/render-page"
  },
  devtool: "source-map",
  target: "node",
  node: {
    __dirname: false,
    __filename: false
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude(input) {
          if (input.indexOf("@patternplate") > -1) {
            return false;
          }
          if (input.indexOf("node_modules") > -1) {
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
  plugins: [
    new webpack.DefinePlugin({
      "process.env.WEBPACK": true
    })
  ],
  output: {
    libraryTarget: "commonjs2",
    path: path.join(__dirname, "lib", "app"),
    filename: "[name]/index.js"
  },
  optimization: {
    minimizer: []
  }
};

module.exports = [
  flags.client !== false ? client : undefined,
  flags.widgets !== false ? widgets : undefined,
  flags.renderPage !== false ? renderPage : undefined
].filter(Boolean);

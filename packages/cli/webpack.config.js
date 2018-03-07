const builtinModules = require('builtin-modules');
const webpack = require("webpack");
const path = require("path");

const EXTERNALS = builtinModules.concat([
  "fsevents", // native
  "ws", // issues with buffer-utils
  "utf8-validate", // native
  "spawn-sync", // native
  "encoding", // native
  "import-from", // depends on pure Node.js module semantics
  "resolve-from", // depends on pure Node.js module semantics
  "resolve-pkg", // depends on pure Node.js module semantics
  "loader-runner",
  "use", // unresolvable assets (snapdragon)
  "webpack", // bloats bundle to 2.5x size
  "webpack-dev-middleware", // bloats bundle to 2.5x size
  "express", // express/lib/view creates an expression require
  "errorhandler", // non-resolvable static assets
  "require-from-string", // fails unpredictably
  "meow", // installed in cli anyway
  "chalk" // installed in cli anyway
]);

module.exports = {
  entry: {
    build: "./src/build/index.js",
    eject: "./src/create/index.js",
    start: "./src/start/index.js"
  },
  target: "node",
  externals: [
    (context, request, callback) => {
      if (EXTERNALS.indexOf(request) > -1){
        return callback(null, 'commonjs ' + request);
      }
      callback();
    }
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: function(file) {
          return file.indexOf(__dirname) === -1;
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
    path: path.join(__dirname, "lib"),
    filename: "[name].js"
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify("production")
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: "production"
    })
  ]
};


const webpackEntry = require("@patternplate/webpack-entry");

module.exports = {
  devtool: "source-map",
  entry: webpackEntry.sync(["src/**/*.demo.js"]),
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["babel-preset-env", "babel-preset-react"]
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "css-loader"
          },
          {
            loader: "less-loader"
          }
        ]
      }
    ]
  },
  output: {
    path: __dirname,
    filename: "components.bundle.js",
    libraryTarget: "commonjs"
  }
};

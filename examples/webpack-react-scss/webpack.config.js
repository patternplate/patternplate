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
              presets: ["@babel/preset-env", "@babel/preset-react"]
            }
          }
        ]
      },
      {
        test: /\.(c|sc)ss$/,
        use: [
          {
            loader: "raw-loader"
          },
          {
            loader: "sass-loader",
            options: {
              relativeUrls: true
            }
          }
        ]
      },
    ]
  },
  output: {
    path: __dirname,
    filename: "components.bundle.js",
    libraryTarget: "commonjs"
  }
};

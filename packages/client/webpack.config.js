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
    }
  }
];

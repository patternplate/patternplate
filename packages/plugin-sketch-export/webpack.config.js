const Path = require("path");

module.exports = {
  entry: {
    "html-sketchapp": "./src/html-sketchapp.ts"
  },
  devtool: "source-map",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true
          }
        }
      }
    ]
  },
  output: {
    filename: "[name].bundle.js",
    libraryTarget: "global",
    library: "[name]",
    path: Path.join(__dirname, "lib")
  },
  resolve: {
    extensions: [".ts", ".js"]
  }
};

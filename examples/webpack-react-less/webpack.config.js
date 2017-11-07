const globby = require("globby");

const entry = globby.sync(["src/**/*.demo.js"]).reduce((acc, file) => {
  acc[file] = `./${file}`;
  return acc;
}, {});

module.exports = {
  devtool: "source-map",
  entry,
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
    library: "[name]",
    libraryTarget: "commonjs"
  }
};

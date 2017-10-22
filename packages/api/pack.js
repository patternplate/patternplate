const webpackDevMiddleware = require("webpack-dev-middleware");

module.exports = async ({ compiler }) => {
  return webpackDevMiddleware(compiler, {
    quiet: true
  });
};

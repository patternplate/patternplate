# Example: webpack-react-less

This package demonstrates how to use `patternplate` with
webpack as build pipeline.

This means we bundle everything into a single artifact:

```js
// webpack.config.js
const webpackEntry = require("@patternplate/webpack-entry");

module.exports = {
  devtool: "source-map",
  entry: webpackEntry.sync(["src/**/*.demo.js"]),
  // other options omitted
};
```

Notice the usage of the `@patternplate/webpack-entry` utility.

By generating the entry for our demo bundle like this we
ensure patternplate understands bundle file webpack produces.

Let's specify the resulting bundle as our `entry`:

```js
// patternplate.config.js
module.exports = {
  entry: ["components.bundle.js"],
  // other options omitted
};
```

For the purpose of this example we chose LESS as CSS preprocessor.
The files containing LESS are named `*.less`.

Enable webpack to load your LESS files using `css-loader` and `less-loader`:

```js
// webpack.config.js
module.exports = {
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
  // other options omitted
};
```

Because we enabled source-maps in webpack before, patternplate
can correctly resolve our single artifact to `n` underlying artifacts
and build a navigation in the web interface.

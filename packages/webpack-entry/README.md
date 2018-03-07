> Documentation and development interface for component libraries

# @patternplate/webpack-entry

* Framework independent
* Bring design docs to live with real components
* Powerful search and meta data system

This is the contributor documentation for `@patternplate/webpack-entry`
For user docs see [patternplate.github.io](https://patternplate.github.io)

## About @patternplate/webpack-entry

Create dynamic webpack entries given glob patterns.

## Usage

```js
const webpackEntry = require("@patternplate/webpack-entry");

// webpack.config.js
module.exports = {
  entry: webpackEntry.sync(["src/**/*.demo.js"])
};
```

## License

Copyright by SinnerSchrader. All `@patternplate` packages are released under the MIT license.


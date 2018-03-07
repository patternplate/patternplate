> Documentation and development interface for component libraries

# @patternplate/load-config

* Framework independent
* Bring design docs to live with real components
* Powerful search and meta data system

This is the contributor documentation for `@patternplate/cli`
For user docs see [patternplate.github.io](https://patternplate.github.io)

## About @patternplate/load-config

Provided a current working directory `@patternplate/load-config` loads and normalizes patternplate configuration from `patternplate.config.js` files.

## Quick start

```sh
git clone https://github.com/patternplate/patternplate.git
cd patternplate/packages/load-config
yarn
yarn start
```

## Usage

```js
const loadConfig = require("@patternplate/load-config");

(async () => {
  const config = await loadConfig({cwd: process.cwd()});
  // {filepath: null | "string", config: {}}
})();
```

## License

Copyright by SinnerSchrader. All `@patternplate` packages are released under the MIT license.


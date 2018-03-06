> Documentation and development interface for component libraries

# @patternplate/load-meta

* Framework independent
* Bring design docs to live with real components
* Powerful search and meta data system

This is the contributor documentation for `@patternplate/load-manifest`
For user configuration see [sinnerschrader.github.com/patternplate](https://sinnerschrader.github.com/patternplate)

## About @patternplate/load-meta

Read a pattern meta data list from a given cwd

## Quick start

```sh
git clone https://github.com/sinnerschrader/patternplate.git
cd patternplate/packages/load-meta
yarn
yarn start
```

## Usage

```js
const loadMeta = require("@patternplate/load-meta");

(async () => {
  const meta = await loadMeta({
    entry: ["**/demo.js"],
    cwd: process.cwd()
  });
  // {errors: [], patterns: []}
})();
```

## License

Copyright by SinnerSchrader. All `@patternplate` packages are released under the MIT license.


> Documentation and development interface for component libraries

# @patternplate/load-doc

* Framework independent
* Bring design docs to live with real components
* Powerful search and meta data system

This is the contributor documentation for `@patternplate/cli`
For user docs see [patternplate.github.io](https://patternplate.github.io)

## About @patternplate/load-doc

Provided a current working directory `@patternplate/load-doc` return the `Buffer` holding
the conntents of `README.md`, `readme.md` or `index.md`.

## Quick start

```sh
git clone https://github.com/patternplate/patternplate.git
cd patternplate/packages/load-doc
yarn
yarn start
```

## Usage

```js
const loadDoc = require("@patternplate/load-doc");

(async () => {
  const doc = await loadDoc({cwd: process.cwd()});
  // {filepath: null | "string", contents: null | Buffer)
})();
```

## License

Copyright by SinnerSchrader. All `@patternplate` packages are released under the MIT license.


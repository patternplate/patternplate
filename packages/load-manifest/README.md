> Documentation and development interface for component libraries

# @patternplate/load-manifest

* Framework independent
* Bring design docs to live with real components
* Powerful search and meta data system

This is the contributor documentation for `@patternplate/load-manifest`
For user docs see [patternplate.github.io](https://patternplate.github.io)

## About @patternplate/load-manifest

Read pattern meta data from a given cwd, picking up `package.json` and `pattern.json` files

## Quick start

```sh
git clone https://github.com/patternplate/patternplate.git
cd patternplate/packages/load-manifest
yarn
yarn start
```

## Usage

```js
const {loadManifest} = require("@patternplate/load-manifest");

(async () => {
  const {filepath, manifest} = await loadManifest({cwd}); 
  // filepath: string | null; manifest: {}
})();
```

## License

Copyright by SinnerSchrader. All `@patternplate` packages are released under the MIT license.


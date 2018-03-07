> Documentation and development interface for component libraries

# @patternplate/load-docs

* Framework independent
* Bring design docs to live with real components
* Powerful search and meta data system

This is the contributor documentation for `@patternplate/cli`
For user docs see [patternplate.github.io](https://patternplate.github.io)

## About @patternplate/load-docs

Load documentation files matching a glob pattern.

## Quick start

```sh
git clone https://github.com/patternplate/patternplate.git
cd patternplate/packages/load-docs
yarn
yarn start
```

## Usage

```js
const loadDocs = require("@patternplate/load-doc");
const {loadDocsTree} = loadDocs;

(async () => {
  const doc = await loadDocs({docs: ["**/*.md"]});

  const tree = await loadDocsTree({docs: ["**/*.md"]});
})();
```

## License

Copyright by SinnerSchrader. All `@patternplate` packages are released under the MIT license.


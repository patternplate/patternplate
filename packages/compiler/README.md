> Documentation and development interface for component libraries

# @patternplate/compiler

* Framework independent
* Bring design docs to live with real components
* Powerful search and meta data system

This is the contributor documentation for `@patternplate/cli`
For user docs see [patternplate.github.io](https://patternplate.github.io)

## About @patternplate/compiler

`@patternplate/compiler` wraps webpack and simplifies its generic API to distinguish only between `web` and `node` targets for patternplate purposes.

## Quick start

```sh
git clone https://github.com/patternplate/patternplate.git
cd patternplate/packages/compiler
yarn
yarn start
```

## Usage

```js
const createCompiler = require("@patternplate/compiler");

const compiler = createCompiler({
  cwd: process.cwd(),
  target: "web"
});

compiler.run((err, stats) => {
  if (err) {
    return console.error(err);
  }

  if (stats.errors && stats.errors.length > 0) {
    return console.error(stats.errors);
  } 

  // results in compiler.outputFileSystem
});
```

## License

Copyright by SinnerSchrader. All `@patternplate` packages are released under the MIT license.


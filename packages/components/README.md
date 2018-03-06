> Documentation and development interface for component libraries

# @patternplate/components

* Framework independent
* Bring design docs to live with real components
* Powerful search and meta data system

This is the contributor documentation for `@patternplate/cli`
For user configuration see [patternplate.github.io](https://patternplate.github.io)

## About @patternplate/components

`@patternplate/components` doubles as component library and source for the example `patternplate` instance
than can be started on the mono repository root.

## Quick start

```sh
git clone https://github.com/patternplate/patternplate.git
cd patternplate
yarn
yarn components
```

## Usage

```js
const React = require("react");
const ReactDOM = require("react-dom/server");
const {Button} = require("@patternplate/components");

const html = ReactDOM.renderToString(<Button/>);
```

## License

Copyright by SinnerSchrader. All `@patternplate` packages are released under the MIT license.


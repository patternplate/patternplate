> Documentation and development interface for component libraries

# @patternplate/widgets

* Framework independent
* Bring design docs to live with real components
* Powerful search and meta data system

This is the contributor documentation for `@patternplate/widgets`
For user docs see [patternplate.github.io](https://patternplate.github.io)

## About @patternplate/widgets

Reexports the widget components from `@patternplate/components` for usage
in `widget` blocks of `patternplate` docs.

## Usage

```js
const React = require("react");
const { ComponentDemo, ComponentList } = require("@patternplate/widgets");

module.exports = () => (
  <React.Fragment>
    <ComponentDemo src="pattern-demo" />
    <ComponentList query="tags=widgets" />
  </React.Fragment>
);
```

## License

Copyright by SinnerSchrader. All `@patternplate` packages are released under the MIT license.


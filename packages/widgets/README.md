> Documentation and development interface for component libraries

# @patternplate/widgets

* Framework independent
* Bring design docs to live with real components
* Powerful search and meta data system

This is the contributor documentation for `@patternplate/widgets`
For user configuration see [sinnerschrader.github.com/patternplate](https://sinnerschrader.github.com/patternplate)

## About @patternplate/widgets

Reexports the widget components from `@patternplate/components` for usage
in `widget` blocks of `patternplate` docs.

## Usage

```js
const React = require("react");
const { PatternDemo, PatternList } = require("@patternplate/widgets");

module.exports = () => (
  <React.Fragment>
    <PatternDemo src="pattern-demo" />
    <PatternList query="tags=widgets" />
  </React.Fragment>
);
```

## License

Copyright by SinnerSchrader. All `@patternplate` packages are released under the MIT license.


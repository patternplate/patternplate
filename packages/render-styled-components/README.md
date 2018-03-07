> Documentation and development interface for component libraries

# @patternplate/render-styled-components

* Framework independent
* Bring design docs to live with real components
* Powerful search and meta data system

This is the contributor documentation for `@patternplate/render-styled-components`
For user docs see [patternplate.github.io](https://patternplate.github.io)

## About @patternplate/render-styled-components

`@patternplate/render-styled-components` provides the entry points for rendering and mounting
of patternplate components written in React and `styled-components`. 

It is used by default in unconfigured patternplate instances.

## Quick start

```sh
git clone https://github.com/patternplate/patternplate.git
cd patternplate/packages/render-styled-components
yarn
yarn start
```

## Usage

```js
// patternplate.config.js
module.exports = {
  render: "@patternplate/render-styled-components/render",
  mount: "@patternplate/render-styled-components/mount"
};
```

## License

Copyright by SinnerSchrader. All `@patternplate` packages are released under the MIT license.


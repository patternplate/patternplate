> Documentation and development interface for component libraries

# @patternplate/render-react

* Framework independent
* Bring design docs to live with real components
* Powerful search and meta data system

This is the contributor documentation for `@patternplate/render-react`
For user docs see [patternplate.github.io](https://patternplate.github.io)

## About @patternplate/render-react

`@patternplate/render-react` provides the entry points for rendering and mounting
of patternplate components written in React. 

It is used by default in unconfigured patternplate instances.

## Quick start

```sh
git clone https://github.com/patternplate/patternplate.git
cd patternplate/packages/render-react
yarn
yarn start
```

## Usage

```js
// patternplate.config.js
module.exports = {
  render: "@patternplate/render-react/render",
  mount: "@patternplate/render-react/mount"
};
```

## License

Copyright by SinnerSchrader. All `@patternplate` packages are released under the MIT license.


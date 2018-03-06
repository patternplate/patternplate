> Documentation and development interface for component libraries

# @patternplate/render-default

* Framework independent
* Bring design docs to live with real components
* Powerful search and meta data system

This is the contributor documentation for `@patternplate/render-default`
For user configuration see [sinnerschrader.github.com/patternplate](https://sinnerschrader.github.com/patternplate)

## About @patternplate/render-default

`@patternplate/render-default` provides the entry points for rendering and mounting
of patternplate components. 

It is used by default in unconfigured patternplate instances.

## Quick start

```sh
git clone https://github.com/sinnerschrader/patternplate.git
cd patternplate/packages/render-default
yarn
yarn start
```

## Usage

```js
// patternplate.config.js
module.exports = {
  render: "@patternplate/render-default/render",
  mount: "@patternplate/render-default/mount"
};
```

## License

Copyright by SinnerSchrader. All `@patternplate` packages are released under the MIT license.


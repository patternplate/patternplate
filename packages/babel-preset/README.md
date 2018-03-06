> Documentation and development interface for component libraries

# @patternplate/babel-preset

* Framework independent
* Bring design docs to live with real components
* Powerful search and meta data system

This is the contributor documentation for `@patternplate/babel-preset`
For user configuration see [sinnerschrader.github.com/patternplate](https://sinnerschrader.github.com/patternplate)


## About @patternplate/babel-preset

`@patternplate/babel-preset` is the shared babel configuration in use
across the patternplate mono repoository. It abstracts away the complexities of babel compilation for universal, web and server targets.

## Quick start

```sh
git clone https://github.com/sinnerschrader/patternplate.git
cd patternplate/packages/babel-preset
yarn
yarn start
```

## Usage

```json
{
  "file": "package.json",
  "babel": {
    "presets": [
      "module:@patternplate/babel-preset"
    ]
  }
}
```

**with options**
```json
{
  "file": "package.json",
  "babel": {
    "presets": [
      ["module:@patternplate/babel-preset", {
        "targets": ["node"]
      }]
    ]
  }
}
```

## Options

* **targets** `("node" | "web")[]?` list of transpilation targets. Defaults to `["node"]`. Default is 
disabled when specified. 
  * `node`: Enable transpilation for Node.js 6
  * `web`: Enable transpilation for browser matrix

* **sources** `("react" | "styled-components")[]?` list of source types. Defaults to `["node"]`. Default is 
disabled when specified.
  * `react`: Transform JSX
  * `styled-components`: Enable `styled-components` specific transpiler steps

## License

Copyright by SinnerSchrader. All `@patternplate` packages are released under the MIT license.


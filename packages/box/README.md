
> Documentation and development interface for component libraries

# @patternplate/box

* Framework independent
* Bring design docs to live with real components
* Powerful search and meta data system

This is the contributor documentation for `@patternplate/babel-preset`
For user configuration see [patternplate.github.io](https://patternplate.github.io)

## About @patternplate/box

Wrap an async function to return a boxed result. 

This is useful at callsites where errors might be expected
and recoverable.

## Install

```
npm install --save @patternplate/box
```

## Usage

```js
const {box} = require("@patternplate/box"); 

const fail = () => new Promise((_, reject) => reject(new Error("boop.")));
const boxed = box(fail);

boxed.then(box => {
  // box: {result: null, err: Error({message: "boop."})}
})
```

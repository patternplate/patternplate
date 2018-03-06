# @patternplate/box

> Wrap an async function to return a boxed result

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

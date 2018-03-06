---
displayName: Getting started
options:
  order: -1
---

# @patternplate-examples/babel-bel-postcss

* Compile with `babel`
* Preprocess with `postcss`
* Render with `bel`
* Update with `bel`

## Getting started

```bash
git clone git@github.com:patternplate/patternplate.git
cd examples/babel-bel-postcss
yarn
yarn start
# Open localhost:1337 in your browser
```

## Add a "Hello World" pattern

* Create `src/hello-world/demo.js` with the
following contents.

```js
const React = require('react');

module.exports = HelloWorld;

function HelloWorld() {
  return bel`<h1 class="headline-1">Hello World</h1>`;
}
```

* Add `src/hello-world/package.json`

```json
{
  "name": "hello-world",
  "version": "1.0.0",
  "patternplate": {
    "displayName": "Hello World"
  }
}
```

* Navigate to [http://localhost:1337/pattern/hello-world](http://localhost:1337/pattern/hello-world)


## Add styling

* Create `src/hello-world/demo.css`

```
.headline-1 {
  font-family: sans-serif;
  color: cornflowerblue;
}
```

* Restart `postcss-cli` to pick up the new file ([relevant issue](https://github.com/postcss/postcss-cli/issues/161))

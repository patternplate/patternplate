---
displayName: Getting Started
---

# @patternplate-example/styled-components

* Build with `babel`
* Render with `React`
* Style with `styled-components`

## Getting started

```bash
git clone git@github.com:patternplate/patternplate.git
cd examples/styled-components
yarn
yarn start
# Open localhost:1337 in your browser
```

## Add a "Hello World" package

Create `src/hello-world/demo.js` with the
following contents. 

```js
// src/hello-world/demo.js
const React = require("react");
const styled = require("styled-components").default;

const StyledHelloWorld = styled.h1`
  font-family: sans-serif;
  color: cornflowerblue;
`;

module.exports = function HelloWorldDemo() {
  return <StyledHelloWorld>Hello World</StyledHelloWorld>;
}
```

* Create `src/hello-world/package.json`

```json
{
  "name": "hello-world",
  "version": "1.0.0",
  "patternplate": {
    "displayName": "Hello World"
  } 
}
```

Navigate to [pattern/hello-world](http://localhost:1337/pattern/hello-world)


## Separate component and demo

To prepare your component for reuse, you'll want to extract it from your demo like this:


```js
// src/hello-world/index.js
// src/hello-world/index.js
const styled = require("styled-components").default;

module.exports.HelloWorld = styled.h1`
  font-family: sans-serif;
  color: cornflowerblue;
`;
```

```js
// src/hello-world/demo.js
const React = require("react");
const {HelloWorld} = require(".");

module.exports = function HelloWorldDemo() {
  return <HelloWorld>Hello world</HelloWorld>;
}
```

---
displayName: Getting Started
---

# @patternplate-example/webpack-react-scss

* Build with `webpack`
* Render with `React`
* Style with `scss`

## Getting started

```bash
git clone git@github.com:patternplate/patternplate.git
cd examples/webpack-react-scss
yarn
yarn start
# Open localhost:1337 in your browser
```

## Add a "Hello World" package

Create `src/hello-world/hello-world.demo.js` with the
following contents. 

```js
// src/hello-world/hello-world.demo.js
import React from "react";

export default function HelloWorldDemo() {
  return <h1 className="hello-world">Hello World</h1>;
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


## Add styling

```scss
// src/hello-world/hello-world.demo.scss
.hello-world {
  font-family: sans-serif;
  color: cornflowerblue;
}
```

In `src/hello-world/hello-world.demo.js`, import 
`src/hello-world/hello-world.demo.scss` and reexport

```js
// src/hello-world/hello-world.demo.js
import React from "react";
export {default as css} from "./hello-world.demo.scss";

export default function HelloWorldDemo() {
  return <h1 className="hello-world">Hello World</h1>;
}
```

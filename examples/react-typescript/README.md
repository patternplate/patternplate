---
displayName: Getting Started
---

# @patternplate-example/react-typescript

* Build with `TypeScript`
* Render with `React`
* Style with `CSS`

## Getting started

```bash
git clone git@github.com:sinnerschrader/patternplate.git
cd examples/react-typescript
yarn
yarn start
# Open localhost:1337 in your browser
```

## Add a "Hello World" pattern

Create `src/hello-world/demo.tsx` with the
following contents. 

```tsx
// src/hello-world/demo.tsx
import * as React from "react";

export default function HelloWorldDemo() {
  return <div>Hello World</div>;
}
```

* Add `CSS` in `src/hello-world/demo.css`

```css
.hello-world {
  font-family: sans-serif;
  color: cornflowerblue;
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


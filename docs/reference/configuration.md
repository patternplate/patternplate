---
tags:
  - Reference
options:
  order: 11
---

# Reference: Configuration

`patternplate` can be configured via `patternplate.config.js`.

In absence of a `patternplate.config.js` file the defaults are:

```js
module.exports = {
  docs: ["docs/**/*.md"],
  entry: ["lib/**/*.js"],
  render: "@patternplate/render-default/render",
  mount: "@patternplate/render-default/mount"
};
```

### docs

An array of glob patterns `string[]`. 
Relative to `patternplate.config.js`. 

Files matching the glob pattern are considered as sources for documentation.

**Example**

```js
module.exports = {
  // all .md files next to patternplate.config.js
  docs: ["*.md"] 
};
```

### entry

An array of glob patterns `string[]`. 
Relative to `patternplate.config.js`. 

Files matching the glob pattern are considered as demo entries.

**Example**

```js
module.exports = {
  // All *.demo.js files in dist, e.g. dist/button/button.demo.js
  entry: ["dist/**/*.demo.js"] 
};
```

### render

An absolute or relative module id `string`, resolved relative to `patternplate.config.js`.
The default export of the resolved module is used as server-side render function.

**Examples**

```js
module.exports = {
  // use render of the node module @patternplate/render-react
  render: "@patternplate/render-react/render"
};
```

```js
module.exports = {
  // use the file render.js next to patternplate.config.js
  render: "./render.js"
};
```

### mount

An absolute or relative module id `string`, resolved relative to `patternplate.config.js`.
The default export of the resolved module is used as client-side mount function.

**Examples**

```js
module.exports = {
  // use render of the node module @patternplate/render-react
  render: "@patternplate/render-react/mount"
};
```

```js
module.exports = {
  // use the file mount.js next to patternplate.config.js
  render: "./mount.js"
};
```

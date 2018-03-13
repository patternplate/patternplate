---
tags:
  - Reference
options:
  order: 15
---

  # Reference: Widgets

`patternplate` provides widgets for your use in Markdown files.
Widgets can display information derived from your component library.

## Component List

`<ComponentList />` displays an unordered list of patterns matching a search query.
Placing the following code inside a `widget` code block creates a list
of all patterns with the tag `Widget`.

```js
const React = require("react");
const {ComponentList} = require("@patternplate/widgets");

module.exports = () =>  <ComponentList query="tags=Widget" />;
```

```widget
const React = require("react");
const {ComponentList} = require("@patternplate/widgets");

module.exports = () => <ComponentList query="tags=Widget" />;
```


## Component Demo

`<ComponentDemo />` displays the demo for the component referenced via `id`.

```js
const React = require("react");
const {ComponentDemo} = require("@patternplate/widgets");

module.exports = () => <ComponentDemo id="button" />;
```

```widget
const React = require("react");
const {ComponentDemo} = require("@patternplate/widgets");

module.exports = () => <ComponentDemo id="button" />;
```

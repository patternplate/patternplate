---
tags:
  - Reference
options:
  order: 15
---

# Reference: Widgets

> :woman_student: **Level**: Expert

`patternplate` provides components that can be used in Markdown.
This allows you to bring your documenation to live with e.g. actual, real component demos.

## Component List

`<ComponentList />` displays an unordered list of patterns matching a search query.
Placing the following code inside a `widget` code block creates a list
of all patterns with the tag `Widget`.

````md
```widget
const React = require("react");
const {ComponentList} = require("@patternplate/widgets");

module.exports = () =>  <ComponentList query="tags=Widget" />;
```
````

```widget
const React = require("react");
const {ComponentList} = require("@patternplate/widgets");

module.exports = () => <ComponentList query="tags=Widget" />;
```


## Component Demo

`<ComponentDemo />` displays the demo for the component referenced via `id`.

````md
```widget
const React = require("react");
const {ComponentDemo} = require("@patternplate/widgets");

module.exports = () => <ComponentDemo id="button" />;
```
````


```widget
const React = require("react");
const {ComponentDemo} = require("@patternplate/widgets");

module.exports = () => <ComponentDemo id="button" />;
```

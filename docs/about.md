---
options:
  order: -3
---

# About 

`patternplate` documentation is categorized into **Guides** and **References**.

* **Guides** are instructions for common use cases that can be followed step by step.
  You can expect every guide to state the intended audience, recommended skill level and the 
  time it will take to complete the guide. Most guides are written **for beginners**.
  
* **References** are detailed technical documentation about various `patternplate` features
and its API. The reference section will become your go-to place for docs as you grow more familiar
with `patternplate`. References are written with **intermediate users** and **developers** in mind. 

## Guides

```widget
const React = require("react");
const {PatternList} = require("@patternplate/widgets");
module.exports = () => <PatternList query="tags=Guide AND is=doc" />;
```

## References

```widget
const React = require("react");
const {PatternList} = require("@patternplate/widgets");
module.exports = () => <PatternList query="tags=Reference AND is=doc" />;
```

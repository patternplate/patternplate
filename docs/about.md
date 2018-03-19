---
options:
  order: 4
---
# How to use the docs 

> :woman_student: **Level**: Beginner

`patternplate` documentation is categorized into [Guides](#guides), [Advanced](#advanced) and [References](#references). 
All doc items state the recommended [skill level](#levels):woman_student:. 
Guides and Advanced topics will also state the time :timer_clock: it will take to complete them.
  
## Levels

> :information_source: Don't be put off by the levels, they are only meant to help. Ask your colleagues for help and [post an issue on GitHub](https://github.com/patternplate/patternplate/issues/new) if something is hard to understand in our docs. Thank you! :bow:

The recommended levels for the instructions in this documentation are structured according to the technical knowledge required. 

* **Beginners**: No technical knowledge required. We'll guide you through everything.
* **Intermediate**: Basic knowledge of Markdown, JSON and YAML is required. Experience with using the command line helps.
* **Expert**: Safe handling of data formats. Basic knowledge of HTML, CSS JavaScript

## Guides

Instructions for common use cases that can be followed step by step. 
This is where you'll want to begin when exploring patternplate and its features.
Most guides are written **for beginners**.

```widget
const React = require("react");
const {PatternList} = require("@patternplate/widgets");
module.exports = () => <PatternList query="tags=Guide AND is=doc" />;
```

## Advanced

Advanced topics usually require technical knowledge at the level of a professional software developer. 

Most users will rarely read this section unless they are entrusted with the technical setup of a patternplate project.

```widget
const React = require("react");
const {PatternList} = require("@patternplate/widgets");
module.exports = () => <PatternList query="tags=Advanced AND is=doc" />;
```

## References

Detailed technical documentation about various `patternplate` features
and its API. The reference section will become your go-to place for docs as you grow more familiar
with `patternplate`. References are written with **intermediate users** and **developers** in mind. 

```widget
const React = require("react");
const {PatternList} = require("@patternplate/widgets");
module.exports = () => <PatternList query="tags=Reference AND is=doc" />;
```

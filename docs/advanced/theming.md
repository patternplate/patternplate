---
displayName: "Advanced: Theming"
description: "Adapt patternplate to your design needs"
tags: 
 - Advanced
options:
  order: 6
---

# Make patternplate yours

> :timer_clock: **Time invest**: 30 Minutes ––– :woman_student: **Level**: Expert

`patternplate` has a powerful theming system that
gives you full control over its interface.

There are three types of theming configuration:

* **Vector Graphics**: Source string of a SVG. Keys: `logo`, `favicon`
* **Font Stacks**: CSS font-family value. Keys: `font*` 
* **Colors**: CSS colors. Keys: `color*` 

## Related topics

* [Configuration](../reference/configuration?reference-enabled=true)


## Theming playground

Edit the code in the demo below to see the values 
taking effect. You can copy and paste the `ui` object
to `patternplate.config.js` when you are done.

```widget
const React = require("react");
const {ComponentDemo} = require("@patternplate/widgets");
  
module.exports = () => {
  return (
    <ComponentDemo id="themes"/>
  );
};
```

# Example: default

This package demonstrates how to use `patternplate` without configuration.

The basic anatomy of a pattern in patternplate is made up of a directory
containing a `pattern.json` and `demo.js` file:

```bash
lib
└── button
    ├── demo.css
    ├── demo.html
    ├── demo.js
    ├── index.css
    ├── index.js
    └── pattern.json
```

`pattern.json` contains basic meta data  for a pattern:

```json
{
  "name": "button",
  "version": "1.0.0"
}
```

`demo.js` serves as entry into the demo you want to display for this pattern:

```js
import button from "./button";
import css from "./demo.css";
import html from "./demo.html";

export default main;
export {css, html};

function main() {
  console.log('Button demo was executed');
}
```

patternplate will resolve `.css` and `.html` imports and make them available as string in your demo bundle.

Reexport them like above on the `css` and `html` key to make them
available to patternplate for demo rendering.

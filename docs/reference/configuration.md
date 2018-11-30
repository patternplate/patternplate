---
tags:
  - Reference
options:
  order: 11
---

# Reference: Configuration

> :woman_student: **Level**: Expert

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

### cover

An absolute or relative module id `string`, resolved relative to `patternplate.config.js`.
The exports of the resolved module are used as a specialized demo that is displayed independently
of the patternplate web interface on `/`

**Examples**

```js
module.exports = {
  // use the file cover.js next to patternplate.config.js
  render: "./cover.js"
};
```

### ui

A map of theming-related properties. Use this to adapt the interface of `patternplate` to 
your CI requirements.

There are three classes of `ui` configuration:

* SVG strings: Source strings of Scalable Vector Graphics
* Font families: CSS font values
* Global Colors: CSS Colors that apply to all areas of the interface
* Themed Colors: CSS Colors that apply to dark (e.g. sidebar) vs light (e.g. Markdown) areas

**Examples**

```js
module.exports = {
  ui: {
    logo: `
    <svg height="30" width="30">
      <rect widht="30" height="30"/>
    </svg>`,
    colorBackgroundDark: "rgb(15, 15, 50)",
    colorBackgroundSecondaryDark: "rgb(26, 24, 68)",
    colorBackgroundTertiaryDark: "rgb(26, 24, 68)",
    colorBorderDark: "rgb(26, 24, 68)"
  }
};
```

### ui.logo

An SVG to use as logo above the main navigation. `patternplate` performs
sanitization on the provided SVG code to prevent side effects between
the embedded SVG and the interface.

Graphics with `height` and `width` of `30` are recommended.

**Examples**

```js
module.exports = {
  ui: {
    logo: `
    <svg height="30" width="30">
      <rect widht="30" height="30"/>
    </svg>`
  }
};
```

### ui.favicon

An SVG to use as favicon in browsers. In clients without SVG favicon support a PNG is generated automatically.  `patternplate` performs
sanitization on the provided SVG code.

```js
module.exports = {
  ui: {
    favicon: `
    <svg height="30" width="30">
      <circle cx="15" cy="15" r="15"/>
    </svg>`
  }
};
```

### ui.fontDefault

CSS font value to use for basic text styling,
e.g. Links, Paragraphs.

```js
module.exports = {
  ui: {
    fontDefault: `Comic Sans`
  }
};
```

### ui.fontHeadline

CSS font value to use for headline styling

```js
module.exports = {
  ui: {
    fontHeadline: `Arial, sans-serif`
  }
};
```

### ui.fontCode

CSS font value to use for code

```js
module.exports = {
  ui: {
    fontCode: `Menlo, monospace`
  }
};
```

### ui.colorActive

Global CSS Color of active color to use througout the interface, e.g. links,
activated navigation items.

```js
module.exports = {
  ui: {
    colorActive: `rgb(255, 0, 0)`
  }
};
```

### ui.colorError

Global CSS Color for error messages,
deprecated / alpha flags.

```js
module.exports = {
  ui: {
    colorError: `rgb(255, 0, 0)`
  }
};
```

### ui.colorWarning

Global CSS Color for warning messages and beta flags.

```js
module.exports = {
  ui: {
    colorError: `rgb(255, 0, 0)`
  }
};
```

### ui.colorInfo

Global CSS Color for info messages

```js
module.exports = {
  ui: {
    colorInfo: `rgb(255, 0, 0)`
  }
};
```

### ui.colorSuccess

Global CSS Color for sucess messages and
stable flags

```js
module.exports = {
  ui: {
    colorSucess: `rgb(255, 0, 0)`
  }
};
```

### ui.colorBackgroundDark

Themed CSS Color for primary background. Applies to e.g.
sidebar, search.

```js
module.exports = {
  ui: {
    colorBackgroundDark: `rgb(255, 0, 0)`
  }
};
```

### ui.colorBackgroundSecondaryDark

Themed CSS Color for backgrounds. Applies to e.g. active items in sidebar

```js
module.exports = {
  ui: {
    colorBackgroundSecondaryDark: `rgb(255, 0, 0)`
  }
};
```

### ui.colorBackgroundTertiaryDark

Themed CSS Color for backgrounds. Applies to e.g. active labels in sidebar

```js
module.exports = {
  ui: {
    colorBackgroundTertiaryDark: `rgb(255, 0, 0)`
  }
};
```

### ui.colorBorderDark

Themed CSS Color for borders. 

```js
module.exports = {
  ui: {
    colorBorderDark: `rgb(255, 0, 0)`
  }
};
```

### ui.colorTextDark

Themed CSS Color for basic text color. 

```js
module.exports = {
  ui: {
    colorTextDark: `rgb(255, 0, 0)`
  }
};
```

### ui.colorTextNegatedDark

Themed CSS Color for inverted text color. 

```js
module.exports = {
  ui: {
    colorTextNegatedDark: `rgb(255, 0, 0)`
  }
};
```

### ui.colorRecessDark

Themed CSS Color for recessed text color. 

```js
module.exports = {
  ui: {
    colorRecessDark: `rgb(255, 0, 0)`
  }
};
```

### ui.colorBackgroundLight

Themed CSS Color for primary background. Applies to e.g. Markdown.

```js
module.exports = {
  ui: {
    colorBackgroundLight: `rgb(255, 0, 0)`
  }
};
```

### ui.colorBackgroundSecondaryLight

Themed CSS Color for backgrounds.

```js
module.exports = {
  ui: {
    colorBackgroundSecondaryLight: `rgb(255, 0, 0)`
  }
};
```

### ui.colorBackgroundTertiaryLight

Themed CSS Color for backgrounds. 

```js
module.exports = {
  ui: {
    colorBackgroundTertiaryLight: `rgb(255, 0, 0)`
  }
};
```

### ui.colorBorderLight

Themed CSS Color for borders, e.g. for `<hr/>`.

```js
module.exports = {
  ui: {
    colorBorderLight: `rgb(255, 0, 0)`
  }
};
```

### ui.colorTextLight

Themed CSS Color for basic text color. 

```js
module.exports = {
  ui: {
    colorTextLight: `rgb(255, 0, 0)`
  }
};
```

### ui.colorTextNegatedLight

Themed CSS Color for inverted text color. 

```js
module.exports = {
  ui: {
    colorTextNegatedLight: `rgb(255, 0, 0)`
  }
};
```

### ui.colorRecessLight

Themed CSS Color for recessed text color. 

```js
module.exports = {
  ui: {
    colorRecessLight: `rgb(255, 0, 0)`
  }
};
```

### ui.showComponents

A boolean value that switches the components on/off from the sidebar.

```js
module.exports = {
  ui: {
    showComponents: false
  }
};
```

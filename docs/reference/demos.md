---
tags:
  - Reference
options:
  order: 12
---

# Reference: Demos

Demo files provide the necessary entry points for `patternplate` to
identify your components correctly. 

A component `demo` is a `JavaScript` file, that provides

* an executable function on `module.exports`: demo.js
* meta data in a `package.json` or `pattern.json` file

## Demo file

Demo files are assumend to be executable JavaScript according to your
browser targets, as `patternplate` does not perform additional transpilation
on them. 

The smallest valid noop demo file is:

```js
module.exports.default = () => {};
```

In practice you'll provide a function that creates components according
to your framework of choice. E.g. with `React`:

```js
module.exports.default = () => React.createElement("h1", {children: ["Hello world"]});
```

Alternatively you can provide `HTML` and `CSS` via exports directly.
`patternplate` will use the `html` and `css` exports by default.

```js
module.exports = {
  default: () => {},
  html: `<h1 class="hello-world">Hello World</h1>`,
  css: `.hello-world { font-family: sans-serif; color: cornflowerblue; }`
}
``` 


## Meta data

Meta data about your component can be provided in `JSON` format.
`package.json` and `pattern.json` files are read according to the 
following rules: 

1. Use `package.json` with `patternplate` object, in absence:
2. Use `pattern.json`, in absence
3. Trace the original source via `sourcemaps`, repeat from 1, in absence:
4. The provided demo entry is ignored

### Supported fields

**package.json**

* name `string`
* version `string`
* description `string?`
* tags: `string[]?`
* patternplate.displayName: `string?`

```json
{
  "name": "button",
  "version": "1.0.0",
  "tags": ["Interaction", "Atom"],
  "patternplate": {
    "displayName": "Button"
  } 
}
```

**pattern.json**

* name `string`
* version `string`
* description `string?`
* tags: `string[]?`
* patternplate.displayName: `string?`

```json
{
  "name": "button",
  "displayName": "Button",
  "version": "1.0.0",
  "tags": ["Interaction", "Atom"]
}
```

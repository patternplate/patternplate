---
tags:
  - Reference
options:
  order: 12
---

# Reference: Demos

> :woman_student: **Level**: Expert

Demo files provide the necessary entry points for `patternplate` to
identify your components correctly. 

A component `demo` is a `JavaScript` file, that provides

* a function on `module.exports.default`
* meta data in a `package.json` or `pattern.json` file

## Single file demos

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
By convention `patternplate` will use `html` and `css` exports before considering
any output produced by `default`.

```js
module.exports = {
  default: () => {},
  html: () => `<h1 class="hello-world">Hello World</h1>`,
  css: () => `.hello-world { font-family: sans-serif; color: cornflowerblue; }`
}
```

## Multi file demos

You can also place `HTML` and `CSS` in `demo.html` and `demo.css`, so
the following is equivalent to the single file demo above:

```bash
❯ tree lib
lib
└── hello-world
    ├── demo.css # .hello-world { font-family: sans-serif; color: cornflowerblue; }
    ├── demo.html # <h1 class="hello-world">Hello World</h1>
    ├── demo.js # module.exports = {default: () => {}};
    └── pattern.json # {name: "hello-world", version: "1.0.0"}
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

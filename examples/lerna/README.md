---
displayName: Getting Started
---

# @patternplate-example/lerna

* Manage components as `npm` packages with `lerna`
* Use patternplate defaults, als see [@patternplate-example/default](../default)

## Getting started

```bash
git clone git@github.com:sinnerschrader/patternplate.git
cd examples/lerna
yarn
yarn start
# Open localhost:1337 in your browser
```

## Add a "Hello World" package

Create `packages/hello-world/demo.js` with the
following contents. 

We'll export `HTML`, `CSS` from one `demo.js` file for now to keep it simple

```js
// packages/hello-world/demo.js
module.exports = {
  default: function() { 
    document.querySelector("[data-hello-world]").addEventListener("click", function() {
      this.textContent = "Hello World, clicked";
    })
  },
  css: '.hello-world { font-family: sans-serif; color: cornflowerblue; }',
  html: '<h1 class="hello-world" data-hello-world>Hello World</h1>'
};
```

* Create `packages/hello-world/package.json`

```json
{
  "name": "hello-world",
  "version": "1.0.0",
  "patternplate": {} 
}
```

Navigate to [pattern/hello-world](http://localhost:1337/pattern/hello-world)

## Move HTML to own file

Replace inline `HTML` with a reexport of `packages/hello-world/demo.js`.

```js
// packages/hello-world/demo.js
module.exports = {
  default: function() { 
    document.querySelector("[data-hello-world]").addEventListener("click", function() {
      this.textContent = "Hello World, clicked";
    })
  },
  css: require("./demo.css"),
  html: require("./demo.html")
};
```

```html
<!-- packages/hello-world/demo.html -->
<h1 class="hello-world" data-hello-world>
  Hello World
</h1>
```

The same works for `CSS`:

```css
/* packages/hello-world/demo.css */
.hello-world {
  font-family: sans-serif; 
  color: cornflowerblue;
}
```

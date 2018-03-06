---
displayName: Getting started
options:
  order: -1
---

# @patternplate-example/default

* Render `HTML`
* Style with `CSS`
* Program with `JavaScript`

## Getting started

```bash
git clone git@github.com:patternplate/patternplate.git
cd examples/default
yarn
yarn start
# Open localhost:1337 in your browser
```

## Add a "Hello World" pattern

Create `lib/hello-world/demo.js` with the
following contents. 

We'll export `HTML`, `CSS` from one `demo.js` file for now to keep it simple

```js
// lib/hello-world/demo.js
module.exports = {
  default: function() { 
    document.querySelector("[data-hello-world]").addEventListener("click", function() {
      this.textContent = "Hello world, clicked";
    })
  },
  css: '.hello-world { font-family: sans-serif; color: cornflowerblue; }',
  html: '<h1 class="hello-world" data-hello-world>Hello World</h1>'
};
```

* Create `lib/hello-world/package.json`

```json
{
  "name": "hello-world",
  "version": "1.0.0",
  "patternplate": {} 
}
```

Navigate to [pattern/hello-world](http://localhost:1337/pattern/hello-world)

## Move HTML to own file

Replace inline `HTML` with a reexport of `lib/hello-world/demo.js`.

```js
// lib/hello-world/demo.js
module.exports = {
  default: function() { 
    document.querySelector("[data-hello-world]").addEventListener("click", function() {
      this.textContent = "Hello world, clicked";
    })
  },
  css: require("./demo.css"),
  html: require("./demo.html")
};
```

```html
<!-- lib/hello-world/demo.html -->
<h1 class="hello-world" data-hello-world>
  Hello World
</h1>
```

The same works for `CSS`:

```css
/* lib/hello-world/demo.css */
.hello-world {
  font-family: sans-serif; 
  color: cornflowerblue;
}
```

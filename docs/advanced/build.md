---
displayName: "Advanced: Build systems"
description: "Learn how to use patternplate on top of your build system"
tags: 
 - Advanced
options:
  order: 7
---

# Use patternplate on top of a build system

> :timer_clock: **Time invest**: 30 Minutes ––– :woman_student: **Level**: Expert


## What to expect

A lot of web projects opt into authoring their source code in a different format than the one it is delivered and executed in. This might involve transformations such as bundling, minifying and transpiling. `patternplate` supports those setups just fine, let's see how.

We will …

* … learn how to set up a recommended [Babel](https://babeljs.io/) setup 
* … configure patternplate to read the transpiled Babel results

## You'll need

* :writing_hand: Text editor
* :computer: Terminal (MacOS: [iTerm](https://www.iterm2.com/) | Windows: [cmder](http://cmder.net/))
* :turtle: Node.js `>=6` ([Install](https://nodejs.org/en/))

## Before you start

* Be comfortable with terminal usage
* Have a working knowledge of `git`
* Have working knowledge of JavaScript build tooling

## Set up Babel

> :information_source: We are using Babel here as an example, mainly because it is
the ubiquitous in the JavaScript ecosystem at the time of writing. 
>
> The principles described below apply to any build system emitting JavaScript (optionally HTML and CSS).

1. Open a terminal window and create a new project folder: 

  ```bash
  mkdir babel-patternplate
  ```

2. Initialize the project with a `package.json` file:

  ```bash
  npm init # will ask you a bunch of questions
  ```

3. Install required Babel packages as development dependencies

  ```bash
  npm install -D @babel/cli @babel/core @babel/preset-env
  ```

4. Create a `.babelrc` and configure Babel to use the `env` preset

  ```js
  // .babelrc
  {
    "presets": [
      "@babel/preset-env"
    ]
  }
  ```

5. Test your babel setup with a file containing new JavaScript features.

  Copy the following into `test.js`

  ```js
  // test.js
  async function main() {
    console.log("Hello world");
  }

  main();
  ```

  Then execute babel on it

  ```bash
  yarn babel test.js
  ```

  This should emit something like: 

  <details>

    ```js
    "use strict";

    function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

    // test.js
    function main() {
      return _main.apply(this, arguments);
    }

    function _main() {
      _main = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log("Hello world");

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      return _main.apply(this, arguments);
    }

    main();
    ```

  </details>

6. Remove `test.js` 

  ```bash
  rm test.js

7. Create a `src/` folder with some component sources in it:

  ```
  mkdir -p src/button
  
cat > src/button/demo.js << EOF
module.exports = {
  default: () => console.log("Button"),
  html: () => \`<button>ES2015 Button</button>\`,
  css: () => \`button {
    padding: 10px 15px;
    font-size: 20px; 
    background: none; 
    color: cornflowerblue; 
    border: 1px solid currentColor;
  }\`
};
EOF
  
  cat > src/button/pattern.json << EOF
  {
    "name": "button",
    "version": "1.0.0"
  }
  EOF
  ```

7. Your src folder should look like this:

  ```bash
  # TL;DR: commands above create a file tree like this
  tree src
  src
  └── button
      ├── demo.js
      └── pattern.json

  1 directory, 2 files
  ```

8. Test drive Babel on `src/`:

  > :warning: We use a Babel feature to copy non-JavaScript
  > files from the src directory on change. This is not available
  > in all systems (e.g. TypeScript). 
  >
  > Work around this by copying non-js files with `cpx`, **or** enable
  > source-maps in your compilation step. `patternplate` uses them to 
  > trace back to your sources if available.

  ```bash
  # Build all js files from src to lib, copy non-js
  babel src -D -d lib 
  ```

9. The result in `lib` should look like this:

  ```
  tree lib
  lib
  └── button
      ├── demo.js
      └── pattern.json
  
  1 directory, 2 files
  ```

10. Save your Babel command as run-script into `package.json` like this

  ```json
  {
    "name": "babel-patternplate",
    "version": "1.0.0",
    "description": "A patternplate project with Babel as build system",
    "scripts": {
      "babel": "babel src -D -d lib "
    },
    "license": "MIT",
    "devDependencies": {
      "@babel/cli": "^7.0.0-beta.42",
      "@babel/core": "^7.0.0-beta.42",
      "@babel/preset-env": "^7.0.0-beta.42"
    }
  }
  ```

  That's it, we are set with a working build system. Thats pretty neat - this way we
  can use features from the future of JavaScript, even in older runtimes! 
  Let's make the most of this and configure `patternplate` to pick up our transpiled code at `lib/` next.

## Add patternplate

1. Install `patternplate`

  ```
  npm install -D @patternplate/cli
  ```

2. Start `patternplate`

  ```
  yarn patternplate
  ```

3. In a second terminal, start Babel in watch mode

  ```
  yarn babel -w
  ```

4. Access your button component at [localhost:1337/pattern/button](http://localhost:1337/pattern/button).
   If you used `patternplate` before this should be familiar:

  ![](https://patternplate.github.io/media/images/screenshot-build.svg)

5. Let's see if our Babel build plays nicely with `patternplate`'s file system watchers.
   Change the color of our **Button** to `palevioletred`:

   ```js
  module.exports = {
    html: () => '<button class="my-button">ES2015 Button</button>',
    css: () => `
      .my-button {
        padding: 10px 15px;
        font-size: 20px;
        background: none;
        color: palevioletred;
        border: 1px solid currentColor;
      }',
    `,
    default: () => {
      // Nothing implemented yet
    }
  }
  ```

  The `patternplate` demo updates as soon as `babel` has built the changes from
  `src` to `lib`: 

  ![](https://patternplate.github.io/media/images/screenshot-build-changed.svg)


## Take aways

* `patternplate` works with all build systems that can emit JavaScript. 

* Configure you build to produce artifacts in `lib` to pick them up with patternplate by default

* The `patternplate` development watcher works with the results of e.g. the Babel watch mode.

## Related topics

* [CLI](./doc/docs/reference/cli?reference-enabled=true)


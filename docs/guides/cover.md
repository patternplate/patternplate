---
displayName: "Guide: Convince with a cover"
description: "Learn how to catch and convince users with a patternplate cover page"
tags: 
 - Guide
options:
  order: 6
---

# Catch and convice with a cover page

> :timer_clock: **Time invest**: 20 Minutes ––– :woman_student: **Level**: Expert


## What to expect

You work dozens of hours on your design system and **of course** you want to brag about it. 

patternplate's design fits well to documentation, but for a landing page it should be a bit more fancy.

This is where the cover feature comes in.


We will …

* … have a look at the necessary configuration for `cover`
* … design a "Hello World" page with vanilla `HTML`, `CSS` and `JavaScript`

## You'll need

* :white_check_mark: You are all set if you followed along [Guide: Build a component](./doc/docs/guides/add-component?guides-enabled=true)

---

* :writing_hand: Text editor
* :file_folder: patternplate project ([Getting Started Guide](./doc/docs/guides/getting-started?guides-enabled=true))

## Before you start

* Understand `HTML` and `CSS` on a fundamental level

## Configure patternplate

1. Make sure `patternplate` runs on [localhost:1337](http://localhost:1337) 

2. Create a `./patternplate.config.js` and copy the following code into it. We are configuring `patternplate` with its defaults to prepare for the next step.

  > :information_source: See [Reference: Configuration](./doc/docs/reference/configuration) for details about the config keys

```js
// patternplate.config.js, default config
module.exports = {
  docs: ["docs/**/*.md", "README.md"],
  entry: ["lib/**/demo.js"],
  render: "@patternplate/render-default/render",
  mount: "@patternplate/render-default/mount"
};
```

3. Create a minimal `./cover.js` file

```js
// cover.js
module.exports = {
  default: () => {},
  html: () => {
    return `<h1>Hello world</h1>`
  }
};

```

4. Reference `./cover.js` from `./patternplate.config.js`

```js
// patternplate.config.js
module.exports = {
  docs: ["docs/**/*.md", "README.md"],
  entry: ["lib/**/demo.js"],
  render: "@patternplate/render-default/render",
  mount: "@patternplate/render-default/mount",
  cover: "./cover" // use cover.js
};
```

5. Navigate to [localhost:1337/?reload=true](http://localhost:1337/?reload=true) and see the main staple of  tutorial writers world wide, the all-popular **Hello world** message:

  ![](https://patternplate.github.io/media/images/screenshot-cover.svg)

Notice how there are no styles and elements of the `patternplate` interface on screen. That's entirely on purpose: This way the `cover` page is a blank canvas you can do whatever you like with.

That's cool but we aim for fancy, remember? We'll add some design to this
in the next step.

## Design a cover page

1. We are into tackling the hardest problems first, so let's center our **Hello World** message both horizontally and vertically :scream:

  Add a `.css` export to your `./cover.js` file

  ```js
  // cover.js
  module.exports = {
    css: () => {
      return `
        h1 {
          position: absolute;
          top: 50%;
          left: 50%;
          max-width: 30ch;
          transform: translate(-50%, -50%);
          font-family: Helvetica, Arial, sans-serif;
        }
      `;
    },
    default: () => {},
    html: () => {
      return `<h1>Hello world</h1>`
    }
  };
  ```

![](https://patternplate.github.io/media/images/screenshot-cover-css.svg)

2. Add a background gradient to spice things up:

  ```js
  // cover.js
  module.exports = {
    css: () => {
      return `
        html {
          margin: 0;
          background-image: linear-gradient(-45deg, #4504DA, #FF0353);
        }
        h1 {
          position: absolute;
          top: 50%;
          left: 50%;
          max-width: 30ch;
          transform: translate(-50%, -50%);
          font-family: Helvetica, Arial, sans-serif;
          color: #ffffff;
        }
      `;
    },
    default: () => {},
    html: () => {
      return `<h1>Hello world</h1>`
    }
  };
  ```

![](https://patternplate.github.io/media/images/screenshot-cover-background.svg)


3. Finally, make the message a link to your component library:


  ```js
  // cover.js
  module.exports = {
    css: () => {
      return `
        html {
          background-image: linear-gradient(-45deg,#4504DA,#FF0353);
        }
        h1 {
          position: absolute;
          top: 50%;
          left: 50%;
          max-width: 30ch;
          transform: translate(-50%, -50%);
          font-family: Helvetica, Arial, sans-serif;
          color: #ffffff;
        }
        a:link, a:visited {
          color: inherit;
          text-decoration-skip-ink: auto;
          text-decoration-style: dotted;
          text-decoration-color: rgba(255, 255, 255, .5);
          transition: .3s text-decoration-color ease-in-out;
        }
        a:hover {
          text-decoration-color: rgba(255, 255, 255, 1);
        }
      `;
    },
    default: () => {},
    html: () => {
      return `
        <h1>
          <a href="./doc/README">
            Explore my-patternplate now
          </a>
        </h1>
      `
    }
  };
  ```

![](https://patternplate.github.io/media/images/screenshot-cover-link.svg)

## Take aways

* A cover can be enabled by the `cover` key in `patternplate.config.js` 

* Covers provide are a blank canvas for you to fill with a landing page or anything you can come up with, really.

* Referenced covers are plain JavaScript with e.g. `html`, `css`, `default` exports.

  > :information_source: Conceptually covers are specialized demo entries. 
  > 
  > See [Reference: Demos](./doc/docs/reference/demos) for more details about supported exports, etc.

## Related topics

* [Demos](./doc/docs/reference/demos?reference-enabled=true)

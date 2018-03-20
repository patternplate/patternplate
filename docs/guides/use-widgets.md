---
displayName: "Guide: Document with widgets"
description: "Bring your docs to live with widgets"
tags: 
 - Guide
 - Expert
options:
  order: 5
---

# Show, don't tell – with widgets

> :timer_clock: **Time invest**: 15 Minutes ––– :woman_student: **Level**: Expert

## What to expect

Documentation for your components is important, but often is not connected to them very well. 
`patternplate` provides widgets that can embed your components directly into your text documents.

We will …

* … learn about Markdown code blocks
* … create `patternplate` widgets

## You'll need

* :white_check_mark: You are all set if you followed along [Guide: Build a component](./doc/docs/guides/add-component?guides-enabled=true)
---

* :writing_hand: Text editor
* :file_folder: patternplate project ([Getting Started Guide](./doc/docs/guides/getting-started?guides-enabled=true))

## Before you start

* Have a rough grasp [on Markdown](https://guides.github.com/features/mastering-markdown/)

* Understand the basics of [JSX](https://reactjs.org/docs/introducing-jsx.html)

## Show off your software with code blocks

Amongst other formatting tools Markdown provides a neat way to 
display code blocks. `patternplate` hightlights code blocks automatically
for a number of common web languages. Let's try this:

1. Make sure you have `patternplate` running on `localhost:1337`

2. Open `./README.md` with your text editor. We recommend opening the patternplate interface
next to your text editor.

3. Append the following code to `./README.md`. Don't worry about the contents too much for
   now, we just test out syntax highlighting with this:

  ````md
  ## My first code block
  ```js
  const React = require("react");
  const {ComponentList} = require("@patternplate/widgets");

  module.exports = () => {
    return (
      <ComponentList query="hello"/>
    );
  };
  ```
  ````

  `patternplate` updates automatically and renders your code block like this at the bottom
  of the `my-patternplate` rendering. Notice the lovely syntax highlighting. :nail_care:

  ![](https://patternplate.github.io/media/images/screenshot-widgets.svg)


## Create dynamic lists with ComponentList

The idea of fusing code and docs is powerful, can we take it even further?
What if you could execute code inside our docs? Turns out `patternplate` lets 
you do that!

1. Copy your new code block again and replace its language with `widget`.

  ````md
  ## My first code block
  ```js
  const React = require("react");
  const {ComponentList} = require("@patternplate/widgets");

  module.exports = () => {
    return (
      <ComponentList query="hello"/>
    );
  };
  ```

  ## My first widget
  ```widget
  const React = require("react");
  const {ComponentList} = require("@patternplate/widgets");

  module.exports = () => {
    return (
      <ComponentList query="hello"/>
    );
  };
  ```
  ````

  This renders a `ComponentList` widget into the document. The
  result should look like this:

  ![](https://patternplate.github.io/media/images/screenshot-widgets-list.svg)

  `ComponentList` creates a list of components matching the search query
  given in its `query` prop. 
  Let's make all components show up in the list next.


2. Change the `query` prop of `ComponentList` to `"is=pattern"`

  ````md
  ## My first widget
  ```widget
  const React = require("react");
  const {ComponentList} = require("@patternplate/widgets");
  
  module.exports = () => {
    return (
      <ComponentList query="is=pattern"/>
    );
  };
  ```
  ````

  We expect `ComponentList` to list all items that are a `"pattern"` now:

  ![](https://patternplate.github.io/media/images/screenshot-widgets-list-pattern.svg)


## Embed components with ComponentDemo

1. Create a second widget block in `./README.md` by adding this code at the end of the file:

  ````md
    ## My second widget
  ```widget
  const React = require("react");
  const {ComponentDemo} = require("@patternplate/widgets");
  
  module.exports = () => {
    return (
      <ComponentDemo id="button"/>
    );
  };
  ```
  ````

2. Scroll to the very end of `./README.md` and see a live demo of `Button` embeded directly:

  ![](https://patternplate.github.io/media/images/screenshot-widgets-demo.svg)


## Take aways

* Code blocks for selected languages (`js`, `html`, `css`) are syntax-highlighted
* A special `widget` code block enables inline code execution
* There is a well-defined set of patternplate widgets for use in Markdown
* `ComponentList` displays lists of patterns
* `ComponentDemo` shows a pattern demo

## Up next

* [Guide: Convince with a cover](./doc/docs/guides/cover?guides-enabled=true)


## Related topics

* [Documentation](./doc/docs/reference/documentation?reference-enabled=true)
* [Search](./doc/docs/reference/search?reference-enabled=true)
* [Widgets](./doc/docs/reference/widgets?reference-enabled=true)

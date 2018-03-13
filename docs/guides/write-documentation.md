---
displayName: "Guide: Write documentation"
description: "Learn how to use patternplate for living documentation"
tags: 
 - Guide
options:
  order: 1
---

# Explain your work with Markdown

* **Time invest**: 10 Minutes
* **Level**: Intermediate - Expert

## What to expect

No matter how hard you strive for simplicity, you'll always have to describe some aspects
of your component library in text. 

`patternplate` can help you to add rich documentation to components and for the whole of 
your library - let's see how.

We will …

* … add some documentation for a component
* … write docs for generic topics
* … learn how to control the names of docs in the sidebar

## You'll need

* :white_check_mark: You are all set if you followed along [Guide: Build a component](./doc/docs/guides/add-component?guides-enabled=true)
* Text editor
* patternplate project ([Getting Started Guide](./doc/docs/guides/getting-started?guides-enabled=true))

## Before you start

* Have a rough grasp [on Markdown](https://guides.github.com/features/mastering-markdown/)
* Make yourself familiar with [JSON](https://www.impressivewebs.com/what-is-json-introduction-guide-for-beginners/)

## Describe a single component with Markdown

Demos for your components are a great way to document them, but some things need additional text docs. 

E.g. the **Hello World** component has a hidden feature: clicking on it
counts up. Let's tell the consumers of our component library about this.

1. Open your terminal and create a new file `lib/button/readme.md` 

  ```bash
  touch lib/hello-world/readme.md
  ```

2. Copy the following code into `lib/button/readme.md`

  ```md
  <!-- lib/hello-world/readme.md -->
  ## Behaviour

  Clicking on a the text will count up from 1
  ```

3. Navigate to [localhost:1337/pattern/hello-world](http://localhost:1337/pattern/hello-world?navigation-enabled=true&patterns-enabled=true) and scroll down: Your small description has been rendered below the component demo.

![](https://patternplate.github.io/media/images/screenshot-doc-pattern-markdown.png)

4. You can also provide structured meta data for a pattern, e.g.

  * **name** - unique identifier for this pattern, e.g. `fancy-button`
  * **displayName** - human-readable name of the pattern, e.g. `Fancy Button`
  * **description** - short summary of the component intent, e.g. `Primary CTA element for playful contexts`
  * **version** - the semver version, e.g. `1.0.0`
  * **flag** - stability flag, one of `alpha`, `beta`, `rc`, `stable`, `deprecated`
  * **tags** - list of words describing the pattern

  Meta data for a component is saved in `package.json`, e.g. `lib/hello-world/package.json`
  Copy the following JSON to `lib/hello-world/package.json`:

  ```json
  {
    "name": "hello-world",
    "version": "2.0.0",
    "flag": "stable",
    "tag": ["Getting Started"],
    "patternplate": {
      "displayName": "Hello World"
    }
  }
  ```

  This structured meta data lends itself to indexing nicely and powers much of 
  `patternplate`'s search engine.

![](https://patternplate.github.io/media/images/screenshot-doc-pattern-json.png)


## Add documentation for a generic topic

You may have noticed the **my-patternplate** item in the Getting Started project:

![](https://patternplate.github.io/media/images/screenshot-doc-global.png)

This represents the `README.md`, which is picked up by `patternplate` automatically.

1. Click on `my-patternplate` to reveal is rendered contents. 

2. Also open a text editor.

  Having both windows side by side gives you the optimal editing experience:

  ![](https://patternplate.github.io/media/images/screenshot-doc-global-side-by-side.png)

3. Change the text of `README.md` to your liking. Notice how the rendered page
update immediately when you save the file.

4. We'll change the page name in the sidebar next. It is controlled by the block
at the beginning of `README.md`. 

  Change the frontmatter block at the top of the file to something like this

  ```md
  ---
  displayName: Introduction
  ---
  
  # You did it! :tada:
  
  You successfully installed and started patternplate.
  ```

  The interface updates automatically to display your changes:

  ![](https://patternplate.github.io/media/images/screenshot-doc-global-introduction.png)


## Up next

* [Guide: Create Virtual Folders](./doc/docs/guides/virtual-folders?guides-enabled=true)


## Related topics

* [Documentation](./doc/docs/reference/documentation?reference-enabled=true)
* [Demos](./doc/docs/reference/demos?reference-enabled=true)

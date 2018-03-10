---
displayName: "Guide: Write documentation"
options:
  order: 1
---

# Explain your work with Markdown

* **Time invest**: 10 Minutes
* **Audience**: Eyerone
* **Level**: Beginner

### What to expect

* Add local documentation to a pattern
* Learn about global docs in patternplate

### You'll need

* Text editor
* **patternplate project**
  * Follow along our [Getting Started Guide](./doc/docs/guides/getting-started) to bootstrap one.
  * A completed copy is available via `git clone https://github.com/patternplate/getting-started.git`
  * Make sure to start patternplate via `pattternplate start` and check it is running on `http://localhost:1337`.

### Describe a pattern with Markdown

Demos for your components are a great way to document them, but some things need additional text docs. 

E.g. the **Hello World** component has a hidden feature: clicking on it
counts up. Let's tell the consumers of our component library about this.

1. Open your terminal and create a new file `lib/button/readme.md` 

  ```bash
  touch lib/hello-world/readme.md
  ```

  ```md
  <!-- lib/hello-world/readme.md -->
  ## Behaviour

  Clicking on a the text will count up from 1
  ```

2. Navigate to [localhost:1337/pattern/hello-world](http://localhost:1337/pattern/hello-world?navigation-enabled=true&patterns-enabled=true) and scroll down: Your small description has been rendered below the pattern demo.

![](https://patternplate.github.io/media/images/screenshot-doc-pattern-markdown.png)

3. Complementy to Markdown you can also provide structured meta data for a pattern, including

  * **name** - unique identifier for this pattern, e.g. `fancy-button`
  * **displayName** - human-readable name of the pattern, e.g. `Fancy Button`
  * **description** - short summary of the pattern intent, e.g. `Primary CTA element for playful contexts`
  * **version** - the semver version, e.g. `1.0.0`
  * **flag** - stability flag, one of `alpha`, `beta`, `rc`, `stable`, `deprecated`
  * **tags** - list of words describing the pattern

  Meta data for a pattern is saved in `package.json`, e.g. `lib/hello-world/package.json`
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

## Add global documentation

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
```

The interface updates automatically and display your changes:

![](https://patternplate.github.io/media/images/screenshot-doc-global-introduction.png)

That's it for this guide, thanks for following along. :bow:

## Related topics

* [Documentation](./doc/docs/reference/documentation)
* [Demos](./doc/docs/reference/demos)

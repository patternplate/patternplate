---
displayName: "Guide: Getting Started"
description: "Hit the ground running with create-patternplate"
tags: 
 - Guide
options:
  order: 0
---

# Your kickstart into patternplate

> :timer_clock: **Time invest**: 5 Minutes ––– :woman_student: **Level**: Beginner

## What to expect

Setting up a new component library can be a tedious task - but `patternplate` has you covered!
Let's have a look at how patternplate can help you to get started in 5 minutes, max.

We will …

* … learn how to use the `create-patternplate` command line tool to initialize a new project
* … start the `patternplate` dev server to visualize components and documentation

## You'll need

* :computer: Terminal (MacOS: [iTerm](https://www.iterm2.com/) | Windows: [cmder](http://cmder.net/))
* :turtle: Node.js `>=6` ([Install](https://nodejs.org/en/))

## Initialize a new project

1. Open your terminal emulator and enter the following command.

   Don't worry if you did not install `npx` explicitly, it is installed with Node.js automatically.

   ```bash
   # - Creates a new patternplate project at my-patternplate
   # - Installs dependencies
   npx create-patternplate --out my-patternplate --guide
   ```

2. Let's start `patternplate` next:

   Like `npx`, `npm` is available if you installed Node.js.

   ```bash
   # Change into `my-patternplate`
   cd my-patternplate
   
   # Start a patternplate server
   npm start
   Started on http://localhost:1337
   ```

3. You can access the web interface of your patternplate project at [localhost:1337](http://localhost:1337/?guides-enabled=true).

  If everything worked `patternplate` greets you with this screen:

  ![](https://patternplate.github.io/media/images/screenshot-hello-world.svg)


## Take aways

* There is `create-patternplate`, a command line program that helps with boostrapping patternplate quickly.

* `patternplate` provides a command line interface. The default command is `start`, which brings up the web interface on [localhost:1337](http://localhost:1337/?guides-enabled=true).


## Up next

* [Guide: Build a component](./doc/docs/guides/add-component?guides-enabled=true)

## Related topics

* [CLI](./doc/docs/reference/cli?reference-enabled=true)

## Shortcut

If you want to get the result of the getting started guide without 
typing all commands you can use the ready-made git repository

```bash
git clone git@github.com:patternplate/getting-started.git
cd getting-started
npm install
```

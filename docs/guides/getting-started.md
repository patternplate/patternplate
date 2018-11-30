---
displayName: "Guide: Getting Started (CLI)"
description: "Hit the ground running with create-patternplate"
tags: 
 - Guide
options:
  order: 0
---

> :information_source: 
> You don't want/need to use the CLI?  
> [Check out our app and let the machine deal with Node.js and GIT](./doc/docs/guides/getting-started-app?guides-enabled=true).

# Your kickstart into patternplate

> :timer_clock: **Time invest**: 5 Minutes ––– :woman_student: **Level**: Beginner

## What to expect

Setting up a new component library can be a tedious task - but `patternplate` has you covered!
Let's have a look at how patternplate can help you to get started in 5 minutes, max.

We will …

* … learn how to use the `create-patternplate` command line tool to initialize a new project
* … start the `patternplate` dev server to visualize components and documentation

## You'll need

* :computer: Terminal (MacOS: `Terminal.app` or [iTerm](https://www.iterm2.com/) | Windows: [cmder](http://cmder.net/))
* :turtle: Node.js `>=6` ([Install](https://nodejs.org/en/))


## 1. Create a project on the CLI

Open your terminal emulator and enter the following command.

Type the following command into your terminal. You can also
copy and paste it directly. Press `Enter` to execute the command.

Don't worry if you did not install `npx` explicitly, it is installed with Node.js automatically.

```bash
npx create-patternplate --out my-patternplate --guide
```

This will create a project for you and install the relevant dependencies.
Depending on the quality of your network connection this may take a while.

<!--  ![](https://patternplate.github.io/media/casts/cast-create.svg) -->


## 2. Start patternplate via CLI 


Type the following command into your terminal. 

```
cd my-patternplate
```

This will navigate your terminal into the `my-patternplate` directory.

Let's spin up a `patternplate` dev server:

Like `npx`, `npm` is available if you installed Node.js.

```bash
npm start
```

You should see a small loading spinner in your terminal. 
`patternplate` prints the following when it started successfully:

```bash
✔ Started on http://localhost:1337
```

## 3. Access the web interface

You can access the web interface of your patternplate project at [localhost:1337](http://localhost:1337/?guides-enabled=true).

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

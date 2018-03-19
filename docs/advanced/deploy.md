---
displayName: "Advanced: Deploy to GHPages"
description: "Learn how to deploy a static build of your component library to Github Pages"
tags: 
 - Advanced
options:
  order: 6
---

> :warning: This document is a work in progress and might contain outdated or incorrect information.
> Most likey it is not complete yet.

# Deploy your component library to GitHub Pages

> :timer_clock: **Time invest**: 20 Minutes ––– :woman_student: **Level**: Expert


## What to expect

Component libraries built with `patternplate` are all
about sharing your work and having a common place to
refer to - the much discussed Single Source of Truth.

To establish your component library as such you'll want to
deploy it as a website.

We will …

* … learn how to use the `patternplate build` CLI command.
* … push and publish your component library to GitHub Pages.

## You'll need

* :white_check_mark: You are all set if you followed along [Guide: Build a component](./doc/docs/guides/add-component?guides-enabled=true)

---

* :writing_hand: Text editor
* :file_folder: patternplate project ([Getting Started Guide](./doc/docs/guides/getting-started?guides-enabled=true))

## Before you start

* Be comfortable with terminal usage
* Have a working knowledge of `git`
* Have a GitHub account

## Build a static interface 

1. Open a terminal window and change into the directory holding your patternplate project.

2. Execute the following command to produce a static build
of your component librarie's interface

  ```bash
  yarn patternplate build --out docs/patterns --base=patterns
  ```

  ![](https://patternplate.github.io/media/casts/cast-build.svg)


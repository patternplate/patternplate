---
displayName: "Guide: Getting Started"
tags: 
 - Guide
options:
  order: 0
---

# Your kickstart into patternplate

* **Time invest**: 5 Minutes
* **Audience**: Everyone
* **Level**: Beginner

### What to expect

* Use the `create-patternplate` commandline tool to initialize a new project
* Learn how to start the `patternplate` dev server

### You'll need

* Terminal
* Node.js `>=6` ([Install](https://nodejs.org/en/))
* npm `>=5` (Bundled with Node.js)
* npx (Bundled with Node.js)

## Initialize a new project

1. Open your terminal emulator and enter the following command:

   ```bash
   # - Creates a new patternplate project at my-patternplate
   # - Installs dependencies
   npx create-patternplate --out my-patternplate --guide
   ```

2. Let's start `patternplate` next:

   ```bash
   # Change into `my-patternplate`
   cd my-patternplate
   
   # Start a patternplate server
   npm start
   Started on http://localhost:1337
   ```

3. You can access the web interface of your patternplate project at [localhost:1337](http://localhost:1337/pattern/hello-world?patterns-enabled=true&navigation-enabled=true).

  If everything worked `patternplate` greets you with this screen:

  ![](https://patternplate.github.io/media/images/screenshot-hello-world.png)


## Up next

* [Guide: Build a component](./doc/docs/guides/add-pattern)

## Related topics

* [CLI](./doc/docs/reference/cli)

---
displayName: "Guide: Getting Started"
options:
  order: 0
---

# Your kickstart into patternplate

* **Time invest**: 5 Minutes
* **Audience**: Eyerone
* **Level**: Beginner

### Outline

* Use `create-patternplate` to initialize a new project
* Learn how to start the `patternplate` dev server

### You'll need

* Terminal
* Node.js `>=6`
* npm `>=5` or yarn `>=1`

## Initialize a new project

1. Open your terminal emulator and enter the following command:

   ```bash
   # - Creates a new patternplate project at my-patternplate
   # - Installs dependencies
   λ npx create-patternplate --out my-patternplate
   ```

2. `create-patternplate` tells you about the next steps. 

   ```bash
   λ npx create-patternplate --out my-patternplate
   ✔ Created patternplate project at "my-patternplate"

   Proceed via
   - cd my-patternplate
   - npm start
   ```

   Additionally you can check on it with `tree` like below. 
   If you see similiar output you are all set.

  ```
   λ tree my-patternplate --filelimit=100
   my-patternplate
   ├── README.md
   ├── lib
   │   └── hello-world
   │       ├── demo.js
   │       └── package.json
   ├── node_modules [492 entries exceeds filelimit, not opening dir]
   └── package.json

   3 directories, 5 files

   ```

3. Follow the instructions provided by `create-patternplate`:

   ```bash
   # Change into `my-patternplate`
   λ cd my-patternplate
   
   # Start a patternplate server
   λ npm start
   Started on http://localhost:1337
   ```

4. You can access the web interface of your patternplate project at [localhost:1337](http://localhost:1337/pattern/hello-world?patterns-enabled=true&navigation-enabled=true).

Click the menu icon in the top left corner to open the sidebar and pattern list.

![](https://patternplate.github.io/media/images/screenshot-hello-world.png)

You can see there is some **Documentation** and a **Hello World** pattern. 


## Up next

* [Guide: Build a component](./doc/docs/guides/add-pattern)

## Related topics

* [CLI](./doc/docs/reference/cli)

---
options:
  order: -1
---

# Guide: Getting started

* Step-by-step tutorial to your first component in `patternplate`
* Time invest: **15 Minutes**
* Audience: People evaluating `patternplate` after first contact

## Prerequesites

We assume some software to be installed
and executable on your system:

* Node.js `>=6`
* npm `>=5` or yarn `>=1`
* npx (bundled with npm)

## Initialize a new project

1. Open your terminal emulator and enter the following command:

   ```bash
   # - Creates a new patternplate project at my-patternplate
   # - Installs dependencies
   λ npx create-patternplate --out my-patternplate
   ```

2. `create-patternplate` tells you about the next steps. Additionally you can check on it with `tree` like below. If you see similiar output you are all set.

   ```bash
   λ npx create-patternplate --out my-patternplate
   ✔ Created patternplate project at "my-patternplate"

   Proceed via
   - cd my-patternplate
   - npm start

   λ tree my-patternplate --filelimit=100
   my-patternplate
   ├── README.md
   ├── docs
   │   └── docs.md
   ├── lib
   │   └── hello-world
   │       ├── demo.js
   │       └── package.json
   └── package.json
   ```

3. Follow the instructions provided by `create-patternplate`:

   ```bash
   # Change into `my-patternplate`
   λ cd my-patternplate
   
   # Start a patternplate server
   λ npm start
   Started on http://localhost:1337
   ```

4. You can open [localhost:1337](http://localhost:1337/pattern/hello-world?patterns-enabled=true&navigation-enabled=true) in a browser to access 
the web interface of your freshly installed patternplate project:


![](https://patternplate.github.io/media/images/screenshot-hello-world.png)

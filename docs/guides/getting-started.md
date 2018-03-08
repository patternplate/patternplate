---
options:
  order: -1
---

# Guide: Getting started

* Step-by-step tutorial to your first component in `patternplate`
* Time invest: **15 Minutes**
* Audience: People evaluating `patternplate` after first contact

## Topics

* Bootstrap a default project with `create-patternplate`
* Add a pattern manually
* Style and program a pattern

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

## Create a new pattern

Let's improve on our new pattern library and add a `Button` component. 

1. Create a new directory `button` in `lib`.

   ```bash
   mkdir lib/button
   ```

2. Open a text editor and add a `package.json` to `lib/button`

   ```json
   {
     "name": "button",
     "version": "1.0.0",
     "patternplate": {
       "displayName": "Button"
     }
   }
   ```

3. Create a `demo.js` file at `lib/button`. The interface will update
automatically and add **Button** to the patterns list. 

   ```js
   module.exports = {
     default: function() {
       // Nothing implemented yet
     }
   }
   ```

   ![](https://patternplate.github.io/media/images/screenshot-button.png)
 
4. Click on the **Button** item to display its (still blank) demo canvas.
   Change `lib/button/demo.js` to read:

   ```js
   module.exports = {
     html: '<button class="my-button">My first button</button>',
     default: () => {
       // Nothing implemented yet
     }
   }
   ```

   Saving the file signals the **Button** demo to reload automatically and display the `HTML` you just added.

5. Let's throw some `CSS` into the mix:

   ```js
   module.exports = {
     html: '<button class="my-button">My first button</button>',
     css: `
      .my-button {
        padding: 10px 15px;
        font-size: 20px; 
        background: none; 
        color: cornflowerblue; 
        border: 1px solid currentColor;
      }',
     `,
     default: () => {
       // Nothing implemented yet
     }
   }
   ```

   Saving the changes will update your demo to look like this:

   ![](https://patternplate.github.io/media/images/screenshot-button-styled.png)

6. We'll wrap up this tutorial by adding some user interaction to the button. 
The code below will count up when clicking on **Button**

   ```js
   module.exports = {
     html: '<button class="my-button">My first button</button>',
     css: `
      .my-button {
        padding: 10px 15px;
        font-size: 20px; 
        background: none; 
        color: cornflowerblue; 
        border: 1px solid currentColor;
      }',
     `,
     default: () => {
       // Don't try this at home. Use data attributes in real code
       const el = document.querySelector("button"); 

       let count = 0;
       el.addEventListener("click", () => {
         el.textContent = "Clicked " + (++count) + " times."
       });
     }
   }
   ```

  ![](https://patternplate.github.io/media/images/screencast-button-programmed.gif)


## Related topics

* [Demos](./doc/docs/reference/demos)
* [CLI](./doc/docs/reference/demos)

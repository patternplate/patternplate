---
displayName: "Guide: Build a component"
description: "Learn how to build components in patternplate"
tags: 
 - Guide
options:
  order: 3
---

# Build your first component in patternplate

> :timer_clock: **Time invest**: 10 Minutes ––– :woman_student: **Level**: Beginner

## What to expect

In `patternplate` production-grade components form the backbone of your design system. 
This means there will be coding and cooperation between design and engineering involved
while working in `patternplate`.

Don't worry, we will walk you through the entire process.

We will …

* … learn how to add a component 
* … style a component with `CSS`
* … program simple behaviour via `JavaScript`

## You'll need

* :white_check_mark: You are all set if you followed along [Guide: Getting Started](./doc/docs/guides/add-component?guides-enabled=true)

---

* :writing_hand: Text editor
* :file_folder: patternplate project ([Getting Started Guide](./doc/docs/guides/getting-started?guides-enabled=true))

## Create a new pattern

Let's improve the component library and add a `Button` component. 
Open a new terminal window or tab, then procceed with the steps below.

1. Make sure you have `patternplate` running on `localhost:1337`

2. Create a new directory `button` in `lib`.

   ```bash
   # In a new terminal window
   mkdir lib/button
   ```

3. Open a text editor and add a `package.json` to `lib/button`. 

  ```bash
  # create "package.json"
  touch lib/button/package.json
  ```

   Copy the code below into `lib/button/package.json`

   ```json
   {
     "name": "button",
     "version": "1.0.0",
     "patternplate": {
       "displayName": "Button"
     }
   }
   ```

4. Create a `demo.js` file at `lib/button`. The interface will update
automatically and add **Button** to the components list. 

   ```bash
   # create "demo.js"
   touch lib/button/demo.js
   ```

   Copy the code below into `lib/button/demo.js`.

   ```js
   module.exports = {
     default: function() {
       // Nothing implemented yet
     }
   }
   ```

   ![](https://patternplate.github.io/media/images/screenshot-component.svg)
 
5. Click on the **Button** item to display its (still blank) demo canvas.
   Replace the contents of `lib/button/demo.js` with the code below:

   ```js{2}
   module.exports = {
     html: () => '<button class="my-button">My first button</button>',
     default: () => {
       // Nothing implemented yet
     }
   }
   ```
  
  > :information_source: You might think: HTML in JavaScript. What is this, sorcery? 
  > Don't worry, you can place your HTML in distinct files (demo.html) just fine, too.
  > The same goes for your CSS (demo.css). See [Demos](./doc/docs/reference/demos?guides-enabled=true&reference-enabled=true#multi-file-demos) for details.

   Saving the file signals the **Button** demo to reload automatically and display the `HTML` you just added.

   ![](https://patternplate.github.io/media/images/screenshot-component-html.svg)

6. Let's throw some `CSS` into the mix.
   Replace the contents of `lib/button/demo.js` with the code below:

   ```js{4-10}
   module.exports = {
     html: () => '<button class="my-button">My first button</button>',
     css: () => `
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

   ![](https://patternplate.github.io/media/images/screenshot-component-css.svg)

7. We'll wrap up this tutorial by adding some user interaction to the button. 
Let's count up when clicking on **Button**.
   Replace the contents of `lib/button/demo.js` with the code below:


   ```js{13-18}
   module.exports = {
     html: () => '<button class="my-button">My first button</button>',
     css: () => `
      .my-button {
        padding: 10px 15px;
        font-size: 20px; 
        background: none; 
        color: cornflowerblue; 
        border: 1px solid currentColor;
      }',
     `,
     default: () => {
       const el = document.querySelector("button"); 

       let count = 0;
       el.addEventListener("click", () => {
         el.textContent = "Clicked " + (++count) + " times."
       });
     }
   }
   ```

  Click the button to see our program in action

  ![](https://patternplate.github.io/media/images/screencast-button-programmed.gif)

## Take aways

* Demos are the entry to components
* `demo.js` and `pattern.json` or `package.json` are required to display a component
* `demo.js` provides `HTML`, `CSS` and JavaScript via the `html`, `css` and `default` exports 

  > :information_source: Traditional multi file components work, too. 
  > See [Demos](./doc/docs/reference/demos?guides-enabled=true&reference-enabled=true#multi-file-demos) for details.

* Changes on source files cause demos to reload automatically

## Up next

* [Guide: Write documentation](./doc/docs/guides/write-documentation?guides-enabled=true)

## Related topics

* [Demos](./doc/docs/reference/demos?reference-enabled=true)

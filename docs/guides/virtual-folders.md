---
displayName: "Guide: Create Virtual folders"
tags: 
 - Guide
options:
  order: 4
---

# Guide: Divide and Conquer with Virtual Folders

* **Time invest**: 5 Minutes
* **Audience**: Everyone
* **Level**: Beginner

### What to expect

* How to add meta data
* First steps with patternplate search
* Create folders in patternplate's sidebar

### You'll need

* Text editor
* **patternplate project**
  * Follow along our [Getting Started Guide](./doc/docs/guides/getting-started) to bootstrap one.
  * A completed copy is available via `git clone https://github.com/patternplate/getting-started.git`
  * Make sure to start patternplate via `pattternplate start` and check it is running on `http://localhost:1337`.

### Add meta data

`patternplate` uses meta data attached to your patterns and docs to 
 inform its search query and the virtual folder system.

Let's add some tags to the items in Getting Started.


1. Add tags to `README.md`. Modify the leading **frontmatter** block
   to look like this:

  ```md
  ---
  displayName: "my-patternplate"
  tags:
    - hello
    - welcome
  ---
  ```

2. Open `./lib/hello-world/package.json` and attach some tags:

  ```json
  {
    "name": "hello-world",
    "version": "1.0.0",
    "tags": ["hello", "typography"],
    "patternplate": {
      "displayName": "Hello World"
    }
  }
  ```

3. Now edit and save `./lib/button/package.json` to look like this:

  ```json
  {
    "name": "button",
    "version": "1.0.0",
    "tags": ["hello", "interaction"],
    "patternplate": {
      "displayName": "Button"
    }
  }
  ```

## First steps with patternplate search

Now we prepared some data, let's have a look at `patternplate` search.
Hang in there for now, we'll explain the relation between search and virtual folders
in a second.

1. Access the search panel by clicking on the :mag_right: icon

   A search input appears above the content panel.

2. Enter an unstructured query, e.g. "button"

   This should give you a result list like below. 

   ![](https://patternplate.github.io/media/images/screenshot-search-fuzzy.png)

   Look closely: In this case the search query matched all items - **my-patternplate**, **Button**
   and **Hello-World**. 
   
   This happens because fuzzy search tries to match as many items as possible, searching
   through all meta data and contents.

   Let's try to be more structured about our search.

3. Enter a structured search query like this: `tags=world`. 
   Don't wory if you don't know what that means just yet.
 
   This will search for all items that have the tag `world` attached to them any 
   yield a result list like this:
 
   ![](https://patternplate.github.io/media/images/screenshot-search-structured.png)

   This time around we matched only **Button** and **Hello-World**. That happens because they have both
   the tag `world` attached, while the **my-patternplate** item does not.

   Visit the [search reference](./reference/search) for detailed information about search queries.

   Let's take this a step further and use our `tags=world` query to create a virtual folder.

4. Create `docs/my-virtual-folder.md`

  ```bash
  mkdir docs
  touch docs/my-virtual-folder.md
  ```

5. Paste the following code into `docs/my-virtual-folder.md` and save it.
  
   ```md
   ---
   options:
     query: tags=world
   ---

   # My Virtual Folder
   ```

   This will create a new folder called **My Virtual Folder** in the sidebar:

  ![](https://patternplate.github.io/media/images/screenshot-virtual-folder.png)

  Click on the folder to reveal its contents:

  ![](https://patternplate.github.io/media/images/screenshot-virtual-folder-open.png)

  The folder will hold a list of all patterns matching the search we entered as `options.query`.
  Using this functionality you can define any number of different virtual folders.

  There are a number of things to note here:

  * `patterns` and `docs` can be listen in a folder, but folders can not
  * content `*.md` files with defined `options.query` is not displayed in the interface
  * `patterns` and `docs` can be listed in multiple different virtual folders

## Related topics

* [Documentation](./doc/docs/reference/documentation)
* [Search](./doc/docs/reference/search)

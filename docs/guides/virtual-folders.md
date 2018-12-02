---
displayName: "Guide: Create Virtual folders"
description: "Bring order to chaos with search and virtual folders"
tags: 
 - Guide
options:
  order: 5
---

# Divide and Conquer with Virtual Folders

> :timer_clock: **Time invest**: 5 Minutes ––– :woman_student: **Level**: Intermediate


## What to expect

As your component library grows you'll find it increasingly difficult 
to find all the sweet components you built. 

Learn how the search and tagging system in `patternplate` helps you to 
get a grip on the size and complexity of your component library.

We will …

* … prepare some meta data
* … take first steps with patternplate search
* … create folders in patternplate's sidebar

## You'll need

* :white_check_mark: You are all set if you followed along [Guide: Build a component](./add-component?guides-enabled=true)
---

* :writing_hand: Text editor
* :file_folder: patternplate project ([Getting Started Guide](./getting-started?guides-enabled=true))

## Before you start

* Have a rough grasp [on Markdown](https://guides.github.com/features/mastering-markdown/)
* Read up on [frontmatter](https://jekyllrb.com/docs/frontmatter/)

## Prepare some search data

`patternplate` uses meta data attached to your patterns and docs to 
 inform its search query and the virtual folder system.

Let's add some tags to the items in Getting Started.

1. Make sure you have `patternplate` running on `localhost:1337`

2. Add tags to `README.md`. Modify the leading **frontmatter** block
   to look like this:

  ```md
  ---
  displayName: "my-patternplate"
  tags:
    - hello
    - welcome
  ---
  ```

3. Open `./lib/hello-world/package.json` and attach some tags:

  ```json
  {
    "name": "hello-world",
    "version": "1.0.0",
    "tags": ["hello", "world", "typography"],
    "patternplate": {
      "displayName": "Hello World"
    }
  }
  ```

4. Now edit and save `./lib/button/package.json` to look like this:

  ```json
  {
    "name": "button",
    "version": "1.0.0",
    "tags": ["hello", "world", "interaction"],
    "patternplate": {
      "displayName": "Button"
    }
  }
  ```

We won't see a lot of changes in patternplate for our meta data changes,
let's use it for searching in the next section instead.

## First steps with patternplate search

Now we prepared some data, let's have a look at `patternplate` search.
Hang in there for now, we'll explain the relation between search and virtual folders
in a second.

1. Access the search panel by clicking on the :mag_right: icon

   A search input appears above the content panel.

2. Enter an unstructured query, e.g. "button"

   This should give you a result list like below. 

   ![](https://patternplate.github.io/media/images/screenshot-virtual.svg)

   Look closely: In this case the search query matched all items - **my-patternplate**, **Button**
   and **Hello-World**. 
   
   This happens because fuzzy search tries to match as many items as possible, searching
   through all meta data and contents.

   Let's try to be more structured about our search.

## Structured search

1. Delete our previous search by clicking on the `x` the search field

2. Enter a structured search query like this: `tags=world`. 
   Don't worry if you don't know what that means just yet.
 
   This will search for all items that have the tag `world` attached. This results
   in a list like this:

   ![](https://patternplate.github.io/media/images/screenshot-virtual-search.svg)

   This time around we matched only **Button** and **Hello-World**. That happens because they have both
   the tag `world` attached, while the **my-patternplate** item does not.

   Visit the [search reference](../reference/search?reference-enabled=true) for detailed information about search queries.

## Create a virtual folder

Let's take this a step further and use our `tags=world` query to create a virtual folder.
Virtual folders are doc files with special configuration in them. 

`patternplate` searches
for documenation in `/README.md`, and all `.md` files in `/docs`. 

So we'll add a new file there:

1. Create `docs/my-virtual-folder.md`

  ```bash
  mkdir docs
  touch docs/my-virtual-folder.md
  ```

2. Paste the following code into `docs/my-virtual-folder.md` and save it.
  
   ```md
   ---
   options:
     query: tags=world
   ---

   # My Virtual Folder
   ```

   This will create a new folder called **My Virtual Folder** in the sidebar:

  ![](https://patternplate.github.io/media/images/screenshot-virtual-folder.svg)

3. Click on the folder to reveal its contents:

  ![](https://patternplate.github.io/media/images/screenshot-virtual-folder-open.svg)

  The folder will hold a list of all patterns matching the search we entered as `options.query`.
  Using this functionality you can define any number of different virtual folders.

  There are a number of things to note here:

  * `patterns` and `docs` can be listen in a folder, but folders can not
  * content `*.md` files with defined `options.query` are not displayed in the interface
  * `patterns` and `docs` can be listed in multiple different virtual folders

## Take aways

* Meta data can be added to documentation in `frontmatter` blocks 
* Tags, flags, etc. can be used to search through both components and docs
* There is fuzzy and structured search in patternplate
* Structured search queries can be used to create **Virtual Folders**

## Up next

* [Guide: Enhance docs with widgets](./use-widgets?guides-enabled=true)


## Related topics

* [Documentation](../reference/documentation?reference-enabled=true)
* [Search](../reference/search?reference-enabled=true)

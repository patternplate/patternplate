---
displayName: "Advanced: Deploy to GitHub"
description: "Learn how to deploy a static build of your component library to GitHub Pages"
tags: 
 - Advanced
options:
  order: 6
---

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
  yarn patternplate build --out='docs/patterns' --base='/patterns/'
  ```

  ![](https://patternplate.github.io/media/casts/cast-build.svg)

3. `patternplate` creates a bunch of files in `docs/patterns` for you

```
tree docs/patterns/
docs/patterns/
├── api
│   ├── demo
│   │   ├── button.html
│   │   └── hello-world.html
│   ├── patternplate.web.components.js
│   ├── patternplate.web.cover-client.js
│   ├── patternplate.web.demo.js
│   ├── patternplate.web.mount.js
│   ├── patternplate.web.probe.js
│   └── state.json
├── doc
│   └── README
│       └── index.html
├── index.html
├── pattern
│   ├── button
│   │   └── index.html
│   └── hello-world
│       └── index.html
└── static
    ├── client.js
    └── vendors.js

8 directories, 14 files
```

4. Start a static webserver on `/docs` and open `/`

```bash
npx serve docs/ --open
```

5. Click on the `patterns` folder that shows up in your browser

6. You should see a fully functioning `patternplate` interface on the
`patterns/` path :tada:. Let's bring this beauty online!


## Deploy to GitHub Pages

> :information_source: You may have noticed from our run of `npx serve`: `patternplate build` creates a document root suitable for deployment on any static webserver. This means there is nothing barring you from hosting it from your own systems.

Replace `[username]` with your GitHub username in all commands of this section.

1. Create a [new repository on GitHub](https://github.com/new), 
name it e.g. `my-patternplate`

2. Rerun our build to match its deployment target:

  ```bash
  yarn patternplate build --out docs --base=/my-patternplate/
  ```

2. In your local repository, commit your changes

  ```
  git add docs
  git commit -m "docs: deploy static interface"
  ```

3. Set the remote of your local repository to your new remote repository on GitHub and push to it

  ```
  git remote add origin git@github.com:[username]/my-patternplate.git
  git push -u origin master
  ```

4. Open your repository settings at `https://github.com/[username]/my-patternplate/settings` and 
scroll down to the **GitHub Pages** section.

5. Click on the dropdown under **Source** and select `master branch docs folder`. Make sure
to hit the save button next to the dropdown.

6. Navigate your browser to `https://[username].github.com/my-patternplate/`. You should see the very same interface you created locally earlier. 

![](https://patternplate.github.io/media/images/screenshot-hello-world.svg)

## Take aways

* `patternplate build` creates a static build of your component library
* The `--base` flag must match the url pathname the interface will be available at
* The output of `patternplate build` is well-suited for deployment to GitHub Pages,
  but works for every static web sever

## Related topics

* [CLI](./doc/docs/reference/cli?reference-enabled=true)


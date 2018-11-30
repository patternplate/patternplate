---
displayName: "Guide: Getting Started (App)"
description: "Hit the ground running with create-patternplate"
tags: 
 - Guide
options:
  order: 1
---

> :information_source: 
> Looking to set up patternplate as a dev project? 
> 
> [Give the CLI Getting Started Guide a go](./doc/docs/guides/getting-started?guides-enabled=true).

# Get started with @patternplate/app

> :timer_clock: **Time invest**: 5 Minutes ––– :woman_student: **Level**: Beginner

## What to expect

`patternplate` bridges the gaps between engineering and design. While there is a command line interface, it also provides a macOS application to download and view patternplate projects.

We will …

* … install `@patternplate/app` on your Mac

* … use `@patternplate/app` to clone the Getting Started project

* … start the Getting Started project via the app

> :warning: 
> `@patternplate/app` is a Technical Preview and might have bugs / unimplemented features. We are working hard to get the first stable version
ready for delivery :crossed_fingers: 
> 
> During Alpha we build only macOS bundles, support for other platforms is planned.

## You'll need

* :apple: A Mac with approximately 1GB of free disk space


## 1. Install @patternplate/app

* Download `@patternplate/app` by clicking [on this link](https://github.com/patternplate/app/releases/download/Alpha/patternplate-1.0.0-alpha.dmg)

* Click on `Save File` when asked if you want to download `patternplate-1.0.0-alpha.dmg`

![](https://patternplate.github.io/media/screenshots/save-file.png)

* Wait for your download to complete, then locate `patternplate-1.0.0-alpha.dmg` in your Downloads folder

* Double click `patternplate-1.0.0-alpha.dmg` and wait for the image verification to complete

* In the window that opens, drag the `patternplate` icon onto the `Applications` folder like this:

  ![](https://patternplate.github.io/media/screenshots/drag-on-application.gif)

* Locate `patternplate` in `Applications` and double-click on it

* When asked if you want to open `patternplate` click **Open**

  ![](https://patternplate.github.io/media/screenshots/open.png)

* If everything worked the app greets you like this:

 ![](https://patternplate.github.io/media/screenshots/greeting.png)


Congratulations! :tada: You succesfully installed `@patternplate/app`! Let's put it to use

## 2. Clone your first project

Copy the following URL 

```
https://github.com/patternplate/getting-started.git
```

Paste it into the input field below the greeting and click on **Add**

The view changes to resemble the following screenshot:

![](https://patternplate.github.io/media/screenshots/cloning.png)

Notice the spinning part in the card for `patternplate/getting-started`? 
This indicates the project is downloading and installing dependencies. 

Wait for it to complete, then proceed:

## 3. Start the project

Double-click on the card for `patternplate/getting-started`. 
A new tab on the top left of the application window opens and the view
changes to this:

![](https://patternplate.github.io/media/screenshots/getting-started.png)

That's it for this guide – you just cloned and started your very first `patternplate` project. :+1:

## Take aways

* There is `@patternplate/app`, a GUI application for easier setup and viewing of `patternplate` projects
* You can clone patternplate projects by providing a GIT url or open them from your file system

## Up next

* [Guide: Build a component](./doc/docs/guides/add-component?guides-enabled=true)

## Related topics

* [CLI](./doc/docs/reference/cli?reference-enabled=true)

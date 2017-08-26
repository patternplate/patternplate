# patternplate-ui
## Pattern Development

patternplate is a platform for the pattern-driven development of component libraries.
This sounds daunting but actually is pretty easy. Just follow the steps below and
you'll be churning out components in a breeze. See [sinnerschrader/patternplate-getting-started](https://github.com/sinnerschrader/patternplate-getting-started)
for the complete sources created during this tutorial.

* [Getting started](#getting-started) - See scaffolding and pattern manifests
* [Adding markup to the button](#adding-markup-to-the-button) - Understand index files and markup
* [Style the button](#style-the-button) - Meet less.js
* [Introducing interactive demos](#introducing-interactive-demos) - Learn about demo files and javascript
* [Moving your pattern](#moving-your-pattern) - Folder structure and navigation
* [Using patterns](#using-patterns) - Dependencies and composition of patterns
* [sinnerschrader/patternplate](https://github.com/sinnerschrader/patternplate) for more information and documentation

### Getting started
#### Step by step

In order to get started with patternplate, you'll have to create your first pattern.
Do so by adding a folder to `patterns` and
placing a `pattern.json` file in it.

```
mkdir -p patterns/button
touch patterns/button/pattern.json
```

Open `patterns/button/pattern.json` with a text editor
and place the following inside:

```json
{
	"name": "button",
	"displayName": "Button",
	"version": "1.0.0"
}
```

At this point you should see the [Button](/pattern/button) entry when reloading this interface.

#### What just happend

`patterns/button/pattern.json` is a "manifest" in patternplate-slang.
Manifests are the files patternplate uses to distinguish patterns from any
other old file in your project. Every manifest patternplate finds in
`.patterns` will pop up in the navigation on the left.

As a bonus it allows you to define properties of your patterns, e.g.

```js
{
	"name": "button", // technical name, used when referenced
	"displayName": "Button", // name displayed in web interface
	"version": "1.0.0"
}
```

### Adding markup to the button

#### Step by step

As you may have noticed we now have a [Button](/pattern/button) navigation
entry, but nothing much else. Let's create very basic markup for our button:

```js
// patterns/button/index.jsx
const children = props.children || 'Button';

<button className="button">
	{children}
</button>
```

Reload [Button](/pattern/button), you'll see a rendered demo now. Hooray!

#### What just happend

There are some things going on here so we'll break them down:

*  We created an `index` file in the button pattern. patternplate will
automatically pick up these files when they are direct siblings of a
`pattern.json` file

*  By default patternplate understands markup generating code of the format
`jsx`, so we provided just that.
`jsx` basically is "html in javascript". Keep in mind you'll have to
replace `class` with `className` and you are good to go.
If interested you can [read up on jsx here](https://facebook.github.io/react/docs/jsx-in-depth.html).

*  patternplate transforms your `jsx` to executable
components and renders them in a second step

### Style the button

#### Step by step

Bare markup is pretty bleak. We'll add some basic styling to it.

```less
// patterns/button/index.less
.button {
	background: transparent;
	border: 1px solid currentColor;
	border-radius: none;
	padding: 10px 15px;
	font-size: 16px;
	color: #999;
	transition: .3s color ease-in-out, .45s box-shadow linear;
	&:hover,
	&:active {
		color: #42a5f5;
	}
	&:focus {
		box-shadow: 0 0 4px currentColor inset;
		outline: none;
	}
}
```

Reload [Button](/pattern/button) to inspect the button's new styling.

#### What just happend

*  Another index file, another format. patternplate picks up on the `.less` file by default,
transforms it and delivers it as `css` to the browser

### Introducing interactive demos

#### Step by step

We'll add some javascript into the mix. This time there are two files to add:

```js
// patterns/button/index.js
function clickHandler(times) {
	return ({target}) => {
		times++;
		const time = times < 2 ? 'time' : 'times';
		const old = target.textContent;
		target.textContent = `Clicked \${times} \${time}`;

		if (target.running) {
			return;
		}

		target.running = true;

		setTimeout(() => {
			target.textContent = old;
			target.running = false;
		}, 2000);
	};
}

function main() {
	const buttonElement = document.querySelector('.button');
	if (!buttonElement) {
		return;
	}
	
	buttonElement.addEventListener('click', clickHandler(0));
}

export default main;
```

```js
// patterns/button/demo.js

import pattern from 'Pattern'; // import default export of index.js
pattern(); // pattern === main => true
```

Reload the button demo and click it. It counts the times you clicked and
reverts back to its original text content after two seconds.

#### What just happend

*   You'll recognise the `index.js` file as pattern
`index` file by now. We just created a file in the js format,
which is babeled and bundled for browser consumption automatically.

*   jsx, less and js can use an additional `demo` file. The
idea is to have the flexibility of adding code that never is shipped with the
pattern library but used only for presentational purposes.
This e.g. comes in handy when you want to display variants of a pattern.

*   When a `demo` file is present, patternplate will ignore `demo`
files of the same format, so we have to import their contents under the special name `Pattern` it like this:

```jsx
// demo.jsx
import Pattern from 'Pattern';

<Pattern />
```

```js
// demo.js
import pattern from 'Pattern';
pattern();
```

```less
// demo.less
@import 'Pattern';
```

### Moving your pattern

#### Step by step

Most likely you'll want to categorize your patterns in one way or the other. For
the purpose of this guide we'll use [Brad Frost's Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) terminology.

```shell
## Move button pattern to atoms/
mkdir -p patterns/atoms
mv patterns/button patterns/atoms/
```

Reloading the interface will reveal that our button has moved along there:
It is now available as [pattern/atoms/button](pattern/atoms/button) in the web interface. In the navigation on the left you'll see a category with the name [Atoms](pattern/atoms).

#### What just happend

*  The folder structure in `patterns` determines the navigational structure in the web interface

*  Each sub directory in `patterns` becomes a navigational level in the sidebar

*  Nesting is supported to indefinite levels


### Using patterns

#### Step by step

An important concept in patternplate is composition and reuse of existing patterns. Let's have a look at this.

```shell
## create a new pattern folder
mkdir -p patterns/molecules/button-row
```

```js
// patterns/molecules/button-row/pattern.json
{
	"name": "button-row",
	"displayName": "Button Row",
	"version": "1.0.0",
	"patterns": {
		"button": "atoms/button"
	}
}
```

```js
// patterns/molecules/button-row/index.jsx
import Button from 'button'; // include patterns/atoms/button/index.jsx

<div className="button-row">
	<Button className="button-row__button">First</Button>
	<Button className="button-row__button">Second</Button>
</div>
```

```less
// patterns/molecules/button-row/index.less
@import 'button'; // include patterns/atoms/button/index.less

.button-row {
	display: flex;
	justify-content: space-between;
}
```

Load [molecules/button-row](/pattern/molecules/button-row): Profit!

##### What just happend

*  By adding the `patterns` key to `patterns/molecules/button-row/pattern.json`, we told patternplate to
make the sources of `patterns/atoms/button` available to `button-row`

*  This works by specifying a local name and the referenced pattern id.

* The importing pattern's sources call the dependency by the local name.

* The imported pattern id is always the normalized path relative to the
pattern root, e.g. for `patterns/atoms/button` it is `atoms/button`.

```js
{
	"patterns": {
		/* [local name] : "pattern id" */
		"button" :"atoms/button"
	}
}
```

*  To actually use the dependency we have to import it into each format.

```js
import Button from 'button';
```

*  Notice how we imported the `jsx` and `less` sources but omitted the js
imports? This leads to the markup and styling in place, but the click counters
are not active on buttons in [molecules/button-row](/pattern/molecules/button-row).

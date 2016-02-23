# patternplate-transform-react-to-markup
[patternplate](/sinnerschrader/patternplate) transform creating markup from react components.

## Installation
```shell
npm install --save patternplate-transform-react-to-markup react react-dom
```

## Transformation
### Input
```js
	module.exports = React.createClass({
		displayName: 'MyAwesomePattern',
		render: function() {
			return React.createElement('div', {className: 'my-awesome-pattern'}, 'My awesome Pattern.');
		}
	});
```
### Output
```html
	<!-- default settings -->
	<div class="my-awesome-pattern">
		My awesome Pattern
	</div>

	<!-- with static rendering disabled -->
	<div class="my-awesome-pattern" react-id=".cd5akchxj4.1.0">
		My awesome Pattern
	</div>


	<!-- with automount enabled -->
	<div data-mountpoint>
		<div class="my-awesome-pattern" react-id=".cd5akchxj4.1.0">
			My awesome Pattern
		</div>
	</div>
```

## Configuration
Install `patternplate-transform-react-to-markup`, `patternplate-transform-react`, `react` and `react-dom` in your [patternplate](sinnerschrader/patternplate) project. [patternplate-server](sinnerschrader/patternplate) currently ships with `patternplate-transform-react` working on `*.jsx` and `*.html` files by default.

### Parameters
```js
// configuration/patternplate-server/transforms.js
module.exports = {
	"react-to-markup": {
		"automount": false, // ignore any js files and mount the component as live React component on the frontend, implies static: false
		"static": true // render static markup without react-ids
	}
}
```

### Component auto mounting
`patternplate-transform-react-to-markup` is capable of rendering output needed for automatic mounting of `react` components. To enable this globally for your project specify
```js
// configuration/patternplate-server/transforms.js
module.exports = {
	"react-to-markup": {
		"opts": {
			"automount": true
		}
	}
}
```

To enable auto mounting on a per pattern basis specify
```js
// patterns/my-awesome-pattern/package.json
{
	"name": "my-awesome-pattern",
	"version": "0.1.0",
	"options": {
		"react-to-markup": {
			"opts": {
				"automount": true
			}
		}
	}
}
```

### React version interoperability
`patternplate-transform-react-to-markup` provides interoperability with `react` `0.13` and `0.14`. The decision making on the used call happens according to these rules:

```
if React.version gte 0.14
	if require.resolve('react-dom') fails
		warn
		use React.render
	else if require.resolve('react') succeeds
		use ReactDOM.render
else
	use React.render
```


This means you can use `react` with and without `react-dom` - you'll see a warning with `react >= 0.14`, though:

```shell
[ ⚠ External Deprecation ⚠ ] React version 0.14.7 deprecated React.renderToString and moved it to react-dom/server's renderToString, but react-dom is not available via require.resolve. Consider installing react-dom.
```

---
Copyright 2016 by [SinnerSchrader Deutschland GmbH](https://github.com/sinnerschrader) and [contributors](./graphs/contributors). Released under the [MIT license]('./license.md').

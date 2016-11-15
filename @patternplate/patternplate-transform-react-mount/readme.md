# patternplate-transform-react-mount [![stability][0]][1]
[patternplate](/sinnerschrader/patternplate) transform mounting react components with full life cycle on the client side.

[![npm version][2]][3] [![Travis branch][4]][5] [![Appveyor branch][6]][7]

## Installation
```shell
npm install --save patternplate-transform-react-mount react react-dom
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
```js
	module.exports = React.createClass({
		displayName: 'MyAwesomePattern',
		render: function() {
			return React.createElement('div', {className: 'my-awesome-pattern'}, 'My awesome Pattern.');
		}
	});
	var mountableElement = React.createElement(module.exports);
	var mountElement = document.querySelector('[data-mountpoint]');
	React.render(mountableElement, mountElement);
```

## Configuration
Install `patternplate-transform-react-mount`, `patternplate-transform-react`, `patternplate-transform-react-to-markup`, `react` and `react-dom` in your [patternplate](https://github.com/sinnerschrader/patternplate) project.

```
No configuration parameters available yet
```

### Component auto mounting
`patternplate-transform-react-mount` is triggered by `patternplate-transform-react-to-markup`. To enable auto mounting enable it in `patternplate-transform-react-to-markup` config.

---
⇨ See [patternplate-transform-react-to-markup](https://github.com/sinnerschrader/patternplate-transform-react-to-markup#component-auto-mounting) for details


### React version interoperability
`patternplate-transform-react-mount` provides interoperability with `react` `0.13` and `0.14`. The decision making on the used call happens according to these rules:

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
[ ⚠ External Deprecation ⚠ ] React version 0.14.7 deprecated React.render and moved it to react-dom's render, but react-dom is not available via require.resolve. Consider installing react-dom.
```

---
Copyright 2016 by [SinnerSchrader Deutschland GmbH](https://github.com/sinnerschrader) and [contributors](./graphs/contributors). Released under the [MIT license]('./license.md').


[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/patternplate-transform-react-mount.svg?style=flat-square
[3]: https://npmjs.org/package/patternplate-transform-react-mount
[4]: https://img.shields.io/travis/sinnerschrader/patternplate-transform-react-mount/master.svg?style=flat-square
[5]: https://travis-ci.org/sinnerschrader/patternplate-transform-react-mount
[6]: https://img.shields.io/appveyor/ci/sinnerschrader/patternplate-transform-react-mount/master.svg?style=flat-square
[7]: https://ci.appveyor.com/project/sinnerschrader/patternplate-transform-react-mount

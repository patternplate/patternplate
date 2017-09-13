import vm from 'vm';
import {jsdom} from 'jsdom';
import {merge} from 'lodash';

// Provide an emulated DOM environment for React testing
global.document = jsdom('<body></body>');
global.window = global.document.defaultView;
global.navigator = global.window.navigator;

function getFile(extender) {
  const file = {
    path: 'mocks/index.js'
  };
  return merge({}, file, extender);
}

export function run(source) {
  const script = new vm.Script(source);
  const exports = {};
  const sandbox = {
    console,
    document: jsdom('<body><div data-mountpoint></div></body>'),
    exports,
    module: {exports},
    require,
    global,
    window: global
  };

  script.runInNewContext(sandbox);
  return sandbox.document;
}

export const application = {
  cache: {
    get() {
      return false;
    },
    set() {}
  },
  configuration: {
    transforms: {
      browserify: {}
    }
  }
};

export const emptyFile = getFile({
  buffer: '',
  path: 'empty.js',
  dependencies: {}
});

export const basicFile = getFile({
  buffer: Buffer.from(`
		var React = require('react');
		module.exports = function Basic() {
			return React.createElement('div', {id: 'basic'}, ['basic']);
		};
	`),
  path: 'basic/index.js',
  dependencies: {}
});

export const componentDidMountFile = getFile({
  buffer: Buffer.from(`
		var React = require('react');
		module.exports = React.createClass({
			getInitialState() {
				return {altered: false};
			},
			componentDidMount() {
				this.setState({altered: true});
			},
			render() {
				var children = this.state.altered ?
					'componentDidMount' :
					'componentDidNotMount';
				return React.createElement('div', {id: 'mount'}, children);
			}
		});
	`),
  path: 'component-did-mount/index.js',
  dependencies: {}
});

export const clickFile = getFile({
  buffer: Buffer.from(`
		var React = require('react');
		module.exports = React.createClass({
			getInitialState() {
				return {altered: 'initial'};
			},
			componentDidMount() {
				this.setState({children: 'mounted'});
			},
			handleClick() {
				this.setState({children: 'clicked'});
			},
			render() {
				return React.createElement(
					'div',
					{id: 'click', onClick: this.handleClick},
					this.state.children
				);
			}
		});
	`),
  path: 'component-did-mount/index.js',
  dependencies: {}
});

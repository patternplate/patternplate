const mountCode = `
	(function (window, document, undefined) {
		var React = require('react');
		var ReactDOM = require('react-dom');

		if (!module.exports) {
			console.warn('No exported module found');
		}

		var Component = module.exports.default || module.exports;
		var element = React.createElement(Component);
		var mountElement = document.querySelector('[data-mountpoint]');

		if (!mountElement) {
			console.warn('No module exported');
		}

		ReactDOM.render(element, mountElement);
	}(window, document));
`;

export default function () {
	return async file => {
		const source = Buffer.isBuffer(file.buffer) ?
			file.buffer.toString('utf-8') :
			file.buffer;

		file.buffer = source.endsWith(mountCode) ?
			source :
			`${source}\n${mountCode}`;

		return file;
	};
}

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

export default function (app) {
	return async file => {
		const source = Buffer.isBuffer(file.buffer) ?
			file.buffer.toString('utf-8') :
			file.buffer;

		const mounts = source.endsWith(mountCode);

		if (!mounts) {
			file.buffer = `${source}\n${mountCode}`;
		}

		const {pattern = {}} = file;
		const {post = []} = pattern;
		pattern.post = post.concat(publishResource(app, file));
		return file;
	};
}

function publishResource(app, file) {
	const {pattern = {}} = file;
	const {id} = pattern;
	const isOverridden = file.basename === 'index' && `demo${file.ext}` in file.pattern.files;

	return result => {
		if (isOverridden) {
			return;
		}

		app.resources = app.resources.filter(r => r.id !== `react-mount/${id}`);

		app.resources.push({
			id: `react-mount/${id}`,
			pattern: id,
			type: 'js',
			reference: true,
			content: result
		});
	};
}

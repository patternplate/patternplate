import * as React from 'react';

function renderMarkup(source) {
	const moduleScope = {exports: {}};
	const fn = new Function('module', 'exports', 'require', source); // eslint-disable-line no-new-func
	fn(moduleScope, moduleScope.exports, require);
	return React.renderToStaticMarkup(React.createElement(moduleScope.exports));
}

export default function createReactRendererFactory(application) {
	const config = application.configuration.transforms['react-to-markup'] || {};

	return async function renderReactComponent(file) {
		file.buffer = renderMarkup(file.buffer.toString('utf-8'), config.opts);
		return file;
	};
}

import * as React from 'react';

function getRenderFunction(toStatic = true) {
	const nameSpace = React.version < 0.14 ?
		React :
		require('react-dom/server');
	return toStatic ?
		nameSpace.renderToStaticMarkup :
		nameSpace.renderToString;
}

function renderMarkup(source, options = {}) {
	const renderFunction = getRenderFunction(options.static !== false);
	const moduleScope = {exports: {}};
	const moduleContext = new Function('module', 'exports', 'require', source); // eslint-disable-line no-new-func
	moduleContext(moduleScope, moduleScope.exports, require);
	return renderFunction(React.createElement(moduleScope.exports));
}

export default function createReactRendererFactory(application) {
	const config = application.configuration.transforms['react-to-markup'] || {};

	return async function renderReactComponent(file) {
		file.buffer = renderMarkup(file.buffer.toString('utf-8'), config.opts);
		return file;
	};
}

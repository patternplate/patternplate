import * as React from 'react';
import compareSemver from 'compare-semver';
import {merge} from 'lodash';

function getRenderFunction(toStatic = true) {
	const hasReactDOM = compareSemver.gt(React.version, ['0.13.3']);
	const nameSpace = hasReactDOM ?
		React :
		require('react-dom/server');
	return toStatic ?
		nameSpace.renderToStaticMarkup :
		nameSpace.renderToString;
}

function renderMarkup(file, options = {}) {
	const source = file.buffer.toString('utf-8');
	const isStatic = options.static !== false && options.automount !== true;
	const renderFunction = getRenderFunction(isStatic);
	const moduleScope = {exports: {}};
	const moduleContext = new Function('module', 'exports', 'require', source); // eslint-disable-line no-new-func
	moduleContext(moduleScope, moduleScope.exports, require);
	const defaultExport = typeof moduleScope.exports === 'function' ?
		moduleScope.exports :
		moduleScope.exports.default;

	if (typeof defaultExport !== 'function') {
		throw new Error(`Default export of file ${file.path} in pattern ${file.pattern.id} is no function, can't render as React component`);
	}

	const rendered = renderFunction(React.createElement(defaultExport));
	const buffer = options.automount ?
		`<div data-mountpoint>${rendered}</div>` :
		rendered;

	const meta = options.automount ?
		{
			scripts: [{
				path: 'react-mount',
				id: file.pattern.id
			}]
		} :
		{};

	return {
		buffer,
		meta
	};
}

export default function createReactRendererFactory(application) {
	const config = application.configuration.transforms['react-to-markup'] || {};

	return async function renderReactComponent(file) {
		const patternConfiguration = (file.pattern.manifest.options || {})['react-to-markup'] || {};
		const configuration = merge({}, config.opts, patternConfiguration);
		const results = renderMarkup(file, configuration);
		file.buffer = results.buffer;
		file.meta = merge({}, file.meta, results.meta);
		return file;
	};
}

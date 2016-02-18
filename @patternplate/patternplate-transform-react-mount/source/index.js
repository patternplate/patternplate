import * as React from 'react';
import {yellow} from 'chalk';
import compareSemver from 'compare-semver';
import {resolve} from 'try-require';

const deprecation = `[ ⚠ External Deprecation ⚠ ]`;

export default function (application) {
	return async file => {
		const wantsReactDOM = compareSemver.gt(React.version, ['0.13.3']);
		const reactDOMavailable = typeof resolve('react-dom') !== 'undefined';

		if (wantsReactDOM && !reactDOMavailable) {
			const warning = `${deprecation} React version ${React.version} deprecated React.render and moved it to react-dom's render, but react-dom is not available via require.resolve. Consider installing react-dom.`;
			application.log.warn(yellow(warning));
		}

		const requireStatement = wantsReactDOM && reactDOMavailable ?
			`var ReactDOM = require('react-dom')` : '';

		const renderStatement = wantsReactDOM && reactDOMavailable ?
			'ReactDOM.render(mountableElement, mountElement);' :
			'React.render(mountableElement, mountElement);';

		const code = [
			requireStatement,
			`var mountableElement = React.createElement(module.exports);`,
			`var mountElement = document.querySelector('[data-mountpoint]');`,
			renderStatement
		].join('\n');

		file.buffer = `${file.buffer}\n${code}`;
		return file;
	};
}

import * as React from 'react';
import {yellow} from 'chalk';
import compareSemver from 'compare-semver';
import {resolve} from 'try-require';

const deprecation = `[ ⚠ External Deprecation ⚠ ]`;

export default (toStatic = true, application) => {
	const wantsReactDOM = compareSemver.gt(React.version, ['0.13.3']);
	const reactDOMavailable = typeof resolve('react-dom') !== 'undefined';
	const methodName = toStatic ? 'renderToStaticMarkup' : 'renderToString';

	if (wantsReactDOM && !reactDOMavailable) {
		const warning = [
			`${deprecation} React version ${React.version} deprecated`,
			`React.${methodName} and moved it to react-dom/server's ${methodName},` // eslint-disable-line no-unexpected-multiline
			`but react-dom is not available via require.resolve.`,
			`Consider installing react-dom.`
		].join('');
		application.log.warn(yellow(warning));
	}

	const nameSpace = wantsReactDOM && reactDOMavailable ?
		require('react-dom/server') :
		React;

	return nameSpace[methodName];
};

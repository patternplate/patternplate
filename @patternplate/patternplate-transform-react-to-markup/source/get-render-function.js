import * as React from 'react';
import compareSemver from 'compare-semver';

export default (toStatic = true) => {
	const hasReactDOM = compareSemver.gt(React.version, ['0.13.3']);
	const nameSpace = hasReactDOM ?
		React :
		require('react-dom/server');
	return toStatic ?
		nameSpace.renderToStaticMarkup :
		nameSpace.renderToString;
};

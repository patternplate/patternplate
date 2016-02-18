import React from 'react';

import getComponent from './get-component';
import getRenderFunction from './get-render-function';

export default (file, options = {}, application) => {
	const isStatic = options.static !== false && options.automount !== true;
	const renderFunction = getRenderFunction(isStatic, application);
	const component = getComponent(file);

	const rendered = renderFunction(React.createElement(component));
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
};

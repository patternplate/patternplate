import React from 'react';

import getComponent from './get-component';
import getRenderFunction from './get-render-function';

export default (file, options = {}, application) => {
	const isStatic = options.static !== false && options.automount !== true;
	const renderFunction = getRenderFunction(isStatic, application);
	const component = getComponent(file);

	try {
		const original = console.error;

		console.error = (...args) => {
			const message = args.join(' ');
			if (message.includes('Expected props argument to be a plain object')) {
				return;
			}
			original(...args);
		};

		const result = typeof component === 'function' ?
			renderFunction(React.createElement(component)) :
			'';

		const post = file.pattern.post || [];
		post.forEach(p => p());

		const buffer = options.automount ?
			`<div data-mountpoint>${result}</div>` :
			result;

		return {
			buffer
		};
	} catch (err) {
		const message = [
			`Error during rendering of file ${file.path}`,
			`in pattern ${file.pattern.id}:`
		].join('\n');

		err.message = [
			message,
			err.message
		].join('\n');

		err.fileName = file.path;

		throw err;
	}
};

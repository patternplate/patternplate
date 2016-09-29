import chalk from 'chalk';
import React from 'react';
import trace from 'stack-trace';

import getComponent from './get-component';
import getRenderFunction from './get-render-function';

export default (file, options = {}, application) => {
	const isStatic = options.static !== false && options.automount !== true;
	const renderFunction = getRenderFunction(isStatic, application);
	const component = getComponent(file);

	const meta = options.automount ?
		{scripts: [{path: 'react-mount', id: file.pattern.id}]} : {};

	try {
		const original = console.error;

		console.error = (...args) => {
			const message = args.join(' ');
			if (message.includes('Expected props argument to be a plain object')) {
				return;
			}
			original(...args);
		};

		const result = component ?
			renderFunction(React.createElement(component)) :
			'';

		const buffer = options.automount ?
			`<div data-mountpoint>${result}</div>` :
			result;

		return {
			buffer,
			meta
		};
	} catch (err) {
		const stack = trace.parse(err);
		const top = stack[0];

		const source = file.buffer.toString();
		const lines = source.split('\n');

		const cut = top ? [
			...lines.slice(top.lineNumber - 2, top.lineNumber - 1),
			chalk.bold.red(lines[top.lineNumber - 1]),
			...lines.slice(top.lineNumber, top.lineNumber + 2)
		] : [];

		const message = [
			`Error during rendering of file ${file.path}`,
			`in pattern ${file.pattern.id}:`
		].join('\n');

		err.message = [
			message,
			err.message,
			cut.join('\n')
		].join('\n');

		err.fileName = file.path;

		throw err;
	}
};

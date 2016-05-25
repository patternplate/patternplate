import {
	createContext as Context,
	Script
} from 'vm';

import chalk from 'chalk';
import trace from 'stack-trace';

import getComponent from './get-component';
import getRenderFunction from './get-render-function';

const topFileName = 'evalmachine.<anonymous>';

export default (file, options = {}, application) => {
	const isStatic = options.static !== false && options.automount !== true;
	const renderFunction = getRenderFunction(isStatic, application);
	const component = getComponent(file);

	const meta = options.automount ?
		{
			scripts: [{
				path: 'react-mount',
				id: file.pattern.id
			}]
		} :
		{};

	// prepare script and context
	const sandbox = {
		module,
		console,
		exports,
		require,
		patternplate: {
			component,
			renderFunction,
			result: ''
		}
	};

	const stanza = [
		'var React = require(\'react\')',
		'',
		'patternplate.result = patternplate.renderFunction(',
		'React.createElement(patternplate.component)',
		')'
	].join('\n');

	sandbox.global = sandbox;
	const context = new Context(sandbox);
	const script = new Script(stanza);

	try {
		script.runInContext(context, {
			filename: file.path,
			lineOffset: 1,
			columnOffset: 1,
			displayErrors: true,
			timeout: 5000
		});

		const result = sandbox.patternplate.result;
		const buffer = options.automount ?
			`<div data-mountpoint>${result}</div>` :
			result;

		return {
			buffer,
			meta
		};
	} catch (error) {
		const stack = trace.parse(error);

		// find first relevant item in trace
		const top = stack.filter(item => item.fileName === topFileName &&
			(item.functionName || '').indexOf('babelHelpers') === -1
		)[0];

		const source = file.buffer.toString();
		const lines = source.split('\n');

		const cut = top ? [
			...lines.slice(top.lineNumber - 2, top.lineNumber - 1),
			chalk.bold.red(lines[top.lineNumber - 1]),
			...lines.slice(top.lineNumber, top.lineNumber + 2)
		] : [];

		const message = [
			`Error during rendering of file ${file.path}`,
			`in pattern ${file.pattern.id}:`,
			top ? `Tried to print offending lines` : ''
		].join('\n');

		error.message = [
			message,
			error.message,
			cut.join('\n')
		].join('\n');
		throw error;
	}
};

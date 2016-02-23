import {
	createContext as Context,
	Script
} from 'vm';

import chalk from 'chalk';

export default (file, application) => {
	const source = file.buffer.toString('utf-8');
	const prefix = chalk.grey(`[${[file.pattern.id, file.name].join(':')}]`);

	// prepare script and context
	const sandbox = {
		module,
		exports,
		require,
		// Provide proxied console, prepend with file
		console: {
			log(...args) {
				application.log.info(...[prefix, ...args]);
			},
			debug(...args) {
				application.log.debug(...[prefix, ...args]);
			},
			error(...args) {
				application.log.error(...[prefix, ...args]);
			},
			info(...args) {
				application.log.info(...[prefix, ...args]);
			},
			warn(...args) {
				application.log.warn(...[prefix, ...args]);
			},
			trace(...args) {
				application.log.trace(...[prefix, ...args]);
			}
		}
	};

	sandbox.global = sandbox;
	const context = new Context(sandbox);
	const script = new Script(source);

	// execute module
	try {
		script.runInContext(context, {
			filename: file.path,
			lineOffset: 1,
			columnOffset: 1,
			displayErrors: true,
			timeout: 5000
		});
	} catch (error) {
		const message = `Error during parsing of file ${file.path} in pattern ${file.pattern.id}:`;
		error.message = [
			message,
			error.message
		].join('\n');
		throw error;
	}

	return typeof context.exports === 'function' ?
		context.exports :
		context.exports.default;
};

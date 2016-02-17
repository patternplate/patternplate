import {
	createContext as Context,
	Script
} from 'vm';

export default file => {
	const source = file.buffer.toString('utf-8');

	// prepare script and context
	const sandbox = {
		module,
		exports,
		require,
		__filename,
		__dirname
	};

	sandbox.global = sandbox;

	const context = new Context(sandbox);
	const script = new Script(source);

	// execute code
	try {
		script.runInContext(context, {
			filename: file.path,
			lineOffset: 1,
			columnOffset: 1,
			displayErrors: true,
			timeout: 5000
		});
	} catch (error) {
		const message = `Error ${error.lineNumber} in file ${file.path} of pattern ${file.pattern.id}:`;
		error.message = [
			message,
			error.message,
			source
		].join('\n');
		throw error;
	}

	return typeof context.exports === 'function' ?
		context.exports :
		context.exports.default;
};

import {
	Script
} from 'vm';

export default (file, context) => {
	const source = file.buffer.toString('utf-8');
	const script = new Script(source);

	script.runInContext(context, {
		filename: file.path,
		lineOffset: 1,
		columnOffset: 1,
		displayErrors: true,
		timeout: 5000
	});

	return context.exports;
}

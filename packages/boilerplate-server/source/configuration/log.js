const level = process.env.BOILERPLATESERVER_LOG_LEVEL ||
	process.env.BOILERPLATE_LOG_LEVEL ||
	process.env.NODE_LOG_LEVEL ||
	process.env.LOG_LEVEL ||
	'info';

const log = {
	level,
	colorize: process.stdout.isTTY,
	timestamp: !process.stdout.isTTY,
	showLevel: true,
	colors: {
		trace: 'magenta',
		input: 'grey',
		verbose: 'cyan',
		prompt: 'grey',
		debug: 'blue',
		info: 'green',
		data: 'grey',
		help: 'cyan',
		warn: 'yellow',
		error: 'red'
	}
};

export default log;

#!/usr/bin/env node
import 'babel-polyfill';
import boilerplate from '../library';
import execute from '../library/utilities/execute';

async function main(options) {
	const application = await boilerplate(options);
	return await application.run(options.command, options);
}

execute(main, {mode: 'console'});

// Catch unhandled rejections globally
process.on('unhandledRejection', (reason, promise) => {
	console.log('Unhandled Rejection at: Promise ', promise, ' reason: ', reason);
	throw reason;
});

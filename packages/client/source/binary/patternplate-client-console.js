#!/usr/bin/env node

import 'babel-polyfill';
import minimist from 'minimist';

import server from '../';

async function start (options) {
	const mode = 'console';
	const settings = {...options, mode};
	const [, command] = settings._;

	const application = await server(settings);
	await application.run(command, settings);
}

const args = minimist(process.argv.slice(1));

start(args)
	.catch(err => {
		setTimeout(() => {
			throw err;
		});
	});

// Catch unhandled rejections globally
process.on('unhandledRejection', (reason, promise) => {
	console.log('Unhandled Rejection at: Promise ', promise, ' reason: ', reason);
	throw reason;
});

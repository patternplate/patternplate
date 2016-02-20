#!/usr/bin/env node
import 'babel-polyfill';
import minimist from 'minimist';
import {merge} from 'lodash';

import patternplate from '../';

async function main(options) {
	const settings = merge({}, options, {mode: 'console'});
	const command = settings._[1];

	const application = await patternplate(settings);
	await application.server.run(command, settings);
}

const args = minimist(process.argv.slice(1));

main(args)
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

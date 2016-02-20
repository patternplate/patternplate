#!/usr/bin/env node
/*eslint-disable no-process-env, no-process-exit */

import 'babel-polyfill';
import minimist from 'minimist';

import patternplate from '../';

async function start (options) {
	const mode = 'console';
	const settings = {...options, mode};
	const command = settings._[1];

	const application = await patternplate(settings);
	await application.server.run(command, settings);
}

const args = minimist(process.argv.slice(1));

start(args)
	.catch(err => {
		setTimeout(() => {
			throw err;
		});
	});

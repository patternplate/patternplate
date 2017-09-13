#!/usr/bin/env node

import 'babel-polyfill';
import minimist from 'minimist';

import patternClient from '../';

function main(options = {}) {
	return patternClient(options);
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

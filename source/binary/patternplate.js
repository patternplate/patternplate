#!/usr/bin/env node --harmony

import 'babel-core/polyfill';

import minimist from 'minimist';
import patternplate from '../';

const args = minimist(process.argv.slice(1));

async function start(options) {
	let application;

	try{
		application = await patternplate(options);
	} catch(err) {
		console.log(err);
		throw new Error(err);
	}

	try {
		await application.start();
	} catch(err) {
		application.log.error(err);
		throw new Error(err);
	}

	async function stop () {
		try {
			await application.stop();
			process.exit( 0 );
		} catch ( err ) {
			application.log.error( err );
			process.exit( 1 );
		}
	}

	process.on( 'SIGINT', () => stop( 'SIGINT' ) );
	process.on( 'SIGHUP', () => stop( 'SIGHUP' ) );
	process.on( 'SIGQUIT', () => stop( 'SIGQUIT' ) );
	process.on( 'SIGABRT', () => stop( 'SIGABRT' ) );
	process.on( 'SIGTERM', () => stop( 'SIGTERM' ) );
}

start(args);

#!/usr/bin/env node
/*eslint-disable no-process-env, no-process-exit */

import 'babel-polyfill';
import minimist from 'minimist';

import boilerplate from '../';

async function start ( options = {} ) {
	let application;
	let settings = Object.assign( options, { 'mode': 'server' } );

	try {
		application = await boilerplate( settings );
	} catch ( error ) {
		let log = application ? application.log || console : console;
		log.error( error );
		throw new Error( error );
	}

	try {
		await application.start( settings );
	} catch ( error ) {
		application.log.error( error );
		throw new Error( error );
	}
}

start( minimist( process.argv.slice( 1 ) ) );

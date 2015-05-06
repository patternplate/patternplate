#!/usr/bin/env node
/*eslint-disable no-sync */
var fs = require( 'fs' );
var path = require( 'path' );

var rc = require( 'rc' );
var babel = require( 'babel-core' );
var _ = require( 'lodash' );
var minimist = require( 'minimist' );

var args = minimist( process.argv.slice( 1 ) );
var defaults = JSON.parse( fs.readFileSync( path.resolve( __dirname, '../.babelrc' ) ) );
var config = _.merge( {}, defaults, rc( 'babel' ) );

babel.register( {
	'extensions': config.extensions,
	'blacklist': config.blacklist,
	'whitelist': config.whitelist,
	'optional': config.optional,
	'ignore': config.ignore,
	'stage': config.stage
} );

var start = require( './_start' );

start( args )
	.then( function startCompleted ( application ) {
		application.log.info( '[application]', 'Started server ...' );
	} )
	.catch( function startFailed ( err, application ) {
		var log = application ? application.log || console : console;
		log.error( err );
		throw new Error( err );
	} );

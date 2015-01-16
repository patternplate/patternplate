/* global patternplate */

require('es6-shim');
var rc = require('rc');
var util = require('util');
var path = require('path');
var async = require('async');
var server = require('patternplate-server');

var defaults = require('./defaults');
var packageJSON = require('../package');
var elevate = require('./elevate');

var logger = require('./logger');
var watcher = require('./watcher');
var builder = require('./builder');

var patternplate = {};

function start(options, next) {
	// Make sure callback is a function
	next = typeof next === 'function' ? next : function(){};

	// Join defaults and passed configuration
	patternplate.config = Object.assign({}, defaults, options);
	var relativePath = patternplate.config._[0] || patternplate.config.path || process.cwd();
	var rootPath = path.resolve(process.cwd(), relativePath);
	var patternPath = path.resolve(rootPath, patternplate.config.dir);

	patternplate.config.paths = {
		root: rootPath,
		patterns: patternPath,
	};

	// Set up the logger
	patternplate.log = logger(patternplate.config.loglevel);

	// Typically only if called from cli
	if (patternplate.config.elevate) {
		patternplate.config.elevate = false;
		return elevate(patternplate, next);
	}

	// Some reassurance information
	patternplate.log.info('Starting', packageJSON.name + '...');
	patternplate.log.silly('Passed config:', util.format(options));
	patternplate.log.silly('Default config:', util.format(defaults));
	patternplate.log.silly('Merged config:', util.format(patternplate.config));

	var run = async.applyEachSeries([builder, watcher, server]);
	run(patternplate, function(err){
		if (err) {
			patternplate.log.error(err);
			next(err);
		}
	});
}

module.exports = start;

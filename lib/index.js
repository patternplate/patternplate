require('es6-shim');
var _ = require('lodash');
var util = require('util');
var path = require('path');
var fs = require('fs');
var async = require('async');
var requireAll = require('require-all');
var server = require('patternplate-server');

var packageJSON = require('../package');
var elevate = require('./elevate');

var logger = require('./logger');
var builder = require('./builder');
var transformer = require('./transformer');
var watcher = require('./watcher');

var patternplate = {
	config: {}
};

function start(options, next) {
	// Make sure callback is a function
	next = typeof next === 'function' ? next : function(){};

	var configuration = requireAll({
		dirname: path.resolve(__dirname, '../config/'),
		filter: /(.*).(js|json)/
	});

	// Join defaults and passed configuration
	var extConfig = _.omit(configuration, ['defaults', 'production', 'development']);
	var defaults = _.merge(configuration.defaults, extConfig);

	// Sanitize node env
	patternplate.config.env = process.env.NODE_ENV || options.env || patternplate.config.env || defaults.env;
	process.env.NODE_ENV = patternplate.config.env;

	patternplate.config = _.merge(
	 {},
	 defaults,
	 patternplate.config,
	 configuration[patternplate.config.env],
	 options);

	patternplate.defaults = defaults;

	var relativePath = patternplate.config._[0] || patternplate.config.path || process.cwd();
	var rootPath = path.resolve(process.cwd(), relativePath);
	var patternPath = path.resolve(rootPath, patternplate.config.dir);

	fs.exists(path.resolve(rootPath, 'config'), function(exists){
		if (exists) {
			var userconf = requireAll({
				dirname: path.resolve(rootPath, 'config'),
				filter: /(.*).(js|json)/
			});

			patternplate.config = _.merge(
				{},
				patternplate.config,
				userconf.defaults,
				userconf[patternplate.config.env],
				options
			);
		}

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
		patternplate.log.silly('Default config:', util.format(patternplate.defaults));
		patternplate.log.silly('Merged config:', util.format(patternplate.config));

		// Run the startup sequence
		var run = async.applyEachSeries([builder, transformer, watcher, server]);
		run(patternplate, function(err){
			if (err) {
				patternplate.log.error(err);
				next(err);
			}
		});
	});
}

module.exports = start;

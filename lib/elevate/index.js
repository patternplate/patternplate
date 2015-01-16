/* global patternplate */
var util = require('util');
var path = require('path');

var packageJSON = require('../../package.json');

function elevate(patternplate, next) {
	next = typeof next === 'function' ? next : function() {};

	// Find out if this a suitable patternplate project
	try {
		patternplate.config.package = require(path.resolve(patternplate.config.paths.root, './package.json'));
	} catch (e) {
		var message = 'Could not find package.json in' + patternplate.config.paths.root;
		patternplate.log.error(message);
		patternplate.log.error(util.format(e));
		return next(message);
	}

	// Try to use locally installed version
	var dependencies = Object.assign({},
		patternplate.config.package.devDependencies,
		patternplate.config.package.dependencies);
	var usedPatternplate = require('../../');

	if (packageJSON.name in dependencies === false) {
		patternplate.log.warn('Patternplate is not specified as local dependency, using global install at version ' + packageJSON.version);
	} else {
		try {
			usedPatternplate = require(path.resolve(patternplate.config.paths.root, 'node_modules', 'patternplate'));
		} catch(e) {
			var message = packageJSON.name + ' found in dependecies, but could not require local install. Are your dependencies installed?';
			patternplate.log.error(message);
			patternplate.log.error(e);
			next(message);
		}
	}

	usedPatternplate(patternplate.config, next);
}

module.exports = elevate;

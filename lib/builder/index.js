var fs = require('fs');
var util = require('util');
var tree = require('./tree');

function builder(patternplate, next) {
	patternplate.log.verbose('Starting builder...');
	next = typeof next === 'function' ? next : function(){};

	fs.exists(patternplate.config.paths.patterns, function(exists){
		if ( ! exists ) {
			return next('Builder: Could not find root directory "' + patternplate.config.paths.patterns + '"');
		}

		var patternPath = patternplate.config.paths.patterns;
		var blacklistConfig = patternplate.config.patterns.blacklist;
		var rulesConfig = patternplate.config.patterns.rules;

		// Build representation of the pattern file tree
		tree(patternPath, blacklistConfig, rulesConfig, function(err, results){
			patternplate.patterns = results;
			next(err);
		});
	});
}

module.exports = builder;

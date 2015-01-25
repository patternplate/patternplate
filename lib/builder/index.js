var fs = require('fs');
var tree = require('./tree');

var update = require('./update');

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

		// Update the tree when file changes occur
		patternplate.on('file:change', function(eventName, eventPath){
			update(patternplate.patterns, patternplate.config.paths.patterns, eventName, eventPath, function(err){
				if (err) {
					patternplate.log.warn('Error while updating "' + eventPath + '" after file change.');
					return patternplate.log.error(err);
				} else {
					patternplate.log.verbose('Updated "' + eventPath + '" after file change.');
				}
			});
		});
	});
}

module.exports = builder;

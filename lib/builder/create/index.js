/* global patternplate */
var tree = require('../tree');

function create(treeobj, pattern, eventPath, next) {
	if (! pattern) {
		return next();
	}

	var blacklistConfig = patternplate.config.patterns.blacklist;
	var rulesConfig = patternplate.config.patterns.rules;

	tree(pattern.paths.absolute, blacklistConfig, rulesConfig, function(err, results){
		if (err) return next(err);
		pattern = results;
		next();
	});
}

module.exports = create;

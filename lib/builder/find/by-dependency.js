var findPatterns = require('./patterns');

function byDependency(dependency, tree) {

	// Find all patterns
	var patterns = findPatterns(tree);

	return patterns.filter(function(pattern){
		return pattern.pattern.patternJSON.dependencies[dependency];
	});
}

module.exports = byDependency;

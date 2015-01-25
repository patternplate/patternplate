function findPatterns(tree) {
	var subPatterns = [];

	var matches = tree.children.filter(function(child){
		var isPattern = typeof child.pattern === 'object';

		if (! isPattern ) {
			subPatterns = subPatterns.concat(findPatterns(child));
		}

		return isPattern;
	});

	return matches.concat(subPatterns);
}

module.exports = findPatterns;

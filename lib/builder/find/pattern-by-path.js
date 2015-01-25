/* global patternplate */
function findPatternByPath(idPath, tree) {
	var fragments = idPath.split('/');
	var key = fragments.shift();

	var match = tree.children.find(function(child){
		return child.file.name === key;
	});

	if (match && match.children && idPath.length !== 0 && ! match.pattern) {
		match = findPatternByPath(fragments.join('/'), match);
	}

	return match;
}

module.exports = findPatternByPath;

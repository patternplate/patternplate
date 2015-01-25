var path = require('path');
var findFileByPath = require('../find/file-by-path');
var findPatternByPath = require('../find/pattern-by-path');

var create = require('../create');
var executeUpdate = require('./execute');

function onUpdateEvent(tree, rootPath, eventName, eventPath, next) {
	var idPath = path.relative(rootPath, eventPath);

	var match = findFileByPath(idPath, tree);
	var pattern = findPatternByPath(idPath, tree);

	if (! match) {
		create(tree, pattern, eventPath, next);
	} else {
		executeUpdate(tree, pattern, match, next);
	}
}

module.exports = onUpdateEvent;

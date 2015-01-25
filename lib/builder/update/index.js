var path = require('path');
var async = require('async');

var findFileByPath = require('../find/file-by-path');
var findPatternByPath = require('../find/pattern-by-path');
var findByDependency = require('../find/by-dependency');

var create = require('../create');

function update(tree, pattern, match, next) {


	match.file.transform(function(err){
		if (err) return next(err);

		var dependingPatterns = findByDependency(pattern.pattern.id, tree);

		async.forEach(dependingPatterns, function(dependingPattern, cb){
			async.forEach(dependingPattern.children, function(child, callback){
				update(tree, dependingPattern, child, callback);
			}, cb);
		}, next);
	});
}

function onUpdateEvent(tree, rootPath, eventName, eventPath, next) {
	var idPath = path.relative(rootPath, eventPath);

	var match = findFileByPath(idPath, tree);
	var pattern = findPatternByPath(idPath, tree);

	if (! match) {
		create(tree, pattern, eventPath, next);
	} else {
		update(tree, pattern, match, next);
	}
}

module.exports = onUpdateEvent;

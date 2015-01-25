var async = require('async');
var findByDependency = require('../find/by-dependency');
var executeUpdate = require('./execute');

function dependencies(tree, pattern, next){
	var dependingPatterns = findByDependency(pattern.pattern.id, tree);
	async.forEach(dependingPatterns, function(dependingPattern, cb){
		async.forEach(dependingPattern.children, function(child, callback){
			executeUpdate(tree, dependingPattern, child, callback);
		}, cb);
	}, next);
}

module.exports = dependencies;

var fs = require('fs');
var updateDependencies = require('./dependencies');

function execute(tree, pattern, match, next) {
	fs.exists(match.paths.absolute, function(exists){
		if (exists) {
			match.file.transform(function(err){
				if (err) return next(err);
				updateDependencies(tree, pattern, next);
			});
		} else {
			var index = pattern.children.indexOf(match);
			pattern.children.splice(index, 1);
			updateDependencies(tree, pattern, next);
		}
	});
}

module.exports = execute;

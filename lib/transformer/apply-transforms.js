var async = require('async');
var root;

function applyTransforms(tree, intents, transforms, next) {
	next = typeof next === 'function' ? next : function() {};

	// Early exit if no children
	if (tree.children.length === 0) {
		return next(null, tree);
	}

	if (tree.pattern) {
		async.forEach(tree.children, function(child, cb){
			var intentNames = Object.keys(intents);
			var transformNames = Object.keys(transforms);

			var matchingIntent = intentNames.find(function(intentName){
				var matchingPattern = new RegExp(intents[intentName].config.pattern);
				return child.file.name.match(matchingPattern);
			});

			var matchingTransforms = intents[matchingIntent].config.transforms.map(function(transformName){
				var transform = transforms[transformName];

				if (transform.config && transform.config.pattern) {
					var matchingPattern = new RegExp(transform.config.pattern);
					return child.file.name.match(matchingPattern) ? transform : null;
				}
				return transform;
			}).filter(function(item){ return item });

			matchingTransforms = matchingTransforms || [{ transform: function(buffer){ next(null, buffer); } }];

			child.intent = matchingIntent;
			child.transforms = matchingTransforms;

			async.eachSeries(matchingTransforms, function(transform, cb){
				transform.transform(child.file.buffer, function(err, result){
					if (err) return cb(err);
					child.file.result = result;
					cb(err, result);
				});
			}, function(err){
				if (err) return cb(err);
			});
		}, next);
	} else {
		async.forEach(tree.children, function(child, cb){
			applyTransforms(child, intents, transforms);
		}, next);
	}
}

module.exports = applyTransforms;

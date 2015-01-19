var async = require('async');
var defaultTransform = require('./transform');

function applyTransforms(patternplate, tree, intents, transforms, env, next) {
	next = typeof next === 'function' ? next : function() {};

	// Early exit if no children
	if (tree.children.length === 0) {
		return next(null, tree);
	}

	if (tree.pattern) {
		async.forEach(tree.children, function(child, cb){
			var intentNames = Object.keys(intents);

			var matchingIntent = intentNames.find(function(intentName){
				var matchingPattern = new RegExp(intents[intentName].config.pattern);
				return child.file.name.match(matchingPattern);
			});

			var matchingTransforms = intents[matchingIntent].config.transforms.map(function(transformName){
				var transform = transforms[transformName];

				transform.config = Object.assign({ name: transformName }, transform.config || {});

				if (transform.config.pattern) {
					var matchingPattern = new RegExp(transform.config.pattern);
					return child.file.name.match(matchingPattern) ? transform : null;
				}
				var extended = Object.assign({}, defaultTransform, transform);
				var _transform = extended.transform;

				// Hook in lifecycle callbacks
				extended.transform = function(buffer, config, next) {
					patternplate.log.silly('Applying transform "' + transform.config.name + '" on', child.paths.absolute);
					patternplate.log.silly('Config', config);

					extended.beforeTransform(buffer, config, function(err, buffer){
						patternplate.log.silly('Executing beforeTransform for "' + transform.config.name + '" on', child.paths.absolute);

						_transform(buffer, config, function(err, buffer){
							patternplate.log.silly('Executing afterTransform for "' + transform.config.name + '" on', child.paths.absolute);

							extended.afterTransform(buffer, config, next);
						});
					});
				};

				return extended;
			}).filter(function(item){ return item; });

			matchingTransforms = matchingTransforms || [{ transform: function(buffer){ next(null, buffer); } }];

			child.intent = matchingIntent;
			child.transforms = matchingTransforms;

			async.eachSeries(matchingTransforms, function(transform, cb){
				var config = Object.assign({}, transform.config, transform.config[env] || {});

				transform.transform(child.file.buffer, config, function(err, result){
					if (err) {
						patternplate.log.warn('An error occured while running transform "' +  transform.config.name + '" on', child.paths.absolute);
						patternplate.log.verbose(err);
						return next(err);
					}

					patternplate.log.verbose('Transform "' + transform.config.name + '" executed successfully on', child.paths.absolute);
					child.file.result = result;
					cb(err, result);
				});
			}, function(err){
				if (err) return cb(err);
			});
		}, next);
	} else {
		async.forEach(tree.children, function(child, cb){
			applyTransforms(patternplate, child, intents, transforms, env, cb);
		}, next);
	}
}

module.exports = applyTransforms;

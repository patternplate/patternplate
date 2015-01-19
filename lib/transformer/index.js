var path = require('path');
var expose = require('./expose');
var applyTransforms = require('./apply-transforms');

function transformer(patternplate, next) {
	var executors = ['intents', 'transforms'];

	// Require default executors
	executors.forEach(function(exec){
		var dirname = path.resolve(__dirname, '../../', patternplate.defaults.api, patternplate.defaults.executors[exec].dir);
		var pattern = patternplate.defaults.executors[exec].pattern;
		patternplate[exec] = expose(dirname, pattern);
	});

	// Require user executors (if any)
	executors.forEach(function(exec){
		var dirname = path.resolve(patternplate.config.paths.root, patternplate.config.api, patternplate.config.executors[exec].dir);
		var pattern = patternplate.config.executors[exec].pattern;
		patternplate[exec] = Object.assign({}, patternplate[exec] || {}, expose(dirname, pattern));
	});

	// Check sanity of transform definitions
	var invalidTransforms = Object.keys(patternplate.transforms).filter(function(transform){
		if (typeof patternplate.transforms[transform].transform !== 'function') {
			patternplate.log.warn('Transformer: transform', transform, 'does not contain a transform method');
			return true;
		}
	});

	// Remove invalid transforms
	invalidTransforms.forEach(function(invalidTransform){
		delete patternplate.transforms[invalidTransform];
	});

	// Check sanity of intent definitions
	var invalidIntents = Object.keys(patternplate.intents).filter(function(intent){
		if (! patternplate.intents[intent].config) {
			patternplate.log.warn('Transformer: intent', intent, 'does not contain a config object');
			return true;
		}

		var intentTransforms = patternplate.intents[intent].config.transforms;
		intentTransforms = Array.isArray(intentTransforms) ? intentTransforms : [intentTransforms];
		patternplate.intents[intent].config.transforms = intentTransforms;

		if (! intentTransforms.length) {
			patternplate.log.warn('Transformer: intent', intent, 'does not contain a transform key in config');
			return true;
		}

		intentTransforms.forEach(function(intentTransform){
			if (! patternplate.transforms[intentTransform]) {
				patternplate.log.warn('Test');
			}
		});
	});

	// Remove invalid intents
	invalidIntents.forEach(function(invalidIntent){
		delete patternplate.transforms[invalidIntent];
	});

	// apply transforms
	applyTransforms(patternplate,
		patternplate.patterns, patternplate.intents,
		patternplate.transforms, patternplate.config.env, next);
}

module.exports = transformer;

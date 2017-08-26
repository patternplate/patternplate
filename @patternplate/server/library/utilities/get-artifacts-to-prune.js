'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = getArtifactsToPrune;

var _path = require('path');

var _lodash = require('lodash');

var _patternplateTransformsCore = require('patternplate-transforms-core');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function getArtifactsToPrune(search, patterns, artifacts, config) {
	return artifacts.reduce((results, artifact) => {
		const pattern = (0, _lodash.find)(patterns, { id: artifact.id });

		// prune all artifact files without a corresponding pattern
		if (!pattern) {
			return [].concat(_toConsumableArray(results), _toConsumableArray(artifact.files));
		}

		// get expected artifact files
		const expected = pattern.files.map(file => {
			const fileExtension = (0, _path.extname)(file);
			const formatName = fileExtension.slice(1);

			const format = config.formats[formatName];

			if (!format) {
				return false;
			}

			const transformNames = format.transforms || [];
			const lastTransformName = transformNames[transformNames.length - 1];
			const lastTransform = config.transforms[lastTransformName] || {};

			const fileType = format.name.toLowerCase();
			const targetExtension = lastTransform.outFormat || fileExtension.slice(1);

			const expectedRelativePath = (0, _patternplateTransformsCore.resolvePathFormatString)(config.resolve, pattern.id, fileType, targetExtension);

			return (0, _path.resolve)(search, expectedRelativePath);
		}).filter(Boolean);

		// prune artifact files with pattern but no file corresponding
		const unexpected = artifact.files.filter(file => expected.indexOf(file) === -1);
		return [].concat(_toConsumableArray(results), _toConsumableArray(unexpected));
	}, []);
}
module.exports = exports['default'];
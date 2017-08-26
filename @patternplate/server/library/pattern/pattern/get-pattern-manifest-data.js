'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _lodash = require('lodash');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

exports.default = getPatternManifestsData;


function getPatternManifestsData(base) {
	let patterns = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	let pool = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];

	return Object.values(patterns).map(id => {
		const dependency = (0, _lodash.find)(pool, { id: id });

		if (!dependency) {
			throw new Error(`Could not find dependency ${id}`);
		}

		return [dependency].concat(_toConsumableArray(getPatternManifestsData(base, dependency.patterns, pool)));
	});
}
module.exports = exports['default'];
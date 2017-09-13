'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _lodash = require('lodash');

var _applyTransforms = require('./apply-transforms');

var _applyTransforms2 = _interopRequireDefault(_applyTransforms);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = getTransform;


function getTransform(transformFunctions, config) {
	return (() => {
		var _ref = _asyncToGenerator(function* (file) {
			const patterns = config.patterns;
			const log = config.log;
			const transformConfigs = config.transformConfigs;

			const format = patterns.formats[file.format];

			if (!(0, _lodash.isObject)(format)) {
				const formatNames = Object.keys(patterns.formats);
				log.debug(`${file.path} has no configured format. Available: ${formatNames}`);
				return null;
			}

			file.meta.devDependencies = getDevDependencies(file, format);

			return (0, _applyTransforms2.default)(file, format.transforms, {
				transformConfigs: transformConfigs,
				transformFunctions: transformFunctions,
				format: format
			});
		});

		return function (_x) {
			return _ref.apply(this, arguments);
		};
	})();
}

function getDevDependencies(file, format) {
	const formatDependencies = format.dependencies || [];
	return [].concat(_toConsumableArray(file.meta.devDependencies), _toConsumableArray(formatDependencies));
}
module.exports = exports['default'];
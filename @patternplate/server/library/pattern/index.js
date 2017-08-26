'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.normalizeFormats = undefined;

var _pattern = require('./pattern');

var _pattern2 = _interopRequireDefault(_pattern);

var _normalizeFormats = require('./normalize-formats');

var _normalizeFormats2 = _interopRequireDefault(_normalizeFormats);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

exports.default = pattern;
exports.normalizeFormats = _normalizeFormats2.default;


function pattern(application) {
	const config = application.configuration.patterns || {};
	config.formats = (0, _normalizeFormats2.default)(config.formats);

	return {
		factory: function factory() {
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _pattern2.default.apply(undefined, [].concat(_toConsumableArray(args), [application.cache]));
		},

		class: _pattern.Pattern
	};
}
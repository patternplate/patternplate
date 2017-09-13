'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _lodash = require('lodash');

var _cache = require('./cache');

var _cache2 = _interopRequireDefault(_cache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = startCache;


function startCache(application) {
	const config = application.configuration.cache;
	return config ? (0, _cache2.default)(config) : { config: {}, get: _lodash.noop, set: _lodash.noop };
}
module.exports = exports['default'];
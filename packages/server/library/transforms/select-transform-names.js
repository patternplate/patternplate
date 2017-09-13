'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _lodash = require('lodash');

exports.default = selectTransformNames;


function selectTransformNames(config) {
	return Object.keys((0, _lodash.omit)(config, ['path', 'options']));
}
module.exports = exports['default'];
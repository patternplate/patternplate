'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _lodash = require('lodash');

function unwrap(fn, path) {
	return function (e) {
		return fn((0, _lodash.get)(e, path));
	};
}

exports.default = unwrap;
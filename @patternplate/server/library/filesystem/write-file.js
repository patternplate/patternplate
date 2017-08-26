'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _fs = require('fs');

var _denodeify = require('denodeify');

var _denodeify2 = _interopRequireDefault(_denodeify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _denodeify2.default)(_fs.writeFile);
module.exports = exports['default'];
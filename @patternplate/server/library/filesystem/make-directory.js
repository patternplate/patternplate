'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _denodeify = require('denodeify');

var _denodeify2 = _interopRequireDefault(_denodeify);

var _mkdirp = require('mkdirp');

var _mkdirp2 = _interopRequireDefault(_mkdirp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _denodeify2.default)(_mkdirp2.default);
module.exports = exports['default'];
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.type = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _lodash = require('lodash');

var _urlQuery = require('../utils/url-query');

var _urlQuery2 = _interopRequireDefault(_urlQuery);

var _ = require('./');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = changeType;
var type = exports.type = 'CHANGE_TYPE';

function changeType(input) {
  _assert2.default.equal(typeof input === 'undefined' ? 'undefined' : _typeof(input), 'string', 'input for changeType action must be of type string');

  return function (dispatch, getState) {
    var location = getState().routing.locationBeforeTransitions;
    var parsed = _urlQuery2.default.parse(location.query.source || '');
    var type = (0, _lodash.includes)(['source', 'transformed'], input) ? input : 'source';
    var query = { type: type };
    var source = _urlQuery2.default.format((0, _lodash.merge)({}, parsed, { query: query }));
    dispatch((0, _.patchLocation)({ query: { source: source } }));
  };
}

changeType.type = type;
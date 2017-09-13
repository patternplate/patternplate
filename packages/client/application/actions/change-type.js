'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.type = undefined;

const _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

const _assert = require('assert');

const _assert2 = _interopRequireDefault(_assert);

const _lodash = require('lodash');

const _urlQuery = require('../utils/url-query');

const _urlQuery2 = _interopRequireDefault(_urlQuery);

const _ = require('./');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = changeType;
const type = exports.type = 'CHANGE_TYPE';

function changeType(input) {
  _assert2.default.equal(typeof input === 'undefined' ? 'undefined' : _typeof(input), 'string', 'input for changeType action must be of type string');

  return function (dispatch, getState) {
    const location = getState().routing.locationBeforeTransitions;
    const parsed = _urlQuery2.default.parse(location.query.source || '');
    const type = (0, _lodash.includes)(['source', 'transformed'], input) ? input : 'source';
    const query = { type };
    const source = _urlQuery2.default.format((0, _lodash.merge)({}, parsed, { query }));
    dispatch((0, _.patchLocation)({ query: { source } }));
  };
}

changeType.type = type;
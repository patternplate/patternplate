'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

const _assert = require('assert');

const _assert2 = _interopRequireDefault(_assert);

const _reduxActions = require('redux-actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (action) {
  const options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  (0, _assert2.default)(typeof action === 'function', 'toggle needs an action to create a handler for, received ' + action + ' of type ' + (typeof action === 'undefined' ? 'undefined' : _typeof(action)));

  return (0, _reduxActions.handleActions)({
    '@@router/LOCATION_CHANGE': function routerLOCATION_CHANGE(_, _ref) {
      const payload = _ref.payload;

      if (!(action.key in payload.query)) {
        return options.defaultValue;
      }
      return payload.query[action.key] === 'true';
    }
  }, options.defaultValue);
};
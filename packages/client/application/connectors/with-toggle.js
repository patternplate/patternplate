'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withToggle;

const _assert = require('assert');

const _assert2 = _interopRequireDefault(_assert);

const _reactRedux = require('react-redux');

const _lodash = require('lodash');

const _shortcuts = require('../shortcuts');

const _shortcuts2 = _interopRequireDefault(_shortcuts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const s = (0, _lodash.values)((0, _shortcuts2.default)());

function withToggle(action) {
  const shortcut = s.find((i) => {
    return i.key === action.key;
  });

  (0, _assert2.default)(shortcut, action + ' passed to withToggle has no matching shortcut found for ' + action.key);

  return function (Component) {
    const mapProps = function mapProps(state) {
      const enabled = state[action.property];
      return { enabled, shortcut };
    };
    return (0, _reactRedux.connect)(mapProps)(Component);
  };
}
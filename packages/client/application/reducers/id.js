'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _getIdByPathname = require('../utils/get-id-by-pathname');

const _getIdByPathname2 = _interopRequireDefault(_getIdByPathname);

const _handleDependentActions = require('../actions/handle-dependent-actions');

const _handleDependentActions2 = _interopRequireDefault(_handleDependentActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handler(_, _ref, _ref2) {
  const payload = _ref.payload;
  const base = _ref2.base;

  return (0, _getIdByPathname2.default)(payload.pathname, base) || '/';
}

exports.default = (0, _handleDependentActions2.default)({
  '@@router/LOCATION_CHANGE': handler
}, {
  dependencies: ['base']
});
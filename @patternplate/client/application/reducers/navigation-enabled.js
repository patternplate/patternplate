'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require('../actions');

var actions = _interopRequireWildcard(_actions);

var _toggle = require('./toggle');

var _toggle2 = _interopRequireDefault(_toggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = (0, _toggle2.default)(actions.toggleNavigation, { defaultValue: false });
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9yZWR1Y2Vycy9uYXZpZ2F0aW9uLWVuYWJsZWQuanMiXSwibmFtZXMiOlsiYWN0aW9ucyIsInRvZ2dsZU5hdmlnYXRpb24iLCJkZWZhdWx0VmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztJQUFZQSxPOztBQUNaOzs7Ozs7OztrQkFFZSxzQkFBT0EsUUFBUUMsZ0JBQWYsRUFBaUMsRUFBQ0MsY0FBYyxLQUFmLEVBQWpDLEMiLCJmaWxlIjoibmF2aWdhdGlvbi1lbmFibGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zJztcbmltcG9ydCB0b2dnbGUgZnJvbSAnLi90b2dnbGUnO1xuXG5leHBvcnQgZGVmYXVsdCB0b2dnbGUoYWN0aW9ucy50b2dnbGVOYXZpZ2F0aW9uLCB7ZGVmYXVsdFZhbHVlOiBmYWxzZX0pO1xuIl19
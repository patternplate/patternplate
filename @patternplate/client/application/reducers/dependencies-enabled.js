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

exports.default = (0, _toggle2.default)(actions.toggleDependencies, { defaultValue: false });
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9yZWR1Y2Vycy9kZXBlbmRlbmNpZXMtZW5hYmxlZC5qcyJdLCJuYW1lcyI6WyJhY3Rpb25zIiwidG9nZ2xlRGVwZW5kZW5jaWVzIiwiZGVmYXVsdFZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7SUFBWUEsTzs7QUFDWjs7Ozs7Ozs7a0JBRWUsc0JBQU9BLFFBQVFDLGtCQUFmLEVBQW1DLEVBQUNDLGNBQWMsS0FBZixFQUFuQyxDIiwiZmlsZSI6ImRlcGVuZGVuY2llcy1lbmFibGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zJztcbmltcG9ydCB0b2dnbGUgZnJvbSAnLi90b2dnbGUnO1xuXG5leHBvcnQgZGVmYXVsdCB0b2dnbGUoYWN0aW9ucy50b2dnbGVEZXBlbmRlbmNpZXMsIHtkZWZhdWx0VmFsdWU6IGZhbHNlfSk7XG4iXX0=
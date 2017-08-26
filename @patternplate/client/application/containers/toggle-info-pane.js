'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require('../actions');

var actions = _interopRequireWildcard(_actions);

var _toggleInfoPane = require('../components/toggle-info-pane');

var _toggleInfoPane2 = _interopRequireDefault(_toggleInfoPane);

var _withToggle = require('../connectors/with-toggle');

var _withToggle2 = _interopRequireDefault(_withToggle);

var _withActiveForPattern = require('../connectors/with-active-for-pattern');

var _withActiveForPattern2 = _interopRequireDefault(_withActiveForPattern);

var _behaviours = require('../behaviours');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var InfoPaneToggle = (0, _withToggle2.default)(actions.toggleInfo)(_toggleInfoPane2.default);
exports.default = (0, _withActiveForPattern2.default)((0, _behaviours.skippable)(InfoPaneToggle));
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb250YWluZXJzL3RvZ2dsZS1pbmZvLXBhbmUuanMiXSwibmFtZXMiOlsiYWN0aW9ucyIsIkluZm9QYW5lVG9nZ2xlIiwidG9nZ2xlSW5mbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0lBQVlBLE87O0FBQ1o7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1DLGlCQUFpQiwwQkFBV0QsUUFBUUUsVUFBbkIsMkJBQXZCO2tCQUNlLG9DQUFxQiwyQkFBVUQsY0FBVixDQUFyQixDIiwiZmlsZSI6InRvZ2dsZS1pbmZvLXBhbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IEluZm9QYW5lIGZyb20gJy4uL2NvbXBvbmVudHMvdG9nZ2xlLWluZm8tcGFuZSc7XG5pbXBvcnQgd2l0aFRvZ2dsZSBmcm9tICcuLi9jb25uZWN0b3JzL3dpdGgtdG9nZ2xlJztcbmltcG9ydCB3aXRoQWN0aXZlRm9yUGF0dGVybiBmcm9tICcuLi9jb25uZWN0b3JzL3dpdGgtYWN0aXZlLWZvci1wYXR0ZXJuJztcbmltcG9ydCB7c2tpcHBhYmxlfSBmcm9tICcuLi9iZWhhdmlvdXJzJztcblxuY29uc3QgSW5mb1BhbmVUb2dnbGUgPSB3aXRoVG9nZ2xlKGFjdGlvbnMudG9nZ2xlSW5mbykoSW5mb1BhbmUpO1xuZXhwb3J0IGRlZmF1bHQgd2l0aEFjdGl2ZUZvclBhdHRlcm4oc2tpcHBhYmxlKEluZm9QYW5lVG9nZ2xlKSk7XG4iXX0=
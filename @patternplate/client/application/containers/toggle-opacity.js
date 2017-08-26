'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require('../actions');

var actions = _interopRequireWildcard(_actions);

var _toggleOpacity = require('../components/toggle-opacity');

var _toggleOpacity2 = _interopRequireDefault(_toggleOpacity);

var _withToggle = require('../connectors/with-toggle');

var _withToggle2 = _interopRequireDefault(_withToggle);

var _withActiveForPattern = require('../connectors/with-active-for-pattern');

var _withActiveForPattern2 = _interopRequireDefault(_withActiveForPattern);

var _behaviours = require('../behaviours');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var OpacityToggle = (0, _withToggle2.default)(actions.toggleOpacity)(_toggleOpacity2.default);
exports.default = (0, _withActiveForPattern2.default)((0, _behaviours.skippable)(OpacityToggle));
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb250YWluZXJzL3RvZ2dsZS1vcGFjaXR5LmpzIl0sIm5hbWVzIjpbImFjdGlvbnMiLCJPcGFjaXR5VG9nZ2xlIiwidG9nZ2xlT3BhY2l0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0lBQVlBLE87O0FBQ1o7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1DLGdCQUFnQiwwQkFBV0QsUUFBUUUsYUFBbkIsMEJBQXRCO2tCQUNlLG9DQUFxQiwyQkFBVUQsYUFBVixDQUFyQixDIiwiZmlsZSI6InRvZ2dsZS1vcGFjaXR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zJztcbmltcG9ydCBPcGFjaXR5IGZyb20gJy4uL2NvbXBvbmVudHMvdG9nZ2xlLW9wYWNpdHknO1xuaW1wb3J0IHdpdGhUb2dnbGUgZnJvbSAnLi4vY29ubmVjdG9ycy93aXRoLXRvZ2dsZSc7XG5pbXBvcnQgd2l0aEFjdGl2ZUZvclBhdHRlcm4gZnJvbSAnLi4vY29ubmVjdG9ycy93aXRoLWFjdGl2ZS1mb3ItcGF0dGVybic7XG5pbXBvcnQge3NraXBwYWJsZX0gZnJvbSAnLi4vYmVoYXZpb3Vycyc7XG5cbmNvbnN0IE9wYWNpdHlUb2dnbGUgPSB3aXRoVG9nZ2xlKGFjdGlvbnMudG9nZ2xlT3BhY2l0eSkoT3BhY2l0eSk7XG5leHBvcnQgZGVmYXVsdCB3aXRoQWN0aXZlRm9yUGF0dGVybihza2lwcGFibGUoT3BhY2l0eVRvZ2dsZSkpO1xuIl19
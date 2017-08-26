'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require('../actions');

var actions = _interopRequireWildcard(_actions);

var _toggleCode = require('../components/toggle-code');

var _toggleCode2 = _interopRequireDefault(_toggleCode);

var _withToggle = require('../connectors/with-toggle');

var _withToggle2 = _interopRequireDefault(_withToggle);

var _withActiveForPattern = require('../connectors/with-active-for-pattern');

var _withActiveForPattern2 = _interopRequireDefault(_withActiveForPattern);

var _behaviours = require('../behaviours');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var CodeToggle = (0, _withToggle2.default)(actions.toggleCode)(_toggleCode2.default);
exports.default = (0, _withActiveForPattern2.default)((0, _behaviours.skippable)(CodeToggle));
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb250YWluZXJzL3RvZ2dsZS1jb2RlLmpzIl0sIm5hbWVzIjpbImFjdGlvbnMiLCJDb2RlVG9nZ2xlIiwidG9nZ2xlQ29kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0lBQVlBLE87O0FBQ1o7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1DLGFBQWEsMEJBQVdELFFBQVFFLFVBQW5CLHVCQUFuQjtrQkFDZSxvQ0FBcUIsMkJBQVVELFVBQVYsQ0FBckIsQyIsImZpbGUiOiJ0b2dnbGUtY29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgQ29kZSBmcm9tICcuLi9jb21wb25lbnRzL3RvZ2dsZS1jb2RlJztcbmltcG9ydCB3aXRoVG9nZ2xlIGZyb20gJy4uL2Nvbm5lY3RvcnMvd2l0aC10b2dnbGUnO1xuaW1wb3J0IHdpdGhBY3RpdmVGb3JQYXR0ZXJuIGZyb20gJy4uL2Nvbm5lY3RvcnMvd2l0aC1hY3RpdmUtZm9yLXBhdHRlcm4nO1xuaW1wb3J0IHtza2lwcGFibGV9IGZyb20gJy4uL2JlaGF2aW91cnMnO1xuXG5jb25zdCBDb2RlVG9nZ2xlID0gd2l0aFRvZ2dsZShhY3Rpb25zLnRvZ2dsZUNvZGUpKENvZGUpO1xuZXhwb3J0IGRlZmF1bHQgd2l0aEFjdGl2ZUZvclBhdHRlcm4oc2tpcHBhYmxlKENvZGVUb2dnbGUpKTtcbiJdfQ==
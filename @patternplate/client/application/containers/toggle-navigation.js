'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require('../actions');

var actions = _interopRequireWildcard(_actions);

var _toggleNavigation = require('../components/toggle-navigation');

var _toggleNavigation2 = _interopRequireDefault(_toggleNavigation);

var _withToggle = require('../connectors/with-toggle');

var _withToggle2 = _interopRequireDefault(_withToggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = (0, _withToggle2.default)(actions.toggleNavigation)(_toggleNavigation2.default);
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb250YWluZXJzL3RvZ2dsZS1uYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbImFjdGlvbnMiLCJ0b2dnbGVOYXZpZ2F0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7SUFBWUEsTzs7QUFDWjs7OztBQUNBOzs7Ozs7OztrQkFFZSwwQkFBV0EsUUFBUUMsZ0JBQW5CLDZCIiwiZmlsZSI6InRvZ2dsZS1uYXZpZ2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zJztcbmltcG9ydCBUb2dnbGVOYXZpZ2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvdG9nZ2xlLW5hdmlnYXRpb24nO1xuaW1wb3J0IHdpdGhUb2dnbGUgZnJvbSAnLi4vY29ubmVjdG9ycy93aXRoLXRvZ2dsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUb2dnbGUoYWN0aW9ucy50b2dnbGVOYXZpZ2F0aW9uKShUb2dnbGVOYXZpZ2F0aW9uKTtcbiJdfQ==
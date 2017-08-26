'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require('../actions');

var actions = _interopRequireWildcard(_actions);

var _toggleSearch = require('../components/toggle-search');

var _toggleSearch2 = _interopRequireDefault(_toggleSearch);

var _withToggle = require('../connectors/with-toggle');

var _withToggle2 = _interopRequireDefault(_withToggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = (0, _withToggle2.default)(actions.toggleSearch)(_toggleSearch2.default);
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb250YWluZXJzL3RvZ2dsZS1zZWFyY2guanMiXSwibmFtZXMiOlsiYWN0aW9ucyIsInRvZ2dsZVNlYXJjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0lBQVlBLE87O0FBQ1o7Ozs7QUFDQTs7Ozs7Ozs7a0JBRWUsMEJBQVdBLFFBQVFDLFlBQW5CLHlCIiwiZmlsZSI6InRvZ2dsZS1zZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IFNlYXJjaEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL3RvZ2dsZS1zZWFyY2gnO1xuaW1wb3J0IHdpdGhUb2dnbGUgZnJvbSAnLi4vY29ubmVjdG9ycy93aXRoLXRvZ2dsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUb2dnbGUoYWN0aW9ucy50b2dnbGVTZWFyY2gpKFNlYXJjaEJ1dHRvbik7XG4iXX0=
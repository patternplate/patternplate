'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require('../actions');

var actions = _interopRequireWildcard(_actions);

var _toggleDoc = require('../components/toggle-doc');

var _toggleDoc2 = _interopRequireDefault(_toggleDoc);

var _withToggle = require('../connectors/with-toggle');

var _withToggle2 = _interopRequireDefault(_withToggle);

var _withActiveForDoc = require('../connectors/with-active-for-doc');

var _withActiveForDoc2 = _interopRequireDefault(_withActiveForDoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var DocToggle = (0, _withToggle2.default)(actions.toggleDoc)(_toggleDoc2.default);
exports.default = (0, _withActiveForDoc2.default)(DocToggle);
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb250YWluZXJzL3RvZ2dsZS1kb2MuanMiXSwibmFtZXMiOlsiYWN0aW9ucyIsIkRvY1RvZ2dsZSIsInRvZ2dsZURvYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0lBQVlBLE87O0FBQ1o7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQU1DLFlBQVksMEJBQVdELFFBQVFFLFNBQW5CLHNCQUFsQjtrQkFDZSxnQ0FBaUJELFNBQWpCLEMiLCJmaWxlIjoidG9nZ2xlLWRvYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgRG9jIGZyb20gJy4uL2NvbXBvbmVudHMvdG9nZ2xlLWRvYyc7XG5pbXBvcnQgd2l0aFRvZ2dsZSBmcm9tICcuLi9jb25uZWN0b3JzL3dpdGgtdG9nZ2xlJztcbmltcG9ydCB3aXRoQWN0aXZlRm9yRG9jIGZyb20gJy4uL2Nvbm5lY3RvcnMvd2l0aC1hY3RpdmUtZm9yLWRvYyc7XG5cbmNvbnN0IERvY1RvZ2dsZSA9IHdpdGhUb2dnbGUoYWN0aW9ucy50b2dnbGVEb2MpKERvYyk7XG5leHBvcnQgZGVmYXVsdCB3aXRoQWN0aXZlRm9yRG9jKERvY1RvZ2dsZSk7XG4iXX0=
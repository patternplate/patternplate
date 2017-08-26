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

exports.default = (0, _toggle2.default)(actions.toggleManifest, { defaultValue: false });
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9yZWR1Y2Vycy9tYW5pZmVzdC1lbmFibGVkLmpzIl0sIm5hbWVzIjpbImFjdGlvbnMiLCJ0b2dnbGVNYW5pZmVzdCIsImRlZmF1bHRWYWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0lBQVlBLE87O0FBQ1o7Ozs7Ozs7O2tCQUVlLHNCQUFPQSxRQUFRQyxjQUFmLEVBQStCLEVBQUNDLGNBQWMsS0FBZixFQUEvQixDIiwiZmlsZSI6Im1hbmlmZXN0LWVuYWJsZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IHRvZ2dsZSBmcm9tICcuL3RvZ2dsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHRvZ2dsZShhY3Rpb25zLnRvZ2dsZU1hbmlmZXN0LCB7ZGVmYXVsdFZhbHVlOiBmYWxzZX0pO1xuIl19
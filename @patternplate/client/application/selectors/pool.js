'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reselect = require('reselect');

var _seamlessImmutable = require('seamless-immutable');

var _seamlessImmutable2 = _interopRequireDefault(_seamlessImmutable);

var _docs = require('../selectors/docs');

var _navigation = require('../selectors/navigation');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reselect.createSelector)(_docs.flat, _navigation.flat, function (docs, nav) {
	return _seamlessImmutable2.default.from(docs).concat(nav);
});
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9zZWxlY3RvcnMvcG9vbC5qcyJdLCJuYW1lcyI6WyJkb2NzIiwibmF2IiwiZnJvbSIsImNvbmNhdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztrQkFFZSw0REFHZCxVQUFDQSxJQUFELEVBQU9DLEdBQVA7QUFBQSxRQUFlLDRCQUFVQyxJQUFWLENBQWVGLElBQWYsRUFBcUJHLE1BQXJCLENBQTRCRixHQUE1QixDQUFmO0FBQUEsQ0FIYyxDIiwiZmlsZSI6InBvb2wuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZVNlbGVjdG9yfSBmcm9tICdyZXNlbGVjdCc7XG5pbXBvcnQgSW1tdXRhYmxlIGZyb20gJ3NlYW1sZXNzLWltbXV0YWJsZSc7XG5pbXBvcnQge2ZsYXQgYXMgc2VsZWN0RG9jc30gZnJvbSAnLi4vc2VsZWN0b3JzL2RvY3MnO1xuaW1wb3J0IHtmbGF0IGFzIHNlbGVjdE5hdmlnYXRpb259IGZyb20gJy4uL3NlbGVjdG9ycy9uYXZpZ2F0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2VsZWN0b3IoXG5cdHNlbGVjdERvY3MsXG5cdHNlbGVjdE5hdmlnYXRpb24sXG5cdChkb2NzLCBuYXYpID0+IEltbXV0YWJsZS5mcm9tKGRvY3MpLmNvbmNhdChuYXYpXG4pO1xuIl19
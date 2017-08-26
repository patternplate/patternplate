'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = require('react-redux');

var _behaviours = require('../behaviours');

var _docPane = require('../components/doc-pane');

var _docPane2 = _interopRequireDefault(_docPane);

var _item = require('../selectors/item');

var item = _interopRequireWildcard(_item);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(mapProps)((0, _behaviours.skippable)((0, _behaviours.mountable)(_docPane2.default)));


function mapProps(state) {
	return {
		active: Boolean(item.selectContents(state)),
		env: item.selectEnv(state),
		doc: item.selectContents(state)
	};
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb250YWluZXJzL2RvYy1wYW5lLmpzIl0sIm5hbWVzIjpbIml0ZW0iLCJtYXBQcm9wcyIsInN0YXRlIiwiYWN0aXZlIiwiQm9vbGVhbiIsInNlbGVjdENvbnRlbnRzIiwiZW52Iiwic2VsZWN0RW52IiwiZG9jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7OztBQUNBOztJQUFZQSxJOzs7Ozs7a0JBRUcseUJBQVFDLFFBQVIsRUFBa0IsMkJBQVUsNkNBQVYsQ0FBbEIsQzs7O0FBRWYsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDeEIsUUFBTztBQUNOQyxVQUFRQyxRQUFRSixLQUFLSyxjQUFMLENBQW9CSCxLQUFwQixDQUFSLENBREY7QUFFTkksT0FBS04sS0FBS08sU0FBTCxDQUFlTCxLQUFmLENBRkM7QUFHTk0sT0FBS1IsS0FBS0ssY0FBTCxDQUFvQkgsS0FBcEI7QUFIQyxFQUFQO0FBS0EiLCJmaWxlIjoiZG9jLXBhbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHttb3VudGFibGUsIHNraXBwYWJsZX0gZnJvbSAnLi4vYmVoYXZpb3Vycyc7XG5pbXBvcnQgRG9jUGFuZSBmcm9tICcuLi9jb21wb25lbnRzL2RvYy1wYW5lJztcbmltcG9ydCAqIGFzIGl0ZW0gZnJvbSAnLi4vc2VsZWN0b3JzL2l0ZW0nO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFByb3BzKShza2lwcGFibGUobW91bnRhYmxlKERvY1BhbmUpKSk7XG5cbmZ1bmN0aW9uIG1hcFByb3BzKHN0YXRlKSB7XG5cdHJldHVybiB7XG5cdFx0YWN0aXZlOiBCb29sZWFuKGl0ZW0uc2VsZWN0Q29udGVudHMoc3RhdGUpKSxcblx0XHRlbnY6IGl0ZW0uc2VsZWN0RW52KHN0YXRlKSxcblx0XHRkb2M6IGl0ZW0uc2VsZWN0Q29udGVudHMoc3RhdGUpXG5cdH07XG59XG4iXX0=
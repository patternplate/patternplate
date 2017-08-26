'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _class2, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _pureRenderDecorator = require('pure-render-decorator');

var _pureRenderDecorator2 = _interopRequireDefault(_pureRenderDecorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Headline = (0, _pureRenderDecorator2.default)(_class = (_temp2 = _class2 = function (_Component) {
	(0, _inherits3.default)(Headline, _Component);

	function Headline() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, Headline);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Headline.__proto__ || (0, _getPrototypeOf2.default)(Headline)).call.apply(_ref, [this].concat(args))), _this), _this.displayName = 'Headline', _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(Headline, [{
		key: 'render',
		value: function render() {
			var TagName = 'h' + this.props.order;
			var className = (0, _classnames2.default)('h', 'h' + (this.props.display || this.props.order), this.props.className);

			return _react2.default.createElement(
				TagName,
				{ className: className },
				this.props.children
			);
		}
	}]);
	return Headline;
}(_react.Component), _class2.propTypes = {
	children: _react.PropTypes.node.isRequired,
	order: _react.PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
	display: _react.PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
	className: _react.PropTypes.string
}, _class2.defaultProps = {
	children: 'Headline',
	order: 1
}, _temp2)) || _class;

exports.default = Headline;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2NvbW1vbi9oZWFkbGluZS5qcyJdLCJuYW1lcyI6WyJIZWFkbGluZSIsImRpc3BsYXlOYW1lIiwiVGFnTmFtZSIsInByb3BzIiwib3JkZXIiLCJjbGFzc05hbWUiLCJkaXNwbGF5IiwiY2hpbGRyZW4iLCJwcm9wVHlwZXMiLCJub2RlIiwiaXNSZXF1aXJlZCIsIm9uZU9mIiwic3RyaW5nIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7SUFHTUEsUTs7Ozs7Ozs7Ozs7Ozs7OE1BQ0xDLFcsR0FBYyxVOzs7OzsyQkFjTDtBQUNSLE9BQU1DLGdCQUFjLEtBQUtDLEtBQUwsQ0FBV0MsS0FBL0I7QUFDQSxPQUFNQyxZQUFZLDBCQUFXLEdBQVgsU0FBb0IsS0FBS0YsS0FBTCxDQUFXRyxPQUFYLElBQXNCLEtBQUtILEtBQUwsQ0FBV0MsS0FBckQsR0FBOEQsS0FBS0QsS0FBTCxDQUFXRSxTQUF6RSxDQUFsQjs7QUFFQSxVQUNDO0FBQUMsV0FBRDtBQUFBLE1BQVMsV0FBV0EsU0FBcEI7QUFDRSxTQUFLRixLQUFMLENBQVdJO0FBRGIsSUFERDtBQUtBOzs7NkJBckJNQyxTLEdBQVk7QUFDbEJELFdBQVUsaUJBQU1FLElBQU4sQ0FBV0MsVUFESDtBQUVsQk4sUUFBTyxpQkFBTU8sS0FBTixDQUFZLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FBWixFQUFnQ0QsVUFGckI7QUFHbEJKLFVBQVMsaUJBQU1LLEtBQU4sQ0FBWSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLENBQVosQ0FIUztBQUlsQk4sWUFBVyxpQkFBTU87QUFKQyxDLFVBT1pDLFksR0FBZTtBQUNyQk4sV0FBVSxVQURXO0FBRXJCSCxRQUFPO0FBRmMsQzs7a0JBaUJSSixRIiwiZmlsZSI6ImhlYWRsaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBQcm9wVHlwZXMgYXMgdHlwZXN9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHB1cmUgZnJvbSAncHVyZS1yZW5kZXItZGVjb3JhdG9yJztcblxuQHB1cmVcbmNsYXNzIEhlYWRsaW5lIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0ZGlzcGxheU5hbWUgPSAnSGVhZGxpbmUnO1xuXG5cdHN0YXRpYyBwcm9wVHlwZXMgPSB7XG5cdFx0Y2hpbGRyZW46IHR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcblx0XHRvcmRlcjogdHlwZXMub25lT2YoWzEsIDIsIDMsIDQsIDUsIDZdKS5pc1JlcXVpcmVkLFxuXHRcdGRpc3BsYXk6IHR5cGVzLm9uZU9mKFsxLCAyLCAzLCA0LCA1LCA2XSksXG5cdFx0Y2xhc3NOYW1lOiB0eXBlcy5zdHJpbmdcblx0fTtcblxuXHRzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuXHRcdGNoaWxkcmVuOiAnSGVhZGxpbmUnLFxuXHRcdG9yZGVyOiAxXG5cdH07XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IFRhZ05hbWUgPSBgaCR7dGhpcy5wcm9wcy5vcmRlcn1gO1xuXHRcdGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzbmFtZXMoJ2gnLCBgaCR7dGhpcy5wcm9wcy5kaXNwbGF5IHx8IHRoaXMucHJvcHMub3JkZXJ9YCwgdGhpcy5wcm9wcy5jbGFzc05hbWUpO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxUYWdOYW1lIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cblx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XG5cdFx0XHQ8L1RhZ05hbWU+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkbGluZTtcbiJdfQ==
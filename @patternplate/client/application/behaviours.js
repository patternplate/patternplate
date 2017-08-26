'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

exports.mountable = mountable;
exports.skippable = skippable;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mountable(Component) {
	return function (_React$Component) {
		(0, _inherits3.default)(MountableComponent, _React$Component);

		function MountableComponent() {
			(0, _classCallCheck3.default)(this, MountableComponent);
			return (0, _possibleConstructorReturn3.default)(this, (MountableComponent.__proto__ || (0, _getPrototypeOf2.default)(MountableComponent)).apply(this, arguments));
		}

		(0, _createClass3.default)(MountableComponent, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				if (typeof this.props.onMount === 'function') {
					this.props.onMount();
				}
			}
		}, {
			key: 'render',
			value: function render() {
				var _props = this.props,
				    onMount = _props.onMount,
				    rest = (0, _objectWithoutProperties3.default)(_props, ['onMount']);

				return _react2.default.createElement(Component, rest);
			}
		}]);
		return MountableComponent;
	}(_react2.default.Component);
}

function skippable(Component) {
	var prop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'active';

	return function (props) {
		return props[prop] === true ? _react2.default.createElement(Component, props) : null;
	};
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHBsaWNhdGlvbi9iZWhhdmlvdXJzLmpzIl0sIm5hbWVzIjpbIm1vdW50YWJsZSIsInNraXBwYWJsZSIsIkNvbXBvbmVudCIsInByb3BzIiwib25Nb3VudCIsInJlc3QiLCJwcm9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFFZ0JBLFMsR0FBQUEsUztRQWNBQyxTLEdBQUFBLFM7O0FBaEJoQjs7Ozs7O0FBRU8sU0FBU0QsU0FBVCxDQUFtQkUsU0FBbkIsRUFBOEI7QUFDcEM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsdUNBQ3FCO0FBQ25CLFFBQUksT0FBTyxLQUFLQyxLQUFMLENBQVdDLE9BQWxCLEtBQThCLFVBQWxDLEVBQThDO0FBQzdDLFVBQUtELEtBQUwsQ0FBV0MsT0FBWDtBQUNBO0FBQ0Q7QUFMRjtBQUFBO0FBQUEsNEJBTVU7QUFBQSxpQkFDbUIsS0FBS0QsS0FEeEI7QUFBQSxRQUNEQyxPQURDLFVBQ0RBLE9BREM7QUFBQSxRQUNXQyxJQURYOztBQUVSLFdBQU8sOEJBQUMsU0FBRCxFQUFlQSxJQUFmLENBQVA7QUFDQTtBQVRGO0FBQUE7QUFBQSxHQUF3QyxnQkFBTUgsU0FBOUM7QUFXQTs7QUFFTSxTQUFTRCxTQUFULENBQW1CQyxTQUFuQixFQUErQztBQUFBLEtBQWpCSSxJQUFpQix1RUFBVixRQUFVOztBQUNyRCxRQUFPO0FBQUEsU0FBU0gsTUFBTUcsSUFBTixNQUFnQixJQUFoQixHQUF1Qiw4QkFBQyxTQUFELEVBQWVILEtBQWYsQ0FBdkIsR0FBaUQsSUFBMUQ7QUFBQSxFQUFQO0FBQ0EiLCJmaWxlIjoiYmVoYXZpb3Vycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBtb3VudGFibGUoQ29tcG9uZW50KSB7XG5cdHJldHVybiBjbGFzcyBNb3VudGFibGVDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRcdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLnByb3BzLm9uTW91bnQgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0dGhpcy5wcm9wcy5vbk1vdW50KCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJlbmRlcigpIHtcblx0XHRcdGNvbnN0IHtvbk1vdW50LCAuLi5yZXN0fSA9IHRoaXMucHJvcHM7XG5cdFx0XHRyZXR1cm4gPENvbXBvbmVudCB7Li4ucmVzdH0vPjtcblx0XHR9XG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBza2lwcGFibGUoQ29tcG9uZW50LCBwcm9wID0gJ2FjdGl2ZScpIHtcblx0cmV0dXJuIHByb3BzID0+IHByb3BzW3Byb3BdID09PSB0cnVlID8gPENvbXBvbmVudCB7Li4ucHJvcHN9Lz4gOiBudWxsO1xufVxuIl19
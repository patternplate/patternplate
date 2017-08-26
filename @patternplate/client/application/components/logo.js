'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\twidth: 100%;\n\theight: auto;\n\tstroke: ', ';\n\tstroke-width: 0;\n\tfill: ', ';\n'], ['\n\twidth: 100%;\n\theight: auto;\n\tstroke: ', ';\n\tstroke-width: 0;\n\tfill: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _svg = require('../utils/svg');

var svg = _interopRequireWildcard(_svg);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Logo = function (_React$Component) {
	(0, _inherits3.default)(Logo, _React$Component);

	function Logo() {
		(0, _classCallCheck3.default)(this, Logo);
		return (0, _possibleConstructorReturn3.default)(this, (Logo.__proto__ || (0, _getPrototypeOf2.default)(Logo)).apply(this, arguments));
	}

	(0, _createClass3.default)(Logo, [{
		key: 'render',
		value: function render() {
			var props = this.props;


			if (typeof props.source !== 'string') {
				return null;
			}

			var _svg$sanitize = svg.sanitize(svg.purge([svg.parse(props.source)])),
			    _svg$sanitize2 = (0, _slicedToArray3.default)(_svg$sanitize, 1),
			    sanitized = _svg$sanitize2[0];

			return _react2.default.createElement(
				'div',
				{ className: props.className },
				svg.render(sanitized)
			);
		}
	}]);
	return Logo;
}(_react2.default.Component);

exports.default = (0, _styledComponents2.default)(Logo)(_templateObject, function (props) {
	return props.theme.color;
}, function (props) {
	return props.theme.color;
});


Logo.propTypes = {
	className: _react.PropTypes.string,
	source: _react.PropTypes.string
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2xvZ28uanMiXSwibmFtZXMiOlsic3ZnIiwiTG9nbyIsInByb3BzIiwic291cmNlIiwic2FuaXRpemUiLCJwdXJnZSIsInBhcnNlIiwic2FuaXRpemVkIiwiY2xhc3NOYW1lIiwicmVuZGVyIiwiQ29tcG9uZW50IiwidGhlbWUiLCJjb2xvciIsInByb3BUeXBlcyIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztJQUFZQSxHOzs7Ozs7SUFFTkMsSTs7Ozs7Ozs7OzsyQkFDSTtBQUFBLE9BQ0RDLEtBREMsR0FDUSxJQURSLENBQ0RBLEtBREM7OztBQUdSLE9BQUksT0FBT0EsTUFBTUMsTUFBYixLQUF3QixRQUE1QixFQUFzQztBQUNyQyxXQUFPLElBQVA7QUFDQTs7QUFMTyx1QkFPWUgsSUFBSUksUUFBSixDQUFhSixJQUFJSyxLQUFKLENBQVUsQ0FBQ0wsSUFBSU0sS0FBSixDQUFVSixNQUFNQyxNQUFoQixDQUFELENBQVYsQ0FBYixDQVBaO0FBQUE7QUFBQSxPQU9ESSxTQVBDOztBQVNSLFVBQ0M7QUFBQTtBQUFBLE1BQUssV0FBV0wsTUFBTU0sU0FBdEI7QUFDRVIsUUFBSVMsTUFBSixDQUFXRixTQUFYO0FBREYsSUFERDtBQUtBOzs7RUFmaUIsZ0JBQU1HLFM7O2tCQWtCVixnQ0FBT1QsSUFBUCxDLGtCQUdKO0FBQUEsUUFBU0MsTUFBTVMsS0FBTixDQUFZQyxLQUFyQjtBQUFBLEMsRUFFRjtBQUFBLFFBQVNWLE1BQU1TLEtBQU4sQ0FBWUMsS0FBckI7QUFBQSxDOzs7QUFHVFgsS0FBS1ksU0FBTCxHQUFpQjtBQUNoQkwsWUFBVyxpQkFBRU0sTUFERztBQUVoQlgsU0FBUSxpQkFBRVc7QUFGTSxDQUFqQiIsImZpbGUiOiJsb2dvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzIGFzIHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0ICogYXMgc3ZnIGZyb20gJy4uL3V0aWxzL3N2Zyc7XG5cbmNsYXNzIExvZ28gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge3Byb3BzfSA9IHRoaXM7XG5cblx0XHRpZiAodHlwZW9mIHByb3BzLnNvdXJjZSAhPT0gJ3N0cmluZycpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdGNvbnN0IFtzYW5pdGl6ZWRdID0gc3ZnLnNhbml0aXplKHN2Zy5wdXJnZShbc3ZnLnBhcnNlKHByb3BzLnNvdXJjZSldKSk7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX0+XG5cdFx0XHRcdHtzdmcucmVuZGVyKHNhbml0aXplZCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChMb2dvKWBcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogYXV0bztcblx0c3Ryb2tlOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9yfTtcblx0c3Ryb2tlLXdpZHRoOiAwO1xuXHRmaWxsOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9yfTtcbmA7XG5cbkxvZ28ucHJvcFR5cGVzID0ge1xuXHRjbGFzc05hbWU6IHQuc3RyaW5nLFxuXHRzb3VyY2U6IHQuc3RyaW5nXG59O1xuIl19
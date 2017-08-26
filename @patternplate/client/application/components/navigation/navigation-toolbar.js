'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\tfill: ', ';\n'], ['\n\tfill: ', ';\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n\tdisplay: flex;\n\talign-items: center;\n\theight: 40px;\n\tpadding: 10px 15px;\n'], ['\n\tdisplay: flex;\n\talign-items: center;\n\theight: 40px;\n\tpadding: 10px 15px;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n\tmargin-left: auto;\n'], ['\n\tmargin-left: auto;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n\tdisplay: flex;\n\tflex-grow: 1;\n\talign-items: center;\n\tjustify-content: center;\n'], ['\n\tdisplay: flex;\n\tflex-grow: 1;\n\talign-items: center;\n\tjustify-content: center;\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n\tmargin-right: auto;\n'], ['\n\tmargin-right: auto;\n']);

exports.default = NavigationToolbar;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _icon = require('../common/icon');

var _icon2 = _interopRequireDefault(_icon);

var _indicator = require('../../containers/indicator');

var _indicator2 = _interopRequireDefault(_indicator);

var _toggleSearch = require('../../containers/toggle-search');

var _toggleSearch2 = _interopRequireDefault(_toggleSearch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NavigationToolbar() {
	return _react2.default.createElement(
		StyledNavigationToolbar,
		null,
		_react2.default.createElement(
			StyledSettings,
			null,
			_react2.default.createElement(SettingsButton, null)
		),
		_react2.default.createElement(
			StyledSearch,
			null,
			_react2.default.createElement(_toggleSearch2.default, null)
		),
		_react2.default.createElement(
			StyledIndicator,
			null,
			_react2.default.createElement(_indicator2.default, null)
		)
	);
}

function SettingsButton() {
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(StyledIcon, {
			size: 's',
			symbol: 'placeholder'
		})
	);
}

var StyledIcon = (0, _styledComponents2.default)(_icon2.default)(_templateObject, function (props) {
	return props.theme.color;
});

var StyledNavigationToolbar = _styledComponents2.default.div(_templateObject2);

var StyledIndicator = _styledComponents2.default.div(_templateObject3);

var StyledSearch = _styledComponents2.default.div(_templateObject4);

var StyledSettings = _styledComponents2.default.div(_templateObject5);
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi10b29sYmFyLmpzIl0sIm5hbWVzIjpbIk5hdmlnYXRpb25Ub29sYmFyIiwiU2V0dGluZ3NCdXR0b24iLCJTdHlsZWRJY29uIiwicHJvcHMiLCJ0aGVtZSIsImNvbG9yIiwiU3R5bGVkTmF2aWdhdGlvblRvb2xiYXIiLCJkaXYiLCJTdHlsZWRJbmRpY2F0b3IiLCJTdHlsZWRTZWFyY2giLCJTdHlsZWRTZXR0aW5ncyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztrQkFNd0JBLGlCOztBQU54Qjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFZSxTQUFTQSxpQkFBVCxHQUE2QjtBQUMzQyxRQUNDO0FBQUMseUJBQUQ7QUFBQTtBQUNDO0FBQUMsaUJBQUQ7QUFBQTtBQUNDLGlDQUFDLGNBQUQ7QUFERCxHQUREO0FBSUM7QUFBQyxlQUFEO0FBQUE7QUFDQztBQURELEdBSkQ7QUFPQztBQUFDLGtCQUFEO0FBQUE7QUFDQztBQUREO0FBUEQsRUFERDtBQWFBOztBQUVELFNBQVNDLGNBQVQsR0FBMEI7QUFDekIsUUFDQztBQUFBO0FBQUE7QUFDQyxnQ0FBQyxVQUFEO0FBQ0MsU0FBSyxHQUROO0FBRUMsV0FBTztBQUZSO0FBREQsRUFERDtBQVFBOztBQUVELElBQU1DLGFBQWEsK0NBQWIsa0JBQ0c7QUFBQSxRQUFTQyxNQUFNQyxLQUFOLENBQVlDLEtBQXJCO0FBQUEsQ0FESCxDQUFOOztBQUlBLElBQU1DLDBCQUEwQiwyQkFBT0MsR0FBakMsa0JBQU47O0FBT0EsSUFBTUMsa0JBQWtCLDJCQUFPRCxHQUF6QixrQkFBTjs7QUFJQSxJQUFNRSxlQUFlLDJCQUFPRixHQUF0QixrQkFBTjs7QUFPQSxJQUFNRyxpQkFBaUIsMkJBQU9ILEdBQXhCLGtCQUFOIiwiZmlsZSI6Im5hdmlnYXRpb24tdG9vbGJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBJY29uIGZyb20gJy4uL2NvbW1vbi9pY29uJztcbmltcG9ydCBJbmRpY2F0b3IgZnJvbSAnLi4vLi4vY29udGFpbmVycy9pbmRpY2F0b3InO1xuaW1wb3J0IFRvZ2dsZVNlYXJjaCBmcm9tICcuLi8uLi9jb250YWluZXJzL3RvZ2dsZS1zZWFyY2gnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZpZ2F0aW9uVG9vbGJhcigpIHtcblx0cmV0dXJuIChcblx0XHQ8U3R5bGVkTmF2aWdhdGlvblRvb2xiYXI+XG5cdFx0XHQ8U3R5bGVkU2V0dGluZ3M+XG5cdFx0XHRcdDxTZXR0aW5nc0J1dHRvbi8+XG5cdFx0XHQ8L1N0eWxlZFNldHRpbmdzPlxuXHRcdFx0PFN0eWxlZFNlYXJjaD5cblx0XHRcdFx0PFRvZ2dsZVNlYXJjaC8+XG5cdFx0XHQ8L1N0eWxlZFNlYXJjaD5cblx0XHRcdDxTdHlsZWRJbmRpY2F0b3I+XG5cdFx0XHRcdDxJbmRpY2F0b3IvPlxuXHRcdFx0PC9TdHlsZWRJbmRpY2F0b3I+XG5cdFx0PC9TdHlsZWROYXZpZ2F0aW9uVG9vbGJhcj5cblx0KTtcbn1cblxuZnVuY3Rpb24gU2V0dGluZ3NCdXR0b24oKSB7XG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxTdHlsZWRJY29uXG5cdFx0XHRcdHNpemU9XCJzXCJcblx0XHRcdFx0c3ltYm9sPVwicGxhY2Vob2xkZXJcIlxuXHRcdFx0XHQvPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5jb25zdCBTdHlsZWRJY29uID0gc3R5bGVkKEljb24pYFxuXHRmaWxsOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9yfTtcbmA7XG5cbmNvbnN0IFN0eWxlZE5hdmlnYXRpb25Ub29sYmFyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0aGVpZ2h0OiA0MHB4O1xuXHRwYWRkaW5nOiAxMHB4IDE1cHg7XG5gO1xuXG5jb25zdCBTdHlsZWRJbmRpY2F0b3IgPSBzdHlsZWQuZGl2YFxuXHRtYXJnaW4tbGVmdDogYXV0bztcbmA7XG5cbmNvbnN0IFN0eWxlZFNlYXJjaCA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZ3JvdzogMTtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gO1xuXG5jb25zdCBTdHlsZWRTZXR0aW5ncyA9IHN0eWxlZC5kaXZgXG5cdG1hcmdpbi1yaWdodDogYXV0bztcbmA7XG4iXX0=
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\tfill: ', ';\n'], ['\n\tfill: ', ';\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n\tfont-size: 0;\n\tline-height: 0;\n'], ['\n\tfont-size: 0;\n\tline-height: 0;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _icon = require('./common/icon');

var _icon2 = _interopRequireDefault(_icon);

var _link = require('./common/link');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Fullscreen;


function Fullscreen(props) {
	return _react2.default.createElement(
		StyledLink,
		{
			external: true,
			title: 'Open pattern demo for "' + props.id + '" in a new tab',
			href: props.href
		},
		_react2.default.createElement(StyledIcon, { symbol: 'fullscreen' }),
		'Open pattern demo for "$',
		props.id,
		'" in a new tab'
	);
}

Fullscreen.propTypes = {
	active: _react.PropTypes.bool,
	href: _react.PropTypes.string,
	id: _react.PropTypes.string
};

var StyledIcon = (0, _styledComponents2.default)(_icon2.default)(_templateObject, function (props) {
	return props.theme.tint;
});

var StyledLink = (0, _styledComponents2.default)(_link2.default)(_templateObject2);
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL3RyaWdnZXItZnVsbHNjcmVlbi5qcyJdLCJuYW1lcyI6WyJGdWxsc2NyZWVuIiwicHJvcHMiLCJpZCIsImhyZWYiLCJwcm9wVHlwZXMiLCJhY3RpdmUiLCJib29sIiwic3RyaW5nIiwiU3R5bGVkSWNvbiIsInRoZW1lIiwidGludCIsIlN0eWxlZExpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7O2tCQUVlQSxVOzs7QUFFZixTQUFTQSxVQUFULENBQW9CQyxLQUFwQixFQUEyQjtBQUMxQixRQUNDO0FBQUMsWUFBRDtBQUFBO0FBQ0MsaUJBREQ7QUFFQyxzQ0FBaUNBLE1BQU1DLEVBQXZDLG1CQUZEO0FBR0MsU0FBTUQsTUFBTUU7QUFIYjtBQUtDLGdDQUFDLFVBQUQsSUFBWSxRQUFPLFlBQW5CLEdBTEQ7QUFBQTtBQU0wQkYsUUFBTUMsRUFOaEM7QUFBQTtBQUFBLEVBREQ7QUFVQTs7QUFFREYsV0FBV0ksU0FBWCxHQUF1QjtBQUN0QkMsU0FBUSxpQkFBRUMsSUFEWTtBQUV0QkgsT0FBTSxpQkFBRUksTUFGYztBQUd0QkwsS0FBSSxpQkFBRUs7QUFIZ0IsQ0FBdkI7O0FBTUEsSUFBTUMsYUFBYSwrQ0FBYixrQkFDRztBQUFBLFFBQVNQLE1BQU1RLEtBQU4sQ0FBWUMsSUFBckI7QUFBQSxDQURILENBQU47O0FBSUEsSUFBTUMsYUFBYSwrQ0FBYixrQkFBTiIsImZpbGUiOiJ0cmlnZ2VyLWZ1bGxzY3JlZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXMgYXMgdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCBJY29uIGZyb20gJy4vY29tbW9uL2ljb24nO1xuaW1wb3J0IExpbmsgZnJvbSAnLi9jb21tb24vbGluayc7XG5cbmV4cG9ydCBkZWZhdWx0IEZ1bGxzY3JlZW47XG5cbmZ1bmN0aW9uIEZ1bGxzY3JlZW4ocHJvcHMpIHtcblx0cmV0dXJuIChcblx0XHQ8U3R5bGVkTGlua1xuXHRcdFx0ZXh0ZXJuYWxcblx0XHRcdHRpdGxlPXtgT3BlbiBwYXR0ZXJuIGRlbW8gZm9yIFwiJHtwcm9wcy5pZH1cIiBpbiBhIG5ldyB0YWJgfVxuXHRcdFx0aHJlZj17cHJvcHMuaHJlZn1cblx0XHRcdD5cblx0XHRcdDxTdHlsZWRJY29uIHN5bWJvbD1cImZ1bGxzY3JlZW5cIi8+XG5cdFx0XHRPcGVuIHBhdHRlcm4gZGVtbyBmb3IgXCIke3Byb3BzLmlkfVwiIGluIGEgbmV3IHRhYlxuXHRcdDwvU3R5bGVkTGluaz5cblx0KTtcbn1cblxuRnVsbHNjcmVlbi5wcm9wVHlwZXMgPSB7XG5cdGFjdGl2ZTogdC5ib29sLFxuXHRocmVmOiB0LnN0cmluZyxcblx0aWQ6IHQuc3RyaW5nXG59O1xuXG5jb25zdCBTdHlsZWRJY29uID0gc3R5bGVkKEljb24pYFxuXHRmaWxsOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRpbnR9O1xuYDtcblxuY29uc3QgU3R5bGVkTGluayA9IHN0eWxlZChMaW5rKWBcblx0Zm9udC1zaXplOiAwO1xuXHRsaW5lLWhlaWdodDogMDtcbmA7XG4iXX0=
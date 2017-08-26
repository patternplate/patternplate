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

var _toggleButton = require('./common/toggle-button');

var _toggleButton2 = _interopRequireDefault(_toggleButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = CodeButton;


function CodeButton(props) {
	return _react2.default.createElement(
		StyledToggleButton,
		{ enabled: props.enabled, shortcut: props.shortcut },
		_react2.default.createElement(StyledIcon, { enabled: props.enabled, symbol: 'code' }),
		' ',
		props.shortcut.toString()
	);
}

CodeButton.propTypes = {
	active: _react.PropTypes.bool,
	enabled: _react.PropTypes.bool,
	shortcut: _react.PropTypes.any
};

var COLOR = function COLOR(props) {
	return props.enabled ? props.theme.active : props.theme.color;
};

var StyledIcon = (0, _styledComponents2.default)(_icon2.default)(_templateObject, COLOR);

var StyledToggleButton = (0, _styledComponents2.default)(_toggleButton2.default)(_templateObject2);
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL3RvZ2dsZS1jb2RlLmpzIl0sIm5hbWVzIjpbIkNvZGVCdXR0b24iLCJwcm9wcyIsImVuYWJsZWQiLCJzaG9ydGN1dCIsInRvU3RyaW5nIiwicHJvcFR5cGVzIiwiYWN0aXZlIiwiYm9vbCIsImFueSIsIkNPTE9SIiwidGhlbWUiLCJjb2xvciIsIlN0eWxlZEljb24iLCJTdHlsZWRUb2dnbGVCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7O2tCQUVlQSxVOzs7QUFFZixTQUFTQSxVQUFULENBQW9CQyxLQUFwQixFQUEyQjtBQUMxQixRQUNDO0FBQUMsb0JBQUQ7QUFBQSxJQUFvQixTQUFTQSxNQUFNQyxPQUFuQyxFQUE0QyxVQUFVRCxNQUFNRSxRQUE1RDtBQUNDLGdDQUFDLFVBQUQsSUFBWSxTQUFTRixNQUFNQyxPQUEzQixFQUFvQyxRQUFPLE1BQTNDLEdBREQ7QUFBQTtBQUNzREQsUUFBTUUsUUFBTixDQUFlQyxRQUFmO0FBRHRELEVBREQ7QUFLQTs7QUFFREosV0FBV0ssU0FBWCxHQUF1QjtBQUN0QkMsU0FBUSxpQkFBRUMsSUFEWTtBQUV0QkwsVUFBUyxpQkFBRUssSUFGVztBQUd0QkosV0FBVSxpQkFBRUs7QUFIVSxDQUF2Qjs7QUFNQSxJQUFNQyxRQUFRLFNBQVJBLEtBQVE7QUFBQSxRQUFTUixNQUFNQyxPQUFOLEdBQWdCRCxNQUFNUyxLQUFOLENBQVlKLE1BQTVCLEdBQXFDTCxNQUFNUyxLQUFOLENBQVlDLEtBQTFEO0FBQUEsQ0FBZDs7QUFFQSxJQUFNQyxhQUFhLCtDQUFiLGtCQUNHSCxLQURILENBQU47O0FBSUEsSUFBTUkscUJBQXFCLHVEQUFyQixrQkFBTiIsImZpbGUiOiJ0b2dnbGUtY29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1Byb3BUeXBlcyBhcyB0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IEljb24gZnJvbSAnLi9jb21tb24vaWNvbic7XG5pbXBvcnQgVG9nZ2xlQnV0dG9uIGZyb20gJy4vY29tbW9uL3RvZ2dsZS1idXR0b24nO1xuXG5leHBvcnQgZGVmYXVsdCBDb2RlQnV0dG9uO1xuXG5mdW5jdGlvbiBDb2RlQnV0dG9uKHByb3BzKSB7XG5cdHJldHVybiAoXG5cdFx0PFN0eWxlZFRvZ2dsZUJ1dHRvbiBlbmFibGVkPXtwcm9wcy5lbmFibGVkfSBzaG9ydGN1dD17cHJvcHMuc2hvcnRjdXR9PlxuXHRcdFx0PFN0eWxlZEljb24gZW5hYmxlZD17cHJvcHMuZW5hYmxlZH0gc3ltYm9sPVwiY29kZVwiLz4ge3Byb3BzLnNob3J0Y3V0LnRvU3RyaW5nKCl9XG5cdFx0PC9TdHlsZWRUb2dnbGVCdXR0b24+XG5cdCk7XG59XG5cbkNvZGVCdXR0b24ucHJvcFR5cGVzID0ge1xuXHRhY3RpdmU6IHQuYm9vbCxcblx0ZW5hYmxlZDogdC5ib29sLFxuXHRzaG9ydGN1dDogdC5hbnlcbn07XG5cbmNvbnN0IENPTE9SID0gcHJvcHMgPT4gcHJvcHMuZW5hYmxlZCA/IHByb3BzLnRoZW1lLmFjdGl2ZSA6IHByb3BzLnRoZW1lLmNvbG9yO1xuXG5jb25zdCBTdHlsZWRJY29uID0gc3R5bGVkKEljb24pYFxuXHRmaWxsOiAke0NPTE9SfTtcbmA7XG5cbmNvbnN0IFN0eWxlZFRvZ2dsZUJ1dHRvbiA9IHN0eWxlZChUb2dnbGVCdXR0b24pYFxuXHRmb250LXNpemU6IDA7XG5cdGxpbmUtaGVpZ2h0OiAwO1xuYDtcbiJdfQ==
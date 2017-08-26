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

exports.default = Info;


function Info(props) {
	return _react2.default.createElement(
		StyledToggleButton,
		{
			enabled: props.enabled,
			shortcut: props.shortcut
		},
		_react2.default.createElement(StyledIcon, { symbol: 'info' }),
		' ',
		props.shortcut.toString()
	);
}

Info.propTypes = {
	enabled: _react.PropTypes.bool,
	shortcut: _react.PropTypes.any
};

var StyledIcon = (0, _styledComponents2.default)(_icon2.default)(_templateObject, function (props) {
	return props.theme.tint;
});

var StyledToggleButton = (0, _styledComponents2.default)(_toggleButton2.default)(_templateObject2);
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL3RvZ2dsZS1pbmZvLXBhbmUuanMiXSwibmFtZXMiOlsiSW5mbyIsInByb3BzIiwiZW5hYmxlZCIsInNob3J0Y3V0IiwidG9TdHJpbmciLCJwcm9wVHlwZXMiLCJib29sIiwiYW55IiwiU3R5bGVkSWNvbiIsInRoZW1lIiwidGludCIsIlN0eWxlZFRvZ2dsZUJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7a0JBRWVBLEk7OztBQUVmLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUNwQixRQUNDO0FBQUMsb0JBQUQ7QUFBQTtBQUNDLFlBQVNBLE1BQU1DLE9BRGhCO0FBRUMsYUFBVUQsTUFBTUU7QUFGakI7QUFJQyxnQ0FBQyxVQUFELElBQVksUUFBTyxNQUFuQixHQUpEO0FBQUE7QUFJOEJGLFFBQU1FLFFBQU4sQ0FBZUMsUUFBZjtBQUo5QixFQUREO0FBUUE7O0FBRURKLEtBQUtLLFNBQUwsR0FBaUI7QUFDaEJILFVBQVMsaUJBQUVJLElBREs7QUFFaEJILFdBQVUsaUJBQUVJO0FBRkksQ0FBakI7O0FBS0EsSUFBTUMsYUFBYSwrQ0FBYixrQkFDRztBQUFBLFFBQVNQLE1BQU1RLEtBQU4sQ0FBWUMsSUFBckI7QUFBQSxDQURILENBQU47O0FBSUEsSUFBTUMscUJBQXFCLHVEQUFyQixrQkFBTiIsImZpbGUiOiJ0b2dnbGUtaW5mby1wYW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzIGFzIHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgSWNvbiBmcm9tICcuL2NvbW1vbi9pY29uJztcbmltcG9ydCBUb2dnbGVCdXR0b24gZnJvbSAnLi9jb21tb24vdG9nZ2xlLWJ1dHRvbic7XG5cbmV4cG9ydCBkZWZhdWx0IEluZm87XG5cbmZ1bmN0aW9uIEluZm8ocHJvcHMpIHtcblx0cmV0dXJuIChcblx0XHQ8U3R5bGVkVG9nZ2xlQnV0dG9uXG5cdFx0XHRlbmFibGVkPXtwcm9wcy5lbmFibGVkfVxuXHRcdFx0c2hvcnRjdXQ9e3Byb3BzLnNob3J0Y3V0fVxuXHRcdFx0PlxuXHRcdFx0PFN0eWxlZEljb24gc3ltYm9sPVwiaW5mb1wiLz4ge3Byb3BzLnNob3J0Y3V0LnRvU3RyaW5nKCl9XG5cdFx0PC9TdHlsZWRUb2dnbGVCdXR0b24+XG5cdCk7XG59XG5cbkluZm8ucHJvcFR5cGVzID0ge1xuXHRlbmFibGVkOiB0LmJvb2wsXG5cdHNob3J0Y3V0OiB0LmFueVxufTtcblxuY29uc3QgU3R5bGVkSWNvbiA9IHN0eWxlZChJY29uKWBcblx0ZmlsbDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50aW50fTtcbmA7XG5cbmNvbnN0IFN0eWxlZFRvZ2dsZUJ1dHRvbiA9IHN0eWxlZChUb2dnbGVCdXR0b24pYFxuXHRmb250LXNpemU6IDA7XG5cdGxpbmUtaGVpZ2h0OiAwO1xuYDtcbiJdfQ==
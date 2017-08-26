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

exports.default = Opacity;


function Opacity(props) {
	return _react2.default.createElement(
		StyledToggleButton,
		{ enabled: props.enabled, shortcut: props.shortcut },
		_react2.default.createElement(StyledIcon, { symbol: 'opacity' }),
		' ',
		props.shortcut.toString()
	);
}

Opacity.propTypes = {
	enabled: _react.PropTypes.bool,
	shortcut: _react.PropTypes.any
};

var StyledIcon = (0, _styledComponents2.default)(_icon2.default)(_templateObject, function (props) {
	return props.theme.tint;
});

var StyledToggleButton = (0, _styledComponents2.default)(_toggleButton2.default)(_templateObject2);
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL3RvZ2dsZS1vcGFjaXR5LmpzIl0sIm5hbWVzIjpbIk9wYWNpdHkiLCJwcm9wcyIsImVuYWJsZWQiLCJzaG9ydGN1dCIsInRvU3RyaW5nIiwicHJvcFR5cGVzIiwiYm9vbCIsImFueSIsIlN0eWxlZEljb24iLCJ0aGVtZSIsInRpbnQiLCJTdHlsZWRUb2dnbGVCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7O2tCQUVlQSxPOzs7QUFFZixTQUFTQSxPQUFULENBQWlCQyxLQUFqQixFQUF3QjtBQUN2QixRQUNDO0FBQUMsb0JBQUQ7QUFBQSxJQUFvQixTQUFTQSxNQUFNQyxPQUFuQyxFQUE0QyxVQUFVRCxNQUFNRSxRQUE1RDtBQUNDLGdDQUFDLFVBQUQsSUFBWSxRQUFPLFNBQW5CLEdBREQ7QUFBQTtBQUNpQ0YsUUFBTUUsUUFBTixDQUFlQyxRQUFmO0FBRGpDLEVBREQ7QUFLQTs7QUFFREosUUFBUUssU0FBUixHQUFvQjtBQUNuQkgsVUFBUyxpQkFBRUksSUFEUTtBQUVuQkgsV0FBVSxpQkFBRUk7QUFGTyxDQUFwQjs7QUFLQSxJQUFNQyxhQUFhLCtDQUFiLGtCQUNHO0FBQUEsUUFBU1AsTUFBTVEsS0FBTixDQUFZQyxJQUFyQjtBQUFBLENBREgsQ0FBTjs7QUFJQSxJQUFNQyxxQkFBcUIsdURBQXJCLGtCQUFOIiwiZmlsZSI6InRvZ2dsZS1vcGFjaXR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzIGFzIHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgSWNvbiBmcm9tICcuL2NvbW1vbi9pY29uJztcbmltcG9ydCBUb2dnbGVCdXR0b24gZnJvbSAnLi9jb21tb24vdG9nZ2xlLWJ1dHRvbic7XG5cbmV4cG9ydCBkZWZhdWx0IE9wYWNpdHk7XG5cbmZ1bmN0aW9uIE9wYWNpdHkocHJvcHMpIHtcblx0cmV0dXJuIChcblx0XHQ8U3R5bGVkVG9nZ2xlQnV0dG9uIGVuYWJsZWQ9e3Byb3BzLmVuYWJsZWR9IHNob3J0Y3V0PXtwcm9wcy5zaG9ydGN1dH0+XG5cdFx0XHQ8U3R5bGVkSWNvbiBzeW1ib2w9XCJvcGFjaXR5XCIvPiB7cHJvcHMuc2hvcnRjdXQudG9TdHJpbmcoKX1cblx0XHQ8L1N0eWxlZFRvZ2dsZUJ1dHRvbj5cblx0KTtcbn1cblxuT3BhY2l0eS5wcm9wVHlwZXMgPSB7XG5cdGVuYWJsZWQ6IHQuYm9vbCxcblx0c2hvcnRjdXQ6IHQuYW55XG59O1xuXG5jb25zdCBTdHlsZWRJY29uID0gc3R5bGVkKEljb24pYFxuXHRmaWxsOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRpbnR9O1xuYDtcblxuY29uc3QgU3R5bGVkVG9nZ2xlQnV0dG9uID0gc3R5bGVkKFRvZ2dsZUJ1dHRvbilgXG5cdGZvbnQtc2l6ZTogMDtcblx0bGluZS1oZWlnaHQ6IDA7XG5gO1xuIl19
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

exports.default = Hamburger;


function Hamburger(props) {
	return _react2.default.createElement(
		StyledToggleButton,
		{ enabled: props.enabled, shortcut: props.shortcut },
		_react2.default.createElement(StyledIcon, { symbol: 'hamburger' }),
		' ',
		props.shortcut.toString()
	);
}

Hamburger.propTypes = {
	active: _react.PropTypes.bool,
	enabled: _react.PropTypes.bool,
	shortcut: _react.PropTypes.any
};

var StyledIcon = (0, _styledComponents2.default)(_icon2.default)(_templateObject, function (props) {
	return props.theme.tint;
});

var StyledToggleButton = (0, _styledComponents2.default)(_toggleButton2.default)(_templateObject2);
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL3RvZ2dsZS1uYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbIkhhbWJ1cmdlciIsInByb3BzIiwiZW5hYmxlZCIsInNob3J0Y3V0IiwidG9TdHJpbmciLCJwcm9wVHlwZXMiLCJhY3RpdmUiLCJib29sIiwiYW55IiwiU3R5bGVkSWNvbiIsInRoZW1lIiwidGludCIsIlN0eWxlZFRvZ2dsZUJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7a0JBRWVBLFM7OztBQUVmLFNBQVNBLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCO0FBQ3pCLFFBQ0M7QUFBQyxvQkFBRDtBQUFBLElBQW9CLFNBQVNBLE1BQU1DLE9BQW5DLEVBQTRDLFVBQVVELE1BQU1FLFFBQTVEO0FBQ0MsZ0NBQUMsVUFBRCxJQUFZLFFBQU8sV0FBbkIsR0FERDtBQUFBO0FBQ21DRixRQUFNRSxRQUFOLENBQWVDLFFBQWY7QUFEbkMsRUFERDtBQUtBOztBQUVESixVQUFVSyxTQUFWLEdBQXNCO0FBQ3JCQyxTQUFRLGlCQUFFQyxJQURXO0FBRXJCTCxVQUFTLGlCQUFFSyxJQUZVO0FBR3JCSixXQUFVLGlCQUFFSztBQUhTLENBQXRCOztBQU1BLElBQU1DLGFBQWEsK0NBQWIsa0JBQ0c7QUFBQSxRQUFTUixNQUFNUyxLQUFOLENBQVlDLElBQXJCO0FBQUEsQ0FESCxDQUFOOztBQUlBLElBQU1DLHFCQUFxQix1REFBckIsa0JBQU4iLCJmaWxlIjoidG9nZ2xlLW5hdmlnYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXMgYXMgdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCBJY29uIGZyb20gJy4vY29tbW9uL2ljb24nO1xuaW1wb3J0IFRvZ2dsZUJ1dHRvbiBmcm9tICcuL2NvbW1vbi90b2dnbGUtYnV0dG9uJztcblxuZXhwb3J0IGRlZmF1bHQgSGFtYnVyZ2VyO1xuXG5mdW5jdGlvbiBIYW1idXJnZXIocHJvcHMpIHtcblx0cmV0dXJuIChcblx0XHQ8U3R5bGVkVG9nZ2xlQnV0dG9uIGVuYWJsZWQ9e3Byb3BzLmVuYWJsZWR9IHNob3J0Y3V0PXtwcm9wcy5zaG9ydGN1dH0+XG5cdFx0XHQ8U3R5bGVkSWNvbiBzeW1ib2w9XCJoYW1idXJnZXJcIi8+IHtwcm9wcy5zaG9ydGN1dC50b1N0cmluZygpfVxuXHRcdDwvU3R5bGVkVG9nZ2xlQnV0dG9uPlxuXHQpO1xufVxuXG5IYW1idXJnZXIucHJvcFR5cGVzID0ge1xuXHRhY3RpdmU6IHQuYm9vbCxcblx0ZW5hYmxlZDogdC5ib29sLFxuXHRzaG9ydGN1dDogdC5hbnlcbn07XG5cbmNvbnN0IFN0eWxlZEljb24gPSBzdHlsZWQoSWNvbilgXG5cdGZpbGw6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGludH07XG5gO1xuXG5jb25zdCBTdHlsZWRUb2dnbGVCdXR0b24gPSBzdHlsZWQoVG9nZ2xlQnV0dG9uKWBcblx0Zm9udC1zaXplOiAwO1xuXHRsaW5lLWhlaWdodDogMDtcbmA7XG4iXX0=
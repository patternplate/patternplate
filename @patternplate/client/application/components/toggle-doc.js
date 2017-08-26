'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\tfill: ', ';\n'], ['\n\tfill: ', ';\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n\tfont-size: 0;\n\tline-height: 0;\n\tcursor: ', ';\n'], ['\n\tfont-size: 0;\n\tline-height: 0;\n\tcursor: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _icon = require('./common/icon');

var _icon2 = _interopRequireDefault(_icon);

var _toggleButton = require('./common/toggle-button');

var _toggleButton2 = _interopRequireDefault(_toggleButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = ToggleDoc;


function ToggleDoc(props) {
	return _react2.default.createElement(
		StyledToggleButton,
		{
			active: props.active,
			enabled: props.enabled,
			shortcut: props.shortcut,
			title: title(props)
		},
		_react2.default.createElement(StyledIcon, {
			active: props.active,
			enabled: props.enabled,
			symbol: 'doc'
		}),
		props.shortcut.toString()
	);
}

ToggleDoc.propTypes = {
	active: _react.PropTypes.bool,
	enabled: _react.PropTypes.bool,
	shortcut: _react.PropTypes.any
};

function title(props) {
	return props.active ? null : 'No documentation available.';
}

var CURSOR = function CURSOR(props) {
	return props.active ? 'pointer' : 'not-allowed';
};

var COLOR = function COLOR(props) {
	if (props.active) {
		return props.enabled ? props.theme.active : props.theme.color;
	}
	return props.theme.border;
};

var StyledIcon = (0, _styledComponents2.default)(_icon2.default)(_templateObject, COLOR);

var StyledToggleButton = (0, _styledComponents2.default)(_toggleButton2.default)(_templateObject2, CURSOR);
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL3RvZ2dsZS1kb2MuanMiXSwibmFtZXMiOlsiVG9nZ2xlRG9jIiwicHJvcHMiLCJhY3RpdmUiLCJlbmFibGVkIiwic2hvcnRjdXQiLCJ0aXRsZSIsInRvU3RyaW5nIiwicHJvcFR5cGVzIiwiYm9vbCIsImFueSIsIkNVUlNPUiIsIkNPTE9SIiwidGhlbWUiLCJjb2xvciIsImJvcmRlciIsIlN0eWxlZEljb24iLCJTdHlsZWRUb2dnbGVCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7O2tCQUVlQSxTOzs7QUFFZixTQUFTQSxTQUFULENBQW1CQyxLQUFuQixFQUEwQjtBQUN6QixRQUNDO0FBQUMsb0JBQUQ7QUFBQTtBQUNDLFdBQVFBLE1BQU1DLE1BRGY7QUFFQyxZQUFTRCxNQUFNRSxPQUZoQjtBQUdDLGFBQVVGLE1BQU1HLFFBSGpCO0FBSUMsVUFBT0MsTUFBTUosS0FBTjtBQUpSO0FBTUMsZ0NBQUMsVUFBRDtBQUNDLFdBQVFBLE1BQU1DLE1BRGY7QUFFQyxZQUFTRCxNQUFNRSxPQUZoQjtBQUdDLFdBQU87QUFIUixJQU5EO0FBV0VGLFFBQU1HLFFBQU4sQ0FBZUUsUUFBZjtBQVhGLEVBREQ7QUFlQTs7QUFFRE4sVUFBVU8sU0FBVixHQUFzQjtBQUNyQkwsU0FBUSxpQkFBRU0sSUFEVztBQUVyQkwsVUFBUyxpQkFBRUssSUFGVTtBQUdyQkosV0FBVSxpQkFBRUs7QUFIUyxDQUF0Qjs7QUFNQSxTQUFTSixLQUFULENBQWVKLEtBQWYsRUFBc0I7QUFDckIsUUFBT0EsTUFBTUMsTUFBTixHQUFlLElBQWYsR0FBc0IsNkJBQTdCO0FBQ0E7O0FBRUQsSUFBTVEsU0FBUyxTQUFUQSxNQUFTO0FBQUEsUUFBU1QsTUFBTUMsTUFBTixHQUFlLFNBQWYsR0FBMkIsYUFBcEM7QUFBQSxDQUFmOztBQUVBLElBQU1TLFFBQVEsU0FBUkEsS0FBUSxRQUFTO0FBQ3RCLEtBQUlWLE1BQU1DLE1BQVYsRUFBa0I7QUFDakIsU0FBT0QsTUFBTUUsT0FBTixHQUFnQkYsTUFBTVcsS0FBTixDQUFZVixNQUE1QixHQUFxQ0QsTUFBTVcsS0FBTixDQUFZQyxLQUF4RDtBQUNBO0FBQ0QsUUFBT1osTUFBTVcsS0FBTixDQUFZRSxNQUFuQjtBQUNBLENBTEQ7O0FBT0EsSUFBTUMsYUFBYSwrQ0FBYixrQkFDR0osS0FESCxDQUFOOztBQUlBLElBQU1LLHFCQUFxQix1REFBckIsbUJBR0tOLE1BSEwsQ0FBTiIsImZpbGUiOiJ0b2dnbGUtZG9jLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzIGFzIHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgSWNvbiBmcm9tICcuL2NvbW1vbi9pY29uJztcbmltcG9ydCBUb2dnbGVCdXR0b24gZnJvbSAnLi9jb21tb24vdG9nZ2xlLWJ1dHRvbic7XG5cbmV4cG9ydCBkZWZhdWx0IFRvZ2dsZURvYztcblxuZnVuY3Rpb24gVG9nZ2xlRG9jKHByb3BzKSB7XG5cdHJldHVybiAoXG5cdFx0PFN0eWxlZFRvZ2dsZUJ1dHRvblxuXHRcdFx0YWN0aXZlPXtwcm9wcy5hY3RpdmV9XG5cdFx0XHRlbmFibGVkPXtwcm9wcy5lbmFibGVkfVxuXHRcdFx0c2hvcnRjdXQ9e3Byb3BzLnNob3J0Y3V0fVxuXHRcdFx0dGl0bGU9e3RpdGxlKHByb3BzKX1cblx0XHRcdD5cblx0XHRcdDxTdHlsZWRJY29uXG5cdFx0XHRcdGFjdGl2ZT17cHJvcHMuYWN0aXZlfVxuXHRcdFx0XHRlbmFibGVkPXtwcm9wcy5lbmFibGVkfVxuXHRcdFx0XHRzeW1ib2w9XCJkb2NcIlxuXHRcdFx0XHQvPlxuXHRcdFx0e3Byb3BzLnNob3J0Y3V0LnRvU3RyaW5nKCl9XG5cdFx0PC9TdHlsZWRUb2dnbGVCdXR0b24+XG5cdCk7XG59XG5cblRvZ2dsZURvYy5wcm9wVHlwZXMgPSB7XG5cdGFjdGl2ZTogdC5ib29sLFxuXHRlbmFibGVkOiB0LmJvb2wsXG5cdHNob3J0Y3V0OiB0LmFueVxufTtcblxuZnVuY3Rpb24gdGl0bGUocHJvcHMpIHtcblx0cmV0dXJuIHByb3BzLmFjdGl2ZSA/IG51bGwgOiAnTm8gZG9jdW1lbnRhdGlvbiBhdmFpbGFibGUuJztcbn1cblxuY29uc3QgQ1VSU09SID0gcHJvcHMgPT4gcHJvcHMuYWN0aXZlID8gJ3BvaW50ZXInIDogJ25vdC1hbGxvd2VkJztcblxuY29uc3QgQ09MT1IgPSBwcm9wcyA9PiB7XG5cdGlmIChwcm9wcy5hY3RpdmUpIHtcblx0XHRyZXR1cm4gcHJvcHMuZW5hYmxlZCA/IHByb3BzLnRoZW1lLmFjdGl2ZSA6IHByb3BzLnRoZW1lLmNvbG9yO1xuXHR9XG5cdHJldHVybiBwcm9wcy50aGVtZS5ib3JkZXI7XG59O1xuXG5jb25zdCBTdHlsZWRJY29uID0gc3R5bGVkKEljb24pYFxuXHRmaWxsOiAke0NPTE9SfTtcbmA7XG5cbmNvbnN0IFN0eWxlZFRvZ2dsZUJ1dHRvbiA9IHN0eWxlZChUb2dnbGVCdXR0b24pYFxuXHRmb250LXNpemU6IDA7XG5cdGxpbmUtaGVpZ2h0OiAwO1xuXHRjdXJzb3I6ICR7Q1VSU09SfTtcbmA7XG4iXX0=
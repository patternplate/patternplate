'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\tdisplay: flex;\n\twidth: ', 'px;\n\theight: ', 'px;\n\tjustify-content: center;\n\talign-items: center;\n'], ['\n\tdisplay: flex;\n\twidth: ', 'px;\n\theight: ', 'px;\n\tjustify-content: center;\n\talign-items: center;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _iconRegistry = require('./icon-registry');

var _icons = require('./icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SIZES = {
	s: 15,
	m: 30,
	l: 50
};

exports.default = (0, _iconRegistry.withRegistry)(Icon);


function Icon(props) {
	return _react2.default.createElement(
		StyledIcon,
		{ className: props.className, size: props.size },
		_react2.default.createElement('use', { xlinkHref: '#' + (props.symbol || 'placeholder') })
	);
}

Icon.propTypes = {
	className: _react.PropTypes.string,
	size: _react.PropTypes.oneOf(['s', 'm', 'l']),
	symbol: _react.PropTypes.oneOf(_icons.iconNames).isRequired
};

Icon.defaultProps = {
	size: 'm',
	symbol: 'placeholder'
};

var StyledIcon = _styledComponents2.default.svg(_templateObject, function (props) {
	return SIZES[props.size];
}, function (props) {
	return SIZES[props.size];
});
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2NvbW1vbi9pY29uLmpzIl0sIm5hbWVzIjpbIlNJWkVTIiwicyIsIm0iLCJsIiwiSWNvbiIsInByb3BzIiwiY2xhc3NOYW1lIiwic2l6ZSIsInN5bWJvbCIsInByb3BUeXBlcyIsInN0cmluZyIsIm9uZU9mIiwiaXNSZXF1aXJlZCIsImRlZmF1bHRQcm9wcyIsIlN0eWxlZEljb24iLCJzdmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLFFBQVE7QUFDYkMsSUFBRyxFQURVO0FBRWJDLElBQUcsRUFGVTtBQUdiQyxJQUFHO0FBSFUsQ0FBZDs7a0JBTWUsZ0NBQWFDLElBQWIsQzs7O0FBRWYsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQ3BCLFFBQ0M7QUFBQyxZQUFEO0FBQUEsSUFBWSxXQUFXQSxNQUFNQyxTQUE3QixFQUF3QyxNQUFNRCxNQUFNRSxJQUFwRDtBQUNDLHlDQUFLLGtCQUFlRixNQUFNRyxNQUFOLElBQWdCLGFBQS9CLENBQUw7QUFERCxFQUREO0FBS0E7O0FBRURKLEtBQUtLLFNBQUwsR0FBaUI7QUFDaEJILFlBQVcsaUJBQUVJLE1BREc7QUFFaEJILE9BQU0saUJBQUVJLEtBQUYsQ0FBUSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQUFSLENBRlU7QUFHaEJILFNBQVEsaUJBQUVHLEtBQUYsbUJBQW1CQztBQUhYLENBQWpCOztBQU1BUixLQUFLUyxZQUFMLEdBQW9CO0FBQ25CTixPQUFNLEdBRGE7QUFFbkJDLFNBQVE7QUFGVyxDQUFwQjs7QUFLQSxJQUFNTSxhQUFhLDJCQUFPQyxHQUFwQixrQkFFSTtBQUFBLFFBQVNmLE1BQU1LLE1BQU1FLElBQVosQ0FBVDtBQUFBLENBRkosRUFHSztBQUFBLFFBQVNQLE1BQU1LLE1BQU1FLElBQVosQ0FBVDtBQUFBLENBSEwsQ0FBTiIsImZpbGUiOiJpY29uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzIGFzIHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHt3aXRoUmVnaXN0cnl9IGZyb20gJy4vaWNvbi1yZWdpc3RyeSc7XG5pbXBvcnQge2ljb25OYW1lc30gZnJvbSAnLi9pY29ucyc7XG5cbmNvbnN0IFNJWkVTID0ge1xuXHRzOiAxNSxcblx0bTogMzAsXG5cdGw6IDUwXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVnaXN0cnkoSWNvbik7XG5cbmZ1bmN0aW9uIEljb24ocHJvcHMpIHtcblx0cmV0dXJuIChcblx0XHQ8U3R5bGVkSWNvbiBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX0gc2l6ZT17cHJvcHMuc2l6ZX0+XG5cdFx0XHQ8dXNlIHhsaW5rSHJlZj17YCMke3Byb3BzLnN5bWJvbCB8fCAncGxhY2Vob2xkZXInfWB9Lz5cblx0XHQ8L1N0eWxlZEljb24+XG5cdCk7XG59XG5cbkljb24ucHJvcFR5cGVzID0ge1xuXHRjbGFzc05hbWU6IHQuc3RyaW5nLFxuXHRzaXplOiB0Lm9uZU9mKFsncycsICdtJywgJ2wnXSksXG5cdHN5bWJvbDogdC5vbmVPZihpY29uTmFtZXMpLmlzUmVxdWlyZWRcbn07XG5cbkljb24uZGVmYXVsdFByb3BzID0ge1xuXHRzaXplOiAnbScsXG5cdHN5bWJvbDogJ3BsYWNlaG9sZGVyJ1xufTtcblxuY29uc3QgU3R5bGVkSWNvbiA9IHN0eWxlZC5zdmdgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdHdpZHRoOiAke3Byb3BzID0+IFNJWkVTW3Byb3BzLnNpemVdfXB4O1xuXHRoZWlnaHQ6ICR7cHJvcHMgPT4gU0laRVNbcHJvcHMuc2l6ZV19cHg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcbiJdfQ==
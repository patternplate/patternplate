'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\theight: 100%;\n\toverflow: scroll;\n\t-webkit-overflow-sroll: touch;\n\tmask-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 50px);\n\t-webkit-mask-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 50px);\n'], ['\n\theight: 100%;\n\toverflow: scroll;\n\t-webkit-overflow-sroll: touch;\n\tmask-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 50px);\n\t-webkit-mask-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 50px);\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n\tbox-sizing: border-box;\n\tmargin: 0 auto;\n\twidth: 100%;\n\tmax-width: 800px;\n\tpadding: 30px;\n'], ['\n\tbox-sizing: border-box;\n\tmargin: 0 auto;\n\twidth: 100%;\n\tmax-width: 800px;\n\tpadding: 30px;\n']);

exports.default = Documentation;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _markdown = require('../containers/markdown');

var _markdown2 = _interopRequireDefault(_markdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Documentation(props) {
	return _react2.default.createElement(
		ScrollBox,
		null,
		_react2.default.createElement(
			StyledDocumentation,
			null,
			_react2.default.createElement(_markdown2.default, { source: props.doc })
		)
	);
}

Documentation.propTypes = {
	doc: _react.PropTypes.string.isRequired,
	type: _react.PropTypes.string.isRequired
};

var ScrollBox = _styledComponents2.default.div(_templateObject);

var StyledDocumentation = _styledComponents2.default.div(_templateObject2);
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2RvY3VtZW50YXRpb24uanMiXSwibmFtZXMiOlsiRG9jdW1lbnRhdGlvbiIsInByb3BzIiwiZG9jIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsInR5cGUiLCJTY3JvbGxCb3giLCJkaXYiLCJTdHlsZWREb2N1bWVudGF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O2tCQUl3QkEsYTs7QUFKeEI7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFZSxTQUFTQSxhQUFULENBQXVCQyxLQUF2QixFQUE4QjtBQUM1QyxRQUNDO0FBQUMsV0FBRDtBQUFBO0FBQ0M7QUFBQyxzQkFBRDtBQUFBO0FBQ0MsdURBQVUsUUFBUUEsTUFBTUMsR0FBeEI7QUFERDtBQURELEVBREQ7QUFPQTs7QUFFREYsY0FBY0csU0FBZCxHQUEwQjtBQUN6QkQsTUFBSyxpQkFBRUUsTUFBRixDQUFTQyxVQURXO0FBRXpCQyxPQUFNLGlCQUFFRixNQUFGLENBQVNDO0FBRlUsQ0FBMUI7O0FBS0EsSUFBTUUsWUFBWSwyQkFBT0MsR0FBbkIsaUJBQU47O0FBUUEsSUFBTUMsc0JBQXNCLDJCQUFPRCxHQUE3QixrQkFBTiIsImZpbGUiOiJkb2N1bWVudGF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzIGFzIHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IE1hcmtkb3duIGZyb20gJy4uL2NvbnRhaW5lcnMvbWFya2Rvd24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEb2N1bWVudGF0aW9uKHByb3BzKSB7XG5cdHJldHVybiAoXG5cdFx0PFNjcm9sbEJveD5cblx0XHRcdDxTdHlsZWREb2N1bWVudGF0aW9uPlxuXHRcdFx0XHQ8TWFya2Rvd24gc291cmNlPXtwcm9wcy5kb2N9Lz5cblx0XHRcdDwvU3R5bGVkRG9jdW1lbnRhdGlvbj5cblx0XHQ8L1Njcm9sbEJveD5cblx0KTtcbn1cblxuRG9jdW1lbnRhdGlvbi5wcm9wVHlwZXMgPSB7XG5cdGRvYzogdC5zdHJpbmcuaXNSZXF1aXJlZCxcblx0dHlwZTogdC5zdHJpbmcuaXNSZXF1aXJlZFxufTtcblxuY29uc3QgU2Nyb2xsQm94ID0gc3R5bGVkLmRpdmBcblx0aGVpZ2h0OiAxMDAlO1xuXHRvdmVyZmxvdzogc2Nyb2xsO1xuXHQtd2Via2l0LW92ZXJmbG93LXNyb2xsOiB0b3VjaDtcblx0bWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgwLCAwLCAwLCAwKSwgcmdiYSgwLCAwLCAwLCAxKSA1MHB4KTtcblx0LXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDEpIDUwcHgpO1xuYDtcblxuY29uc3QgU3R5bGVkRG9jdW1lbnRhdGlvbiA9IHN0eWxlZC5kaXZgXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdG1hcmdpbjogMCBhdXRvO1xuXHR3aWR0aDogMTAwJTtcblx0bWF4LXdpZHRoOiA4MDBweDtcblx0cGFkZGluZzogMzBweDtcbmA7XG4iXX0=
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\tmargin: 0 0 16px 0;\n\tfont-size: 18px;\n\tline-height: 27px;\n\tpadding-left: 18px;\n\tborder-left: 4.5px solid ', ';\n\tcolor: ', ';\n'], ['\n\tmargin: 0 0 16px 0;\n\tfont-size: 18px;\n\tline-height: 27px;\n\tpadding-left: 18px;\n\tborder-left: 4.5px solid ', ';\n\tcolor: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsTextContent = require('react-addons-text-content');

var _reactAddonsTextContent2 = _interopRequireDefault(_reactAddonsTextContent);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _text = require('../../text');

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _styledComponents2.default)(MarkdownBlockquote)(_templateObject, function (props) {
	return props.theme.recess;
}, function (props) {
	return props.theme.recess;
});


function MarkdownBlockquote(props) {
	return _react2.default.createElement(
		_text2.default,
		{ className: props.className, is: 'blockquote' },
		(0, _reactAddonsTextContent2.default)(props.children)
	);
}

MarkdownBlockquote.propTypes = {
	children: _react.PropTypes.any.isRequired,
	className: _react.PropTypes.string
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2NvbW1vbi9tYXJrZG93bi9tYXJrZG93bi1ibG9ja3F1b3RlLmpzIl0sIm5hbWVzIjpbIk1hcmtkb3duQmxvY2txdW90ZSIsInByb3BzIiwidGhlbWUiLCJyZWNlc3MiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsInByb3BUeXBlcyIsImFueSIsImlzUmVxdWlyZWQiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7a0JBRWUsZ0NBQU9BLGtCQUFQLEMsa0JBS2E7QUFBQSxRQUFTQyxNQUFNQyxLQUFOLENBQVlDLE1BQXJCO0FBQUEsQyxFQUNsQjtBQUFBLFFBQVNGLE1BQU1DLEtBQU4sQ0FBWUMsTUFBckI7QUFBQSxDOzs7QUFHVixTQUFTSCxrQkFBVCxDQUE0QkMsS0FBNUIsRUFBbUM7QUFDbEMsUUFDQztBQUFBO0FBQUEsSUFBTSxXQUFXQSxNQUFNRyxTQUF2QixFQUFrQyxJQUFHLFlBQXJDO0FBQ0Usd0NBQVlILE1BQU1JLFFBQWxCO0FBREYsRUFERDtBQUtBOztBQUVETCxtQkFBbUJNLFNBQW5CLEdBQStCO0FBQzlCRCxXQUFVLGlCQUFFRSxHQUFGLENBQU1DLFVBRGM7QUFFOUJKLFlBQVcsaUJBQUVLO0FBRmlCLENBQS9CIiwiZmlsZSI6Im1hcmtkb3duLWJsb2NrcXVvdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXMgYXMgdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHRleHRDb250ZW50IGZyb20gJ3JlYWN0LWFkZG9ucy10ZXh0LWNvbnRlbnQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCBUZXh0IGZyb20gJy4uLy4uL3RleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoTWFya2Rvd25CbG9ja3F1b3RlKWBcblx0bWFyZ2luOiAwIDAgMTZweCAwO1xuXHRmb250LXNpemU6IDE4cHg7XG5cdGxpbmUtaGVpZ2h0OiAyN3B4O1xuXHRwYWRkaW5nLWxlZnQ6IDE4cHg7XG5cdGJvcmRlci1sZWZ0OiA0LjVweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLnJlY2Vzc307XG5cdGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnJlY2Vzc307XG5gO1xuXG5mdW5jdGlvbiBNYXJrZG93bkJsb2NrcXVvdGUocHJvcHMpIHtcblx0cmV0dXJuIChcblx0XHQ8VGV4dCBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX0gaXM9XCJibG9ja3F1b3RlXCI+XG5cdFx0XHR7dGV4dENvbnRlbnQocHJvcHMuY2hpbGRyZW4pfVxuXHRcdDwvVGV4dD5cblx0KTtcbn1cblxuTWFya2Rvd25CbG9ja3F1b3RlLnByb3BUeXBlcyA9IHtcblx0Y2hpbGRyZW46IHQuYW55LmlzUmVxdWlyZWQsXG5cdGNsYXNzTmFtZTogdC5zdHJpbmdcbn07XG4iXX0=
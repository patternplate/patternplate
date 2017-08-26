'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\tbackground: ', ';\n\tborder-radius: 3px;\n\tfont-size: 15.3px;\n\tline-height: 23px;\n\tpadding: 16px;\n\tmargin-bottom: 16px;\n'], ['\n\tbackground: ', ';\n\tborder-radius: 3px;\n\tfont-size: 15.3px;\n\tline-height: 23px;\n\tpadding: 16px;\n\tmargin-bottom: 16px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsTextContent = require('react-addons-text-content');

var _reactAddonsTextContent2 = _interopRequireDefault(_reactAddonsTextContent);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _code = require('../code');

var _code2 = _interopRequireDefault(_code);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _styledComponents2.default)(MarkdownCodeBlock)(_templateObject, function (props) {
	return props.theme.backgroundSecondary;
});


function MarkdownCodeBlock(props) {
	var lang = getLanguage(props.children);
	var code = (0, _reactAddonsTextContent2.default)(props.children);
	return _react2.default.createElement(
		_code2.default,
		{ block: true, className: props.className, language: lang },
		code
	);
}

MarkdownCodeBlock.propTypes = {
	children: _react.PropTypes.any,
	className: _react.PropTypes.string
};

function getLanguage(children) {
	var _children = (0, _slicedToArray3.default)(children, 1),
	    child = _children[0];

	if (!child) {
		return null;
	}
	var className = child.props.className;
	if (!className) {
		return null;
	}
	return className.split(' ').map(function (n) {
		return n.replace('language-', '');
	}).find(function (n) {
		return typeof n === 'string' && n.length > 0;
	});
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2NvbW1vbi9tYXJrZG93bi9tYXJrZG93bi1jb2RlLWJsb2NrLmpzIl0sIm5hbWVzIjpbIk1hcmtkb3duQ29kZUJsb2NrIiwicHJvcHMiLCJ0aGVtZSIsImJhY2tncm91bmRTZWNvbmRhcnkiLCJsYW5nIiwiZ2V0TGFuZ3VhZ2UiLCJjaGlsZHJlbiIsImNvZGUiLCJjbGFzc05hbWUiLCJwcm9wVHlwZXMiLCJhbnkiLCJzdHJpbmciLCJjaGlsZCIsInNwbGl0IiwibWFwIiwibiIsInJlcGxhY2UiLCJmaW5kIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztrQkFFZSxnQ0FBT0EsaUJBQVAsQyxrQkFDQTtBQUFBLFFBQVNDLE1BQU1DLEtBQU4sQ0FBWUMsbUJBQXJCO0FBQUEsQzs7O0FBUWYsU0FBU0gsaUJBQVQsQ0FBMkJDLEtBQTNCLEVBQWtDO0FBQ2pDLEtBQU1HLE9BQU9DLFlBQVlKLE1BQU1LLFFBQWxCLENBQWI7QUFDQSxLQUFNQyxPQUFPLHNDQUFZTixNQUFNSyxRQUFsQixDQUFiO0FBQ0EsUUFBTztBQUFBO0FBQUEsSUFBTSxXQUFOLEVBQVksV0FBV0wsTUFBTU8sU0FBN0IsRUFBd0MsVUFBVUosSUFBbEQ7QUFBeURHO0FBQXpELEVBQVA7QUFDQTs7QUFFRFAsa0JBQWtCUyxTQUFsQixHQUE4QjtBQUM3QkgsV0FBVSxpQkFBRUksR0FEaUI7QUFFN0JGLFlBQVcsaUJBQUVHO0FBRmdCLENBQTlCOztBQUtBLFNBQVNOLFdBQVQsQ0FBcUJDLFFBQXJCLEVBQStCO0FBQUEsOENBQ2RBLFFBRGM7QUFBQSxLQUN2Qk0sS0FEdUI7O0FBRTlCLEtBQUksQ0FBQ0EsS0FBTCxFQUFZO0FBQ1gsU0FBTyxJQUFQO0FBQ0E7QUFDRCxLQUFNSixZQUFZSSxNQUFNWCxLQUFOLENBQVlPLFNBQTlCO0FBQ0EsS0FBSSxDQUFDQSxTQUFMLEVBQWdCO0FBQ2YsU0FBTyxJQUFQO0FBQ0E7QUFDRCxRQUFPQSxVQUNMSyxLQURLLENBQ0MsR0FERCxFQUVMQyxHQUZLLENBRUQ7QUFBQSxTQUFLQyxFQUFFQyxPQUFGLENBQVUsV0FBVixFQUF1QixFQUF2QixDQUFMO0FBQUEsRUFGQyxFQUdMQyxJQUhLLENBR0E7QUFBQSxTQUFLLE9BQU9GLENBQVAsS0FBYSxRQUFiLElBQXlCQSxFQUFFRyxNQUFGLEdBQVcsQ0FBekM7QUFBQSxFQUhBLENBQVA7QUFJQSIsImZpbGUiOiJtYXJrZG93bi1jb2RlLWJsb2NrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzIGFzIHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0ZXh0Q29udGVudCBmcm9tICdyZWFjdC1hZGRvbnMtdGV4dC1jb250ZW50JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IENvZGUgZnJvbSAnLi4vY29kZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChNYXJrZG93bkNvZGVCbG9jaylgXG5cdGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYmFja2dyb3VuZFNlY29uZGFyeX07XG5cdGJvcmRlci1yYWRpdXM6IDNweDtcblx0Zm9udC1zaXplOiAxNS4zcHg7XG5cdGxpbmUtaGVpZ2h0OiAyM3B4O1xuXHRwYWRkaW5nOiAxNnB4O1xuXHRtYXJnaW4tYm90dG9tOiAxNnB4O1xuYDtcblxuZnVuY3Rpb24gTWFya2Rvd25Db2RlQmxvY2socHJvcHMpIHtcblx0Y29uc3QgbGFuZyA9IGdldExhbmd1YWdlKHByb3BzLmNoaWxkcmVuKTtcblx0Y29uc3QgY29kZSA9IHRleHRDb250ZW50KHByb3BzLmNoaWxkcmVuKTtcblx0cmV0dXJuIDxDb2RlIGJsb2NrIGNsYXNzTmFtZT17cHJvcHMuY2xhc3NOYW1lfSBsYW5ndWFnZT17bGFuZ30+e2NvZGV9PC9Db2RlPjtcbn1cblxuTWFya2Rvd25Db2RlQmxvY2sucHJvcFR5cGVzID0ge1xuXHRjaGlsZHJlbjogdC5hbnksXG5cdGNsYXNzTmFtZTogdC5zdHJpbmdcbn07XG5cbmZ1bmN0aW9uIGdldExhbmd1YWdlKGNoaWxkcmVuKSB7XG5cdGNvbnN0IFtjaGlsZF0gPSBjaGlsZHJlbjtcblx0aWYgKCFjaGlsZCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cdGNvbnN0IGNsYXNzTmFtZSA9IGNoaWxkLnByb3BzLmNsYXNzTmFtZTtcblx0aWYgKCFjbGFzc05hbWUpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXHRyZXR1cm4gY2xhc3NOYW1lXG5cdFx0LnNwbGl0KCcgJylcblx0XHQubWFwKG4gPT4gbi5yZXBsYWNlKCdsYW5ndWFnZS0nLCAnJykpXG5cdFx0LmZpbmQobiA9PiB0eXBlb2YgbiA9PT0gJ3N0cmluZycgJiYgbi5sZW5ndGggPiAwKTtcbn1cbiJdfQ==
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\t& table {\n\t\ttext-align: left;\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\toverflow: auto;\n\t\tmargin: 0 0 16px 0;\n\t\tborder-spacing: 0;\n\t\tborder-collapse: collapse;\n\t\tfont-size: 18px;\n\t\tfont-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\t}\n\t& tr {\n\t\tcolor: ', ';\n\t\tborder-top: 1px solid ', ';\n\t\tbackground: transparent;\n\t}\n\t& tr:nth-child(2n) {\n\t\tbackground: ', '\n\t}\n\t& th {\n\t\tpadding: 6px 13px;\n\t\tborder: 1px solid ', ';\n\t\tfont-weight: 600;\n\t}\n\t& td {\n\t\tpadding: 6px 13px;\n\t\tborder: 1px solid ', ';\n\t}\n'], ['\n\t& table {\n\t\ttext-align: left;\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\toverflow: auto;\n\t\tmargin: 0 0 16px 0;\n\t\tborder-spacing: 0;\n\t\tborder-collapse: collapse;\n\t\tfont-size: 18px;\n\t\tfont-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\t}\n\t& tr {\n\t\tcolor: ', ';\n\t\tborder-top: 1px solid ', ';\n\t\tbackground: transparent;\n\t}\n\t& tr:nth-child(2n) {\n\t\tbackground: ', '\n\t}\n\t& th {\n\t\tpadding: 6px 13px;\n\t\tborder: 1px solid ', ';\n\t\tfont-weight: 600;\n\t}\n\t& td {\n\t\tpadding: 6px 13px;\n\t\tborder: 1px solid ', ';\n\t}\n']);

var _frontMatter = require('front-matter');

var _frontMatter2 = _interopRequireDefault(_frontMatter);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _remark = require('remark');

var _remark2 = _interopRequireDefault(_remark);

var _remarkGemojiToEmoji = require('remark-gemoji-to-emoji');

var _remarkGemojiToEmoji2 = _interopRequireDefault(_remarkGemojiToEmoji);

var _remarkReact = require('remark-react');

var _remarkReact2 = _interopRequireDefault(_remarkReact);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _markdownBlockquote = require('./markdown-blockquote');

var _markdownBlockquote2 = _interopRequireDefault(_markdownBlockquote);

var _markdownCode = require('./markdown-code');

var _markdownCode2 = _interopRequireDefault(_markdownCode);

var _markdownCodeBlock = require('./markdown-code-block');

var _markdownCodeBlock2 = _interopRequireDefault(_markdownCodeBlock);

var _markdownCopy = require('./markdown-copy');

var _markdownCopy2 = _interopRequireDefault(_markdownCopy);

var _markdownHeadline = require('./markdown-headline');

var _markdownHeadline2 = _interopRequireDefault(_markdownHeadline);

var _markdownHr = require('./markdown-hr');

var _markdownHr2 = _interopRequireDefault(_markdownHr);

var _markdownImage = require('./markdown-image');

var _markdownImage2 = _interopRequireDefault(_markdownImage);

var _markdownItem = require('./markdown-item');

var _markdownItem2 = _interopRequireDefault(_markdownItem);

var _markdownList = require('./markdown-list');

var _markdownList2 = _interopRequireDefault(_markdownList);

var _markdownLink = require('./markdown-link');

var _markdownLink2 = _interopRequireDefault(_markdownLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Markdown = function (_React$Component) {
	(0, _inherits3.default)(Markdown, _React$Component);

	function Markdown(props, context) {
		(0, _classCallCheck3.default)(this, Markdown);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Markdown.__proto__ || (0, _getPrototypeOf2.default)(Markdown)).call(this, props, context));

		_this.state = props;
		return _this;
	}

	(0, _createClass3.default)(Markdown, [{
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			clearTimeout(this.timer);
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(next) {
			var _this2 = this;

			if (next.source === this.props.source) {
				return;
			}

			clearTimeout(this.timer);

			this.setState({
				source: ''
			});

			setTimeout(function () {
				return _this2.setState(next);
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var props = this.props;

			var Headline = prop('linkable', props.linkable)(_markdownHeadline2.default);

			return _react2.default.createElement(
				StyledMarkdown,
				{ className: props.className },
				this.state.source && (0, _remark2.default)().use(_remarkReact2.default, {
					sanitize: false,
					remarkReactComponents: {
						a: _markdownLink2.default,
						blockquote: _markdownBlockquote2.default,
						code: _markdownCode2.default,
						h1: is('h1')(Headline),
						h2: is('h2')(Headline),
						h3: is('h3')(Headline),
						h4: is('h4')(Headline),
						h5: is('h5')(Headline),
						h6: is('h6')(Headline),
						hr: _markdownHr2.default,
						img: _markdownImage2.default,
						li: _markdownItem2.default,
						p: _markdownCopy2.default,
						pre: _markdownCodeBlock2.default,
						ul: is('ul')(_markdownList2.default),
						ol: is('ol')(_markdownList2.default)
					}
				}).use(_remarkGemojiToEmoji2.default).processSync((0, _frontMatter2.default)(this.state.source).body).contents
			);
		}
	}]);
	return Markdown;
}(_react2.default.Component);

exports.default = Markdown;


Markdown.propTypes = {
	base: _react.PropTypes.string.isRequired,
	className: _react.PropTypes.string,
	hash: _react.PropTypes.string.isRequired,
	pathname: _react.PropTypes.string.isRequired,
	query: _react.PropTypes.object.isRequired,
	scrollTo: _react.PropTypes.func.isRequired,
	source: _react.PropTypes.string
};

var StyledMarkdown = _styledComponents2.default.div(_templateObject, function (props) {
	return props.theme.color;
}, function (props) {
	return props.theme.border;
}, function (props) {
	return props.theme.backgroundTertiary;
}, function (props) {
	return props.theme.border;
}, function (props) {
	return props.theme.border;
});

function is(is) {
	return function (Component) {
		return function (props) {
			return _react2.default.createElement(Component, (0, _extends3.default)({ is: is }, props));
		};
	};
}

function prop(name, value) {
	return function (Component) {
		return function (props) {
			return _react2.default.createElement(Component, (0, _extends3.default)({}, props, (0, _defineProperty3.default)({}, name, value)));
		};
	};
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2NvbW1vbi9tYXJrZG93bi9pbmRleC5qcyJdLCJuYW1lcyI6WyJNYXJrZG93biIsInByb3BzIiwiY29udGV4dCIsInN0YXRlIiwiY2xlYXJUaW1lb3V0IiwidGltZXIiLCJuZXh0Iiwic291cmNlIiwic2V0U3RhdGUiLCJzZXRUaW1lb3V0IiwiSGVhZGxpbmUiLCJwcm9wIiwibGlua2FibGUiLCJjbGFzc05hbWUiLCJ1c2UiLCJzYW5pdGl6ZSIsInJlbWFya1JlYWN0Q29tcG9uZW50cyIsImEiLCJibG9ja3F1b3RlIiwiY29kZSIsImgxIiwiaXMiLCJoMiIsImgzIiwiaDQiLCJoNSIsImg2IiwiaHIiLCJpbWciLCJsaSIsInAiLCJwcmUiLCJ1bCIsIm9sIiwicHJvY2Vzc1N5bmMiLCJib2R5IiwiY29udGVudHMiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJiYXNlIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImhhc2giLCJwYXRobmFtZSIsInF1ZXJ5Iiwib2JqZWN0Iiwic2Nyb2xsVG8iLCJmdW5jIiwiU3R5bGVkTWFya2Rvd24iLCJkaXYiLCJ0aGVtZSIsImNvbG9yIiwiYm9yZGVyIiwiYmFja2dyb3VuZFRlcnRpYXJ5IiwibmFtZSIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7SUFFcUJBLFE7OztBQUNwQixtQkFBWUMsS0FBWixFQUFtQkMsT0FBbkIsRUFBNEI7QUFBQTs7QUFBQSx3SUFDckJELEtBRHFCLEVBQ2RDLE9BRGM7O0FBRTNCLFFBQUtDLEtBQUwsR0FBYUYsS0FBYjtB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RUFBb0JDLEtBQXBCLEVBQTJCO0FBQzFCLFFBQU87QUFBQSxTQUFhO0FBQUEsVUFBUyw4QkFBQyxTQUFELDZCQUFldEQsS0FBZixvQ0FBNEJxRCxJQUE1QixFQUFtQ0MsS0FBbkMsR0FBVDtBQUFBLEdBQWI7QUFBQSxFQUFQO0FBQ0EiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnJvbnRtYXR0ZXIgZnJvbSAnZnJvbnQtbWF0dGVyJztcbmltcG9ydCBSZWFjdCwge1Byb3BUeXBlcyBhcyB0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcmVtYXJrIGZyb20gJ3JlbWFyayc7XG5pbXBvcnQgZW1vamkgZnJvbSAncmVtYXJrLWdlbW9qaS10by1lbW9qaSc7XG5pbXBvcnQgcmVhY3RSZW5kZXJlciBmcm9tICdyZW1hcmstcmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCBNYXJrZG93bkJsb2NrUXVvdGUgZnJvbSAnLi9tYXJrZG93bi1ibG9ja3F1b3RlJztcbmltcG9ydCBNYXJrZG93bkNvZGUgZnJvbSAnLi9tYXJrZG93bi1jb2RlJztcbmltcG9ydCBNYXJrZG93bkNvZGVCbG9jayBmcm9tICcuL21hcmtkb3duLWNvZGUtYmxvY2snO1xuaW1wb3J0IE1hcmtkb3duQ29weSBmcm9tICcuL21hcmtkb3duLWNvcHknO1xuaW1wb3J0IE1hcmtkb3duSGVhZGxpbmUgZnJvbSAnLi9tYXJrZG93bi1oZWFkbGluZSc7XG5pbXBvcnQgTWFya2Rvd25IciBmcm9tICcuL21hcmtkb3duLWhyJztcbmltcG9ydCBNYXJrZG93bkltYWdlIGZyb20gJy4vbWFya2Rvd24taW1hZ2UnO1xuaW1wb3J0IE1hcmtkb3duSXRlbSBmcm9tICcuL21hcmtkb3duLWl0ZW0nO1xuaW1wb3J0IE1hcmtkb3duTGlzdCBmcm9tICcuL21hcmtkb3duLWxpc3QnO1xuaW1wb3J0IE1hcmtkb3duTGluayBmcm9tICcuL21hcmtkb3duLWxpbmsnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXJrZG93biBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG5cdFx0c3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXHRcdHRoaXMuc3RhdGUgPSBwcm9wcztcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dCkge1xuXHRcdGlmIChuZXh0LnNvdXJjZSA9PT0gdGhpcy5wcm9wcy5zb3VyY2UpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG5cblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHNvdXJjZTogJydcblx0XHR9KTtcblxuXHRcdHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZXRTdGF0ZShuZXh0KSk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge3Byb3BzfSA9IHRoaXM7XG5cdFx0Y29uc3QgSGVhZGxpbmUgPSBwcm9wKCdsaW5rYWJsZScsIHByb3BzLmxpbmthYmxlKShNYXJrZG93bkhlYWRsaW5lKTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8U3R5bGVkTWFya2Rvd24gY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5zb3VyY2UgJiZcblx0XHRcdFx0XHRcdHJlbWFyaygpXG5cdFx0XHRcdFx0XHRcdC51c2UocmVhY3RSZW5kZXJlciwge1xuXHRcdFx0XHRcdFx0XHRcdHNhbml0aXplOiBmYWxzZSxcblx0XHRcdFx0XHRcdFx0XHRyZW1hcmtSZWFjdENvbXBvbmVudHM6IHtcblx0XHRcdFx0XHRcdFx0XHRcdGE6IE1hcmtkb3duTGluayxcblx0XHRcdFx0XHRcdFx0XHRcdGJsb2NrcXVvdGU6IE1hcmtkb3duQmxvY2tRdW90ZSxcblx0XHRcdFx0XHRcdFx0XHRcdGNvZGU6IE1hcmtkb3duQ29kZSxcblx0XHRcdFx0XHRcdFx0XHRcdGgxOiBpcygnaDEnKShIZWFkbGluZSksXG5cdFx0XHRcdFx0XHRcdFx0XHRoMjogaXMoJ2gyJykoSGVhZGxpbmUpLFxuXHRcdFx0XHRcdFx0XHRcdFx0aDM6IGlzKCdoMycpKEhlYWRsaW5lKSxcblx0XHRcdFx0XHRcdFx0XHRcdGg0OiBpcygnaDQnKShIZWFkbGluZSksXG5cdFx0XHRcdFx0XHRcdFx0XHRoNTogaXMoJ2g1JykoSGVhZGxpbmUpLFxuXHRcdFx0XHRcdFx0XHRcdFx0aDY6IGlzKCdoNicpKEhlYWRsaW5lKSxcblx0XHRcdFx0XHRcdFx0XHRcdGhyOiBNYXJrZG93bkhyLFxuXHRcdFx0XHRcdFx0XHRcdFx0aW1nOiBNYXJrZG93bkltYWdlLFxuXHRcdFx0XHRcdFx0XHRcdFx0bGk6IE1hcmtkb3duSXRlbSxcblx0XHRcdFx0XHRcdFx0XHRcdHA6IE1hcmtkb3duQ29weSxcblx0XHRcdFx0XHRcdFx0XHRcdHByZTogTWFya2Rvd25Db2RlQmxvY2ssXG5cdFx0XHRcdFx0XHRcdFx0XHR1bDogaXMoJ3VsJykoTWFya2Rvd25MaXN0KSxcblx0XHRcdFx0XHRcdFx0XHRcdG9sOiBpcygnb2wnKShNYXJrZG93bkxpc3QpXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHQudXNlKGVtb2ppKVxuXHRcdFx0XHRcdFx0XHQucHJvY2Vzc1N5bmMoZnJvbnRtYXR0ZXIodGhpcy5zdGF0ZS5zb3VyY2UpLmJvZHkpXG5cdFx0XHRcdFx0XHRcdC5jb250ZW50c1xuXHRcdFx0XHR9XG5cdFx0XHQ8L1N0eWxlZE1hcmtkb3duPlxuXHRcdCk7XG5cdH1cbn1cblxuTWFya2Rvd24ucHJvcFR5cGVzID0ge1xuXHRiYXNlOiB0LnN0cmluZy5pc1JlcXVpcmVkLFxuXHRjbGFzc05hbWU6IHQuc3RyaW5nLFxuXHRoYXNoOiB0LnN0cmluZy5pc1JlcXVpcmVkLFxuXHRwYXRobmFtZTogdC5zdHJpbmcuaXNSZXF1aXJlZCxcblx0cXVlcnk6IHQub2JqZWN0LmlzUmVxdWlyZWQsXG5cdHNjcm9sbFRvOiB0LmZ1bmMuaXNSZXF1aXJlZCxcblx0c291cmNlOiB0LnN0cmluZ1xufTtcblxuY29uc3QgU3R5bGVkTWFya2Rvd24gPSBzdHlsZWQuZGl2YFxuXHQmIHRhYmxlIHtcblx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdG92ZXJmbG93OiBhdXRvO1xuXHRcdG1hcmdpbjogMCAwIDE2cHggMDtcblx0XHRib3JkZXItc3BhY2luZzogMDtcblx0XHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuXHR9XG5cdCYgdHIge1xuXHRcdGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9yfTtcblx0XHRib3JkZXItdG9wOiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ib3JkZXJ9O1xuXHRcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXHR9XG5cdCYgdHI6bnRoLWNoaWxkKDJuKSB7XG5cdFx0YmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5iYWNrZ3JvdW5kVGVydGlhcnl9XG5cdH1cblx0JiB0aCB7XG5cdFx0cGFkZGluZzogNnB4IDEzcHg7XG5cdFx0Ym9yZGVyOiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ib3JkZXJ9O1xuXHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdH1cblx0JiB0ZCB7XG5cdFx0cGFkZGluZzogNnB4IDEzcHg7XG5cdFx0Ym9yZGVyOiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ib3JkZXJ9O1xuXHR9XG5gO1xuXG5mdW5jdGlvbiBpcyhpcykge1xuXHRyZXR1cm4gQ29tcG9uZW50ID0+IHByb3BzID0+IDxDb21wb25lbnQgaXM9e2lzfSB7Li4ucHJvcHN9Lz47XG59XG5cbmZ1bmN0aW9uIHByb3AobmFtZSwgdmFsdWUpIHtcblx0cmV0dXJuIENvbXBvbmVudCA9PiBwcm9wcyA9PiA8Q29tcG9uZW50IHsuLi5wcm9wc30gey4uLntbbmFtZV06IHZhbHVlfX0vPjtcbn1cbiJdfQ==
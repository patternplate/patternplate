'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

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

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _class, _temp;

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\tdisplay: flex;\n\talign-items: center;\n\theight: 60px;\n\tpadding: 10px 15px;\n'], ['\n\tdisplay: flex;\n\talign-items: center;\n\theight: 60px;\n\tpadding: 10px 15px;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n\tflex-grow: 0;\n\tflex-shrink: 0;\n\tfill: ', ';\n'], ['\n\tflex-grow: 0;\n\tflex-shrink: 0;\n\tfill: ', ';\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n\tposition: relative;\n\tz-index: 2;\n\twidth: 100%;\n\tborder: 0;\n\tborder-radius: 0;\n\tbackground: transparent;\n\tfont-size: 16px;\n\tcolor: ', ';\n\tpadding: 0;\n\tappearance: none;\n\tborder-radius: 0;\n\tborder: none;\n\t:focus {\n\t\toutline: none;\n\t}\n'], ['\n\tposition: relative;\n\tz-index: 2;\n\twidth: 100%;\n\tborder: 0;\n\tborder-radius: 0;\n\tbackground: transparent;\n\tfont-size: 16px;\n\tcolor: ', ';\n\tpadding: 0;\n\tappearance: none;\n\tborder-radius: 0;\n\tborder: none;\n\t:focus {\n\t\toutline: none;\n\t}\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n\tposition: relative;\n\tdisplay: flex;\n\talign-items: center;\n\tflex-grow: 1;\n\tflex-shrink: 0;\n\tmargin-left: 10px;\n'], ['\n\tposition: relative;\n\tdisplay: flex;\n\talign-items: center;\n\tflex-grow: 1;\n\tflex-shrink: 0;\n\tmargin-left: 10px;\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n\tposition: absolute;\n\tz-index: 1;\n\ttop: 0;\n\tleft: 0;\n\topacity: .3;\n'], ['\n\tposition: absolute;\n\tz-index: 1;\n\ttop: 0;\n\tleft: 0;\n\topacity: .3;\n']);

var _lodash = require('lodash');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _icon = require('./icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledSearchField = _styledComponents2.default.label(_templateObject);

var StyledIcon = (0, _styledComponents2.default)(_icon2.default)(_templateObject2, function (props) {
	return props.theme.color;
});

var StyledInput = _styledComponents2.default.input(_templateObject3, function (props) {
	return props.theme.color;
});

var StyledInputContainer = _styledComponents2.default.div(_templateObject4);

var StyledInputSuggestion = (0, _styledComponents2.default)(function (p) {
	return _react2.default.createElement(StyledInput, (0, _extends3.default)({}, p, { readOnly: true }));
})(_templateObject5);

var SearchField = (_temp = _class = function (_Component) {
	(0, _inherits3.default)(SearchField, _Component);

	function SearchField() {
		var _ref;

		(0, _classCallCheck3.default)(this, SearchField);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = SearchField.__proto__ || (0, _getPrototypeOf2.default)(SearchField)).call.apply(_ref, [this].concat(args)));

		_this.handleChange = _this.handleChange.bind(_this);
		_this.handleKeyDown = _this.handleKeyDown.bind(_this);
		_this.handleStop = (0, _lodash.debounce)(_this.props.onStop, 300, { trailing: true });
		_this.timer = null;
		return _this;
	}

	(0, _createClass3.default)(SearchField, [{
		key: 'handleChange',
		value: function handleChange(e) {
			e.persist();
			this.props.onChange(e);
			this.handleStop(e);
		}
	}, {
		key: 'handleKeyDown',
		value: function handleKeyDown(e) {
			var target = e.target;

			var hasValue = target.value.length > 0;
			var atEnd = hasValue && target.selectionStart === target.value.length;

			if (e.which !== 27) {
				e.stopPropagation();
			}
			if (e.which === 27 && hasValue) {
				e.preventDefault();
				this.props.onClear();
			}
			if (e.which === 38) {
				this.props.onUp(e);
			}
			if (e.which === 39 && atEnd && this.props.suggestion) {
				e.preventDefault();
				this.props.onComplete(this.props.suggestion);
			}
			if (e.which === 40 && atEnd) {
				e.preventDefault();
				this.props.onDown(e);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var props = this.props;

			return _react2.default.createElement(
				StyledSearchField,
				null,
				_react2.default.createElement(StyledIcon, { symbol: 'search' }),
				_react2.default.createElement(
					StyledInputContainer,
					null,
					_react2.default.createElement(StyledInputSuggestion, {
						value: props.suggestion || ''
					}),
					_react2.default.createElement(StyledInput, {
						autoFocus: props.autoFocus,
						name: props.name,
						onBlur: props.onBlur,
						onChange: this.handleChange,
						onFocus: props.onFocus,
						onKeyDown: this.handleKeyDown,
						placeholder: props.placeholder,
						title: props.title,
						type: 'text',
						value: props.value,
						'data-search': props.mark
					})
				),
				props.children
			);
		}
	}]);
	return SearchField;
}(_react.Component), _class.propTypes = {
	className: _react.PropTypes.string,
	name: _react.PropTypes.string.isRequired,
	onBlur: _react.PropTypes.func,
	onChange: _react.PropTypes.func,
	onClear: _react.PropTypes.func,
	onComplete: _react.PropTypes.func,
	onFocus: _react.PropTypes.func,
	onKeyDown: _react.PropTypes.func,
	onUp: _react.PropTypes.func,
	onDown: _react.PropTypes.func,
	onStop: _react.PropTypes.func,
	placeholder: _react.PropTypes.string,
	suggestion: _react.PropTypes.string,
	title: _react.PropTypes.string,
	value: _react.PropTypes.string
}, _class.defaultProps = {
	blur: function blur() {},
	onChange: function onChange() {},
	onFocus: function onFocus() {},
	onUp: function onUp() {},
	onDown: function onDown() {},
	onBlur: function onBlur() {},
	onStop: function onStop() {}
}, _temp);
exports.default = SearchField;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2NvbW1vbi9zZWFyY2gtZmllbGQuanMiXSwibmFtZXMiOlsiU3R5bGVkU2VhcmNoRmllbGQiLCJsYWJlbCIsIlN0eWxlZEljb24iLCJwcm9wcyIsInRoZW1lIiwiY29sb3IiLCJTdHlsZWRJbnB1dCIsImlucHV0IiwiU3R5bGVkSW5wdXRDb250YWluZXIiLCJkaXYiLCJTdHlsZWRJbnB1dFN1Z2dlc3Rpb24iLCJwIiwiU2VhcmNoRmllbGQiLCJhcmdzIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsImhhbmRsZUtleURvd24iLCJoYW5kbGVTdG9wIiwib25TdG9wIiwidHJhaWxpbmciLCJ0aW1lciIsImUiLCJwZXJzaXN0Iiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJoYXNWYWx1ZSIsInZhbHVlIiwibGVuZ3RoIiwiYXRFbmQiLCJzZWxlY3Rpb25TdGFydCIsIndoaWNoIiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJvbkNsZWFyIiwib25VcCIsInN1Z2dlc3Rpb24iLCJvbkNvbXBsZXRlIiwib25Eb3duIiwiYXV0b0ZvY3VzIiwibmFtZSIsIm9uQmx1ciIsIm9uRm9jdXMiLCJwbGFjZWhvbGRlciIsInRpdGxlIiwibWFyayIsImNoaWxkcmVuIiwicHJvcFR5cGVzIiwiY2xhc3NOYW1lIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImZ1bmMiLCJvbktleURvd24iLCJkZWZhdWx0UHJvcHMiLCJibHVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7QUFFQSxJQUFNQSxvQkFBb0IsMkJBQU9DLEtBQTNCLGlCQUFOOztBQU9BLElBQU1DLGFBQWEsK0NBQWIsbUJBR0c7QUFBQSxRQUFTQyxNQUFNQyxLQUFOLENBQVlDLEtBQXJCO0FBQUEsQ0FISCxDQUFOOztBQU1BLElB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cUJBQWF2QixNQUFNeUM7QUFYcEI7QUFKRCxLQUZEO0FBb0JFekMsVUFBTTBDO0FBcEJSLElBREQ7QUF3QkE7Ozs0QkE5Rk1DLFMsR0FBWTtBQUNsQkMsWUFBVyxpQkFBTUMsTUFEQztBQUVsQlQsT0FBTSxpQkFBTVMsTUFBTixDQUFhQyxVQUZEO0FBR2xCVCxTQUFRLGlCQUFNVSxJQUhJO0FBSWxCM0IsV0FBVSxpQkFBTTJCLElBSkU7QUFLbEJqQixVQUFTLGlCQUFNaUIsSUFMRztBQU1sQmQsYUFBWSxpQkFBTWMsSUFOQTtBQU9sQlQsVUFBUyxpQkFBTVMsSUFQRztBQVFsQkMsWUFBVyxpQkFBTUQsSUFSQztBQVNsQmhCLE9BQU0saUJBQU1nQixJQVRNO0FBVWxCYixTQUFRLGlCQUFNYSxJQVZJO0FBV2xCaEMsU0FBUSxpQkFBTWdDLElBWEk7QUFZbEJSLGNBQWEsaUJBQU1NLE1BWkQ7QUFhbEJiLGFBQVksaUJBQU1hLE1BYkE7QUFjbEJMLFFBQU8saUJBQU1LLE1BZEs7QUFlbEJ0QixRQUFPLGlCQUFNc0I7QUFmSyxDLFNBa0JaSSxZLEdBQWU7QUFDckJDLE9BQU0sZ0JBQU0sQ0FBRSxDQURPO0FBRXJCOUIsV0FBVSxvQkFBTSxDQUFFLENBRkc7QUFHckJrQixVQUFTLG1CQUFNLENBQUUsQ0FISTtBQUlyQlAsT0FBTSxnQkFBTSxDQUFFLENBSk87QUFLckJHLFNBQVEsa0JBQU0sQ0FBRSxDQUxLO0FBTXJCRyxTQUFRLGtCQUFNLENBQUUsQ0FOSztBQU9yQnRCLFNBQVEsa0JBQU0sQ0FBRTtBQVBLLEM7a0JBbkJGTixXIiwiZmlsZSI6InNlYXJjaC1maWVsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZGVib3VuY2V9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIFByb3BUeXBlcyBhcyB0eXBlc30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCBJY29uIGZyb20gJy4vaWNvbic7XG5cbmNvbnN0IFN0eWxlZFNlYXJjaEZpZWxkID0gc3R5bGVkLmxhYmVsYFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRoZWlnaHQ6IDYwcHg7XG5cdHBhZGRpbmc6IDEwcHggMTVweDtcbmA7XG5cbmNvbnN0IFN0eWxlZEljb24gPSBzdHlsZWQoSWNvbilgXG5cdGZsZXgtZ3JvdzogMDtcblx0ZmxleC1zaHJpbms6IDA7XG5cdGZpbGw6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3J9O1xuYDtcblxuY29uc3QgU3R5bGVkSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ei1pbmRleDogMjtcblx0d2lkdGg6IDEwMCU7XG5cdGJvcmRlcjogMDtcblx0Ym9yZGVyLXJhZGl1czogMDtcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0Y29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3J9O1xuXHRwYWRkaW5nOiAwO1xuXHRhcHBlYXJhbmNlOiBub25lO1xuXHRib3JkZXItcmFkaXVzOiAwO1xuXHRib3JkZXI6IG5vbmU7XG5cdDpmb2N1cyB7XG5cdFx0b3V0bGluZTogbm9uZTtcblx0fVxuYDtcblxuY29uc3QgU3R5bGVkSW5wdXRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGZsZXgtZ3JvdzogMTtcblx0ZmxleC1zaHJpbms6IDA7XG5cdG1hcmdpbi1sZWZ0OiAxMHB4O1xuYDtcblxuY29uc3QgU3R5bGVkSW5wdXRTdWdnZXN0aW9uID0gc3R5bGVkKHAgPT4gPFN0eWxlZElucHV0IHsuLi5wfSByZWFkT25seS8+KWBcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR6LWluZGV4OiAxO1xuXHR0b3A6IDA7XG5cdGxlZnQ6IDA7XG5cdG9wYWNpdHk6IC4zO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoRmllbGQgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRzdGF0aWMgcHJvcFR5cGVzID0ge1xuXHRcdGNsYXNzTmFtZTogdHlwZXMuc3RyaW5nLFxuXHRcdG5hbWU6IHR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdG9uQmx1cjogdHlwZXMuZnVuYyxcblx0XHRvbkNoYW5nZTogdHlwZXMuZnVuYyxcblx0XHRvbkNsZWFyOiB0eXBlcy5mdW5jLFxuXHRcdG9uQ29tcGxldGU6IHR5cGVzLmZ1bmMsXG5cdFx0b25Gb2N1czogdHlwZXMuZnVuYyxcblx0XHRvbktleURvd246IHR5cGVzLmZ1bmMsXG5cdFx0b25VcDogdHlwZXMuZnVuYyxcblx0XHRvbkRvd246IHR5cGVzLmZ1bmMsXG5cdFx0b25TdG9wOiB0eXBlcy5mdW5jLFxuXHRcdHBsYWNlaG9sZGVyOiB0eXBlcy5zdHJpbmcsXG5cdFx0c3VnZ2VzdGlvbjogdHlwZXMuc3RyaW5nLFxuXHRcdHRpdGxlOiB0eXBlcy5zdHJpbmcsXG5cdFx0dmFsdWU6IHR5cGVzLnN0cmluZ1xuXHR9O1xuXG5cdHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG5cdFx0Ymx1cjogKCkgPT4ge30sXG5cdFx0b25DaGFuZ2U6ICgpID0+IHt9LFxuXHRcdG9uRm9jdXM6ICgpID0+IHt9LFxuXHRcdG9uVXA6ICgpID0+IHt9LFxuXHRcdG9uRG93bjogKCkgPT4ge30sXG5cdFx0b25CbHVyOiAoKSA9PiB7fSxcblx0XHRvblN0b3A6ICgpID0+IHt9XG5cdH07XG5cblx0Y29uc3RydWN0b3IoLi4uYXJncykge1xuXHRcdHN1cGVyKC4uLmFyZ3MpO1xuXHRcdHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcblx0XHR0aGlzLmhhbmRsZUtleURvd24gPSB0aGlzLmhhbmRsZUtleURvd24uYmluZCh0aGlzKTtcblx0XHR0aGlzLmhhbmRsZVN0b3AgPSBkZWJvdW5jZSh0aGlzLnByb3BzLm9uU3RvcCwgMzAwLCB7dHJhaWxpbmc6IHRydWV9KTtcblx0XHR0aGlzLnRpbWVyID0gbnVsbDtcblx0fVxuXG5cdGhhbmRsZUNoYW5nZShlKSB7XG5cdFx0ZS5wZXJzaXN0KCk7XG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZShlKTtcblx0XHR0aGlzLmhhbmRsZVN0b3AoZSk7XG5cdH1cblxuXHRoYW5kbGVLZXlEb3duKGUpIHtcblx0XHRjb25zdCB7dGFyZ2V0fSA9IGU7XG5cdFx0Y29uc3QgaGFzVmFsdWUgPSB0YXJnZXQudmFsdWUubGVuZ3RoID4gMDtcblx0XHRjb25zdCBhdEVuZCA9IGhhc1ZhbHVlICYmIHRhcmdldC5zZWxlY3Rpb25TdGFydCA9PT0gdGFyZ2V0LnZhbHVlLmxlbmd0aDtcblxuXHRcdGlmIChlLndoaWNoICE9PSAyNykge1xuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR9XG5cdFx0aWYgKChlLndoaWNoID09PSAyNykgJiYgaGFzVmFsdWUpIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHRoaXMucHJvcHMub25DbGVhcigpO1xuXHRcdH1cblx0XHRpZiAoZS53aGljaCA9PT0gMzgpIHtcblx0XHRcdHRoaXMucHJvcHMub25VcChlKTtcblx0XHR9XG5cdFx0aWYgKChlLndoaWNoID09PSAzOSkgJiYgYXRFbmQgJiYgdGhpcy5wcm9wcy5zdWdnZXN0aW9uKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR0aGlzLnByb3BzLm9uQ29tcGxldGUodGhpcy5wcm9wcy5zdWdnZXN0aW9uKTtcblx0XHR9XG5cdFx0aWYgKChlLndoaWNoID09PSA0MCkgJiYgYXRFbmQpIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHRoaXMucHJvcHMub25Eb3duKGUpO1xuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCBwcm9wcyA9IHRoaXMucHJvcHM7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PFN0eWxlZFNlYXJjaEZpZWxkPlxuXHRcdFx0XHQ8U3R5bGVkSWNvbiBzeW1ib2w9XCJzZWFyY2hcIi8+XG5cdFx0XHRcdDxTdHlsZWRJbnB1dENvbnRhaW5lcj5cblx0XHRcdFx0XHQ8U3R5bGVkSW5wdXRTdWdnZXN0aW9uXG5cdFx0XHRcdFx0XHR2YWx1ZT17cHJvcHMuc3VnZ2VzdGlvbiB8fCAnJ31cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFN0eWxlZElucHV0XG5cdFx0XHRcdFx0XHRhdXRvRm9jdXM9e3Byb3BzLmF1dG9Gb2N1c31cblx0XHRcdFx0XHRcdG5hbWU9e3Byb3BzLm5hbWV9XG5cdFx0XHRcdFx0XHRvbkJsdXI9e3Byb3BzLm9uQmx1cn1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cblx0XHRcdFx0XHRcdG9uRm9jdXM9e3Byb3BzLm9uRm9jdXN9XG5cdFx0XHRcdFx0XHRvbktleURvd249e3RoaXMuaGFuZGxlS2V5RG93bn1cblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtwcm9wcy5wbGFjZWhvbGRlcn1cblx0XHRcdFx0XHRcdHRpdGxlPXtwcm9wcy50aXRsZX1cblx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdHZhbHVlPXtwcm9wcy52YWx1ZX1cblx0XHRcdFx0XHRcdGRhdGEtc2VhcmNoPXtwcm9wcy5tYXJrfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9TdHlsZWRJbnB1dENvbnRhaW5lcj5cblx0XHRcdFx0e3Byb3BzLmNoaWxkcmVufVxuXHRcdFx0PC9TdHlsZWRTZWFyY2hGaWVsZD5cblx0XHQpO1xuXHR9XG59XG4iXX0=
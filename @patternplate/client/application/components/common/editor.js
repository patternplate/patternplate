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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Editor = function (_Component) {
	(0, _inherits3.default)(Editor, _Component);

	function Editor() {
		(0, _classCallCheck3.default)(this, Editor);
		return (0, _possibleConstructorReturn3.default)(this, (Editor.__proto__ || (0, _getPrototypeOf2.default)(Editor)).apply(this, arguments));
	}

	(0, _createClass3.default)(Editor, [{
		key: 'render',
		value: function render() {
			var props = this.props;


			return _react2.default.createElement('textarea', {
				className: props.className,
				onChange: props.onChange,
				onKeyDown: props.onKeyDown,
				value: props.value
			});
		}
	}]);
	return Editor;
}(_react.Component);

exports.default = Editor;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2NvbW1vbi9lZGl0b3IuanMiXSwibmFtZXMiOlsiRWRpdG9yIiwicHJvcHMiLCJjbGFzc05hbWUiLCJvbkNoYW5nZSIsIm9uS2V5RG93biIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0lBRXFCQSxNOzs7Ozs7Ozs7OzJCQUNYO0FBQUEsT0FDREMsS0FEQyxHQUNRLElBRFIsQ0FDREEsS0FEQzs7O0FBR1IsVUFDQztBQUNDLGVBQVdBLE1BQU1DLFNBRGxCO0FBRUMsY0FBVUQsTUFBTUUsUUFGakI7QUFHQyxlQUFXRixNQUFNRyxTQUhsQjtBQUlDLFdBQU9ILE1BQU1JO0FBSmQsS0FERDtBQVFBOzs7OztrQkFabUJMLE0iLCJmaWxlIjoiZWRpdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkaXRvciBleHRlbmRzIENvbXBvbmVudCB7XG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7cHJvcHN9ID0gdGhpcztcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8dGV4dGFyZWFcblx0XHRcdFx0Y2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9XG5cdFx0XHRcdG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX1cblx0XHRcdFx0b25LZXlEb3duPXtwcm9wcy5vbktleURvd259XG5cdFx0XHRcdHZhbHVlPXtwcm9wcy52YWx1ZX1cblx0XHRcdFx0Lz5cblx0XHQpO1xuXHR9XG59XG4iXX0=
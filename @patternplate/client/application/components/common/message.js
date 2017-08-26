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

var _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _pureRenderDecorator = require('pure-render-decorator');

var _pureRenderDecorator2 = _interopRequireDefault(_pureRenderDecorator);

var _lodash = require('lodash');

var _icon = require('../common/icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Message = (0, _pureRenderDecorator2.default)(_class = (0, _autobindDecorator2.default)(_class = (_temp = _class2 = function (_Component) {
	(0, _inherits3.default)(Message, _Component);

	function Message() {
		(0, _classCallCheck3.default)(this, Message);
		return (0, _possibleConstructorReturn3.default)(this, (Message.__proto__ || (0, _getPrototypeOf2.default)(Message)).apply(this, arguments));
	}

	(0, _createClass3.default)(Message, [{
		key: 'handleDismissClick',
		value: function handleDismissClick() {
			this.props.onDismiss(this.props.id);
		}
	}, {
		key: 'handleRetryClick',
		value: function handleRetryClick() {
			this.props.onRetry();
		}
	}, {
		key: 'render',
		value: function render() {
			var props = this.props;

			var className = (0, _classnames2.default)('message', 'message--' + props.type);
			return _react2.default.createElement(
				'div',
				{ className: className },
				_react2.default.createElement(
					'div',
					{ className: 'message__header' },
					props.title && _react2.default.createElement(
						'div',
						{ className: 'message__title' },
						props.title
					),
					_react2.default.createElement(
						'div',
						{ className: 'message__action' },
						props.retry && _react2.default.createElement(
							'button',
							{
								onClick: this.handleRetryClick,
								type: 'button',
								className: 'message__button',
								title: 'Retry loading ' + props.pattern + ' [ctrl+r]'
							},
							'Retry'
						),
						_react2.default.createElement(
							'button',
							{
								onClick: this.handleDismissClick,
								type: 'button',
								className: 'message__button',
								title: 'Dismiss message [esc]'
							},
							'Dismiss'
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'message__body' },
					_react2.default.createElement(
						'pre',
						{ className: 'message__preformatted' },
						props.body
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'message__meta' },
					props.pattern && _react2.default.createElement(
						_reactRouter.Link,
						{
							to: {
								pathname: props.base + 'pattern/' + props.pattern,
								query: props.location.query
							},
							className: 'message__field'
						},
						_react2.default.createElement(_icon2.default, { base: props.base, symbol: 'pattern' }),
						props.pattern
					),
					props.file && _react2.default.createElement(
						'div',
						{ className: 'message__field' },
						_react2.default.createElement(_icon2.default, { base: props.base, symbol: 'documentation' }),
						props.file.slice(-50)
					)
				)
			);
		}
	}]);
	return Message;
}(_react.Component), _class2.propTypes = {
	base: _react.PropTypes.string.isRequired,
	id: _react.PropTypes.string.isRequired,
	onTimeRequest: _react.PropTypes.func.isRequired,
	onDismiss: _react.PropTypes.func.isRequired,
	onRetry: _react.PropTypes.func.isRequired
}, _class2.defaultProps = {
	onTimeRequest: _lodash.noop,
	onDismiss: _lodash.noop,
	onRetry: _lodash.noop
}, _temp)) || _class) || _class;

exports.default = Message;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2NvbW1vbi9tZXNzYWdlLmpzIl0sIm5hbWVzIjpbIk1lc3NhZ2UiLCJwcm9wcyIsIm9uRGlzbWlzcyIsImlkIiwib25SZXRyeSIsImNsYXNzTmFtZSIsInR5cGUiLCJ0aXRsZSIsInJldHJ5IiwiaGFuZGxlUmV0cnlDbGljayIsInBhdHRlcm4iLCJoYW5kbGVEaXNtaXNzQ2xpY2siLCJib2R5IiwicGF0aG5hbWUiLCJiYXNlIiwicXVlcnkiLCJsb2NhdGlvbiIsImZpbGUiLCJzbGljZSIsInByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJvblRpbWVSZXF1ZXN0IiwiZnVuYyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUVBOzs7Ozs7SUFJcUJBLE87Ozs7Ozs7Ozs7dUNBZUM7QUFDcEIsUUFBS0MsS0FBTCxDQUFXQyxTQUFYLENBQXFCLEtBQUtELEtBQUwsQ0FBV0UsRUFBaEM7QUFDQTs7O3FDQUVrQjtBQUNsQixRQUFLRixLQUFMLENBQVdHLE9BQVg7QUFDQTs7OzJCQUVRO0FBQUEsT0FDREgsS0FEQyxHQUNRLElBRFIsQ0FDREEsS0FEQzs7QUFFUixPQUFNSSxZQUFZLDBCQUFLLFNBQUwsZ0JBQTRCSixNQUFNSyxJQUFsQyxDQUFsQjtBQUNBLFVBQ0M7QUFBQTtBQUFBLE1BQUssV0FBV0QsU0FBaEI7QUFDQztBQUFBO0FBQUEsT0FBSyxXQUFVLGlCQUFmO0FBRUVKLFdBQU1NLEtBQU4sSUFDQztBQUFBO0FBQUEsUUFBSyxXQUFVLGdCQUFmO0FBQ0VOLFlBQU1NO0FBRFIsTUFISDtBQU9DO0FBQUE7QUFBQSxRQUFLLFdBQVUsaUJBQWY7QUFFRU4sWUFBTU8sS0FBTixJQUNDO0FBQUE7QUFBQTtBQUNDLGlCQUFTLEtBQUtDLGdCQURmO0FBRUMsY0FBSyxRQUZOO0FBR0MsbUJBQVUsaUJBSFg7QUFJQyxrQ0FBd0JSLE1BQU1TLE9BQTlCO0FBSkQ7QUFBQTtBQUFBLE9BSEg7QUFZQztBQUFBO0FBQUE7QUFDQyxpQkFBUyxLQUFLQyxrQkFEZjtBQUVDLGNBQUssUUFGTjtBQUdDLG1CQUFVLGlCQUhYO0FBSUM7QUFKRDtBQUFBO0FBQUE7QUFaRDtBQVBELEtBREQ7QUE4QkM7QUFBQTtBQUFBLE9BQUssV0FBVSxlQUFmO0FBQ0M7QUFBQTtBQUFBLFFBQUssV0FBVSx1QkFBZjtBQUNFVixZQUFNVztBQURSO0FBREQsS0E5QkQ7QUFtQ0M7QUFBQTtBQUFBLE9BQUssV0FBVSxlQUFmO0FBRUVYLFdBQU1TLE9BQU4sSUFDQztBQUFBO0FBQUE7QUFDQyxXQUFJO0FBQ0hHLGtCQUFhWixNQUFNYSxJQUFuQixnQkFBa0NiLE1BQU1TLE9BRHJDO0FBRUhLLGVBQU9kLE1BQU1lLFFBQU4sQ0FBZUQ7QUFGbkIsUUFETDtBQUtDLGtCQUFVO0FBTFg7QUFPQyxzREFBTSxNQUFNZCxNQUFNYSxJQUFsQixFQUF3QixRQUFPLFNBQS9CLEdBUEQ7QUFRRWIsWUFBTVM7QUFSUixNQUhIO0FBZUVULFdBQU1nQixJQUFOLElBQ0M7QUFBQTtBQUFBLFFBQUssV0FBVSxnQkFBZjtBQUNDLHNEQUFNLE1BQU1oQixNQUFNYSxJQUFsQixFQUF3QixRQUFPLGVBQS9CLEdBREQ7QUFFRWIsWUFBTWdCLElBQU4sQ0FBV0MsS0FBWCxDQUFpQixDQUFDLEVBQWxCO0FBRkY7QUFoQkg7QUFuQ0QsSUFERDtBQW9FQTs7OzZCQTdGTUMsUyxHQUFZO0FBQ2xCTCxPQUFNLGlCQUFFTSxNQUFGLENBQVNDLFVBREc7QUFFbEJsQixLQUFJLGlCQUFFaUIsTUFBRixDQUFTQyxVQUZLO0FBR2xCQyxnQkFBZSxpQkFBRUMsSUFBRixDQUFPRixVQUhKO0FBSWxCbkIsWUFBVyxpQkFBRXFCLElBQUYsQ0FBT0YsVUFKQTtBQUtsQmpCLFVBQVMsaUJBQUVtQixJQUFGLENBQU9GO0FBTEUsQyxVQVFaRyxZLEdBQWU7QUFDckJGLDRCQURxQjtBQUVyQnBCLHdCQUZxQjtBQUdyQkU7QUFIcUIsQzs7a0JBVEZKLE8iLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgUHJvcFR5cGVzIGFzIHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBqb2luIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IGF1dG9iaW5kIGZyb20gJ2F1dG9iaW5kLWRlY29yYXRvcic7XG5pbXBvcnQgcHVyZSBmcm9tICdwdXJlLXJlbmRlci1kZWNvcmF0b3InO1xuaW1wb3J0IHtub29wfSBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgSWNvbiBmcm9tICcuLi9jb21tb24vaWNvbic7XG5cbkBwdXJlXG5AYXV0b2JpbmRcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lc3NhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRzdGF0aWMgcHJvcFR5cGVzID0ge1xuXHRcdGJhc2U6IHQuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0aWQ6IHQuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0b25UaW1lUmVxdWVzdDogdC5mdW5jLmlzUmVxdWlyZWQsXG5cdFx0b25EaXNtaXNzOiB0LmZ1bmMuaXNSZXF1aXJlZCxcblx0XHRvblJldHJ5OiB0LmZ1bmMuaXNSZXF1aXJlZFxuXHR9O1xuXG5cdHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG5cdFx0b25UaW1lUmVxdWVzdDogbm9vcCxcblx0XHRvbkRpc21pc3M6IG5vb3AsXG5cdFx0b25SZXRyeTogbm9vcFxuXHR9O1xuXG5cdGhhbmRsZURpc21pc3NDbGljaygpIHtcblx0XHR0aGlzLnByb3BzLm9uRGlzbWlzcyh0aGlzLnByb3BzLmlkKTtcblx0fVxuXG5cdGhhbmRsZVJldHJ5Q2xpY2soKSB7XG5cdFx0dGhpcy5wcm9wcy5vblJldHJ5KCk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge3Byb3BzfSA9IHRoaXM7XG5cdFx0Y29uc3QgY2xhc3NOYW1lID0gam9pbignbWVzc2FnZScsIGBtZXNzYWdlLS0ke3Byb3BzLnR5cGV9YCk7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VfX2hlYWRlclwiPlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHByb3BzLnRpdGxlICYmXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZV9fdGl0bGVcIj5cblx0XHRcdFx0XHRcdFx0XHR7cHJvcHMudGl0bGV9XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VfX2FjdGlvblwiPlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRwcm9wcy5yZXRyeSAmJlxuXHRcdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMuaGFuZGxlUmV0cnlDbGlja31cblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWVzc2FnZV9fYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlPXtgUmV0cnkgbG9hZGluZyAke3Byb3BzLnBhdHRlcm59IFtjdHJsK3JdYH1cblx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFJldHJ5XG5cdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMuaGFuZGxlRGlzbWlzc0NsaWNrfVxuXHRcdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWVzc2FnZV9fYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0dGl0bGU9e2BEaXNtaXNzIG1lc3NhZ2UgW2VzY11gfVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdERpc21pc3Ncblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlX19ib2R5XCI+XG5cdFx0XHRcdFx0PHByZSBjbGFzc05hbWU9XCJtZXNzYWdlX19wcmVmb3JtYXR0ZWRcIj5cblx0XHRcdFx0XHRcdHtwcm9wcy5ib2R5fVxuXHRcdFx0XHRcdDwvcHJlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlX19tZXRhXCI+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0cHJvcHMucGF0dGVybiAmJlxuXHRcdFx0XHRcdFx0XHQ8TGlua1xuXHRcdFx0XHRcdFx0XHRcdHRvPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRwYXRobmFtZTogYCR7cHJvcHMuYmFzZX1wYXR0ZXJuLyR7cHJvcHMucGF0dGVybn1gLFxuXHRcdFx0XHRcdFx0XHRcdFx0cXVlcnk6IHByb3BzLmxvY2F0aW9uLnF1ZXJ5XG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXNzYWdlX19maWVsZFwiXG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxJY29uIGJhc2U9e3Byb3BzLmJhc2V9IHN5bWJvbD1cInBhdHRlcm5cIi8+XG5cdFx0XHRcdFx0XHRcdFx0e3Byb3BzLnBhdHRlcm59XG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0cHJvcHMuZmlsZSAmJlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VfX2ZpZWxkXCI+XG5cdFx0XHRcdFx0XHRcdFx0PEljb24gYmFzZT17cHJvcHMuYmFzZX0gc3ltYm9sPVwiZG9jdW1lbnRhdGlvblwiLz5cblx0XHRcdFx0XHRcdFx0XHR7cHJvcHMuZmlsZS5zbGljZSgtNTApfVxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0LyogcHJvcHMudGltZXN0YW1wICYmXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZV9fZmllbGRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8SWNvbiBzeW1ib2w9XCJnbG9iYWxzXCIvPlxuXHRcdFx0XHRcdFx0XHRcdHthZ28obmV3IERhdGUocHJvcHMudGltZXN0YW1wKSl9XG5cdFx0XHRcdFx0XHRcdFx0e3Byb3BzLnRpbWUgLSBwcm9wcy50aW1lc3RhbXB9XG5cdFx0XHRcdFx0XHRcdDwvZGl2PiAqL1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG4iXX0=
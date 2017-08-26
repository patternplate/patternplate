'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouterRedux = require('react-router-redux');

var _redux = require('redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LinkComponent = function (_React$Component) {
	(0, _inherits3.default)(LinkComponent, _React$Component);

	function LinkComponent() {
		var _ref;

		(0, _classCallCheck3.default)(this, LinkComponent);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = LinkComponent.__proto__ || (0, _getPrototypeOf2.default)(LinkComponent)).call.apply(_ref, [this].concat(args)));

		_this.handleClick = _this.handleClick.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(LinkComponent, [{
		key: 'handleClick',
		value: function handleClick(e) {
			this.props.onClick(e, this.props.href);
		}
	}, {
		key: 'render',
		value: function render() {
			var props = this.props;

			return _react2.default.createElement(
				'a',
				{
					target: props.external ? '_blank' : null,
					rel: props.external ? 'noopener noreferrer' : null,
					className: props.className,
					href: props.href,
					onClick: this.handleClick,
					onMouseOver: props.onHover,
					title: props.title,
					'data-id': props['data-id']
				},
				props.children
			);
		}
	}]);
	return LinkComponent;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(mapProps, mapDispatch)(LinkComponent);


function mapProps(state, own) {
	var location = state.routing.locationBeforeTransitions;
	var parsed = own.href ? _url2.default.parse(own.href) : location;
	var query = own.query || location.query;

	return {
		href: own.external ? own.href : _url2.default.format({
			pathname: typeof parsed.pathname === 'string' ? _url2.default.resolve(state.base, parsed.pathname) : location.pathname,
			query: (0, _extends3.default)({}, location.query, parsed.query, query),
			hash: own.hash
		}),
		children: own.children,
		className: own.className,
		onClick: own.onClick,
		title: own.title
	};
}

function mapDispatch(dispatch, own) {
	return (0, _redux.bindActionCreators)({
		onClick: function onClick(e, href) {
			if (own.onClick) {
				own.onClick(e);
			}
			if (!own.external) {
				e.preventDefault();
				return (0, _reactRouterRedux.push)(href);
			}
			return { type: 'noop', payload: {} };
		}
	}, dispatch);
}

LinkComponent.propTypes = {
	children: _react.PropTypes.any.isRequired,
	className: _react.PropTypes.string,
	external: _react.PropTypes.bool,
	href: _react.PropTypes.string.isRequired,
	onClick: _react.PropTypes.func,
	title: _react.PropTypes.string
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2NvbW1vbi9saW5rLmpzIl0sIm5hbWVzIjpbIkxpbmtDb21wb25lbnQiLCJhcmdzIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwiZSIsInByb3BzIiwib25DbGljayIsImhyZWYiLCJleHRlcm5hbCIsImNsYXNzTmFtZSIsIm9uSG92ZXIiLCJ0aXRsZSIsImNoaWxkcmVuIiwiQ29tcG9uZW50IiwibWFwUHJvcHMiLCJtYXBEaXNwYXRjaCIsInN0YXRlIiwib3duIiwibG9jYXRpb24iLCJyb3V0aW5nIiwibG9jYXRpb25CZWZvcmVUcmFuc2l0aW9ucyIsInBhcnNlZCIsInBhcnNlIiwicXVlcnkiLCJmb3JtYXQiLCJwYXRobmFtZSIsInJlc29sdmUiLCJiYXNlIiwiaGFzaCIsImRpc3BhdGNoIiwicHJldmVudERlZmF1bHQiLCJ0eXBlIiwicGF5bG9hZCIsInByb3BUeXBlcyIsImFueSIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJib29sIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0lBRU1BLGE7OztBQUNMLDBCQUFxQjtBQUFBOztBQUFBOztBQUFBLG9DQUFOQyxJQUFNO0FBQU5BLE9BQU07QUFBQTs7QUFBQSw2S0FDWEEsSUFEVzs7QUFFcEIsUUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQixPQUFuQjtBQUZvQjtBQUdwQjs7Ozs4QkFFV0MsQyxFQUFHO0FBQ2QsUUFBS0MsS0FBTCxDQUFXQyxPQUFYLENBQW1CRixDQUFuQixFQUFzQixLQUFLQyxLQUFMLENBQVdFLElBQWpDO0FBQ0E7OzsyQkFFUTtBQUFBLE9BQ0RGLEtBREMsR0FDUSxJQURSLENBQ0RBLEtBREM7O0FBRVIsVUFDQztBQUFBO0FBQUE7QUFDQyxhQUFRQSxNQUFNRyxRQUFOLEdBQWlCLFFBQWpCLEdBQTRCLElBRHJDO0FBRUMsVUFBS0gsTUFBTUcsUUFBTixHQUFpQixxQkFBakIsR0FBeUMsSUFGL0M7QUFHQyxnQkFBV0gsTUFBTUksU0FIbEI7QUFJQyxXQUFNSixNQUFNRSxJQUpiO0FBS0MsY0FBUyxLQUFLTCxXQUxmO0FBTUMsa0JBQWFHLE1BQU1LLE9BTnBCO0FBT0MsWUFBT0wsTUFBTU0sS0FQZDtBQVFDLGdCQUFTTixNQUFNLFNBQU47QUFSVjtBQVVFQSxVQUFNTztBQVZSLElBREQ7QUFjQTs7O0VBMUIwQixnQkFBTUMsUzs7a0JBNkJuQix5QkFBUUMsUUFBUixFQUFrQkMsV0FBbEIsRUFBK0JmLGFBQS9CLEM7OztBQUVmLFNBQVNjLFFBQVQsQ0FBa0JFLEtBQWxCLEVBQXlCQyxHQUF6QixFQUE4QjtBQUM3QixLQUFNQyxXQUFXRixNQUFNRyxPQUFOLENBQWNDLHlCQUEvQjtBQUNBLEtBQU1DLFNBQVNKLElBQUlWLElBQUosR0FBVyxjQUFJZSxLQUFKLENBQVVMLElBQUlWLElBQWQsQ0FBWCxHQUFpQ1csUUFBaEQ7QUFDQSxLQUFNSyxRQUFRTixJQUFJTSxLQUFKLElBQWFMLFNBQVNLLEtBQXBDOztBQUVBLFFBQU87QUFDTmhCLFFBQU1VLElBQUlULFFBQUosR0FBZVMsSUFBSVYsSUFBbkIsR0FBMEIsY0FBSWlCLE1BQUosQ0FBVztBQUMxQ0MsYUFBVSxPQUFPSixPQUFPSSxRQUFkLEtBQTJCLFFBQTNCLEdBQXNDLGNBQUlDLE9BQUosQ0FBWVYsTUFBTVcsSUFBbEIsRUFBd0JOLE9BQU9JLFFBQS9CLENBQXRDLEdBQWlGUCxTQUFTTyxRQUQxRDtBQUUxQ0YscUNBQVdMLFNBQVNLLEtBQXBCLEVBQThCRixPQUFPRSxLQUFyQyxFQUErQ0EsS0FBL0MsQ0FGMEM7QUFHMUNLLFNBQU1YLElBQUlXO0FBSGdDLEdBQVgsQ0FEMUI7QUFNTmhCLFlBQVVLLElBQUlMLFFBTlI7QUFPTkgsYUFBV1EsSUFBSVIsU0FQVDtBQVFOSCxXQUFTVyxJQUFJWCxPQVJQO0FBU05LLFNBQU9NLElBQUlOO0FBVEwsRUFBUDtBQVdBOztBQUVELFNBQVNJLFdBQVQsQ0FBcUJjLFFBQXJCLEVBQStCWixHQUEvQixFQUFvQztBQUNuQyxRQUFPLCtCQUFtQjtBQUN6QlgsU0FEeUIsbUJBQ2pCRixDQURpQixFQUNkRyxJQURjLEVBQ1I7QUFDaEIsT0FBSVUsSUFBSVgsT0FBUixFQUFpQjtBQUNoQlcsUUFBSVgsT0FBSixDQUFZRixDQUFaO0FBQ0E7QUFDRCxPQUFJLENBQUNhLElBQUlULFFBQVQsRUFBbUI7QUFDbEJKLE1BQUUwQixjQUFGO0FBQ0EsV0FBTyw0QkFBS3ZCLElBQUwsQ0FBUDtBQUNBO0FBQ0QsVUFBTyxFQUFDd0IsTUFBTSxNQUFQLEVBQWVDLFNBQVMsRUFBeEIsRUFBUDtBQUNBO0FBVndCLEVBQW5CLEVBV0pILFFBWEksQ0FBUDtBQVlBOztBQUVEN0IsY0FBY2lDLFNBQWQsR0FBMEI7QUFDekJyQixXQUFVLGlCQUFFc0IsR0FBRixDQUFNQyxVQURTO0FBRXpCMUIsWUFBVyxpQkFBRTJCLE1BRlk7QUFHekI1QixXQUFVLGlCQUFFNkIsSUFIYTtBQUl6QjlCLE9BQU0saUJBQUU2QixNQUFGLENBQVNELFVBSlU7QUFLekI3QixVQUFTLGlCQUFFZ0MsSUFMYztBQU16QjNCLFFBQU8saUJBQUV5QjtBQU5nQixDQUExQiIsImZpbGUiOiJsaW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVybCBmcm9tICd1cmwnO1xuaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzIGFzIHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtwdXNofSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnO1xuaW1wb3J0IHtiaW5kQWN0aW9uQ3JlYXRvcnN9IGZyb20gJ3JlZHV4JztcblxuY2xhc3MgTGlua0NvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcblx0XHRzdXBlciguLi5hcmdzKTtcblx0XHR0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuXHR9XG5cblx0aGFuZGxlQ2xpY2soZSkge1xuXHRcdHRoaXMucHJvcHMub25DbGljayhlLCB0aGlzLnByb3BzLmhyZWYpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHtwcm9wc30gPSB0aGlzO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8YVxuXHRcdFx0XHR0YXJnZXQ9e3Byb3BzLmV4dGVybmFsID8gJ19ibGFuaycgOiBudWxsfVxuXHRcdFx0XHRyZWw9e3Byb3BzLmV4dGVybmFsID8gJ25vb3BlbmVyIG5vcmVmZXJyZXInIDogbnVsbH1cblx0XHRcdFx0Y2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9XG5cdFx0XHRcdGhyZWY9e3Byb3BzLmhyZWZ9XG5cdFx0XHRcdG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG5cdFx0XHRcdG9uTW91c2VPdmVyPXtwcm9wcy5vbkhvdmVyfVxuXHRcdFx0XHR0aXRsZT17cHJvcHMudGl0bGV9XG5cdFx0XHRcdGRhdGEtaWQ9e3Byb3BzWydkYXRhLWlkJ119XG5cdFx0XHRcdD5cblx0XHRcdFx0e3Byb3BzLmNoaWxkcmVufVxuXHRcdFx0PC9hPlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBQcm9wcywgbWFwRGlzcGF0Y2gpKExpbmtDb21wb25lbnQpO1xuXG5mdW5jdGlvbiBtYXBQcm9wcyhzdGF0ZSwgb3duKSB7XG5cdGNvbnN0IGxvY2F0aW9uID0gc3RhdGUucm91dGluZy5sb2NhdGlvbkJlZm9yZVRyYW5zaXRpb25zO1xuXHRjb25zdCBwYXJzZWQgPSBvd24uaHJlZiA/IHVybC5wYXJzZShvd24uaHJlZikgOiBsb2NhdGlvbjtcblx0Y29uc3QgcXVlcnkgPSBvd24ucXVlcnkgfHwgbG9jYXRpb24ucXVlcnk7XG5cblx0cmV0dXJuIHtcblx0XHRocmVmOiBvd24uZXh0ZXJuYWwgPyBvd24uaHJlZiA6IHVybC5mb3JtYXQoe1xuXHRcdFx0cGF0aG5hbWU6IHR5cGVvZiBwYXJzZWQucGF0aG5hbWUgPT09ICdzdHJpbmcnID8gdXJsLnJlc29sdmUoc3RhdGUuYmFzZSwgcGFyc2VkLnBhdGhuYW1lKSA6IGxvY2F0aW9uLnBhdGhuYW1lLFxuXHRcdFx0cXVlcnk6IHsuLi5sb2NhdGlvbi5xdWVyeSwgLi4ucGFyc2VkLnF1ZXJ5LCAuLi5xdWVyeX0sXG5cdFx0XHRoYXNoOiBvd24uaGFzaFxuXHRcdH0pLFxuXHRcdGNoaWxkcmVuOiBvd24uY2hpbGRyZW4sXG5cdFx0Y2xhc3NOYW1lOiBvd24uY2xhc3NOYW1lLFxuXHRcdG9uQ2xpY2s6IG93bi5vbkNsaWNrLFxuXHRcdHRpdGxlOiBvd24udGl0bGVcblx0fTtcbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2goZGlzcGF0Y2gsIG93bikge1xuXHRyZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKHtcblx0XHRvbkNsaWNrKGUsIGhyZWYpIHtcblx0XHRcdGlmIChvd24ub25DbGljaykge1xuXHRcdFx0XHRvd24ub25DbGljayhlKTtcblx0XHRcdH1cblx0XHRcdGlmICghb3duLmV4dGVybmFsKSB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0cmV0dXJuIHB1c2goaHJlZik7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4ge3R5cGU6ICdub29wJywgcGF5bG9hZDoge319O1xuXHRcdH1cblx0fSwgZGlzcGF0Y2gpO1xufVxuXG5MaW5rQ29tcG9uZW50LnByb3BUeXBlcyA9IHtcblx0Y2hpbGRyZW46IHQuYW55LmlzUmVxdWlyZWQsXG5cdGNsYXNzTmFtZTogdC5zdHJpbmcsXG5cdGV4dGVybmFsOiB0LmJvb2wsXG5cdGhyZWY6IHQuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdG9uQ2xpY2s6IHQuZnVuYyxcblx0dGl0bGU6IHQuc3RyaW5nXG59O1xuIl19
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

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ClickOutside = (_temp = _class = function (_Component) {
	(0, _inherits3.default)(ClickOutside, _Component);

	function ClickOutside(props) {
		(0, _classCallCheck3.default)(this, ClickOutside);

		var _this = (0, _possibleConstructorReturn3.default)(this, (ClickOutside.__proto__ || (0, _getPrototypeOf2.default)(ClickOutside)).call(this, props));

		_this.handle = function (e) {
			var onClickOutside = _this.props.onClickOutside;

			var el = _this.container;
			if (!el.contains(e.target)) {
				onClickOutside(e);
			}
		};

		_this.getContainer = _this.getContainer.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(ClickOutside, [{
		key: 'getContainer',
		value: function getContainer(ref) {
			this.container = ref;
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: this.props.className, ref: this.getContainer },
				this.props.children
			);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			global.document.addEventListener('click', this.handle, true);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			global.document.removeEventListener('click', this.handle, true);
		}
	}]);
	return ClickOutside;
}(_react.Component), _class.propTypes = {
	className: _propTypes2.default.string,
	onClickOutside: _propTypes2.default.func.isRequired
}, _temp);
exports.default = ClickOutside;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL291dHNpZGUuanMiXSwibmFtZXMiOlsiQ2xpY2tPdXRzaWRlIiwicHJvcHMiLCJoYW5kbGUiLCJvbkNsaWNrT3V0c2lkZSIsImVsIiwiY29udGFpbmVyIiwiY29udGFpbnMiLCJlIiwidGFyZ2V0IiwiZ2V0Q29udGFpbmVyIiwiYmluZCIsInJlZiIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwiZ2xvYmFsIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztJQUVxQkEsWTs7O0FBTXBCLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0pBQ1pBLEtBRFk7O0FBQUEsUUFxQm5CQyxNQXJCbUIsR0FxQlYsYUFBSztBQUFBLE9BQ05DLGNBRE0sR0FDWSxNQUFLRixLQURqQixDQUNORSxjQURNOztBQUViLE9BQU1DLEtBQUssTUFBS0MsU0FBaEI7QUFDQSxPQUFJLENBQUNELEdBQUdFLFFBQUgsQ0FBWUMsRUFBRUMsTUFBZCxDQUFMLEVBQTRCO0FBQzNCTCxtQkFBZUksQ0FBZjtBQUNBO0FBQ0QsR0EzQmtCOztBQUVsQixRQUFLRSxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLE9BQXBCO0FBRmtCO0FBR2xCOzs7OytCQUVZQyxHLEVBQUs7QUFDakIsUUFBS04sU0FBTCxHQUFpQk0sR0FBakI7QUFDQTs7OzJCQUVRO0FBQ1IsVUFBTztBQUFBO0FBQUEsTUFBSyxXQUFXLEtBQUtWLEtBQUwsQ0FBV1csU0FBM0IsRUFBc0MsS0FBSyxLQUFLSCxZQUFoRDtBQUErRCxTQUFLUixLQUFMLENBQVdZO0FBQTFFLElBQVA7QUFDQTs7O3NDQUVtQjtBQUNuQkMsVUFBT0MsUUFBUCxDQUFnQkMsZ0JBQWhCLENBQWlDLE9BQWpDLEVBQTBDLEtBQUtkLE1BQS9DLEVBQXVELElBQXZEO0FBQ0E7Ozt5Q0FFc0I7QUFDdEJZLFVBQU9DLFFBQVAsQ0FBZ0JFLG1CQUFoQixDQUFvQyxPQUFwQyxFQUE2QyxLQUFLZixNQUFsRCxFQUEwRCxJQUExRDtBQUNBOzs7NEJBeEJNZ0IsUyxHQUFZO0FBQ2xCTixZQUFXLG9CQUFVTyxNQURIO0FBRWxCaEIsaUJBQWdCLG9CQUFVaUIsSUFBVixDQUFlQztBQUZiLEM7a0JBRENyQixZIiwiZmlsZSI6Im91dHNpZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsaWNrT3V0c2lkZSBleHRlbmRzIENvbXBvbmVudCB7XG5cdHN0YXRpYyBwcm9wVHlwZXMgPSB7XG5cdFx0Y2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRcdG9uQ2xpY2tPdXRzaWRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG5cdH07XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5nZXRDb250YWluZXIgPSB0aGlzLmdldENvbnRhaW5lci5iaW5kKHRoaXMpO1xuXHR9XG5cblx0Z2V0Q29udGFpbmVyKHJlZikge1xuXHRcdHRoaXMuY29udGFpbmVyID0gcmVmO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9IHJlZj17dGhpcy5nZXRDb250YWluZXJ9Pnt0aGlzLnByb3BzLmNoaWxkcmVufTwvZGl2Pjtcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGdsb2JhbC5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlLCB0cnVlKTtcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdGdsb2JhbC5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlLCB0cnVlKTtcblx0fVxuXG5cdGhhbmRsZSA9IGUgPT4ge1xuXHRcdGNvbnN0IHtvbkNsaWNrT3V0c2lkZX0gPSB0aGlzLnByb3BzO1xuXHRcdGNvbnN0IGVsID0gdGhpcy5jb250YWluZXI7XG5cdFx0aWYgKCFlbC5jb250YWlucyhlLnRhcmdldCkpIHtcblx0XHRcdG9uQ2xpY2tPdXRzaWRlKGUpO1xuXHRcdH1cblx0fTtcbn1cbiJdfQ==
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

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

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\twidth: 100%;\n\theight: 100%;\n\tborder: 0;\n'], ['\n\twidth: 100%;\n\theight: 100%;\n\tborder: 0;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledDemo = _styledComponents2.default.iframe(_templateObject);

var PatternDemo = function (_React$Component) {
	(0, _inherits3.default)(PatternDemo, _React$Component);

	function PatternDemo() {
		var _ref;

		(0, _classCallCheck3.default)(this, PatternDemo);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = PatternDemo.__proto__ || (0, _getPrototypeOf2.default)(PatternDemo)).call.apply(_ref, [this].concat(args)));

		_this.getRef = _this.getRef.bind(_this);
		_this.udpdate = _this.update.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(PatternDemo, [{
		key: 'update',
		value: function update() {
			var srcdoc = require('srcdoc-polyfill');
			var compliance = 'srcdoc' in global.document.createElement('iframe');

			if (this.ref && !compliance) {
				srcdoc.set(this.ref, this.props.contents);
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.update();
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(previous) {
			if (previous.contents !== this.props.contents) {
				this.update();
			}
		}
	}, {
		key: 'getRef',
		value: function getRef(ref) {
			this.ref = ref;
		}
	}, {
		key: 'render',
		value: function render() {
			var props = this.props;

			return _react2.default.createElement(StyledDemo, { innerRef: this.getRef, srcDoc: props.contents, seamless: true });
		}
	}]);
	return PatternDemo;
}(_react2.default.Component);

exports.default = PatternDemo;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL3BhdHRlcm4vcGF0dGVybi1kZW1vLmpzIl0sIm5hbWVzIjpbIlN0eWxlZERlbW8iLCJpZnJhbWUiLCJQYXR0ZXJuRGVtbyIsImFyZ3MiLCJnZXRSZWYiLCJiaW5kIiwidWRwZGF0ZSIsInVwZGF0ZSIsInNyY2RvYyIsInJlcXVpcmUiLCJjb21wbGlhbmNlIiwiZ2xvYmFsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwicmVmIiwic2V0IiwicHJvcHMiLCJjb250ZW50cyIsInByZXZpb3VzIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGFBQWEsMkJBQU9DLE1BQXBCLGlCQUFOOztJQU1NQyxXOzs7QUFDTCx3QkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxvQ0FBTkMsSUFBTTtBQUFOQSxPQUFNO0FBQUE7O0FBQUEseUtBQ1hBLElBRFc7O0FBRXBCLFFBQUtDLE1BQUwsR0FBYyxNQUFLQSxNQUFMLENBQVlDLElBQVosT0FBZDtBQUNBLFFBQUtDLE9BQUwsR0FBZSxNQUFLQyxNQUFMLENBQVlGLElBQVosT0FBZjtBQUhvQjtBQUlwQjs7OzsyQkFFUTtBQUNSLE9BQU1HLFNBQVNDLFFBQVEsaUJBQVIsQ0FBZjtBQUNBLE9BQU1DLGFBQWMsWUFBWUMsT0FBT0MsUUFBUCxDQUFnQkMsYUFBaEIsQ0FBOEIsUUFBOUIsQ0FBaEM7O0FBRUEsT0FBSSxLQUFLQyxHQUFMLElBQVksQ0FBQ0osVUFBakIsRUFBNkI7QUFDNUJGLFdBQU9PLEdBQVAsQ0FBVyxLQUFLRCxHQUFoQixFQUFxQixLQUFLRSxLQUFMLENBQVdDLFFBQWhDO0FBQ0E7QUFDRDs7O3NDQUVtQjtBQUNuQixRQUFLVixNQUFMO0FBQ0E7OztxQ0FFa0JXLFEsRUFBVTtBQUM1QixPQUFJQSxTQUFTRCxRQUFULEtBQXNCLEtBQUtELEtBQUwsQ0FBV0MsUUFBckMsRUFBK0M7QUFDOUMsU0FBS1YsTUFBTDtBQUNBO0FBQ0Q7Ozt5QkFFTU8sRyxFQUFLO0FBQ1gsUUFBS0EsR0FBTCxHQUFXQSxHQUFYO0FBQ0E7OzsyQkFFUTtBQUFBLE9BQ0RFLEtBREMsR0FDUSxJQURSLENBQ0RBLEtBREM7O0FBRVIsVUFDQyw4QkFBQyxVQUFELElBQVksVUFBVSxLQUFLWixNQUEzQixFQUFtQyxRQUFRWSxNQUFNQyxRQUFqRCxFQUEyRCxjQUEzRCxHQUREO0FBR0E7OztFQW5Dd0IsZ0JBQU1FLFM7O2tCQXNDakJqQixXIiwiZmlsZSI6InBhdHRlcm4tZGVtby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgU3R5bGVkRGVtbyA9IHN0eWxlZC5pZnJhbWVgXG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdGJvcmRlcjogMDtcbmA7XG5cbmNsYXNzIFBhdHRlcm5EZW1vIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IoLi4uYXJncykge1xuXHRcdHN1cGVyKC4uLmFyZ3MpO1xuXHRcdHRoaXMuZ2V0UmVmID0gdGhpcy5nZXRSZWYuYmluZCh0aGlzKTtcblx0XHR0aGlzLnVkcGRhdGUgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpO1xuXHR9XG5cblx0dXBkYXRlKCkge1xuXHRcdGNvbnN0IHNyY2RvYyA9IHJlcXVpcmUoJ3NyY2RvYy1wb2x5ZmlsbCcpO1xuXHRcdGNvbnN0IGNvbXBsaWFuY2UgPSAoJ3NyY2RvYycgaW4gZ2xvYmFsLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpKTtcblxuXHRcdGlmICh0aGlzLnJlZiAmJiAhY29tcGxpYW5jZSkge1xuXHRcdFx0c3JjZG9jLnNldCh0aGlzLnJlZiwgdGhpcy5wcm9wcy5jb250ZW50cyk7XG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dGhpcy51cGRhdGUoKTtcblx0fVxuXG5cdGNvbXBvbmVudERpZFVwZGF0ZShwcmV2aW91cykge1xuXHRcdGlmIChwcmV2aW91cy5jb250ZW50cyAhPT0gdGhpcy5wcm9wcy5jb250ZW50cykge1xuXHRcdFx0dGhpcy51cGRhdGUoKTtcblx0XHR9XG5cdH1cblxuXHRnZXRSZWYocmVmKSB7XG5cdFx0dGhpcy5yZWYgPSByZWY7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge3Byb3BzfSA9IHRoaXM7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxTdHlsZWREZW1vIGlubmVyUmVmPXt0aGlzLmdldFJlZn0gc3JjRG9jPXtwcm9wcy5jb250ZW50c30gc2VhbWxlc3MvPlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGF0dGVybkRlbW87XG4iXX0=
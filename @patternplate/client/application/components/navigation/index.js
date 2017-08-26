'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\tdisplay: flex;\n\theight: 100%;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tposition: relative;\n\tbackground: ', '\n'], ['\n\tdisplay: flex;\n\theight: 100%;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tposition: relative;\n\tbackground: ', '\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n\tflex-grow: 1;\n\tflex-shrink: 1;\n\tpadding-bottom: 50px;\n\toverflow-x: hidden;\n\toverflow-y: scroll;\n\t-webkit-overflow-scroll: touch;\n\tmask-image: linear-gradient(to top,rgba(0,0,0,0),rgba(0,0,0,1) ', 'px);\n\t-webkit-mask-image: linear-gradient(to top,rgba(0,0,0,0),rgba(0,0,0,1) ', 'px);\n'], ['\n\tflex-grow: 1;\n\tflex-shrink: 1;\n\tpadding-bottom: 50px;\n\toverflow-x: hidden;\n\toverflow-y: scroll;\n\t-webkit-overflow-scroll: touch;\n\tmask-image: linear-gradient(to top,rgba(0,0,0,0),rgba(0,0,0,1) ', 'px);\n\t-webkit-mask-image: linear-gradient(to top,rgba(0,0,0,0),rgba(0,0,0,1) ', 'px);\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n\tflex-grow: 0;\n\tflex-shrink: 0;\n'], ['\n\tflex-grow: 0;\n\tflex-shrink: 0;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n\tmargin-bottom: 5px;\n\tborder-bottom: 1px solid ', ';\n\tpadding-bottom: 5px;\n'], ['\n\tmargin-bottom: 5px;\n\tborder-bottom: 1px solid ', ';\n\tpadding-bottom: 5px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _navigationTree = require('./navigation-tree');

var _navigationTree2 = _interopRequireDefault(_navigationTree);

var _navigationToolbar = require('./navigation-toolbar');

var _navigationToolbar2 = _interopRequireDefault(_navigationToolbar);

var _logo = require('../../containers/logo');

var _logo2 = _interopRequireDefault(_logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navigation = function (_React$Component) {
	(0, _inherits3.default)(Navigation, _React$Component);

	function Navigation() {
		var _ref;

		(0, _classCallCheck3.default)(this, Navigation);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = Navigation.__proto__ || (0, _getPrototypeOf2.default)(Navigation)).call.apply(_ref, [this].concat(args)));

		_this.getRef = _this.getRef.bind(_this);
		_this.handleScrollRequest = _this.handleScrollRequest.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(Navigation, [{
		key: 'handleScrollRequest',
		value: function handleScrollRequest(e) {
			if (!this.ref || !e.target) {
				return;
			}

			var item = e.target.getBoundingClientRect();
			var list = this.ref.getBoundingClientRect();
			var pad = getPadding(this.ref);

			if (item.bottom > list.bottom - pad('bottom')) {
				this.ref.scrollTop = e.target.offsetTop - list.height + pad('bottom') + item.height;
			}

			if (item.top < list.top + pad('top')) {
				this.ref.scrollTop = e.target.offsetTop + pad('top');
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

			return _react2.default.createElement(
				StyledNavigation,
				{ onKeyDown: this.handleKeyDown },
				_react2.default.createElement(
					StyledNavigationTree,
					{ innerRef: this.getRef },
					_react2.default.createElement(_logo2.default, null),
					_react2.default.createElement(
						_navigationTree2.default,
						{
							active: props.active,
							data: props.navigation.children,
							onScrollRequest: this.handleScrollRequest,
							prefix: '/pattern'
						},
						_react2.default.createElement(Documentation, {
							active: props.active,
							docs: props.docs,
							onScrollRequest: this.handleScrollRequest
						})
					)
				),
				_react2.default.createElement(
					StyledNavigationToolbar,
					null,
					_react2.default.createElement(_navigationToolbar2.default, null)
				)
			);
		}
	}]);
	return Navigation;
}(_react2.default.Component);

exports.default = Navigation;


Navigation.propTypes = {
	active: _react.PropTypes.string.isRequired,
	docs: _react.PropTypes.object.isRequired,
	navigation: _react.PropTypes.object.isRequired
};

function getPadding(el) {
	var style = global.getComputedStyle(el, null);
	return function (direction) {
		return parseInt(style.getPropertyValue('padding-' + direction), 10);
	};
}

var StyledNavigation = _styledComponents2.default.div(_templateObject, function (props) {
	return props.theme.tint;
});

var PASSAGE_HEIGHT = 50;

var StyledNavigationTree = _styledComponents2.default.div(_templateObject2, PASSAGE_HEIGHT, PASSAGE_HEIGHT);

var StyledNavigationToolbar = _styledComponents2.default.div(_templateObject3);

function Documentation(props) {
	return _react2.default.createElement(StyledDocumentationTree, {
		active: props.active,
		className: 'docs-navigation',
		data: props.docs.children,
		onScrollRequest: props.onScrollRequest,
		prefix: '/doc'
	});
}

Documentation.propTypes = {
	active: _react.PropTypes.string.isRequired,
	docs: _react.PropTypes.object.isRequired,
	onScrollRequest: _react.PropTypes.func.isRequireds
};

var StyledDocumentationTree = (0, _styledComponents2.default)(_navigationTree2.default)(_templateObject4, function (props) {
	return props.theme.border;
});
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL25hdmlnYXRpb24vaW5kZXguanMiXSwibmFtZXMiOlsiTmF2aWdhdGlvbiIsImFyZ3MiLCJnZXRSZWYiLCJiaW5kIiwiaGFuZGxlU2Nyb2xsUmVxdWVzdCIsImUiLCJyZWYiLCJ0YXJnZXQiLCJpdGVtIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibGlzdCIsInBhZCIsImdldFBhZGRpbmciLCJib3R0b20iLCJzY3JvbGxUb3AiLCJvZmZzZXRUb3AiLCJoZWlnaHQiLCJ0b3AiLCJwcm9wcyIsImhhbmRsZUtleURvd24iLCJhY3RpdmUiLCJuYXZpZ2F0aW9uIiwiY2hpbGRyZW4iLCJkb2NzIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm9iamVjdCIsImVsIiwic3R5bGUiLCJnbG9iYWwiLCJnZXRDb21wdXRlZFN0eWxlIiwicGFyc2VJbnQiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiZGlyZWN0aW9uIiwiU3R5bGVkTmF2aWdhdGlvbiIsImRpdiIsInRoZW1lIiwidGludCIsIlBBU1NBR0VfSEVJR0hUIiwiU3R5bGVkTmF2aWdhdGlvblRyZWUiLCJTdHlsZWROYXZpZ2F0aW9uVG9vbGJhciIsIkRvY3VtZW50YXRpb24iLCJvblNjcm9sbFJlcXVlc3QiLCJmdW5jIiwiaXNSZXF1aXJlZHMiLCJTdHlsZWREb2N1bWVudGF0aW9uVHJlZSIsImJvcmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBRXFCQSxVOzs7QUFDcEIsdUJBQXFCO0FBQUE7O0FBQUE7O0FBQUEsb0NBQU5DLElBQU07QUFBTkEsT0FBTTtBQUFBOztBQUFBLHVLQUNYQSxJQURXOztBQUVwQixRQUFLQyxNQUFMLEdBQWMsTUFBS0EsTUFBTCxDQUFZQyxJQUFaLE9B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SUMsbUJBQWlCSixNQUFNMEIsZUFKeEI7QUFLQyxVQUFPO0FBTFIsR0FERDtBQVNBOztBQUVERCxjQUFjbEIsU0FBZCxHQUEwQjtBQUN6QkwsU0FBUSxpQkFBRU0sTUFBRixDQUFTQyxVQURRO0FBRXpCSixPQUFNLGlCQUFFSyxNQUFGLENBQVNELFVBRlU7QUFHekJpQixrQkFBaUIsaUJBQUVDLElBQUYsQ0FBT0M7QUFIQyxDQUExQjs7QUFNQSxJQUFNQywwQkFBMEIseURBQTFCLG1CQUVzQjtBQUFBLFFBQVM3QixNQUFNb0IsS0FBTixDQUFZVSxNQUFyQjtBQUFBLENBRnRCLENBQU4iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXMgYXMgdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCBOYXZpZ2F0aW9uVHJlZSBmcm9tICcuL25hdmlnYXRpb24tdHJlZSc7XG5pbXBvcnQgTmF2aWdhdGlvblRvb2xiYXIgZnJvbSAnLi9uYXZpZ2F0aW9uLXRvb2xiYXInO1xuaW1wb3J0IExvZ28gZnJvbSAnLi4vLi4vY29udGFpbmVycy9sb2dvJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcblx0XHRzdXBlciguLi5hcmdzKTtcblx0XHR0aGlzLmdldFJlZiA9IHRoaXMuZ2V0UmVmLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5oYW5kbGVTY3JvbGxSZXF1ZXN0ID0gdGhpcy5oYW5kbGVTY3JvbGxSZXF1ZXN0LmJpbmQodGhpcyk7XG5cdH1cblxuXHRoYW5kbGVTY3JvbGxSZXF1ZXN0KGUpIHtcblx0XHRpZiAoIXRoaXMucmVmIHx8ICFlLnRhcmdldCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGl0ZW0gPSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRjb25zdCBsaXN0ID0gdGhpcy5yZWYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0Y29uc3QgcGFkID0gZ2V0UGFkZGluZyh0aGlzLnJlZik7XG5cblx0XHRpZiAoaXRlbS5ib3R0b20gPiBsaXN0LmJvdHRvbSAtIHBhZCgnYm90dG9tJykpIHtcblx0XHRcdHRoaXMucmVmLnNjcm9sbFRvcCA9IGUudGFyZ2V0Lm9mZnNldFRvcCAtIGxpc3QuaGVpZ2h0ICsgcGFkKCdib3R0b20nKSArIGl0ZW0uaGVpZ2h0O1xuXHRcdH1cblxuXHRcdGlmIChpdGVtLnRvcCA8IGxpc3QudG9wICsgcGFkKCd0b3AnKSkge1xuXHRcdFx0dGhpcy5yZWYuc2Nyb2xsVG9wID0gZS50YXJnZXQub2Zmc2V0VG9wICsgcGFkKCd0b3AnKTtcblx0XHR9XG5cdH1cblxuXHRnZXRSZWYocmVmKSB7XG5cdFx0dGhpcy5yZWYgPSByZWY7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge3Byb3BzfSA9IHRoaXM7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxTdHlsZWROYXZpZ2F0aW9uIG9uS2V5RG93bj17dGhpcy5oYW5kbGVLZXlEb3dufT5cblx0XHRcdFx0PFN0eWxlZE5hdmlnYXRpb25UcmVlIGlubmVyUmVmPXt0aGlzLmdldFJlZn0+XG5cdFx0XHRcdFx0PExvZ28vPlxuXHRcdFx0XHRcdDxOYXZpZ2F0aW9uVHJlZVxuXHRcdFx0XHRcdFx0YWN0aXZlPXtwcm9wcy5hY3RpdmV9XG5cdFx0XHRcdFx0XHRkYXRhPXtwcm9wcy5uYXZpZ2F0aW9uLmNoaWxkcmVufVxuXHRcdFx0XHRcdFx0b25TY3JvbGxSZXF1ZXN0PXt0aGlzLmhhbmRsZVNjcm9sbFJlcXVlc3R9XG5cdFx0XHRcdFx0XHRwcmVmaXg9XCIvcGF0dGVyblwiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8RG9jdW1lbnRhdGlvblxuXHRcdFx0XHRcdFx0XHRhY3RpdmU9e3Byb3BzLmFjdGl2ZX1cblx0XHRcdFx0XHRcdFx0ZG9jcz17cHJvcHMuZG9jc31cblx0XHRcdFx0XHRcdFx0b25TY3JvbGxSZXF1ZXN0PXt0aGlzLmhhbmRsZVNjcm9sbFJlcXVlc3R9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9OYXZpZ2F0aW9uVHJlZT5cblx0XHRcdFx0PC9TdHlsZWROYXZpZ2F0aW9uVHJlZT5cblx0XHRcdFx0PFN0eWxlZE5hdmlnYXRpb25Ub29sYmFyPlxuXHRcdFx0XHRcdDxOYXZpZ2F0aW9uVG9vbGJhci8+XG5cdFx0XHRcdDwvU3R5bGVkTmF2aWdhdGlvblRvb2xiYXI+XG5cdFx0XHQ8L1N0eWxlZE5hdmlnYXRpb24+XG5cdFx0KTtcblx0fVxufVxuXG5OYXZpZ2F0aW9uLnByb3BUeXBlcyA9IHtcblx0YWN0aXZlOiB0LnN0cmluZy5pc1JlcXVpcmVkLFxuXHRkb2NzOiB0Lm9iamVjdC5pc1JlcXVpcmVkLFxuXHRuYXZpZ2F0aW9uOiB0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuXG5mdW5jdGlvbiBnZXRQYWRkaW5nKGVsKSB7XG5cdGNvbnN0IHN0eWxlID0gZ2xvYmFsLmdldENvbXB1dGVkU3R5bGUoZWwsIG51bGwpO1xuXHRyZXR1cm4gZGlyZWN0aW9uID0+IHBhcnNlSW50KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoYHBhZGRpbmctJHtkaXJlY3Rpb259YCksIDEwKTtcbn1cblxuY29uc3QgU3R5bGVkTmF2aWdhdGlvbiA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGhlaWdodDogMTAwJTtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGludH1cbmA7XG5cbmNvbnN0IFBBU1NBR0VfSEVJR0hUID0gNTA7XG5cbmNvbnN0IFN0eWxlZE5hdmlnYXRpb25UcmVlID0gc3R5bGVkLmRpdmBcblx0ZmxleC1ncm93OiAxO1xuXHRmbGV4LXNocmluazogMTtcblx0cGFkZGluZy1ib3R0b206IDUwcHg7XG5cdG92ZXJmbG93LXg6IGhpZGRlbjtcblx0b3ZlcmZsb3cteTogc2Nyb2xsO1xuXHQtd2Via2l0LW92ZXJmbG93LXNjcm9sbDogdG91Y2g7XG5cdG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AscmdiYSgwLDAsMCwwKSxyZ2JhKDAsMCwwLDEpICR7UEFTU0FHRV9IRUlHSFR9cHgpO1xuXHQtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AscmdiYSgwLDAsMCwwKSxyZ2JhKDAsMCwwLDEpICR7UEFTU0FHRV9IRUlHSFR9cHgpO1xuYDtcblxuY29uc3QgU3R5bGVkTmF2aWdhdGlvblRvb2xiYXIgPSBzdHlsZWQuZGl2YFxuXHRmbGV4LWdyb3c6IDA7XG5cdGZsZXgtc2hyaW5rOiAwO1xuYDtcblxuZnVuY3Rpb24gRG9jdW1lbnRhdGlvbihwcm9wcykge1xuXHRyZXR1cm4gKFxuXHRcdDxTdHlsZWREb2N1bWVudGF0aW9uVHJlZVxuXHRcdFx0YWN0aXZlPXtwcm9wcy5hY3RpdmV9XG5cdFx0XHRjbGFzc05hbWU9XCJkb2NzLW5hdmlnYXRpb25cIlxuXHRcdFx0ZGF0YT17cHJvcHMuZG9jcy5jaGlsZHJlbn1cblx0XHRcdG9uU2Nyb2xsUmVxdWVzdD17cHJvcHMub25TY3JvbGxSZXF1ZXN0fVxuXHRcdFx0cHJlZml4PVwiL2RvY1wiXG5cdFx0XHQvPlxuXHQpO1xufVxuXG5Eb2N1bWVudGF0aW9uLnByb3BUeXBlcyA9IHtcblx0YWN0aXZlOiB0LnN0cmluZy5pc1JlcXVpcmVkLFxuXHRkb2NzOiB0Lm9iamVjdC5pc1JlcXVpcmVkLFxuXHRvblNjcm9sbFJlcXVlc3Q6IHQuZnVuYy5pc1JlcXVpcmVkc1xufTtcblxuY29uc3QgU3R5bGVkRG9jdW1lbnRhdGlvblRyZWUgPSBzdHlsZWQoTmF2aWdhdGlvblRyZWUpYFxuXHRtYXJnaW4tYm90dG9tOiA1cHg7XG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJvcmRlcn07XG5cdHBhZGRpbmctYm90dG9tOiA1cHg7XG5gO1xuIl19
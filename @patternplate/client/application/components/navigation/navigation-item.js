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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\tflex: 0 0 auto;\n\tfill: ', ';\n\t', ';\n\tmargin: 5px 10px 5px 6px;\n'], ['\n\tflex: 0 0 auto;\n\tfill: ', ';\n\t', ';\n\tmargin: 5px 10px 5px 6px;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n\tflex: 1 1 100%;\n'], ['\n\tflex: 1 1 100%;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n\tflex: 1 0  auto;\n\tmargin: 0 ', 'px 0 auto;\n'], ['\n\tflex: 1 0  auto;\n\tmargin: 0 ', 'px 0 auto;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n\twidth: 100%;\n\tbox-sizing: border-box;\n\tborder-left: ', ';\n\tmargin-left: 1px;\n\t', ';\n'], ['\n\twidth: 100%;\n\tbox-sizing: border-box;\n\tborder-left: ', ';\n\tmargin-left: 1px;\n\t', ';\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\twidth: 100%;\n\talign-items: center;\n\ttext-decoration: none;\n\tfont-size: 16px;\n\tline-height: 20px;\n\tfont-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\t', ';\n\t:link,\n\t:visited {\n\t\tcolor: ', ';\n\t\t', ';\n\t}\n'], ['\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\twidth: 100%;\n\talign-items: center;\n\ttext-decoration: none;\n\tfont-size: 16px;\n\tline-height: 20px;\n\tfont-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\t', ';\n\t:link,\n\t:visited {\n\t\tcolor: ', ';\n\t\t', ';\n\t}\n']);

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tagHoc = require('tag-hoc');

var _tagHoc2 = _interopRequireDefault(_tagHoc);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _icon = require('../common/icon');

var _icon2 = _interopRequireDefault(_icon);

var _link = require('../common/link');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationItem = function (_React$Component) {
	(0, _inherits3.default)(NavigationItem, _React$Component);

	function NavigationItem() {
		var _ref;

		(0, _classCallCheck3.default)(this, NavigationItem);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = NavigationItem.__proto__ || (0, _getPrototypeOf2.default)(NavigationItem)).call.apply(_ref, [this].concat(args)));

		_this.getRef = _this.getRef.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(NavigationItem, [{
		key: 'getRef',
		value: function getRef(ref) {
			this.ref = ref;
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			if (this.props.active && this.ref) {
				setTimeout(function () {
					_this2.props.onScrollRequest({ target: _this2.ref, props: _this2.props });
				});
			}
		}
	}, {
		key: 'componentWillUpdate',
		value: function componentWillUpdate(next) {
			if (this.props.type === 'folder') {
				return;
			}
			if (next.active && this.ref) {
				this.props.onScrollRequest({ target: this.ref, props: next });
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var props = this.props;

			var title = props.title || 'Navigate to ' + props.name + ' ' + props.type;
			var symbol = props.active ? props.symbolActive : props.symbol;

			return _react2.default.createElement(
				StyledNavigationItem,
				{
					active: props.active,
					className: props.className,
					innerRef: this.getRef,
					type: props.type
				},
				_react2.default.createElement(
					StyledNavigationLink,
					{
						active: props.active,
						href: props.href,
						sticky: props.type === 'folder' && props.active,
						type: props.type,
						title: title
					},
					_react2.default.createElement(StyledIcon, { active: props.active, size: 'm', symbol: symbol }),
					_react2.default.createElement(
						StyledName,
						null,
						props.name
					),
					props.meta && _react2.default.createElement(
						StyledMeta,
						{ active: props.active },
						props.meta
					)
				),
				props.active && props.children
			);
		}
	}]);
	return NavigationItem;
}(_react2.default.Component);

exports.default = NavigationItem;


NavigationItem.propTypes = {
	active: _react.PropTypes.bool,
	children: _react.PropTypes.any,
	className: _react.PropTypes.string,
	href: _react.PropTypes.string.isRequired,
	id: _react.PropTypes.string.isRequired,
	name: _react.PropTypes.string.isRequired,
	onScrollRequest: _react.PropTypes.func,
	symbol: _react.PropTypes.string.isRequired,
	symbolActive: _react.PropTypes.string,
	title: _react.PropTypes.string,
	type: _react.PropTypes.string.isRequired
};

var StyledIcon = (0, _styledComponents2.default)(_icon2.default)(_templateObject, function (props) {
	return props.theme.color;
}, function (props) {
	return props.active && 'fill: ' + (0, _color2.default)(props.theme.active);
});

var StyledName = _styledComponents2.default.div(_templateObject2);

var StyledMeta = _styledComponents2.default.div(_templateObject3, function (props) {
	return props.active ? 6 : 10;
});

var StyledNavigationItem = _styledComponents2.default.div(_templateObject4, function (props) {
	return props.type === 'folder' && '3px solid transparent';
}, function (props) {
	return props.active && 'border-color: ' + (0, _color2.default)(props.theme.active).fade(0.6).toString();
});

var LinkTag = (0, _tagHoc2.default)(['active', 'type'])(_link2.default);

var StyledNavigationLink = (0, _styledComponents2.default)(LinkTag)(_templateObject5, function (props) {
	return props.active && '\n\t\tmargin-left: ' + (props.type === 'folder' ? '-3px' : '-4px') + ';\n\t\tpadding-left: ' + (props.type === 'folder' ? 0 : '1px') + ';\n\t\tborder-left: 3px solid ' + props.theme.active + ';\n\t';
}, function (props) {
	return props.theme.color;
}, function (props) {
	return props.active && 'color: ' + (0, _color2.default)(props.theme.active);
});
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi1pdGVtLmpzIl0sIm5hbWVzIjpbIk5hdmlnYXRpb25JdGVtIiwiYXJncyIsImdldFJlZiIsImJpbmQiLCJyZWYiLCJwcm9wcyIsImFjdGl2ZSIsInNldFRpbWVvdXQiLCJvblNjcm9sbFJlcXVlc3QiLCJ0YXJnZXQiLCJuZXh0IiwidHlwZSIsInRpdGxlIiwibmFtZSIsInN5bWJvbCIsInN5bWJvbEFjdGl2ZSIsImNsYXNzTmFtZSIsImhyZWYiLCJtZXRhIiwiY2hpbGRyZW4iLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJib29sIiwiYW55Iiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImlkIiwiZnVuYyIsIlN0eWxlZEljb24iLCJ0aGVtZSIsImNvbG9yIiwiU3R5bGVkTmFtZSIsImRpdiIsIlN0eWxlZE1ldGEiLCJTdHlsZWROYXZpZ2F0aW9uSXRlbSIsImZhZGUiLCJ0b1N0cmluZyIsIkxpbmtUYWciLCJTdHlsZWROYXZpZ2F0aW9uTGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7O0lBRXFCQSxjOzs7QUFDcEIsMkJBQXFCO0FBQUE7O0FBQUE7O0FBQUEsb0NBQU5DLElBQU07QUFBTkEsT0FBTTtBQUFBOztBQUFBLCtLQUNYQSxJQURXOztBQUVwQixRQUFLQyxNQUFMLEdBQWMsTUFBS0EsTUFBTCxDQUFZQyxJQUFaLE9BQWQ7QUFGb0I7QUFHcEI7Ozs7eUJBRU1DLEcsRUFBSztBQUNYLFFBQUtBLEdBQUwsR0FBV0EsR0FBWDtBQUNBOzs7c0NBRW1CO0FBQUE7O0FBQ25CLE9BQUksS0FBS0MsS0FBTCxDQUFXQyxNQUFYLElBQXFCLEtBQUtGLEdBQTlCLEVBQW1DO0FBQ2xDRyxlQUFXLFlBQU07QUFDaEIsWUFBS0YsS0FBTCxDQUFXRyxlQUFYLENBQTJCLEVBQUNDLFFBQVEsT0FBS0wsR0FBZCxFQUFtQkMsT0FBTyxPQUFLQSxLQUEvQixFQUEzQjtBQUNBLEtBRkQ7QUFHQTtBQUNEOzs7c0NBRW1CSyxJLEVBQU07QUFDekIsT0FBSSxLQUFLTCxLQUFMLENBQVdNLElBQVgsS0FBb0IsUUFBeEIsRUFBa0M7QUFDakM7QUFDQTtBQUNELE9BQUlELEtBQUtKLE1BQUwsSUFBZSxLQUFLRixHQUF4QixFQUE2QjtBQUM1QixTQUFLQyxLQUFMLENBQVdHLGVBQVgsQ0FBMkIsRUFBQ0MsUUFBUSxLQUFLTCxHQUFkLEVBQW1CQyxPQUFPSyxJQUExQixFQUEzQjtBQUNBO0FBQ0Q7OzsyQkFFUTtBQUFBLE9BQ0RMLEtBREMsR0FDUSxJQURSLENBQ0RBLEtBREM7O0FBRVIsT0FBTU8sUUFBUVAsTUFBTU8sS0FBTixxQkFBOEJQLE1BQU1RLElBQXBDLFNBQTRDUixNQUFNTSxJQUFoRTtBQUNBLE9BQU1HLFNBQVNULE1BQU1DLE1BQU4sR0FBZUQsTUFBTVUsWUFBckIsR0FBb0NWLE1BQU1TLE1BQXpEOztBQUVBLFVBQ0M7QUFBQyx3QkFBRDtBQUFBO0FBQ0MsYUFBUVQsTUFBTUMsTUFEZjtBQUVDLGdCQUFXRCxNQUFNVyxTQUZsQjtBQUdDLGVBQVUsS0FBS2QsTUFIaEI7QUFJQyxXQUFNRyxNQUFNTTtBQUpiO0FBTUM7QUFBQyx5QkFBRDtBQUFBO0FBQ0MsY0FBUU4sTUFBTUMsTUFEZjtBQUVDLFlBQU1ELE1BQU1ZLElBRmI7QUFHQyxjQUFRWixNQUFNTSxJQUFOLEtBQWUsUUFBZixJQUEyQk4sTUFBTUMsTUFIMUM7QUFJQyxZQUFNRCxNQUFNTSxJQUpiO0FBS0MsYUFBT0M7QUFMUjtBQU9DLG1DQUFDLFVBQUQsSUFBWSxRQUFRUCxNQUFNQyxNQUExQixFQUFrQyxNQUFLLEdBQXZDLEVBQTJDLFFBQVFRLE1BQW5ELEdBUEQ7QUFRQztBQUFDLGdCQUFEO0FBQUE7QUFBYVQsWUFBTVE7QUFBbkIsTUFSRDtBQVNFUixXQUFNYSxJQUFOLElBQ0E7QUFBQyxnQkFBRDtBQUFBLFFBQVksUUFBUWIsTUFBTUMsTUFBMUI7QUFBbUNELFlBQU1hO0FBQXpDO0FBVkYsS0FORDtBQW9CRWIsVUFBTUMsTUFBTixJQUFnQkQsTUFBTWM7QUFwQnhCLElBREQ7QUF5QkE7OztFQXpEMEMsZ0JBQU1DLFM7O2tCQUE3QnBCLGM7OztBQTREckJBLGVBQWVxQixTQUFmLEdBQTJCO0FBQzFCZixTQUFRLGlCQUFNZ0IsSUFEWTtBQUUxQkgsV0FBVSxpQkFBTUksR0FGVTtBQUcxQlAsWUFBVyxpQkFBTVEsTUFIUztBQUkxQlAsT0FBTSxpQkFBTU8sTUFBTixDQUFhQyxVQUpPO0FBSzFCQyxLQUFJLGlCQUFNRixNQUFOLENBQWFDLFVBTFM7QUFNMUJaLE9BQU0saUJBQU1XLE1BQU4sQ0FBYUMsVUFOTztBQU8xQmpCLGtCQUFpQixpQkFBTW1CLElBUEc7QUFRMUJiLFNBQVEsaUJBQU1VLE1BQU4sQ0FBYUMsVUFSSztBQVMxQlYsZUFBYyxpQkFBTVMsTUFUTTtBQVUxQlosUUFBTyxpQkFBTVksTUFWYTtBQVcxQmIsT0FBTSxpQkFBTWEsTUFBTixDQUFhQztBQVhPLENBQTNCOztBQWNBLElBQU1HLGFBQWEsK0NBQWIsa0JBRUc7QUFBQSxRQUFTdkIsTUFBTXdCLEtBQU4sQ0FBWUMsS0FBckI7QUFBQSxDQUZILEVBR0g7QUFBQSxRQUFTekIsTUFBTUMsTUFBTixlQUF5QixxQkFBTUQsTUFBTXdCLEtBQU4sQ0FBWXZCLE1BQWxCLENBQWxDO0FBQUEsQ0FIRyxDQUFOOztBQU9BLElBQU15QixhQUFhLDJCQUFPQyxHQUFwQixrQkFBTjs7QUFJQSxJQUFNQyxhQUFhLDJCQUFPRCxHQUFwQixtQkFFTztBQUFBLFFBQVMzQixNQUFNQyxNQUFOLEdBQWUsQ0FBZixHQUFtQixFQUE1QjtBQUFBLENBRlAsQ0FBTjs7QUFLQSxJQUFNNEIsdUJBQXVCLDJCQUFPRixHQUE5QixtQkFHVTtBQUFBLFFBQVMzQixNQUFNTSxJQUFOLEtBQWUsUUFBZiwyQkFBVDtBQUFBLENBSFYsRUFLSDtBQUFBLFFBQVNOLE1BQU1DLE1BQU4sdUJBQWlDLHFCQUFNRCxNQUFNd0IsS0FBTixDQUFZdkIsTUFBbEIsRUFBMEI2QixJQUExQixDQUErQixHQUEvQixFQUFvQ0MsUUFBcEMsRUFBMUM7QUFBQSxDQUxHLENBQU47O0FBUUEsSUFBTUMsVUFBVSxzQkFBSSxDQUFDLFFBQUQsRUFBVyxNQUFYLENBQUosaUJBQWhCOztBQUVBLElBQU1DLHVCQUF1QixnQ0FBT0QsT0FBUCxDQUF2QixtQkFTSDtBQUFBLFFBQVNoQyxNQUFNQyxNQUFOLDZCQUNLRCxNQUFNTSxJQUFOLEtBQWUsUUFBZixHQUEwQixNQUExQixHQUFtQyxNQUR4QywrQkFFTU4sTUFBTU0sSUFBTixLQUFlLFFBQWYsR0FBMEIsQ0FBMUIsR0FBOEIsS0FGcEMsdUNBR2VOLE1BQU13QixLQUFOLENBQVl2QixNQUgzQixVQUFUO0FBQUEsQ0FURyxFQWdCSztBQUFBLFFBQVNELE1BQU13QixLQUFOLENBQVlDLEtBQXJCO0FBQUEsQ0FoQkwsRUFpQkY7QUFBQSxRQUFTekIsTUFBTUMsTUFBTixnQkFBMEIscUJBQU1ELE1BQU13QixLQUFOLENBQVl2QixNQUFsQixDQUFuQztBQUFBLENBakJFLENBQU4iLCJmaWxlIjoibmF2aWdhdGlvbi1pdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbG9yIGZyb20gJ2NvbG9yJztcbmltcG9ydCBSZWFjdCwge1Byb3BUeXBlcyBhcyB0eXBlc30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHRhZyBmcm9tICd0YWctaG9jJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgSWNvbiBmcm9tICcuLi9jb21tb24vaWNvbic7XG5pbXBvcnQgTGluayBmcm9tICcuLi9jb21tb24vbGluayc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRpb25JdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IoLi4uYXJncykge1xuXHRcdHN1cGVyKC4uLmFyZ3MpO1xuXHRcdHRoaXMuZ2V0UmVmID0gdGhpcy5nZXRSZWYuYmluZCh0aGlzKTtcblx0fVxuXG5cdGdldFJlZihyZWYpIHtcblx0XHR0aGlzLnJlZiA9IHJlZjtcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGlmICh0aGlzLnByb3BzLmFjdGl2ZSAmJiB0aGlzLnJlZikge1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHRoaXMucHJvcHMub25TY3JvbGxSZXF1ZXN0KHt0YXJnZXQ6IHRoaXMucmVmLCBwcm9wczogdGhpcy5wcm9wc30pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVwZGF0ZShuZXh0KSB7XG5cdFx0aWYgKHRoaXMucHJvcHMudHlwZSA9PT0gJ2ZvbGRlcicpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKG5leHQuYWN0aXZlICYmIHRoaXMucmVmKSB7XG5cdFx0XHR0aGlzLnByb3BzLm9uU2Nyb2xsUmVxdWVzdCh7dGFyZ2V0OiB0aGlzLnJlZiwgcHJvcHM6IG5leHR9KTtcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge3Byb3BzfSA9IHRoaXM7XG5cdFx0Y29uc3QgdGl0bGUgPSBwcm9wcy50aXRsZSB8fCBgTmF2aWdhdGUgdG8gJHtwcm9wcy5uYW1lfSAke3Byb3BzLnR5cGV9YDtcblx0XHRjb25zdCBzeW1ib2wgPSBwcm9wcy5hY3RpdmUgPyBwcm9wcy5zeW1ib2xBY3RpdmUgOiBwcm9wcy5zeW1ib2w7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PFN0eWxlZE5hdmlnYXRpb25JdGVtXG5cdFx0XHRcdGFjdGl2ZT17cHJvcHMuYWN0aXZlfVxuXHRcdFx0XHRjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX1cblx0XHRcdFx0aW5uZXJSZWY9e3RoaXMuZ2V0UmVmfVxuXHRcdFx0XHR0eXBlPXtwcm9wcy50eXBlfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdDxTdHlsZWROYXZpZ2F0aW9uTGlua1xuXHRcdFx0XHRcdGFjdGl2ZT17cHJvcHMuYWN0aXZlfVxuXHRcdFx0XHRcdGhyZWY9e3Byb3BzLmhyZWZ9XG5cdFx0XHRcdFx0c3RpY2t5PXtwcm9wcy50eXBlID09PSAnZm9sZGVyJyAmJiBwcm9wcy5hY3RpdmV9XG5cdFx0XHRcdFx0dHlwZT17cHJvcHMudHlwZX1cblx0XHRcdFx0XHR0aXRsZT17dGl0bGV9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdDxTdHlsZWRJY29uIGFjdGl2ZT17cHJvcHMuYWN0aXZlfSBzaXplPVwibVwiIHN5bWJvbD17c3ltYm9sfS8+XG5cdFx0XHRcdFx0PFN0eWxlZE5hbWU+e3Byb3BzLm5hbWV9PC9TdHlsZWROYW1lPlxuXHRcdFx0XHRcdHtwcm9wcy5tZXRhICYmXG5cdFx0XHRcdFx0XHQ8U3R5bGVkTWV0YSBhY3RpdmU9e3Byb3BzLmFjdGl2ZX0+e3Byb3BzLm1ldGF9PC9TdHlsZWRNZXRhPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9TdHlsZWROYXZpZ2F0aW9uTGluaz5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdHByb3BzLmFjdGl2ZSAmJiBwcm9wcy5jaGlsZHJlblxuXHRcdFx0XHR9XG5cdFx0XHQ8L1N0eWxlZE5hdmlnYXRpb25JdGVtPlxuXHRcdCk7XG5cdH1cbn1cblxuTmF2aWdhdGlvbkl0ZW0ucHJvcFR5cGVzID0ge1xuXHRhY3RpdmU6IHR5cGVzLmJvb2wsXG5cdGNoaWxkcmVuOiB0eXBlcy5hbnksXG5cdGNsYXNzTmFtZTogdHlwZXMuc3RyaW5nLFxuXHRocmVmOiB0eXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0aWQ6IHR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRuYW1lOiB0eXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0b25TY3JvbGxSZXF1ZXN0OiB0eXBlcy5mdW5jLFxuXHRzeW1ib2w6IHR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRzeW1ib2xBY3RpdmU6IHR5cGVzLnN0cmluZyxcblx0dGl0bGU6IHR5cGVzLnN0cmluZyxcblx0dHlwZTogdHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbn07XG5cbmNvbnN0IFN0eWxlZEljb24gPSBzdHlsZWQoSWNvbilgXG5cdGZsZXg6IDAgMCBhdXRvO1xuXHRmaWxsOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9yfTtcblx0JHtwcm9wcyA9PiBwcm9wcy5hY3RpdmUgJiYgYGZpbGw6ICR7Y29sb3IocHJvcHMudGhlbWUuYWN0aXZlKX1gfTtcblx0bWFyZ2luOiA1cHggMTBweCA1cHggNnB4O1xuYDtcblxuY29uc3QgU3R5bGVkTmFtZSA9IHN0eWxlZC5kaXZgXG5cdGZsZXg6IDEgMSAxMDAlO1xuYDtcblxuY29uc3QgU3R5bGVkTWV0YSA9IHN0eWxlZC5kaXZgXG5cdGZsZXg6IDEgMCAgYXV0bztcblx0bWFyZ2luOiAwICR7cHJvcHMgPT4gcHJvcHMuYWN0aXZlID8gNiA6IDEwfXB4IDAgYXV0bztcbmA7XG5cbmNvbnN0IFN0eWxlZE5hdmlnYXRpb25JdGVtID0gc3R5bGVkLmRpdmBcblx0d2lkdGg6IDEwMCU7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdGJvcmRlci1sZWZ0OiAke3Byb3BzID0+IHByb3BzLnR5cGUgPT09ICdmb2xkZXInICYmIGAzcHggc29saWQgdHJhbnNwYXJlbnRgfTtcblx0bWFyZ2luLWxlZnQ6IDFweDtcblx0JHtwcm9wcyA9PiBwcm9wcy5hY3RpdmUgJiYgYGJvcmRlci1jb2xvcjogJHtjb2xvcihwcm9wcy50aGVtZS5hY3RpdmUpLmZhZGUoMC42KS50b1N0cmluZygpfWB9O1xuYDtcblxuY29uc3QgTGlua1RhZyA9IHRhZyhbJ2FjdGl2ZScsICd0eXBlJ10pKExpbmspO1xuXG5jb25zdCBTdHlsZWROYXZpZ2F0aW9uTGluayA9IHN0eWxlZChMaW5rVGFnKWBcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0ZGlzcGxheTogZmxleDtcblx0d2lkdGg6IDEwMCU7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRsaW5lLWhlaWdodDogMjBweDtcblx0Zm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcblx0JHtwcm9wcyA9PiBwcm9wcy5hY3RpdmUgJiYgYFxuXHRcdG1hcmdpbi1sZWZ0OiAke3Byb3BzLnR5cGUgPT09ICdmb2xkZXInID8gJy0zcHgnIDogJy00cHgnfTtcblx0XHRwYWRkaW5nLWxlZnQ6ICR7cHJvcHMudHlwZSA9PT0gJ2ZvbGRlcicgPyAwIDogJzFweCd9O1xuXHRcdGJvcmRlci1sZWZ0OiAzcHggc29saWQgJHtwcm9wcy50aGVtZS5hY3RpdmV9O1xuXHRgfTtcblx0OmxpbmssXG5cdDp2aXNpdGVkIHtcblx0XHRjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcn07XG5cdFx0JHtwcm9wcyA9PiBwcm9wcy5hY3RpdmUgJiYgYGNvbG9yOiAke2NvbG9yKHByb3BzLnRoZW1lLmFjdGl2ZSl9YH07XG5cdH1cbmA7XG4iXX0=
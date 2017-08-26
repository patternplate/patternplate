'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\twidth: 100%;\n\theight: auto;\n\tstroke: ', ';\n\tstroke-width: 0;\n\tfill: ', ';\n'], ['\n\twidth: 100%;\n\theight: auto;\n\tstroke: ', ';\n\tstroke-width: 0;\n\tfill: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _svg = require('../utils/svg');

var svg = _interopRequireWildcard(_svg);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FavIcon = function (_React$Component) {
	(0, _inherits3.default)(FavIcon, _React$Component);

	function FavIcon() {
		var _ref;

		(0, _classCallCheck3.default)(this, FavIcon);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = FavIcon.__proto__ || (0, _getPrototypeOf2.default)(FavIcon)).call.apply(_ref, [this].concat(args)));

		_this.state = {};
		return _this;
	}

	(0, _createClass3.default)(FavIcon, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			if (typeof this.props.source !== 'string') {
				return;
			}

			var _svg$purge = svg.purge([svg.parse(this.props.source)]),
			    _svg$purge2 = (0, _slicedToArray3.default)(_svg$purge, 1),
			    purged = _svg$purge2[0];

			var source = svg.stringify(purged);

			svg.png(source).then(function (href) {
				return _this2.setState({ href: href });
			}).catch(function (err) {
				console.error(err);
				_this2.setState({ href: null });
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var props = this.props;


			if (typeof props.source !== 'string') {
				return null;
			}

			var _svg$purge3 = svg.purge([svg.parse(props.source)]),
			    _svg$purge4 = (0, _slicedToArray3.default)(_svg$purge3, 1),
			    purged = _svg$purge4[0];

			var source = svg.stringify(purged);

			var link = [{ rel: 'icon', href: this.state.href, type: 'image/png' }, { rel: 'icon', href: svg.btoa(source), type: 'image/svg+xml' }];

			return _react2.default.createElement(_reactHelmet2.default, { link: link });
		}
	}]);
	return FavIcon;
}(_react2.default.Component);

exports.default = (0, _styledComponents2.default)(FavIcon)(_templateObject, function (props) {
	return props.theme.color;
}, function (props) {
	return props.theme.color;
});


FavIcon.propTypes = {
	className: _react.PropTypes.string,
	source: _react.PropTypes.string
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2Zhdmljb24uanMiXSwibmFtZXMiOlsic3ZnIiwiRmF2SWNvbiIsImFyZ3MiLCJzdGF0ZSIsInByb3BzIiwic291cmNlIiwicHVyZ2UiLCJwYXJzZSIsInB1cmdlZCIsInN0cmluZ2lmeSIsInBuZyIsInRoZW4iLCJzZXRTdGF0ZSIsImhyZWYiLCJjYXRjaCIsImNvbnNvbGUiLCJlcnJvciIsImVyciIsImxpbmsiLCJyZWwiLCJ0eXBlIiwiYnRvYSIsIkNvbXBvbmVudCIsInRoZW1lIiwiY29sb3IiLCJwcm9wVHlwZXMiLCJjbGFzc05hbWUiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztJQUFZQSxHOzs7Ozs7SUFFTkMsTzs7O0FBQ0wsb0JBQXFCO0FBQUE7O0FBQUE7O0FBQUEsb0NBQU5DLElBQU07QUFBTkEsT0FBTTtBQUFBOztBQUFBLGlLQUNYQSxJQURXOztBQUVwQixRQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUZvQjtBQUdwQjs7OztzQ0FFbUI7QUFBQTs7QUFDbkIsT0FBSSxPQUFPLEtBQUtDLEtBQUwsQ0FBV0MsTUFBbEIsS0FBNkIsUUFBakMsRUFBMkM7QUFDMUM7QUFDQTs7QUFIa0Isb0JBS0ZMLElBQUlNLEtBQUosQ0FBVSxDQUFDTixJQUFJTyxLQUFKLENBQVUsS0FBS0gsS0FBTCxDQUFXQyxNQUFyQixDQUFELENBQVYsQ0FMRTtBQUFBO0FBQUEsT0FLWkcsTUFMWTs7QUFNbkIsT0FBTUgsU0FBU0wsSUFBSVMsU0FBSixDQUFjRCxNQUFkLENBQWY7O0FBRUFSLE9BQUlVLEdBQUosQ0FBUUwsTUFBUixFQUNFTSxJQURGLENBQ087QUFBQSxXQUFRLE9BQUtDLFFBQUwsQ0FBYyxFQUFDQyxVQUFELEVBQWQsQ0FBUjtBQUFBLElBRFAsRUFFRUMsS0FGRixDQUVRLGVBQU87QUFDYkMsWUFBUUMsS0FBUixDQUFjQyxHQUFkO0FBQ0EsV0FBS0wsUUFBTCxDQUFjLEVBQUNDLE1BQU0sSUFBUCxFQUFkO0FBQ0EsSUFMRjtBQU1BOzs7MkJBRVE7QUFBQSxPQUNEVCxLQURDLEdBQ1EsSUFEUixDQUNEQSxLQURDOzs7QUFHUixPQUFJLE9BQU9BLE1BQU1DLE1BQWIsS0FBd0IsUUFBNUIsRUFBc0M7QUFDckMsV0FBTyxJQUFQO0FBQ0E7O0FBTE8scUJBT1NMLElBQUlNLEtBQUosQ0FBVSxDQUFDTixJQUFJTyxLQUFKLENBQVVILE1BQU1DLE1BQWhCLENBQUQsQ0FBVixDQVBUO0FBQUE7QUFBQSxPQU9ERyxNQVBDOztBQVFSLE9BQU1ILFNBQVNMLElBQUlTLFNBQUosQ0FBY0QsTUFBZCxDQUFmOztBQUVBLE9BQU1VLE9BQU8sQ0FDWixFQUFDQyxLQUFLLE1BQU4sRUFBY04sTUFBTSxLQUFLVixLQUFMLENBQVdVLElBQS9CLEVBQXFDTyxNQUFNLFdBQTNDLEVBRFksRUFFWixFQUFDRCxLQUFLLE1BQU4sRUFBY04sTUFBTWIsSUFBSXFCLElBQUosQ0FBU2hCLE1BQVQsQ0FBcEIsRUFBc0NlLE1BQU0sZUFBNUMsRUFGWSxDQUFiOztBQUtBLFVBQU8sdURBQVEsTUFBTUYsSUFBZCxHQUFQO0FBQ0E7OztFQXRDb0IsZ0JBQU1JLFM7O2tCQXlDYixnQ0FBT3JCLE9BQVAsQyxrQkFHSjtBQUFBLFFBQVNHLE1BQU1tQixLQUFOLENBQVlDLEtBQXJCO0FBQUEsQyxFQUVGO0FBQUEsUUFBU3BCLE1BQU1tQixLQUFOLENBQVlDLEtBQXJCO0FBQUEsQzs7O0FBR1R2QixRQUFRd0IsU0FBUixHQUFvQjtBQUNuQkMsWUFBVyxpQkFBRUMsTUFETTtBQUVuQnRCLFNBQVEsaUJBQUVzQjtBQUZTLENBQXBCIiwiZmlsZSI6ImZhdmljb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXMgYXMgdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlbG1ldCBmcm9tICdyZWFjdC1oZWxtZXQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgKiBhcyBzdmcgZnJvbSAnLi4vdXRpbHMvc3ZnJztcblxuY2xhc3MgRmF2SWNvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcblx0XHRzdXBlciguLi5hcmdzKTtcblx0XHR0aGlzLnN0YXRlID0ge307XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRpZiAodHlwZW9mIHRoaXMucHJvcHMuc291cmNlICE9PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IFtwdXJnZWRdID0gc3ZnLnB1cmdlKFtzdmcucGFyc2UodGhpcy5wcm9wcy5zb3VyY2UpXSk7XG5cdFx0Y29uc3Qgc291cmNlID0gc3ZnLnN0cmluZ2lmeShwdXJnZWQpO1xuXG5cdFx0c3ZnLnBuZyhzb3VyY2UpXG5cdFx0XHQudGhlbihocmVmID0+IHRoaXMuc2V0U3RhdGUoe2hyZWZ9KSlcblx0XHRcdC5jYXRjaChlcnIgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKGVycik7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe2hyZWY6IG51bGx9KTtcblx0XHRcdH0pO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHtwcm9wc30gPSB0aGlzO1xuXG5cdFx0aWYgKHR5cGVvZiBwcm9wcy5zb3VyY2UgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRjb25zdCBbcHVyZ2VkXSA9IHN2Zy5wdXJnZShbc3ZnLnBhcnNlKHByb3BzLnNvdXJjZSldKTtcblx0XHRjb25zdCBzb3VyY2UgPSBzdmcuc3RyaW5naWZ5KHB1cmdlZCk7XG5cblx0XHRjb25zdCBsaW5rID0gW1xuXHRcdFx0e3JlbDogJ2ljb24nLCBocmVmOiB0aGlzLnN0YXRlLmhyZWYsIHR5cGU6ICdpbWFnZS9wbmcnfSxcblx0XHRcdHtyZWw6ICdpY29uJywgaHJlZjogc3ZnLmJ0b2Eoc291cmNlKSwgdHlwZTogJ2ltYWdlL3N2Zyt4bWwnfVxuXHRcdF07XG5cblx0XHRyZXR1cm4gPEhlbG1ldCBsaW5rPXtsaW5rfS8+O1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChGYXZJY29uKWBcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogYXV0bztcblx0c3Ryb2tlOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9yfTtcblx0c3Ryb2tlLXdpZHRoOiAwO1xuXHRmaWxsOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9yfTtcbmA7XG5cbkZhdkljb24ucHJvcFR5cGVzID0ge1xuXHRjbGFzc05hbWU6IHQuc3RyaW5nLFxuXHRzb3VyY2U6IHQuc3RyaW5nXG59O1xuIl19
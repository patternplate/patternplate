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

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\tbox-sizing: border-box;\n\theight: 100%;\n\twidth: 100%;\n\t&::before {\n\t\tcontent: \'\';\n\t\tdisplay: ', ';\n\t\tposition: absolute;\n\t\tz-index: 1;\n\t\ttop: 0;\n\t\tright: 0;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t\twidth: 100vw;\n\t\theight: 100vh;\n\t\tbackground: ', ';\n\t\tbackground-size: 16px 16px;\n\t\tbackground-position: 0 0, 8px 8px;\n\t}\n'], ['\n\tbox-sizing: border-box;\n\theight: 100%;\n\twidth: 100%;\n\t&::before {\n\t\tcontent: \'\';\n\t\tdisplay: ', ';\n\t\tposition: absolute;\n\t\tz-index: 1;\n\t\ttop: 0;\n\t\tright: 0;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t\twidth: 100vw;\n\t\theight: 100vh;\n\t\tbackground: ', ';\n\t\tbackground-size: 16px 16px;\n\t\tbackground-position: 0 0, 8px 8px;\n\t}\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n\theight: 100%;\n\twidth: 100%;\n'], ['\n\theight: 100%;\n\twidth: 100%;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n\twidth: 100%;\n\tmax-width: 800px;\n\tmargin: 0 auto;\n\tpadding: 30px;\n\tbox-sizing: border-box;\n'], ['\n\twidth: 100%;\n\tmax-width: 800px;\n\tmargin: 0 auto;\n\tpadding: 30px;\n\tbox-sizing: border-box;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n\tposition: relative;\n\tz-index: 2;\n\twidth: 100%;\n\theight: 100%;\n\tmax-width: 1240px;\n\tmargin: 0 auto;\n'], ['\n\tposition: relative;\n\tz-index: 2;\n\twidth: 100%;\n\theight: 100%;\n\tmax-width: 1240px;\n\tmargin: 0 auto;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _tagHoc = require('tag-hoc');

var _tagHoc2 = _interopRequireDefault(_tagHoc);

var _markdown = require('../common/markdown');

var _markdown2 = _interopRequireDefault(_markdown);

var _patternDemo = require('./pattern-demo');

var _patternDemo2 = _interopRequireDefault(_patternDemo);

var _search = require('../../containers/search');

var _search2 = _interopRequireDefault(_search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VISIBILITY = function VISIBILITY(props) {
	return props.checkers ? 'block' : 'none';
};

var StyledPattern = (0, _styledComponents2.default)((0, _tagHoc2.default)(['checkers'])('div'))(_templateObject, VISIBILITY, function (props) {
	return checkers(props);
});

var StyledPatternFolder = _styledComponents2.default.div(_templateObject2);

var StyledPatternDoc = _styledComponents2.default.div(_templateObject3);

var StyledPatternDemo = _styledComponents2.default.div(_templateObject4);

var Pattern = function (_React$Component) {
	(0, _inherits3.default)(Pattern, _React$Component);

	function Pattern() {
		(0, _classCallCheck3.default)(this, Pattern);
		return (0, _possibleConstructorReturn3.default)(this, (Pattern.__proto__ || (0, _getPrototypeOf2.default)(Pattern)).apply(this, arguments));
	}

	(0, _createClass3.default)(Pattern, [{
		key: 'render',
		value: function render() {
			var props = this.props;

			switch (props.type) {
				case 'pattern':
					return _react2.default.createElement(
						StyledPattern,
						{ checkers: props.opacity },
						_react2.default.createElement(
							StyledPatternDemo,
							null,
							_react2.default.createElement(_patternDemo2.default, {
								contents: props.contents,
								loading: props.loading
							})
						)
					);
				case 'not-found':
				default:
					return _react2.default.createElement(
						StyledPatternFolder,
						null,
						_react2.default.createElement(
							StyledPatternDoc,
							null,
							_react2.default.createElement(_search2.default, { inline: true }),
							_react2.default.createElement(_markdown2.default, { source: props.docs })
						)
					);
			}
		}
	}]);
	return Pattern;
}(_react2.default.Component);

exports.default = Pattern;


Pattern.propTypes = {
	demoSrc: _react.PropTypes.string,
	id: _react.PropTypes.string.isRequired,
	opacity: _react.PropTypes.bool.isRequired,
	pattern: _react.PropTypes.any.isRequired,
	type: _react.PropTypes.string.isRequired,
	contents: _react.PropTypes.string
};

function grad(fill) {
	return 'linear-gradient(45deg, ' + fill + ' 25%, transparent 25%, transparent 75%, ' + fill + ' 75%, ' + fill + ')';
}

function checkers(props) {
	var fill = props.theme.border;
	return '\n\t\t' + grad(fill) + ',\n\t\t' + grad(fill) + ';\n\t';
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL3BhdHRlcm4vaW5kZXguanMiXSwibmFtZXMiOlsiVklTSUJJTElUWSIsInByb3BzIiwiY2hlY2tlcnMiLCJTdHlsZWRQYXR0ZXJuIiwiU3R5bGVkUGF0dGVybkZvbGRlciIsImRpdiIsIlN0eWxlZFBhdHRlcm5Eb2MiLCJTdHlsZWRQYXR0ZXJuRGVtbyIsIlBhdHRlcm4iLCJ0eXBlIiwib3BhY2l0eSIsImNvbnRlbnRzIiwibG9hZGluZyIsImRvY3MiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJkZW1vU3JjIiwic3RyaW5nIiwiaWQiLCJpc1JlcXVpcmVkIiwiYm9vbCIsInBhdHRlcm4iLCJhbnkiLCJncmFkIiwiZmlsbCIsInRoZW1lIiwiYm9yZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGFBQWEsU0FBYkEsVUFBYTtBQUFBLFFBQVNDLE1BQU1DLFFBQU4sR0FBaUIsT0FBakIsR0FBMkIsTUFBcEM7QUFBQSxDQUFuQjs7QUFFQSxJQUFNQyxnQkFBZ0IsZ0NBQU8sc0JBQUksQ0FBQyxVQUFELENBQUosRUFBa0IsS0FBbEIsQ0FBUCxDQUFoQixrQkFNT0gsVUFOUCxFQWVVO0FBQUEsUUFBU0UsU0FBU0QsS0FBVCxDQUFUO0FBQUEsQ0FmVixDQUFOOztBQXFCQSxJQUFNRyxzQkFBc0IsMkJBQU9DLEdBQTdCLGtCQUFOOztBQUtBLElBQU1DLG1CQUFtQiwyQkFBT0QsR0FBMUIsa0JBQU47O0FBUUEsSUFBTUUsb0JBQW9CLDJCQUFPRixHQUEzQixrQkFBTjs7SUFTcUJHLE87Ozs7Ozs7Ozs7MkJBQ1g7QUFBQSxPQUNEUCxLQURDLEdBQ1EsSUFEUixDQUNEQSxLQURDOztBQUVSLFdBQVFBLE1BQU1RLElBQWQ7QUFDQyxTQUFLLFNBQUw7QUFDQyxZQUNDO0FBQUMsbUJBQUQ7QUFBQSxRQUFlLFVBQVVSLE1BQU1TLE9BQS9CO0FBQ0M7QUFBQyx3QkFBRDtBQUFBO0FBQ0M7QUFDQyxrQkFBVVQsTUFBTVUsUUFEakI7QUFFQyxpQkFBU1YsTUFBTVc7QUFGaEI7QUFERDtBQURELE1BREQ7QUFVRCxTQUFLLFdBQUw7QUFDQTtBQUNDLFlBQ0M7QUFBQyx5QkFBRDtBQUFBO0FBQ0M7QUFBQyx1QkFBRDtBQUFBO0FBQ0MseURBQVEsWUFBUixHQUREO0FBRUMsMkRBQVUsUUFBUVgsTUFBTVksSUFBeEI7QUFGRDtBQURELE1BREQ7QUFkRjtBQXVCQTs7O0VBMUJtQyxnQkFBTUMsUzs7a0JBQXRCTixPOzs7QUE2QnJCQSxRQUFRTyxTQUFSLEdBQW9CO0FBQ25CQyxVQUFTLGlCQUFFQyxNQURRO0FBRW5CQyxLQUFJLGlCQUFFRCxNQUFGLENBQVNFLFVBRk07QUFHbkJULFVBQVMsaUJBQUVVLElBQUYsQ0FBT0QsVUFIRztBQUluQkUsVUFBUyxpQkFBRUMsR0FBRixDQUFNSCxVQUpJO0FBS25CVixPQUFNLGlCQUFFUSxNQUFGLENBQVNFLFVBTEk7QUFNbkJSLFdBQVUsaUJBQUVNO0FBTk8sQ0FBcEI7O0FBU0EsU0FBU00sSUFBVCxDQUFjQyxJQUFkLEVBQW9CO0FBQ25CLG9DQUFpQ0EsSUFBakMsZ0RBQWdGQSxJQUFoRixjQUE2RkEsSUFBN0Y7QUFDQTs7QUFFRCxTQUFTdEIsUUFBVCxDQUFrQkQsS0FBbEIsRUFBeUI7QUFDeEIsS0FBTXVCLE9BQU92QixNQUFNd0IsS0FBTixDQUFZQyxNQUF6QjtBQUNBLG1CQUNHSCxLQUFLQyxJQUFMLENBREgsZUFFR0QsS0FBS0MsSUFBTCxDQUZIO0FBSUEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXMgYXMgdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgdGFnIGZyb20gJ3RhZy1ob2MnO1xuXG5pbXBvcnQgTWFya2Rvd24gZnJvbSAnLi4vY29tbW9uL21hcmtkb3duJztcbmltcG9ydCBQYXR0ZXJuRGVtbyBmcm9tICcuL3BhdHRlcm4tZGVtbyc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvc2VhcmNoJztcblxuY29uc3QgVklTSUJJTElUWSA9IHByb3BzID0+IHByb3BzLmNoZWNrZXJzID8gJ2Jsb2NrJyA6ICdub25lJztcblxuY29uc3QgU3R5bGVkUGF0dGVybiA9IHN0eWxlZCh0YWcoWydjaGVja2VycyddKSgnZGl2JykpYFxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHdpZHRoOiAxMDAlO1xuXHQmOjpiZWZvcmUge1xuXHRcdGNvbnRlbnQ6ICcnO1xuXHRcdGRpc3BsYXk6ICR7VklTSUJJTElUWX07XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHotaW5kZXg6IDE7XG5cdFx0dG9wOiAwO1xuXHRcdHJpZ2h0OiAwO1xuXHRcdGJvdHRvbTogMDtcblx0XHRsZWZ0OiAwO1xuXHRcdHdpZHRoOiAxMDB2dztcblx0XHRoZWlnaHQ6IDEwMHZoO1xuXHRcdGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gY2hlY2tlcnMocHJvcHMpfTtcblx0XHRiYWNrZ3JvdW5kLXNpemU6IDE2cHggMTZweDtcblx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDAsIDhweCA4cHg7XG5cdH1cbmA7XG5cbmNvbnN0IFN0eWxlZFBhdHRlcm5Gb2xkZXIgPSBzdHlsZWQuZGl2YFxuXHRoZWlnaHQ6IDEwMCU7XG5cdHdpZHRoOiAxMDAlO1xuYDtcblxuY29uc3QgU3R5bGVkUGF0dGVybkRvYyA9IHN0eWxlZC5kaXZgXG5cdHdpZHRoOiAxMDAlO1xuXHRtYXgtd2lkdGg6IDgwMHB4O1xuXHRtYXJnaW46IDAgYXV0bztcblx0cGFkZGluZzogMzBweDtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcbmA7XG5cbmNvbnN0IFN0eWxlZFBhdHRlcm5EZW1vID0gc3R5bGVkLmRpdmBcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR6LWluZGV4OiAyO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXHRtYXgtd2lkdGg6IDEyNDBweDtcblx0bWFyZ2luOiAwIGF1dG87XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXR0ZXJuIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHtwcm9wc30gPSB0aGlzO1xuXHRcdHN3aXRjaCAocHJvcHMudHlwZSkge1xuXHRcdFx0Y2FzZSAncGF0dGVybic6XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PFN0eWxlZFBhdHRlcm4gY2hlY2tlcnM9e3Byb3BzLm9wYWNpdHl9PlxuXHRcdFx0XHRcdFx0PFN0eWxlZFBhdHRlcm5EZW1vPlxuXHRcdFx0XHRcdFx0XHQ8UGF0dGVybkRlbW9cblx0XHRcdFx0XHRcdFx0XHRjb250ZW50cz17cHJvcHMuY29udGVudHN9XG5cdFx0XHRcdFx0XHRcdFx0bG9hZGluZz17cHJvcHMubG9hZGluZ31cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9TdHlsZWRQYXR0ZXJuRGVtbz5cblx0XHRcdFx0XHQ8L1N0eWxlZFBhdHRlcm4+XG5cdFx0XHRcdCk7XG5cdFx0XHRjYXNlICdub3QtZm91bmQnOlxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8U3R5bGVkUGF0dGVybkZvbGRlcj5cblx0XHRcdFx0XHRcdDxTdHlsZWRQYXR0ZXJuRG9jPlxuXHRcdFx0XHRcdFx0XHQ8U2VhcmNoIGlubGluZS8+XG5cdFx0XHRcdFx0XHRcdDxNYXJrZG93biBzb3VyY2U9e3Byb3BzLmRvY3N9Lz5cblx0XHRcdFx0XHRcdDwvU3R5bGVkUGF0dGVybkRvYz5cblx0XHRcdFx0XHQ8L1N0eWxlZFBhdHRlcm5Gb2xkZXI+XG5cdFx0XHRcdCk7XG5cdFx0fVxuXHR9XG59XG5cblBhdHRlcm4ucHJvcFR5cGVzID0ge1xuXHRkZW1vU3JjOiB0LnN0cmluZyxcblx0aWQ6IHQuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdG9wYWNpdHk6IHQuYm9vbC5pc1JlcXVpcmVkLFxuXHRwYXR0ZXJuOiB0LmFueS5pc1JlcXVpcmVkLFxuXHR0eXBlOiB0LnN0cmluZy5pc1JlcXVpcmVkLFxuXHRjb250ZW50czogdC5zdHJpbmdcbn07XG5cbmZ1bmN0aW9uIGdyYWQoZmlsbCkge1xuXHRyZXR1cm4gYGxpbmVhci1ncmFkaWVudCg0NWRlZywgJHtmaWxsfSAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNzUlLCAke2ZpbGx9IDc1JSwgJHtmaWxsfSlgO1xufVxuXG5mdW5jdGlvbiBjaGVja2Vycyhwcm9wcykge1xuXHRjb25zdCBmaWxsID0gcHJvcHMudGhlbWUuYm9yZGVyO1xuXHRyZXR1cm4gYFxuXHRcdCR7Z3JhZChmaWxsKX0sXG5cdFx0JHtncmFkKGZpbGwpfTtcblx0YDtcbn1cbiJdfQ==
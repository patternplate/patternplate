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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reselect = require('reselect');

var _demo = require('../selectors/demo');

var demo = _interopRequireWildcard(_demo);

var _item = require('../selectors/item');

var items = _interopRequireWildcard(_item);

var _pattern = require('../components/pattern');

var _pattern2 = _interopRequireDefault(_pattern);

var _actions = require('../actions');

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PatternContainer = function (_React$Component) {
	(0, _inherits3.default)(PatternContainer, _React$Component);

	function PatternContainer() {
		(0, _classCallCheck3.default)(this, PatternContainer);
		return (0, _possibleConstructorReturn3.default)(this, (PatternContainer.__proto__ || (0, _getPrototypeOf2.default)(PatternContainer)).apply(this, arguments));
	}

	(0, _createClass3.default)(PatternContainer, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.onChange();
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(next) {
			if (this.props.src !== next.src && next.src) {
				this.props.onChange();
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var props = this.props;

			return _react2.default.createElement(_pattern2.default, {
				contents: props.contents,
				docs: props.docs,
				loading: props.loading,
				opacity: props.opacity,
				type: props.type
			});
		}
	}]);
	return PatternContainer;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(mapState, mapDispatch)(PatternContainer);


var DEFAULT_CONTENTS = '\n# :construction: Add documentation\n\n> Undocumented software could not exist just as well.\n>\n> \u2013 The Voice of Common Sense\n\nCurrently there is no readme data for this pattern folder.\nWe left this friendly reminder for you to change that soon.\n\n---\n\nHelp us to make this message more helpful on [GitHub](https://github.com/sinnerschrader/patternplate).\n';

var NOT_FOUND = '\n# Pattern not found\n\n> Pretty sure this is not the component you are looking for.\n\nWe looked everywhere and could not find a single thing.\n\nYou might want to navigate back to [Home](/) or use the search.\n\n---\n\nHelp us to make this message more helpful on [GitHub](https://github.com/sinnerschrader/patternplate)\n';

var selectDocs = (0, _reselect.createSelector)(items.default, items.selectType, items.selectContents, function (pattern, type, contents) {
	if (type === 'not-found') {
		return NOT_FOUND;
	}
	return contents || DEFAULT_CONTENTS;
});

function mapState(state) {
	return {
		docs: selectDocs(state),
		contents: state.demo.contents,
		loading: state.demo.loading,
		opacity: state.opacity,
		src: demo.selectSrc(state),
		type: items.selectType(state)
	};
}

function mapDispatch(dispatch) {
	return (0, _redux.bindActionCreators)({
		onChange: actions.loadPatternDemo
	}, dispatch);
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb250YWluZXJzL3BhdHRlcm4uanMiXSwibmFtZXMiOlsiZGVtbyIsIml0ZW1zIiwiYWN0aW9ucyIsIlBhdHRlcm5Db250YWluZXIiLCJwcm9wcyIsIm9uQ2hhbmdlIiwibmV4dCIsInNyYyIsImNvbnRlbnRzIiwiZG9jcyIsImxvYWRpbmciLCJvcGFjaXR5IiwidHlwZSIsIkNvbXBvbmVudCIsIm1hcFN0YXRlIiwibWFwRGlzcGF0Y2giLCJERUZBVUxUX0NPTlRFTlRTIiwiTk9UX0ZPVU5EIiwic2VsZWN0RG9jcyIsInNlbGVjdFR5cGUiLCJzZWxlY3RDb250ZW50cyIsInBhdHRlcm4iLCJzdGF0ZSIsInNlbGVjdFNyYyIsImRpc3BhdGNoIiwibG9hZFBhdHRlcm5EZW1vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0lBQVlBLEk7O0FBQ1o7O0lBQXdCQyxLOztBQUN4Qjs7OztBQUVBOztJQUFZQyxPOzs7Ozs7SUFFTkMsZ0I7Ozs7Ozs7Ozs7c0NBQ2U7QUFDbkIsUUFBS0MsS0FBTCxDQUFXQyxRQUFYO0FBQ0E7Ozs0Q0FFeUJDLEksRUFBTTtBQUMvQixPQUFJLEtBQUtGLEtBQUwsQ0FBV0csR0FBWCxLQUFtQkQsS0FBS0MsR0FBeEIsSUFBK0JELEtBQUtDLEdBQXhDLEVBQTZDO0FBQzVDLFNBQUtILEtBQUwsQ0FBV0MsUUFBWDtBQUNBO0FBQ0Q7OzsyQkFFUTtBQUFBLE9BQ0RELEtBREMsR0FDUSxJQURSLENBQ0RBLEtBREM7O0FBRVIsVUFDQztBQUNDLGNBQVVBLE1BQU1JLFFBRGpCO0FBRUMsVUFBTUosTUFBTUssSUFGYjtBQUdDLGFBQVNMLE1BQU1NLE9BSGhCO0FBSUMsYUFBU04sTUFBTU8sT0FKaEI7QUFLQyxVQUFNUCxNQUFNUTtBQUxiLEtBREQ7QUFTQTs7O0VBdEI2QixnQkFBTUMsUzs7a0JBeUJ0Qix5QkFBUUMsUUFBUixFQUFrQkMsV0FBbEIsRUFBK0JaLGdCQUEvQixDOzs7QUFFZixJQUFNYSx1WUFBTjs7QUFlQSxJQUFNQyxtVkFBTjs7QUFjQSxJQUFNQyxhQUFhLDhCQTdES2pCLEtBNkRMLFVBRWxCQSxNQUFNa0IsVUFGWSxFQUdsQmxCLE1BQU1tQixjQUhZLEVBSWxCLFVBQUNDLE9BQUQsRUFBVVQsSUFBVixFQUFnQkosUUFBaEIsRUFBNkI7QUFDNUIsS0FBSUksU0FBUyxXQUFiLEVBQTBCO0FBQ3pCLFNBQU9LLFNBQVA7QUFDQTtBQUNELFFBQU9ULFlBQVlRLGdCQUFuQjtBQUNBLENBVGlCLENBQW5COztBQVlBLFNBQVNGLFFBQVQsQ0FBa0JRLEtBQWxCLEVBQXlCO0FBQ3hCLFFBQU87QUFDTmIsUUFBTVMsV0FBV0ksS0FBWCxDQURBO0FBRU5kLFlBQVVjLE1BQU10QixJQUFOLENBQVdRLFFBRmY7QUFHTkUsV0FBU1ksTUFBTXRCLElBQU4sQ0FBV1UsT0FIZDtBQUlOQyxXQUFTVyxNQUFNWCxPQUpUO0FBS05KLE9BQUtQLEtBQUt1QixTQUFMLENBQWVELEtBQWYsQ0FMQztBQU1OVixRQUFNWCxNQUFNa0IsVUFBTixDQUFpQkcsS0FBakI7QUFOQSxFQUFQO0FBUUE7O0FBRUQsU0FBU1AsV0FBVCxDQUFxQlMsUUFBckIsRUFBK0I7QUFDOUIsUUFBTywrQkFBbUI7QUFDekJuQixZQUFVSCxRQUFRdUI7QUFETyxFQUFuQixFQUVKRCxRQUZJLENBQVA7QUFHQSIsImZpbGUiOiJwYXR0ZXJuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtiaW5kQWN0aW9uQ3JlYXRvcnN9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7Y3JlYXRlU2VsZWN0b3J9IGZyb20gJ3Jlc2VsZWN0JztcbmltcG9ydCAqIGFzIGRlbW8gZnJvbSAnLi4vc2VsZWN0b3JzL2RlbW8nO1xuaW1wb3J0IHNlbGVjdEl0ZW0sICogYXMgaXRlbXMgZnJvbSAnLi4vc2VsZWN0b3JzL2l0ZW0nO1xuaW1wb3J0IFBhdHRlcm4gZnJvbSAnLi4vY29tcG9uZW50cy9wYXR0ZXJuJztcblxuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zJztcblxuY2xhc3MgUGF0dGVybkNvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UoKTtcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dCkge1xuXHRcdGlmICh0aGlzLnByb3BzLnNyYyAhPT0gbmV4dC5zcmMgJiYgbmV4dC5zcmMpIHtcblx0XHRcdHRoaXMucHJvcHMub25DaGFuZ2UoKTtcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge3Byb3BzfSA9IHRoaXM7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxQYXR0ZXJuXG5cdFx0XHRcdGNvbnRlbnRzPXtwcm9wcy5jb250ZW50c31cblx0XHRcdFx0ZG9jcz17cHJvcHMuZG9jc31cblx0XHRcdFx0bG9hZGluZz17cHJvcHMubG9hZGluZ31cblx0XHRcdFx0b3BhY2l0eT17cHJvcHMub3BhY2l0eX1cblx0XHRcdFx0dHlwZT17cHJvcHMudHlwZX1cblx0XHRcdFx0Lz5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGUsIG1hcERpc3BhdGNoKShQYXR0ZXJuQ29udGFpbmVyKTtcblxuY29uc3QgREVGQVVMVF9DT05URU5UUyA9IGBcbiMgOmNvbnN0cnVjdGlvbjogQWRkIGRvY3VtZW50YXRpb25cblxuPiBVbmRvY3VtZW50ZWQgc29mdHdhcmUgY291bGQgbm90IGV4aXN0IGp1c3QgYXMgd2VsbC5cbj5cbj4g4oCTIFRoZSBWb2ljZSBvZiBDb21tb24gU2Vuc2VcblxuQ3VycmVudGx5IHRoZXJlIGlzIG5vIHJlYWRtZSBkYXRhIGZvciB0aGlzIHBhdHRlcm4gZm9sZGVyLlxuV2UgbGVmdCB0aGlzIGZyaWVuZGx5IHJlbWluZGVyIGZvciB5b3UgdG8gY2hhbmdlIHRoYXQgc29vbi5cblxuLS0tXG5cbkhlbHAgdXMgdG8gbWFrZSB0aGlzIG1lc3NhZ2UgbW9yZSBoZWxwZnVsIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5uZXJzY2hyYWRlci9wYXR0ZXJucGxhdGUpLlxuYDtcblxuY29uc3QgTk9UX0ZPVU5EID0gYFxuIyBQYXR0ZXJuIG5vdCBmb3VuZFxuXG4+IFByZXR0eSBzdXJlIHRoaXMgaXMgbm90IHRoZSBjb21wb25lbnQgeW91IGFyZSBsb29raW5nIGZvci5cblxuV2UgbG9va2VkIGV2ZXJ5d2hlcmUgYW5kIGNvdWxkIG5vdCBmaW5kIGEgc2luZ2xlIHRoaW5nLlxuXG5Zb3UgbWlnaHQgd2FudCB0byBuYXZpZ2F0ZSBiYWNrIHRvIFtIb21lXSgvKSBvciB1c2UgdGhlIHNlYXJjaC5cblxuLS0tXG5cbkhlbHAgdXMgdG8gbWFrZSB0aGlzIG1lc3NhZ2UgbW9yZSBoZWxwZnVsIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5uZXJzY2hyYWRlci9wYXR0ZXJucGxhdGUpXG5gO1xuXG5jb25zdCBzZWxlY3REb2NzID0gY3JlYXRlU2VsZWN0b3IoXG5cdHNlbGVjdEl0ZW0sXG5cdGl0ZW1zLnNlbGVjdFR5cGUsXG5cdGl0ZW1zLnNlbGVjdENvbnRlbnRzLFxuXHQocGF0dGVybiwgdHlwZSwgY29udGVudHMpID0+IHtcblx0XHRpZiAodHlwZSA9PT0gJ25vdC1mb3VuZCcpIHtcblx0XHRcdHJldHVybiBOT1RfRk9VTkQ7XG5cdFx0fVxuXHRcdHJldHVybiBjb250ZW50cyB8fCBERUZBVUxUX0NPTlRFTlRTO1xuXHR9XG4pO1xuXG5mdW5jdGlvbiBtYXBTdGF0ZShzdGF0ZSkge1xuXHRyZXR1cm4ge1xuXHRcdGRvY3M6IHNlbGVjdERvY3Moc3RhdGUpLFxuXHRcdGNvbnRlbnRzOiBzdGF0ZS5kZW1vLmNvbnRlbnRzLFxuXHRcdGxvYWRpbmc6IHN0YXRlLmRlbW8ubG9hZGluZyxcblx0XHRvcGFjaXR5OiBzdGF0ZS5vcGFjaXR5LFxuXHRcdHNyYzogZGVtby5zZWxlY3RTcmMoc3RhdGUpLFxuXHRcdHR5cGU6IGl0ZW1zLnNlbGVjdFR5cGUoc3RhdGUpXG5cdH07XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoKGRpc3BhdGNoKSB7XG5cdHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoe1xuXHRcdG9uQ2hhbmdlOiBhY3Rpb25zLmxvYWRQYXR0ZXJuRGVtb1xuXHR9LCBkaXNwYXRjaCk7XG59XG4iXX0=
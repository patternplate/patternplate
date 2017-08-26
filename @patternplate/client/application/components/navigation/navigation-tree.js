'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _flag = require('../flag');

var _flag2 = _interopRequireDefault(_flag);

var _navigationItem = require('./navigation-item');

var _navigationItem2 = _interopRequireDefault(_navigationItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = NavigationTree;


function NavigationTree(props) {
	return _react2.default.createElement(
		'div',
		{ className: props.className },
		props.children,
		(props.data || []).filter(function (item) {
			return (0, _typeof3.default)(item.manifest) === 'object';
		}).map(function (item) {
			var hidden = (item.manifest.options || {}).hidden || false;
			var icon = item.manifest.options.icon || item.type;
			var iconActive = item.manifest.options.iconActive || icon;

			return _react2.default.createElement(
				_navigationItem2.default,
				{
					active: item.active,
					hidden: hidden,
					href: item.href,
					id: item.id,
					key: item.id,
					meta: item.warnings.map(function (warning) {
						switch (warning.type) {
							case 'flag':
							default:
								return _react2.default.createElement(
									_flag2.default,
									{ key: warning.value, title: warning.message },
									warning.value
								);
						}
					}),
					name: item.manifest.displayName,
					onScrollRequest: props.onScrollRequest,
					prefix: props.prefix,
					symbol: icon,
					symbolActive: iconActive,
					type: item.type
				},
				item.type === 'folder' && _react2.default.createElement(NavigationTree, {
					active: props.active,
					data: item.children,
					id: item.id,
					onScrollRequest: props.onScrollRequest,
					prefix: item.prefix
				})
			);
		})
	);
}

NavigationTree.propTypes = {
	active: _react.PropTypes.string.isRequired,
	className: _react.PropTypes.string,
	children: _react.PropTypes.any,
	data: _react.PropTypes.array.isRequired,
	id: _react.PropTypes.string.isRequired,
	onScrollRequest: _react.PropTypes.func,
	prefix: _react.PropTypes.string.isRequired
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi10cmVlLmpzIl0sIm5hbWVzIjpbIk5hdmlnYXRpb25UcmVlIiwicHJvcHMiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsImRhdGEiLCJmaWx0ZXIiLCJpdGVtIiwibWFuaWZlc3QiLCJtYXAiLCJoaWRkZW4iLCJvcHRpb25zIiwiaWNvbiIsInR5cGUiLCJpY29uQWN0aXZlIiwiYWN0aXZlIiwiaHJlZiIsImlkIiwid2FybmluZ3MiLCJ3YXJuaW5nIiwidmFsdWUiLCJtZXNzYWdlIiwiZGlzcGxheU5hbWUiLCJvblNjcm9sbFJlcXVlc3QiLCJwcmVmaXgiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYW55IiwiYXJyYXkiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7a0JBRWVBLGM7OztBQUVmLFNBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQStCO0FBQzlCLFFBQ0M7QUFBQTtBQUFBLElBQUssV0FBV0EsTUFBTUMsU0FBdEI7QUFDRUQsUUFBTUUsUUFEUjtBQUVFLEdBQUNGLE1BQU1HLElBQU4sSUFBYyxFQUFmLEVBQW1CQyxNQUFuQixDQUEwQjtBQUFBLFVBQVEsc0JBQU9DLEtBQUtDLFFBQVosTUFBeUIsUUFBakM7QUFBQSxHQUExQixFQUFxRUMsR0FBckUsQ0FBeUUsZ0JBQVE7QUFDakYsT0FBTUMsU0FBUyxDQUFDSCxLQUFLQyxRQUFMLENBQWNHLE9BQWQsSUFBeUIsRUFBMUIsRUFBOEJELE1BQTlCLElBQXdDLEtBQXZEO0FBQ0EsT0FBTUUsT0FBT0wsS0FBS0MsUUFBTCxDQUFjRyxPQUFkLENBQXNCQyxJQUF0QixJQUE4QkwsS0FBS00sSUFBaEQ7QUFDQSxPQUFNQyxhQUFhUCxLQUFLQyxRQUFMLENBQWNHLE9BQWQsQ0FBc0JHLFVBQXRCLElBQW9DRixJQUF2RDs7QUFFQSxVQUNDO0FBQUE7QUFBQTtBQUNDLGFBQVFMLEtBQUtRLE1BRGQ7QUFFQyxhQUFRTCxNQUZUO0FBR0MsV0FBTUgsS0FBS1MsSUFIWjtBQUlDLFNBQUlULEtBQUtVLEVBSlY7QUFLQyxVQUFLVixLQUFLVSxFQUxYO0FBTUMsV0FBTVYsS0FBS1csUUFBTCxDQUFjVCxHQUFkLENBQWtCLG1CQUFXO0FBQ2xDLGNBQVFVLFFBQVFOLElBQWhCO0FBQ0MsWUFBSyxNQUFMO0FBQ0E7QUFDQyxlQUFPO0FBQUE7QUFBQSxXQUFNLEtBQUtNLFFBQVFDLEtBQW5CLEVBQTBCLE9BQU9ELFFBQVFFLE9BQXpDO0FBQW1ERixpQkFBUUM7QUFBM0QsU0FBUDtBQUhGO0FBS0EsTUFOSyxDQU5QO0FBYUMsV0FBTWIsS0FBS0MsUUFBTCxDQUFjYyxXQWJyQjtBQWNDLHNCQUFpQnBCLE1BQU1xQixlQWR4QjtBQWVDLGFBQVFyQixNQUFNc0IsTUFmZjtBQWdCQyxhQUFRWixJQWhCVDtBQWlCQyxtQkFBY0UsVUFqQmY7QUFrQkMsV0FBTVAsS0FBS007QUFsQlo7QUFxQkVOLFNBQUtNLElBQUwsS0FBYyxRQUFkLElBQ0MsOEJBQUMsY0FBRDtBQUNDLGFBQVFYLE1BQU1hLE1BRGY7QUFFQyxXQUFNUixLQUFLSCxRQUZaO0FBR0MsU0FBSUcsS0FBS1UsRUFIVjtBQUlDLHNCQUFpQmYsTUFBTXFCLGVBSnhCO0FBS0MsYUFBUWhCLEtBQUtpQjtBQUxkO0FBdEJILElBREQ7QUFpQ0EsR0F0Q0E7QUFGRixFQUREO0FBNENBOztBQUVEdkIsZUFBZXdCLFNBQWYsR0FBMkI7QUFDMUJWLFNBQVEsaUJBQU1XLE1BQU4sQ0FBYUMsVUFESztBQUUxQnhCLFlBQVcsaUJBQU11QixNQUZTO0FBRzFCdEIsV0FBVSxpQkFBTXdCLEdBSFU7QUFJMUJ2QixPQUFNLGlCQUFNd0IsS0FBTixDQUFZRixVQUpRO0FBSzFCVixLQUFJLGlCQUFNUyxNQUFOLENBQWFDLFVBTFM7QUFNMUJKLGtCQUFpQixpQkFBTU8sSUFORztBQU8xQk4sU0FBUSxpQkFBTUUsTUFBTixDQUFhQztBQVBLLENBQTNCIiwiZmlsZSI6Im5hdmlnYXRpb24tdHJlZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1Byb3BUeXBlcyBhcyB0eXBlc30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZsYWcgZnJvbSAnLi4vZmxhZyc7XG5pbXBvcnQgTmF2aWdhdGlvbkl0ZW0gZnJvbSAnLi9uYXZpZ2F0aW9uLWl0ZW0nO1xuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uVHJlZTtcblxuZnVuY3Rpb24gTmF2aWdhdGlvblRyZWUocHJvcHMpIHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17cHJvcHMuY2xhc3NOYW1lfT5cblx0XHRcdHtwcm9wcy5jaGlsZHJlbn1cblx0XHRcdHsocHJvcHMuZGF0YSB8fCBbXSkuZmlsdGVyKGl0ZW0gPT4gdHlwZW9mIGl0ZW0ubWFuaWZlc3QgPT09ICdvYmplY3QnKS5tYXAoaXRlbSA9PiB7XG5cdFx0XHRcdGNvbnN0IGhpZGRlbiA9IChpdGVtLm1hbmlmZXN0Lm9wdGlvbnMgfHwge30pLmhpZGRlbiB8fCBmYWxzZTtcblx0XHRcdFx0Y29uc3QgaWNvbiA9IGl0ZW0ubWFuaWZlc3Qub3B0aW9ucy5pY29uIHx8IGl0ZW0udHlwZTtcblx0XHRcdFx0Y29uc3QgaWNvbkFjdGl2ZSA9IGl0ZW0ubWFuaWZlc3Qub3B0aW9ucy5pY29uQWN0aXZlIHx8IGljb247XG5cblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8TmF2aWdhdGlvbkl0ZW1cblx0XHRcdFx0XHRcdGFjdGl2ZT17aXRlbS5hY3RpdmV9XG5cdFx0XHRcdFx0XHRoaWRkZW49e2hpZGRlbn1cblx0XHRcdFx0XHRcdGhyZWY9e2l0ZW0uaHJlZn1cblx0XHRcdFx0XHRcdGlkPXtpdGVtLmlkfVxuXHRcdFx0XHRcdFx0a2V5PXtpdGVtLmlkfVxuXHRcdFx0XHRcdFx0bWV0YT17aXRlbS53YXJuaW5ncy5tYXAod2FybmluZyA9PiB7XG5cdFx0XHRcdFx0XHRcdHN3aXRjaCAod2FybmluZy50eXBlKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAnZmxhZyc6XG5cdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiA8RmxhZyBrZXk9e3dhcm5pbmcudmFsdWV9IHRpdGxlPXt3YXJuaW5nLm1lc3NhZ2V9Pnt3YXJuaW5nLnZhbHVlfTwvRmxhZz47XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0bmFtZT17aXRlbS5tYW5pZmVzdC5kaXNwbGF5TmFtZX1cblx0XHRcdFx0XHRcdG9uU2Nyb2xsUmVxdWVzdD17cHJvcHMub25TY3JvbGxSZXF1ZXN0fVxuXHRcdFx0XHRcdFx0cHJlZml4PXtwcm9wcy5wcmVmaXh9XG5cdFx0XHRcdFx0XHRzeW1ib2w9e2ljb259XG5cdFx0XHRcdFx0XHRzeW1ib2xBY3RpdmU9e2ljb25BY3RpdmV9XG5cdFx0XHRcdFx0XHR0eXBlPXtpdGVtLnR5cGV9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGl0ZW0udHlwZSA9PT0gJ2ZvbGRlcicgJiZcblx0XHRcdFx0XHRcdFx0XHQ8TmF2aWdhdGlvblRyZWVcblx0XHRcdFx0XHRcdFx0XHRcdGFjdGl2ZT17cHJvcHMuYWN0aXZlfVxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YT17aXRlbS5jaGlsZHJlbn1cblx0XHRcdFx0XHRcdFx0XHRcdGlkPXtpdGVtLmlkfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25TY3JvbGxSZXF1ZXN0PXtwcm9wcy5vblNjcm9sbFJlcXVlc3R9XG5cdFx0XHRcdFx0XHRcdFx0XHRwcmVmaXg9e2l0ZW0ucHJlZml4fVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L05hdmlnYXRpb25JdGVtPlxuXHRcdFx0XHQpO1xuXHRcdFx0fSl9XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbk5hdmlnYXRpb25UcmVlLnByb3BUeXBlcyA9IHtcblx0YWN0aXZlOiB0eXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0Y2xhc3NOYW1lOiB0eXBlcy5zdHJpbmcsXG5cdGNoaWxkcmVuOiB0eXBlcy5hbnksXG5cdGRhdGE6IHR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG5cdGlkOiB0eXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0b25TY3JvbGxSZXF1ZXN0OiB0eXBlcy5mdW5jLFxuXHRwcmVmaXg6IHR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG59O1xuIl19
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

var _shortcut = require('./utils/shortcut');

var _shortcut2 = _interopRequireDefault(_shortcut);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = createShortcuts;


function createShortcuts() {
	var bind = function bind(store) {
		(0, _keys2.default)(bind).forEach(function (name) {
			bind[name].bind(store);
		});
	};

	bind.toggleConsole = new _shortcut2.default({
		character: 'c',
		description: function description(props) {
			return (props.enabled ? 'Hide' : 'Show') + ' console';
		},
		action: actions.toggleConsole
	});

	bind.toggleDoc = new _shortcut2.default({
		character: 'd',
		description: function description() {
			return 'Open documentation for this pattern';
		},
		action: actions.toggleDoc
	});

	bind.openDocumentation = new _shortcut2.default({
		character: '7',
		description: function description() {
			return 'Navigate back to / route';
		},
		action: actions.openDocumentation
	});

	bind.openFullscreen = new _shortcut2.default({
		character: 'f',
		description: function description() {
			return 'Open fullscreen view';
		},
		action: actions.openFullscreen
	});

	bind.toggleHide = new _shortcut2.default({
		character: 'h',
		description: function description(props) {
			return (props.enabled ? 'Show' : 'Hide') + ' hidden items';
		},
		action: actions.toggleHide
	});

	bind.info = new _shortcut2.default({
		character: 'i',
		description: function description(props) {
			return (props.enabled ? 'Hide' : 'Show') + ' pattern infos';
		},
		action: actions.toggleInfo
	});

	bind.toggleOpacity = new _shortcut2.default({
		character: 'o',
		description: function description(props) {
			return (props.enabled ? 'Hide' : 'Show') + ' opacity indicators';
		},
		action: actions.toggleOpacity
	});

	bind.toggleShortcuts = new _shortcut2.default({
		character: 'k',
		description: function description(props) {
			return (props.enabled ? 'Hide' : 'Show') + ' keyboard shortcuts';
		},
		action: actions.toggleKeyboardShortcuts
	});

	bind.toggleRulers = new _shortcut2.default({
		character: 'l',
		description: function description(props) {
			return (props.enabled ? 'Hide' : 'Show') + ' rulers';
		},
		action: actions.toggleRulers
	});

	bind.toggleCode = new _shortcut2.default({
		character: 'm',
		description: function description(props) {
			return (props.enabled ? 'Hide' : 'Show') + ' pattern code';
		},
		action: actions.toggleCode
	});

	bind.toggleNavigation = new _shortcut2.default({
		character: 'n',
		description: function description(props) {
			return (props.enabled ? 'Hide' : 'Show') + ' navigation';
		},
		action: actions.toggleNavigation
	});

	var reload = function reload() {
		return actions.reload({ reloadTime: Date.now() });
	};
	reload.type = actions.reload.type;
	reload.key = actions.reload.key;
	reload.property = actions.reload.property;

	bind.reload = new _shortcut2.default({
		character: 'r',
		description: function description() {
			return 'Force sync';
		},
		action: reload
	});

	bind.toggleSearch = new _shortcut2.default({
		character: 'space',
		description: function description(props) {
			return (props.enabled ? 'Disable' : 'Enable') + ' search';
		},
		action: actions.toggleSearch
	});

	bind.toggleTheme = new _shortcut2.default({
		character: 't',
		description: 'Toggle active theme',
		action: actions.toggleTheme
	});

	bind.close = new _shortcut2.default({
		character: 'esc',
		modifiers: [],
		action: actions.closeAllTheThings
	});

	bind.up = new _shortcut2.default({
		character: 'arrow-up',
		modifiers: [],
		action: function action() {
			return actions.arrow('up');
		}
	});

	bind.right = new _shortcut2.default({
		character: 'arrow-right',
		modifiers: [],
		action: function action() {
			return actions.arrow('right');
		}
	});

	bind.down = new _shortcut2.default({
		character: 'arrow-down',
		modifiers: [],
		action: function action() {
			return actions.arrow('down');
		}
	});

	bind.left = new _shortcut2.default({
		character: 'arrow-left',
		modifiers: [],
		action: function action() {
			return actions.arrow('left');
		}
	});

	return bind;
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHBsaWNhdGlvbi9zaG9ydGN1dHMuanMiXSwibmFtZXMiOlsiYWN0aW9ucyIsImNyZWF0ZVNob3J0Y3V0cyIsImJpbmQiLCJmb3JFYWNoIiwibmFtZSIsInN0b3JlIiwidG9nZ2xlQ29uc29sZSIsImNoYXJhY3RlciIsImRlc2NyaXB0aW9uIiwicHJvcHMiLCJlbmFibGVkIiwiYWN0aW9uIiwidG9nZ2xlRG9jIiwib3BlbkRvY3VtZW50YXRpb24iLCJvcGVuRnVsbHNjcmVlbiIsInRvZ2dsZUhpZGUiLCJpbmZvIiwidG9nZ2xlSW5mbyIsInRvZ2dsZU9wYWNpdHkiLCJ0b2dnbGVTaG9ydGN1dHMiLCJ0b2dnbGVLZXlib2FyZFNob3J0Y3V0cyIsInRvZ2dsZVJ1bGVycyIsInRvZ2dsZUNvZGUiLCJ0b2dnbGVOYXZpZ2F0aW9uIiwicmVsb2FkIiwicmVsb2FkVGltZSIsIkRhdGUiLCJub3ciLCJ0eXBlIiwia2V5IiwicHJvcGVydHkiLCJ0b2dnbGVTZWFyY2giLCJ0b2dnbGVUaGVtZSIsImNsb3NlIiwibW9kaWZpZXJzIiwiY2xvc2VBbGxUaGVUaGluZ3MiLCJ1cCIsImFycm93IiwicmlnaHQiLCJkb3duIiwibGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztJQUFZQSxPOztBQUNaOzs7Ozs7OztrQkFFZUMsZTs7O0FBRWYsU0FBU0EsZUFBVCxHQUEyQjtBQUMxQixLQUFNQyxPQUFPLFNBQVBBLElBQU8sUUFBUztBQUNyQixzQkFBWUEsSUFBWixFQUFrQkMsT0FBbEIsQ0FBMEIsZ0JBQVE7QUFDakNELFFBQUtFLElBQUwsRUFBV0YsSUFBWCxDQUFnQkcsS0FBaEI7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQUgsTUFBS0ksYUFBTCxHQUFxQix1QkFBYTtBQUNqQ0MsYUFBVyxHQURzQjtBQUVqQ0MsZUFBYTtBQUFBLFdBQVlDLE1BQU1DLE9BQU4sR0FBZ0IsTUFBaEIsR0FBeUIsTUFBckM7QUFBQSxHQUZvQjtBQUdqQ0MsVUFBUVgsUUFBUU07QUFIaUIsRUFBYixDQUFyQjs7QUFNQUosTUFBS1UsU0FBTCxHQUFpQix1QkFBYTtBQUM3QkwsYUFBVyxHQURrQjtBQUU3QkMsZUFBYTtBQUFBO0FBQUEsR0FGZ0I7QUFHN0JHLFVBQVFYLFFBQVFZO0FBSGEsRUFBYixDQUFqQjs7QUFNQVYsTUFBS1csaUJBQUwsR0FBeUIsdUJBQWE7QUFDckNOLGFBQVcsR0FEMEI7QUFFckNDLGVBQWE7QUFBQTtBQUFBLEdBRndCO0FBR3JDRyxVQUFRWCxRQUFRYTtBQUhxQixFQUFiLENBQXpCOztBQU1BWCxNQUFLWSxjQUFMLEdBQXNCLHVCQUFhO0FBQ2xDUCxhQUFXLEdBRHVCO0FBRWxDQyxlQUFhO0FBQUE7QUFBQSxHQUZxQjtBQUdsQ0csVUFBUVgsUUFBUWM7QUFIa0IsRUFBYixDQUF0Qjs7QUFNQVosTUFBS2EsVUFBTCxHQUFrQix1QkFBYTtBQUM5QlIsYUFBVyxHQURtQjtBQUU5QkMsZUFBYTtBQUFBLFdBQVlDLE1BQU1DLE9BQU4sR0FBZ0IsTUFBaEIsR0FBeUIsTUFBckM7QUFBQSxHQUZpQjtBQUc5QkMsVUFBUVgsUUFBUWU7QUFIYyxFQUFiLENBQWxCOztBQU1BYixNQUFLYyxJQUFMLEdBQVksdUJBQWE7QUFDeEJULGFBQVcsR0FEYTtBQUV4QkMsZUFBYTtBQUFBLFdBQVlDLE1BQU1DLE9BQU4sR0FBZ0IsTUFBaEIsR0FBeUIsTUFBckM7QUFBQSxHQUZXO0FBR3hCQyxVQUFRWCxRQUFRaUI7QUFIUSxFQUFiLENBQVo7O0FBTUFmLE1BQUtnQixhQUFMLEdBQXFCLHVCQUFhO0FBQ2pDWCxhQUFXLEdBRHNCO0FBRWpDQyxlQUFhO0FBQUEsV0FBWUMsTUFBTUMsT0FBTixHQUFnQixNQUFoQixHQUF5QixNQUFyQztBQUFBLEdBRm9CO0FBR2pDQyxVQUFRWCxRQUFRa0I7QUFIaUIsRUFBYixDQUFyQjs7QUFNQWhCLE1BQUtpQixlQUFMLEdBQXVCLHVCQUFhO0FBQ25DWixhQUFXLEdBRHdCO0FBRW5DQyxlQUFhO0FBQUEsV0FBWUMsTUFBTUMsT0FBTixHQUFnQixNQUFoQixHQUF5QixNQUFyQztBQUFBLEdBRnNCO0FBR25DQyxVQUFRWCxRQUFRb0I7QUFIbUIsRUFBYixDQUF2Qjs7QUFNQWxCLE1BQUttQixZQUFMLEdBQW9CLHVCQUFhO0FBQ2hDZCxhQUFXLEdBRHFCO0FBRWhDQyxlQUFhO0FBQUEsV0FBWUMsTUFBTUMsT0FBTixHQUFnQixNQUFoQixHQUF5QixNQUFyQztBQUFBLEdBRm1CO0FBR2hDQyxVQUFRWCxRQUFRcUI7QUFIZ0IsRUFBYixDQUFwQjs7QUFNQW5CLE1BQUtvQixVQUFMLEdBQWtCLHVCQUFhO0FBQzlCZixhQUFXLEdBRG1CO0FBRTlCQyxlQUFhO0FBQUEsV0FBWUMsTUFBTUMsT0FBTixHQUFnQixNQUFoQixHQUF5QixNQUFyQztBQUFBLEdBRmlCO0FBRzlCQyxVQUFRWCxRQUFRc0I7QUFIYyxFQUFiLENBQWxCOztBQU1BcEIsTUFBS3FCLGdCQUFMLEdBQXdCLHVCQUFhO0FBQ3BDaEIsYUFBVyxHQUR5QjtBQUVwQ0MsZUFBYTtBQUFBLFdBQVlDLE1BQU1DLE9BQU4sR0FBZ0IsTUFBaEIsR0FBeUIsTUFBckM7QUFBQSxHQUZ1QjtBQUdwQ0MsVUFBUVgsUUFBUXVCO0FBSG9CLEVBQWIsQ0FBeEI7O0FBTUEsS0FBTUMsU0FBUyxTQUFUQSxNQUFTO0FBQUEsU0FBTXhCLFFBQVF3QixNQUFSLENBQWUsRUFBQ0MsWUFBWUMsS0FBS0MsR0FBTCxFQUFiLEVBQWYsQ0FBTjtBQUFBLEVBQWY7QUFDQUgsUUFBT0ksSUFBUCxHQUFjNUIsUUFBUXdCLE1BQVIsQ0FBZUksSUFBN0I7QUFDQUosUUFBT0ssR0FBUCxHQUFhN0IsUUFBUXdCLE1BQVIsQ0FBZUssR0FBNUI7QUFDQUwsUUFBT00sUUFBUCxHQUFrQjlCLFFBQVF3QixNQUFSLENBQWVNLFFBQWpDOztBQUVBNUIsTUFBS3NCLE1BQUwsR0FBYyx1QkFBYTtBQUMxQmpCLGFBQVcsR0FEZTtBQUUxQkMsZUFBYTtBQUFBO0FBQUEsR0FGYTtBQUcxQkcsVUFBUWE7QUFIa0IsRUFBYixDQUFkOztBQU1BdEIsTUFBSzZCLFlBQUwsR0FBb0IsdUJBQWE7QUFDaEN4QixhQUFXLE9BRHFCO0FBRWhDQyxlQUFhO0FBQUEsV0FBWUMsTUFBTUMsT0FBTixHQUFnQixTQUFoQixHQUE0QixRQUF4QztBQUFBLEdBRm1CO0FBR2hDQyxVQUFRWCxRQUFRK0I7QUFIZ0IsRUFBYixDQUFwQjs7QUFNQTdCLE1BQUs4QixXQUFMLEdBQW1CLHVCQUFhO0FBQy9CekIsYUFBVyxHQURvQjtBQUUvQkMsZUFBYSxxQkFGa0I7QUFHL0JHLFVBQVFYLFFBQVFnQztBQUhlLEVBQWIsQ0FBbkI7O0FBTUE5QixNQUFLK0IsS0FBTCxHQUFhLHVCQUFhO0FBQ3pCMUIsYUFBVyxLQURjO0FBRXpCMkIsYUFBVyxFQUZjO0FBR3pCdkIsVUFBUVgsUUFBUW1DO0FBSFMsRUFBYixDQUFiOztBQU1BakMsTUFBS2tDLEVBQUwsR0FBVSx1QkFBYTtBQUN0QjdCLGFBQVcsVUFEVztBQUV0QjJCLGFBQVcsRUFGVztBQUd0QnZCLFVBQVE7QUFBQSxVQUFNWCxRQUFRcUMsS0FBUixDQUFjLElBQWQsQ0FBTjtBQUFBO0FBSGMsRUFBYixDQUFWOztBQU1BbkMsTUFBS29DLEtBQUwsR0FBYSx1QkFBYTtBQUN6Qi9CLGFBQVcsYUFEYztBQUV6QjJCLGFBQVcsRUFGYztBQUd6QnZCLFVBQVE7QUFBQSxVQUFNWCxRQUFRcUMsS0FBUixDQUFjLE9BQWQsQ0FBTjtBQUFBO0FBSGlCLEVBQWIsQ0FBYjs7QUFNQW5DLE1BQUtxQyxJQUFMLEdBQVksdUJBQWE7QUFDeEJoQyxhQUFXLFlBRGE7QUFFeEIyQixhQUFXLEVBRmE7QUFHeEJ2QixVQUFRO0FBQUEsVUFBTVgsUUFBUXFDLEtBQVIsQ0FBYyxNQUFkLENBQU47QUFBQTtBQUhnQixFQUFiLENBQVo7O0FBTUFuQyxNQUFLc0MsSUFBTCxHQUFZLHVCQUFhO0FBQ3hCakMsYUFBVyxZQURhO0FBRXhCMkIsYUFBVyxFQUZhO0FBR3hCdkIsVUFBUTtBQUFBLFVBQU1YLFFBQVFxQyxLQUFSLENBQWMsTUFBZCxDQUFOO0FBQUE7QUFIZ0IsRUFBYixDQUFaOztBQU1BLFFBQU9uQyxJQUFQO0FBQ0EiLCJmaWxlIjoic2hvcnRjdXRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IFNob3J0Y3V0IGZyb20gJy4vdXRpbHMvc2hvcnRjdXQnO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTaG9ydGN1dHM7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNob3J0Y3V0cygpIHtcblx0Y29uc3QgYmluZCA9IHN0b3JlID0+IHtcblx0XHRPYmplY3Qua2V5cyhiaW5kKS5mb3JFYWNoKG5hbWUgPT4ge1xuXHRcdFx0YmluZFtuYW1lXS5iaW5kKHN0b3JlKTtcblx0XHR9KTtcblx0fTtcblxuXHRiaW5kLnRvZ2dsZUNvbnNvbGUgPSBuZXcgU2hvcnRjdXQoe1xuXHRcdGNoYXJhY3RlcjogJ2MnLFxuXHRcdGRlc2NyaXB0aW9uOiBwcm9wcyA9PiBgJHtwcm9wcy5lbmFibGVkID8gJ0hpZGUnIDogJ1Nob3cnfSBjb25zb2xlYCxcblx0XHRhY3Rpb246IGFjdGlvbnMudG9nZ2xlQ29uc29sZVxuXHR9KTtcblxuXHRiaW5kLnRvZ2dsZURvYyA9IG5ldyBTaG9ydGN1dCh7XG5cdFx0Y2hhcmFjdGVyOiAnZCcsXG5cdFx0ZGVzY3JpcHRpb246ICgpID0+IGBPcGVuIGRvY3VtZW50YXRpb24gZm9yIHRoaXMgcGF0dGVybmAsXG5cdFx0YWN0aW9uOiBhY3Rpb25zLnRvZ2dsZURvY1xuXHR9KTtcblxuXHRiaW5kLm9wZW5Eb2N1bWVudGF0aW9uID0gbmV3IFNob3J0Y3V0KHtcblx0XHRjaGFyYWN0ZXI6ICc3Jyxcblx0XHRkZXNjcmlwdGlvbjogKCkgPT4gYE5hdmlnYXRlIGJhY2sgdG8gLyByb3V0ZWAsXG5cdFx0YWN0aW9uOiBhY3Rpb25zLm9wZW5Eb2N1bWVudGF0aW9uXG5cdH0pO1xuXG5cdGJpbmQub3BlbkZ1bGxzY3JlZW4gPSBuZXcgU2hvcnRjdXQoe1xuXHRcdGNoYXJhY3RlcjogJ2YnLFxuXHRcdGRlc2NyaXB0aW9uOiAoKSA9PiBgT3BlbiBmdWxsc2NyZWVuIHZpZXdgLFxuXHRcdGFjdGlvbjogYWN0aW9ucy5vcGVuRnVsbHNjcmVlblxuXHR9KTtcblxuXHRiaW5kLnRvZ2dsZUhpZGUgPSBuZXcgU2hvcnRjdXQoe1xuXHRcdGNoYXJhY3RlcjogJ2gnLFxuXHRcdGRlc2NyaXB0aW9uOiBwcm9wcyA9PiBgJHtwcm9wcy5lbmFibGVkID8gJ1Nob3cnIDogJ0hpZGUnfSBoaWRkZW4gaXRlbXNgLFxuXHRcdGFjdGlvbjogYWN0aW9ucy50b2dnbGVIaWRlXG5cdH0pO1xuXG5cdGJpbmQuaW5mbyA9IG5ldyBTaG9ydGN1dCh7XG5cdFx0Y2hhcmFjdGVyOiAnaScsXG5cdFx0ZGVzY3JpcHRpb246IHByb3BzID0+IGAke3Byb3BzLmVuYWJsZWQgPyAnSGlkZScgOiAnU2hvdyd9IHBhdHRlcm4gaW5mb3NgLFxuXHRcdGFjdGlvbjogYWN0aW9ucy50b2dnbGVJbmZvXG5cdH0pO1xuXG5cdGJpbmQudG9nZ2xlT3BhY2l0eSA9IG5ldyBTaG9ydGN1dCh7XG5cdFx0Y2hhcmFjdGVyOiAnbycsXG5cdFx0ZGVzY3JpcHRpb246IHByb3BzID0+IGAke3Byb3BzLmVuYWJsZWQgPyAnSGlkZScgOiAnU2hvdyd9IG9wYWNpdHkgaW5kaWNhdG9yc2AsXG5cdFx0YWN0aW9uOiBhY3Rpb25zLnRvZ2dsZU9wYWNpdHlcblx0fSk7XG5cblx0YmluZC50b2dnbGVTaG9ydGN1dHMgPSBuZXcgU2hvcnRjdXQoe1xuXHRcdGNoYXJhY3RlcjogJ2snLFxuXHRcdGRlc2NyaXB0aW9uOiBwcm9wcyA9PiBgJHtwcm9wcy5lbmFibGVkID8gJ0hpZGUnIDogJ1Nob3cnfSBrZXlib2FyZCBzaG9ydGN1dHNgLFxuXHRcdGFjdGlvbjogYWN0aW9ucy50b2dnbGVLZXlib2FyZFNob3J0Y3V0c1xuXHR9KTtcblxuXHRiaW5kLnRvZ2dsZVJ1bGVycyA9IG5ldyBTaG9ydGN1dCh7XG5cdFx0Y2hhcmFjdGVyOiAnbCcsXG5cdFx0ZGVzY3JpcHRpb246IHByb3BzID0+IGAke3Byb3BzLmVuYWJsZWQgPyAnSGlkZScgOiAnU2hvdyd9IHJ1bGVyc2AsXG5cdFx0YWN0aW9uOiBhY3Rpb25zLnRvZ2dsZVJ1bGVyc1xuXHR9KTtcblxuXHRiaW5kLnRvZ2dsZUNvZGUgPSBuZXcgU2hvcnRjdXQoe1xuXHRcdGNoYXJhY3RlcjogJ20nLFxuXHRcdGRlc2NyaXB0aW9uOiBwcm9wcyA9PiBgJHtwcm9wcy5lbmFibGVkID8gJ0hpZGUnIDogJ1Nob3cnfSBwYXR0ZXJuIGNvZGVgLFxuXHRcdGFjdGlvbjogYWN0aW9ucy50b2dnbGVDb2RlXG5cdH0pO1xuXG5cdGJpbmQudG9nZ2xlTmF2aWdhdGlvbiA9IG5ldyBTaG9ydGN1dCh7XG5cdFx0Y2hhcmFjdGVyOiAnbicsXG5cdFx0ZGVzY3JpcHRpb246IHByb3BzID0+IGAke3Byb3BzLmVuYWJsZWQgPyAnSGlkZScgOiAnU2hvdyd9IG5hdmlnYXRpb25gLFxuXHRcdGFjdGlvbjogYWN0aW9ucy50b2dnbGVOYXZpZ2F0aW9uXG5cdH0pO1xuXG5cdGNvbnN0IHJlbG9hZCA9ICgpID0+IGFjdGlvbnMucmVsb2FkKHtyZWxvYWRUaW1lOiBEYXRlLm5vdygpfSk7XG5cdHJlbG9hZC50eXBlID0gYWN0aW9ucy5yZWxvYWQudHlwZTtcblx0cmVsb2FkLmtleSA9IGFjdGlvbnMucmVsb2FkLmtleTtcblx0cmVsb2FkLnByb3BlcnR5ID0gYWN0aW9ucy5yZWxvYWQucHJvcGVydHk7XG5cblx0YmluZC5yZWxvYWQgPSBuZXcgU2hvcnRjdXQoe1xuXHRcdGNoYXJhY3RlcjogJ3InLFxuXHRcdGRlc2NyaXB0aW9uOiAoKSA9PiBgRm9yY2Ugc3luY2AsXG5cdFx0YWN0aW9uOiByZWxvYWRcblx0fSk7XG5cblx0YmluZC50b2dnbGVTZWFyY2ggPSBuZXcgU2hvcnRjdXQoe1xuXHRcdGNoYXJhY3RlcjogJ3NwYWNlJyxcblx0XHRkZXNjcmlwdGlvbjogcHJvcHMgPT4gYCR7cHJvcHMuZW5hYmxlZCA/ICdEaXNhYmxlJyA6ICdFbmFibGUnfSBzZWFyY2hgLFxuXHRcdGFjdGlvbjogYWN0aW9ucy50b2dnbGVTZWFyY2hcblx0fSk7XG5cblx0YmluZC50b2dnbGVUaGVtZSA9IG5ldyBTaG9ydGN1dCh7XG5cdFx0Y2hhcmFjdGVyOiAndCcsXG5cdFx0ZGVzY3JpcHRpb246ICdUb2dnbGUgYWN0aXZlIHRoZW1lJyxcblx0XHRhY3Rpb246IGFjdGlvbnMudG9nZ2xlVGhlbWVcblx0fSk7XG5cblx0YmluZC5jbG9zZSA9IG5ldyBTaG9ydGN1dCh7XG5cdFx0Y2hhcmFjdGVyOiAnZXNjJyxcblx0XHRtb2RpZmllcnM6IFtdLFxuXHRcdGFjdGlvbjogYWN0aW9ucy5jbG9zZUFsbFRoZVRoaW5nc1xuXHR9KTtcblxuXHRiaW5kLnVwID0gbmV3IFNob3J0Y3V0KHtcblx0XHRjaGFyYWN0ZXI6ICdhcnJvdy11cCcsXG5cdFx0bW9kaWZpZXJzOiBbXSxcblx0XHRhY3Rpb246ICgpID0+IGFjdGlvbnMuYXJyb3coJ3VwJylcblx0fSk7XG5cblx0YmluZC5yaWdodCA9IG5ldyBTaG9ydGN1dCh7XG5cdFx0Y2hhcmFjdGVyOiAnYXJyb3ctcmlnaHQnLFxuXHRcdG1vZGlmaWVyczogW10sXG5cdFx0YWN0aW9uOiAoKSA9PiBhY3Rpb25zLmFycm93KCdyaWdodCcpXG5cdH0pO1xuXG5cdGJpbmQuZG93biA9IG5ldyBTaG9ydGN1dCh7XG5cdFx0Y2hhcmFjdGVyOiAnYXJyb3ctZG93bicsXG5cdFx0bW9kaWZpZXJzOiBbXSxcblx0XHRhY3Rpb246ICgpID0+IGFjdGlvbnMuYXJyb3coJ2Rvd24nKVxuXHR9KTtcblxuXHRiaW5kLmxlZnQgPSBuZXcgU2hvcnRjdXQoe1xuXHRcdGNoYXJhY3RlcjogJ2Fycm93LWxlZnQnLFxuXHRcdG1vZGlmaWVyczogW10sXG5cdFx0YWN0aW9uOiAoKSA9PiBhY3Rpb25zLmFycm93KCdsZWZ0Jylcblx0fSk7XG5cblx0cmV0dXJuIGJpbmQ7XG59XG4iXX0=
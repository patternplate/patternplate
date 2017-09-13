'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

var _shortcut = require('./utils/shortcut');

var _shortcut2 = _interopRequireDefault(_shortcut);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = createShortcuts;


function createShortcuts() {
	var bind = function bind(store) {
		Object.keys(bind).forEach(function (name) {
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
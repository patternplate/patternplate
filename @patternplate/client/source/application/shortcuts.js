import * as actions from './actions';
import Shortcut from './utils/shortcut';

export default createShortcuts;

function createShortcuts() {
	const bind = store => {
		Object.keys(bind).forEach(name => {
			bind[name].bind(store);
		});
	};

	bind.toggleConsole = new Shortcut({
		character: 'c',
		description: props => `${props.enabled ? 'Hide' : 'Show'} console`,
		action: actions.toggleConsole
	});

	bind.toggleDoc = new Shortcut({
		character: 'd',
		description: () => `Open documentation for this pattern`,
		action: actions.toggleDoc
	});

	bind.openDocumentation = new Shortcut({
		character: '7',
		description: () => `Navigate back to / route`,
		action: actions.openDocumentation
	});

	bind.openFullscreen = new Shortcut({
		character: 'f',
		description: () => `Open fullscreen view`,
		action: actions.openFullscreen
	});

	bind.toggleHide = new Shortcut({
		character: 'h',
		description: props => `${props.enabled ? 'Show' : 'Hide'} hidden items`,
		action: actions.toggleHide
	});

	bind.info = new Shortcut({
		character: 'i',
		description: props => `${props.enabled ? 'Hide' : 'Show'} pattern infos`,
		action: actions.toggleInfo
	});

	bind.toggleOpacity = new Shortcut({
		character: 'o',
		description: props => `${props.enabled ? 'Hide' : 'Show'} opacity indicators`,
		action: actions.toggleOpacity
	});

	bind.toggleShortcuts = new Shortcut({
		character: 'k',
		description: props => `${props.enabled ? 'Hide' : 'Show'} keyboard shortcuts`,
		action: actions.toggleKeyboardShortcuts
	});

	bind.toggleRulers = new Shortcut({
		character: 'l',
		description: props => `${props.enabled ? 'Hide' : 'Show'} rulers`,
		action: actions.toggleRulers
	});

	bind.toggleCode = new Shortcut({
		character: 'm',
		description: props => `${props.enabled ? 'Hide' : 'Show'} pattern code`,
		action: actions.toggleCode
	});

	bind.toggleNavigation = new Shortcut({
		character: 'n',
		description: props => `${props.enabled ? 'Hide' : 'Show'} navigation`,
		action: actions.toggleNavigation
	});

	const reload = () => actions.reload({reloadTime: Date.now()});
	reload.type = actions.reload.type;
	reload.key = actions.reload.key;
	reload.property = actions.reload.property;

	bind.reload = new Shortcut({
		character: 'r',
		description: () => `Force sync`,
		action: reload
	});

	bind.toggleSearch = new Shortcut({
		character: 'space',
		description: props => `${props.enabled ? 'Disable' : 'Enable'} search`,
		action: actions.toggleSearch
	});

	bind.toggleTheme = new Shortcut({
		character: 't',
		description: 'Toggle active theme',
		action: actions.toggleTheme
	});

	bind.close = new Shortcut({
		character: 'esc',
		modifiers: [],
		action: actions.closeAllTheThings
	});

	bind.up = new Shortcut({
		character: 'arrow-up',
		modifiers: [],
		action: () => actions.arrow('up')
	});

	bind.right = new Shortcut({
		character: 'arrow-right',
		modifiers: [],
		action: () => actions.arrow('right')
	});

	bind.down = new Shortcut({
		character: 'arrow-down',
		modifiers: [],
		action: () => actions.arrow('down')
	});

	bind.left = new Shortcut({
		character: 'arrow-left',
		modifiers: [],
		action: () => actions.arrow('left')
	});

	return bind;
}

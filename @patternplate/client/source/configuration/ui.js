const ui = {
	hierarchy: {
		'atoms': {
			displayName: 'Atoms',
			order: 1,
			icon: 'atoms'
		},
		'molecules': {
			displayName: 'Molecules',
			order: 2,
			icon: 'molecules'
		},
		'polymers': {
			displayName: 'Polymers',
			order: 3,
			icon: 'polymers'
		},
		'organisms': {
			displayName: 'Organisms',
			order: 4,
			icon: 'organisms'
		},
		'ecospheres': {
			displayName: 'Ecospheres',
			order: 5,
			icon: 'ecospheres'
		},
		'atoms/special-atoms': {
			displayName: 'Specialized Atoms'
		}
	},
	resultOrder: [
		'Dependencies',
		'Markup',
		'Script',
		'Style',
		'Documentation'
	],
	theme: 'light',
	themeTarget: 'dark',
	useFolderTable: true
};

export default ui;

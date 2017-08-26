function getWrapper (expression) {
	if (!expression) {
		return function faithfulWrapper (input) {
			return input;
		};
	}

	if (expression === '!IE') {
		return function noIEWrapper (input) {
			return `<!--[if !IE]> -->\n${input}\n<!-- <![endif]-->`;
		};
	}

	return function IEWrapper (input) {
		return `<!--[if ${expression}]>\n${input}\n<![endif]-->`;
	};
};

export default getWrapper;

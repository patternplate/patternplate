const DEFAULT = {
	error: null,
	fetching: false,
	id: null,
	contents: null
};

export default function demo(state = DEFAULT, action) {
	switch (action.type) {
		case 'LOAD_PATTERN_DEMO_START':
			return {
				error: null,
				fetching: true,
				id: action.payload.id,
				contents: null
			};
		case 'LOAD_PATTERN_DEMO_SUCCESS':
			return {
				error: null,
				fetching: false,
				id: action.payload.id,
				contents: action.payload.contents
			};
		case 'LOAD_PATTERN_DEMO_ERROR':
		default:
			return state;
	}
}

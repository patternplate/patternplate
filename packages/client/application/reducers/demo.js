'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = demo;
var DEFAULT = {
	error: null,
	fetching: false,
	id: null,
	contents: null
};

function demo() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT;
	var action = arguments[1];

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
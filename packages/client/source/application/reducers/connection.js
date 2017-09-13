import handleDependentActions from '../actions/handle-dependent-actions';
let BEATS = [];

export default handleDependentActions({
	LISTEN_HEARTBEAT: (...args) => handle(...args),
	FETCHING: (...args) => handle(...args),
	ERROR_HEARTBEAT: () => {
		BEATS = [];
		return 'error';
	}
}, {
	defaultValue: '',
	dependencies: ['fetching']
});

function handle(state = 'loading', action, {fetching}) {
	if (fetching) {
		return 'loading';
	}

	const count = beat(action.payload);

	if (count === 0) {
		return '';
	}

	if (count === 3) {
		return 'loaded';
	}

	return 'loading';
}

function beat(add) {
	BEATS = [BEATS[BEATS.length - 2], BEATS[BEATS.length - 1], add].filter(Boolean);
	return BEATS.length;
}

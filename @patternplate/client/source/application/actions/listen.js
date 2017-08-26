import url from 'url';
import {createPromiseThunkAction} from './promise-thunk-action';
import loadPatternDemo from './load-pattern-demo';
import loadSchema from './load-schema';

export default createPromiseThunkAction('LISTEN', (payload, dispatch, getState) => {
	if (!global.EventSource) {
		return;
	}

	const s = getState();
	const source = new global.EventSource(url.resolve(s.base, payload.url));

	source.addEventListener('error', error => {
		dispatch({
			type: 'ERROR_HEARTBEAT',
			payload: error
		});
	});

	source.addEventListener('heartbeat', async event => {
		dispatch({
			type: 'LISTEN_HEARTBEAT',
			payload: JSON.parse(event.data)
		});
	});

	source.addEventListener('change', async event => {
		const payload = JSON.parse(event.data);
		const file = payload.file || '';

		if (file.startsWith('patterns')) {
			dispatch(await loadSchema());
		}
	});

	source.addEventListener('reload', event => {
		const payload = JSON.parse(event.data);
		const state = getState();

		if (state.id === `pattern/${payload.pattern}`) {
			dispatch(loadPatternDemo({reloadTime: Date.now()}));
		}
	});
});

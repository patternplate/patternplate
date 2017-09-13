import {loadPatternDemo, loadSchema} from './';

export default reload;

function reload() {
	return async dispatch => {
		const actions = [
			async () => dispatch(await Promise.resolve(loadSchema())),
		  loadPatternDemo({reloadTime: Date.now()})
		];

		await Promise.all(actions.map(dispatch));
	};
}

reload.type = 'RELOAD';
reload.key = '';
reload.property = '';

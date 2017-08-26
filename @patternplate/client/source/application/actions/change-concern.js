import path from 'path';
import urlQuery from '../utils/url-query';
import {patchLocation} from './';

export default changeConcern;
export const type = 'CHANGE_CONCERN';

function changeConcern(concern) {
	return (dispatch, getState) => {
		const state = getState();
		const location = state.routing.locationBeforeTransitions;
		const parsed = urlQuery.parse(location.query.source);
		const previous = parsed.pathname;
		const ext = path.extname(previous);

		const hasDemo = state.pattern.files.some(file => {
			return file.concern === 'demo' && file.type === ext.slice(1);
		});

		const type = concern === 'index' && hasDemo ?
			'source' :
			parsed.query.type;

		const source = urlQuery.format({
			pathname: `${path.dirname(previous)}/${concern}${ext}`,
			query: {
				...parsed.query,
				type
			}
		});

		dispatch(patchLocation({
			query: {
				source
			}
		}));
	};
}

changeConcern.type = type;

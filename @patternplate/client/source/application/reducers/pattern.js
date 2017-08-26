import path from 'path';
import {handleActions} from 'redux-actions';
import * as actions from '../actions';

import {getBase} from './base';
import getIdByPathname from '../utils/get-id-by-pathname';
import handleDependentActions from '../actions/handle-dependent-actions';
import {handlePromiseThunkAction} from '../actions/promise-thunk-action';
import composeReducers from '../utils/compose-reducers';

export default composeReducers(
	handleDependentActions({
		'@@router/LOCATION_CHANGE': (state, {payload}, {schema}) => {
			const id = getIdByPathname(payload.pathname, getBase(payload.pathname));
			if (!id || !schema) {
				return state;
			}

			return {...find(schema.meta, id), errored: state.errored, files: state.files, loading: state.loading, reloadTime: state.reloadTime};
		}
	}, {dependencies: ['schema']}),
	handlePromiseThunkAction(actions.loadSchema, {
		success(state, {payload}, {id}) {
			if (!id) {
				return state;
			}

			return {...find(payload.meta, id), errored: state.errored, files: state.files, loading: state.loading, reloadTime: state.reloadTime};
		}
	}, {dependencies: ['id']}),
	handleActions({
		[actions.loadPatternDemo]: (state, {payload}) => {
			const loading = Boolean(payload);
			return {...state, loading, reloadTime: payload.reloadTime};
		},
		[actions.patternDemoError]: state => {
			return {...state, errored: true, loading: false};
		},
		[actions.patternDemoLoaded]: state => {
			return {...state, errored: false, loading: false};
		}
	})
);

function find(tree, id, depth = 1) {
	if (!tree || !id) {
		return;
	}

	const frags = id.split('/').filter(Boolean);
	const sub = frags.slice(0, depth).map(strip);
	const match = tree.children.find(child => child.path.every((s, i) => sub[i] === strip(s)));

	if (match && depth < frags.length) {
		return find(match, id, depth + 1);
	}

	return match;
}

function strip(b) {
	return path.basename(b, path.extname(b));
}

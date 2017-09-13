import {isEqual} from 'lodash';
import {handleActions} from 'redux-actions';
import {windowResize} from '../actions';

const defaultValue = {
	height: 0,
	width: 0
};

export default handleActions({
	[windowResize]: onWindowResize
}, defaultValue);

function onWindowResize(state, {payload}) {
	const next = {width: payload.width, height: payload.height};
	if (!isEqual(next, state)) {
		return next;
	}
	return state;
}

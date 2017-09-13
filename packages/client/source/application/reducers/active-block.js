import {handleActions} from 'redux-actions';
import markBlock from '../actions/mark-block';

const defaultValue = null;

const markBlockHandler = (state, {payload}) => {
	const {active, id} = payload;

	if (active) {
		return id;
	}

	return defaultValue;
};

const locationChangeHandler = () => {
	return defaultValue;
};

export default handleActions({
	[markBlock]: markBlockHandler,
	'@@router/LOCATION_CHANGE': locationChangeHandler
}, defaultValue);

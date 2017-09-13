import {loadSchema} from '../actions';
import {handlePromiseThunkAction} from '../actions/promise-thunk-action';

export default handlePromiseThunkAction(loadSchema, {
	success(state, action) {
		return action.payload;
	}
});

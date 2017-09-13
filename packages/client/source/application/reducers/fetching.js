import {handlePromiseThunkAction} from '../actions/promise-thunk-action';
import {loadSchema} from '../actions';

export default handlePromiseThunkAction(loadSchema, {
	start() {
		return true;
	},
	success() {
		return false;
	},
	error() {
		return false;
	}
}, {
	defaultValue: false
});

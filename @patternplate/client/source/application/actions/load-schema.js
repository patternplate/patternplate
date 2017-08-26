import url from 'url';
import {createPromiseThunkAction} from './promise-thunk-action';
import fetch from '../utils/fetch';

export default createPromiseThunkAction('LOAD_SCHEMA', async (_, __, getState) => {
	const uri = url.resolve(getState().base, 'api');
	const response = await fetch(uri);
	return response.json();
});

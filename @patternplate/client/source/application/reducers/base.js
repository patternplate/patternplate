import {handleAction} from 'redux-actions';
import {getDepth} from './depth';

export function getBase(pathname) {
	const depth = getDepth(pathname);

	return depth > 0 ?
		`/${pathname
			.split('/')
			.filter(Boolean)
			.slice(0, depth)
			.join('/')}/` :
		'/';
}

export default handleAction('@@router/LOCATION_CHANGE', {
	next(_, {payload: {pathname}}) {
		return getBase(pathname);
	}
}, '/');

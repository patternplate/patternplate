import {handleAction} from 'redux-actions';

export function getDepth(pathname) {
	const fragments = pathname.split('/').filter(Boolean);

	const fragmentIndex = ['pattern', 'doc']
		.map(known => fragments.indexOf(known))
		.find(index => index !== -1);

	const index = fragmentIndex === null ? fragments.length : fragmentIndex;
	return fragments.slice(0, index).filter(Boolean).length;
}

export default handleAction('@@router/LOCATION_CHANGE', {
	next(_, {payload: {pathname}}) {
		return getDepth(pathname);
	}
}, '.');

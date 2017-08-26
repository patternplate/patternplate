import getIdByPathname from '../utils/get-id-by-pathname';
import handleDependentActions from '../actions/handle-dependent-actions';

function handler(_, {payload}, {base}) {
	return getIdByPathname(payload.pathname, base) || '/';
}

export default handleDependentActions({
	'@@router/LOCATION_CHANGE': handler
}, {
	dependencies: ['base']
});

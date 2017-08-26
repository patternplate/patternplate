import {createSelector} from 'reselect';
import selectPatterns from './navigation';
import find from '../utils/find';

export default function createRelationSelector(key, selectItem) {
	return createSelector(
		selectPatterns,
		selectItem,
		(patterns, item) => {
			if (!item) {
				return [];
			}
			return (item[key] || [])
				.map(id => find(patterns, `pattern/${id}`, {type: 'pattern'}))
				.filter(Boolean);
		}
	);
}

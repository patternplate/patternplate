import {merge} from 'lodash';
import {createSelector} from 'reselect';
import {flatten, sanitize} from './tree';

const navigation = createSelector(
	state => state.schema.meta,
	state => state.config.hierarchy,
	state => state.id,
	state => state.hideEnabled,
	(tree, config, id, hide) => sanitize(merge({}, tree), {hide, config, id, prefix: 'pattern'})
);

export default navigation;
export const flat = createSelector(navigation, flatten);

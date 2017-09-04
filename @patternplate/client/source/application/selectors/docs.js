import {merge} from 'lodash';
import {createSelector} from 'reselect';
import Immutable from 'seamless-immutable';
import {enrich, flatten, sanitize} from './tree';

const docs = createSelector(
	state => state.schema.docs,
	state => state.id,
	state => state.hideEnabled,
  state => state.routing.locationBeforeTransitions,
  state => state.base,
	(tree, id, hide, location, base) => {
    const context = {hide, id, prefix: 'doc', location, base};
		const t = sanitize(merge({}, tree), context);

		if (!t.children.some(i => i.id === 'root')) {
			const doc = enrich({
				contents: tree.contents,
				href: '/',
				id: tree.id,
				manifest: tree.manifest,
				path: ['/'],
				type: 'doc'
			}, {id, config: {}, prefix: '/', location, base});

			t.children.push(doc);
		}

		return Immutable.from(t);
	}
);

export default docs;
export const flat = createSelector(docs, flatten);

import {createSelector} from 'reselect';
import Immutable from 'seamless-immutable';
import {flat as selectDocs} from '../selectors/docs';
import {flat as selectNavigation} from '../selectors/navigation';

export default createSelector(
	selectDocs,
	selectNavigation,
	(docs, nav) => Immutable.from(docs).concat(nav)
);

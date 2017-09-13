import frontmatter from 'front-matter';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';
import * as item from '../selectors/item';

const withActiveForDoc = createSelector(
	item.selectContents,
	contents => {
		return {
			active: frontmatter(contents).body.length > 0
		};
	}
);

export default connect(withActiveForDoc);

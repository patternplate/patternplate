import {connect} from 'react-redux';
import Documentation from '../components/documentation';

export default connect(state => {
	return {
		base: state.base,
		id: state.id,
		docs: {
			contents: selectNotFound(state)
		}
	};
})(Documentation);

function selectNotFound(state) {
	const url = state.routing.locationBeforeTransitions.pathname;
	return `
# Nothing found

> Pretty sure these aren't the hypertext documents you are looking for.

We looked everywhere and could not find a single thing at \`${url}\`.

You might want to navigate back to [Home](/) or use the search.

---

Help us to make this message more helpful on [GitHub](https://github.com/sinnerschrader/patternplate)
`;
}

import {connect} from 'react-redux';
import {createSelector} from 'reselect';
import Documentation from '../components/documentation';
import selectItem from '../selectors/item';
import themes from '../themes';

export default connect(mapState)(Documentation);

const selectNotFound = createSelector(
	state => state.routing.locationBeforeTransitions.pathname,
	url => `
# Documentation not found

> Pretty sure these aren't the hypertext documents you are looking for.

We looked everywhere and could not find a single thing at \`${url}\`.

You might want to navigate back to [Home](/) or use the [Search](?search-enabled=true).

---

Help us to make this message more helpful on [GitHub](https://github.com/sinnerschrader/patternplate)
`
);

const selectNoDocs = () => `
# :construction: Add documentation

> Undocumented software could not exist just as well.
>
> – The Voice of Common Sense

Currently there is no readme data at \`./patterns/readme.md\`, so we left this
friendly reminder here to change that soon.

You could start right away:

\`\`\`sh
echo "# Docs\\n This patternplate contains ..." > patterns/readme.md
\`\`\`

Some ideas on what to write into your pattern readme

*  Why this Living Styleguide interface exists, e.g. what problems it should solve
*  What the components in are intended for, e.g. a brand, website or product
*  The component hierarchy you use, e.g. Atomic Design
*  Naming conventions
*  Rules for dependencies
*  Browser matrix

---

Help us to make this message more helpful on [GitHub](https://github.com/sinnerschrader/patternplate).
`;

const selectDoc = createSelector(
	selectItem,
	selectNoDocs,
	selectNotFound,
	(match, noDocs, notFound) => {
		if (match && match.contents) {
			return match.contents;
		}

		if (match && !match.contents) {
			return noDocs;
		}

		return notFound;
	}
);

const selectType = createSelector(
	selectItem,
	match => {
		if (match && match.contents) {
			return 'doc';
		}
		if (match && !match.contents) {
			return 'fallback';
		}
		return 'not-found';
	}
);

const selectThemes = createSelector(
	state => state.config.color,
	color => themes(color)
);

function mapState(state) {
	return {
		doc: selectDoc(state),
		themes: selectThemes(state),
		type: selectType(state)
	};
}

import { themes } from "@patternplate/components";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import { bindActionCreators } from "redux";

import * as actions from "../actions";

import Documentation from "../components/documentation";
import selectItem from "../selectors/item";
import {flat as selectPool} from "../selectors/pool";

export default connect(mapState, mapDispatch)(Documentation);

const selectNotFound = createSelector(
  state => state.routing.locationBeforeTransitions.pathname,
  url => `
# Documentation not found

> Pretty sure these aren't the hypertext documents you are looking for.

We looked everywhere and could not find a single thing at \`${url}\`.

You might want to navigate back to [Home](/) or use the [Search](?search-enabled=true).

---

Help us to make this message more helpful on [GitHub](https://github.com/patternplate/patternplate)
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

Help us to make this message more helpful on [GitHub](https://github.com/patternplate/patternplate).
`;

const selectDocItem = createSelector(
  selectItem,
  selectPool,
  state => state.id,
  (item, pool, id) => {
    if (id === "/") {
      const first = pool.find(i => i.contentType === "doc");
      if (first) {
        return first;
      }
    }
    return item;
  }
);

const selectDoc = createSelector(
  selectDocItem,
  selectNoDocs,
  selectNotFound,
  (item, noDocs, notFound) => {
    if (item && item.contents) {
      return item.contents;
    }

    if (item && !item.contents) {
      return noDocs;
    }

    return notFound;
  }
);

const selectDisplayName = createSelector(
  selectDocItem,
  item => {
    if (!item) {
      return 'patternplate';
    }
    return item.manifest.displayName;
  }
);

const selectType = createSelector(selectItem, match => {
  if (match && match.contents) {
    return "doc";
  }
  if (match && !match.contents) {
    return "fallback";
  }
  return "not-found";
});

const selectThemes = createSelector(
  state => state.config.color,
  color => themes(color)
);

function mapState(state) {
  return {
    displayName: selectDisplayName(state),
    doc: selectDoc(state),
    themes: selectThemes(state),
    type: selectType(state),
    isStatic: state.isStatic
  };
}

function mapDispatch(dispatch) {
  return bindActionCreators(
    {
      requestScroll: actions.scrollTo
    },
    dispatch
  );
}

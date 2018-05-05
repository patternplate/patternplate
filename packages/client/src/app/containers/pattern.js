import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createSelector } from "reselect";
import { Icon, styled } from "@patternplate/components";

import * as demo from "../selectors/demo";
import selectItem, * as items from "../selectors/item";
import Pattern from "../components/pattern";
import ToggleButton from "../components/common/toggle-button";
import PluginMenu from "./plugin-menu";

import * as actions from "../actions";

class PatternContainer extends React.Component {
  render() {
    const { props } = this;
    return (
      <Pattern
        contents={props.contents}
        contentType={props.contentType}
        docs={props.docs}
        error={props.error}
        displayName={props.displayName}
        loading={props.loading}
        opacity={props.opacity}
        src={props.src}
        type={props.type}
        updated={props.updated}
        navigationEnabled={props.navigationEnabled}
        screenshot={props.screenshot}
      >
        <Pattern.Toolbar>
          <PluginMenu
            anchor="toolbar"
            render={(contribution, handlers) => (
              <button
                type="button"
                key={JSON.stringify(contribution)}
                title={contribution.title}
                onClick={handlers.onClick}
                >
                <Icon symbol="placeholder"/>
              </button>
            )}
          />
        </Pattern.Toolbar>
      </Pattern>
    );
  }
}

export default connect(mapState, mapDispatch)(PatternContainer);

const DEFAULT_PATTERN_CONTENTS = `
# :construction: Add documentation

> Undocumented software could not exist just as well.
>
> – The Voice of Common Sense

Currently there is no readme data for this pattern folder.
We left this friendly reminder for you to change that soon.

---

Help us to make this message more helpful on [GitHub](https://github.com/patternplate/patternplate).
`;

const NOT_FOUND = `
# Pattern not found

> Pretty sure this is not the component you are looking for.

We looked everywhere and could not find a single thing.

You might want to navigate back to [Home](/) or use the search.

---

Help us to make this message more helpful on [GitHub](https://github.com/patternplate/patternplate)
`;

const selectDocs = createSelector(
  selectItem,
  items.selectType,
  items.selectContents,
  (pattern, type, contents) => {
    if (pattern && pattern.type === "folder") {
      return contents;
    }
    if (type === "not-found") {
      return NOT_FOUND;
    }
    return contents || DEFAULT_PATTERN_CONTENTS;
  }
);

function mapState(state) {
  return {
    contents: state.demo.contents,
    displayName: items.selectName(state),
    docs: selectDocs(state),
    error: state.demo.error,
    loading: state.demo.fetching,
    opacity: state.opacity,
    src: demo.selectSrc(state),
    type: items.selectType(state),
    contentType: items.selectContentType(state),
    updated: state.demo.updated,
    navigationEnabled: state.navigationEnabled,
    screenshot:
      state.routing.locationBeforeTransitions.query.screenshot === "true"
  };
}

function mapDispatch(dispatch) {
  return bindActionCreators(
    {
      onChange: actions.loadPatternDemo
    },
    dispatch
  );
}

const StyledToggleButton = styled(ToggleButton)`
  margin-right: 10px;
`;

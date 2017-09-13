import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {createSelector} from 'reselect';
import * as demo from '../selectors/demo';
import selectItem, * as items from '../selectors/item';
import Pattern from '../components/pattern';

import * as actions from '../actions';

class PatternContainer extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {srcdoc: false};
  }

  componentDidMount() {
    if (this.state.srcdoc) {
      this.props.onChange();
    }
  }

  componentWillMount() {
    if (global.document) {
      const el = document.createElement('iframe');
      this.setState({srcdoc: 'srcdoc' in el});
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  componentWillReceiveProps(next) {
    if (this.state.srcdoc && this.props.src !== next.src && next.src) {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }

      this.timeout = setTimeout(() => {
        this.props.onChange();
      }, 250);
    }
  }

  render() {
    const {props} = this;
    return (
      <Pattern
        contents={this.state.srcdoc ? props.contents : null}
        docs={props.docs}
        error={props.error}
        loading={props.loading}
        opacity={props.opacity}
        src={props.src}
        type={props.type}
      />
    );
  }
}

export default connect(mapState, mapDispatch)(PatternContainer);

const DEFAULT_CONTENTS = `
# :construction: Add documentation

> Undocumented software could not exist just as well.
>
> – The Voice of Common Sense

Currently there is no readme data for this pattern folder.
We left this friendly reminder for you to change that soon.

---

Help us to make this message more helpful on [GitHub](https://github.com/sinnerschrader/patternplate).
`;

const NOT_FOUND = `
# Pattern not found

> Pretty sure this is not the component you are looking for.

We looked everywhere and could not find a single thing.

You might want to navigate back to [Home](/) or use the search.

---

Help us to make this message more helpful on [GitHub](https://github.com/sinnerschrader/patternplate)
`;

const selectDocs = createSelector(
  selectItem,
  items.selectType,
  items.selectContents,
  (pattern, type, contents) => {
    if (type === 'not-found') {
      return NOT_FOUND;
    }
    return contents || DEFAULT_CONTENTS;
  }
);

function mapState(state) {
  return {
    contents: state.demo.contents,
    docs: selectDocs(state),
    error: state.demo.error,
    loading: state.demo.fetching,
    opacity: state.opacity,
    src: demo.selectSrc(state),
    type: items.selectType(state)
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

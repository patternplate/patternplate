import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {createSelector} from 'reselect';
import * as demo from '../selectors/demo';
import selectItem, * as items from '../selectors/item';
import Pattern from '../components/pattern';

import * as actions from '../actions';

class PatternContainer extends React.Component {
	componentDidMount() {
		this.props.onChange();
	}

	componentWillReceiveProps(next) {
		if (this.props.src !== next.src && next.src) {
			this.props.onChange();
		}
	}

	render() {
		const {props} = this;
		return (
			<Pattern
				contents={props.contents}
				docs={props.docs}
				loading={props.loading}
				opacity={props.opacity}
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
		docs: selectDocs(state),
		contents: state.demo.contents,
		loading: state.demo.loading,
		opacity: state.opacity,
		src: demo.selectSrc(state),
		type: items.selectType(state)
	};
}

function mapDispatch(dispatch) {
	return bindActionCreators({
		onChange: actions.loadPatternDemo
	}, dispatch);
}

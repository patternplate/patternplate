import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from '../actions';
import Search from '../components/search';
import * as found from '../selectors/found';

function mapProps(state) {
	return {
		activeItem: found.selectActiveItem(state), // used for highlight in list
		components: found.selectPatterns(state), // list of components matching state.components
		docs: found.selectDocs(state), // list of docs matching state.search
		enabled: state.searchEnabled, // if search is to be displayed
		legend: found.selectLegend(state),
		shortcuts: state.shortcuts, // reference to global shortcuts for help texts
		suggestion: found.selectSuggestion(state), // the backdrop search suggestion string
		value: state.searchValue // the synchronous search input value
	};
}

function mapDispatch(dispatch) {
	return bindActionCreators({
		onChange: e => actions.search({persist: false, perform: false, value: e.target.value}),
		onClear: () => actions.search({persist: true, perform: true, value: ''}),
		onClick: () => actions.toggleSearch({focus: true}),
		onClickOutside: () => actions.toggleSearch({focus: false}),
		onComplete: value => actions.search({persist: true, perform: true, value}),
		onFocus: () => actions.toggleSearch({focus: true}),
		onMount: () => actions.toggleSearch({sync: true}),
		onNavigate: pathname => actions.patchLocation({pathname, query: {'search-enabled': false}}),
		onSubmit: e => {
			e.preventDefault();
			return actions.search({persist: true, perform: true, value: e.target.search.value});
		},
		onUp: () => actions.searchPreview('up'),
		onDown: () => actions.searchPreview('down'),
		onActivate: index => actions.searchPreview(index),
		onStop: e => actions.search({persist: true, perform: true, value: e.target.value})
	}, dispatch);
}

export default connect(mapProps, mapDispatch)(Search);

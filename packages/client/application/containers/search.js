'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _actions = require('../actions');

var actions = _interopRequireWildcard(_actions);

var _search = require('../components/search');

var _search2 = _interopRequireDefault(_search);

var _found = require('../selectors/found');

var found = _interopRequireWildcard(_found);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
	return (0, _redux.bindActionCreators)({
		onChange: function onChange(e) {
			return actions.search({ persist: false, perform: false, value: e.target.value });
		},
		onClear: function onClear() {
			return actions.search({ persist: true, perform: true, value: '' });
		},
		onClick: function onClick() {
			return actions.toggleSearch({ focus: true });
		},
		onClickOutside: function onClickOutside() {
			return actions.toggleSearch({ focus: false });
		},
		onComplete: function onComplete(value) {
			return actions.search({ persist: true, perform: true, value: value });
		},
		onFocus: function onFocus() {
			return actions.toggleSearch({ focus: true });
		},
		onMount: function onMount() {
			return actions.toggleSearch({ sync: true });
		},
		onNavigate: function onNavigate(pathname) {
			return actions.patchLocation({ pathname: pathname, query: { 'search-enabled': false } });
		},
		onSubmit: function onSubmit(e) {
			e.preventDefault();
			return actions.search({ persist: true, perform: true, value: e.target.search.value });
		},
		onUp: function onUp() {
			return actions.searchPreview('up');
		},
		onDown: function onDown() {
			return actions.searchPreview('down');
		},
		onActivate: function onActivate(index) {
			return actions.searchPreview(index);
		},
		onStop: function onStop(e) {
			return actions.search({ persist: true, perform: true, value: e.target.value });
		}
	}, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapProps, mapDispatch)(_search2.default);
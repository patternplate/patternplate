import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Search from "../components/search";
import * as actions from "../actions";
import * as found from "../selectors/found";

function mapProps(state) {
  return {
    activeItem: found.selectActiveItem(state), // Used for highlight in list
    base: state.base,
    components: found.selectPatterns(state).map((pattern) => {
      if (pattern.href.startsWith('.')) {
        return pattern;
      }

      pattern.href = `.${pattern.href}`;
      return pattern;
    }), // List of components matching state.components
    docs: found.selectDocs(state).map((doc) => {
      if (doc.href.startsWith('.')) {
        return doc;
      }

      doc.href = `.${doc.href}`;
      return doc;
    }), // List of docs matching state.search
    enabled: state.searchEnabled, // If search is to be displayed
    legend: found.selectLegend(state),
    shortcuts: state.shortcuts, // Reference to global shortcuts for help texts
    suggestion: found.selectSuggestion(state), // The backdrop search suggestion string
    value: state.searchValue // The synchronous search input value
  };
}

function mapDispatch(dispatch) {
  return bindActionCreators(
    {
      onChange: e =>
        actions.search({
          persist: false,
          perform: false,
          value: e.target.value
        }),
      onClear: () =>
        actions.search({ persist: true, perform: true, value: "" }),
      onClick: () => actions.toggleSearch({ focus: true }),
      onClickOutside: () => actions.toggleSearch({ focus: false }),
      onClose: () => actions.toggleSearch({ focus: false }),
      onComplete: value =>
        actions.search({ persist: true, perform: true, value }),
      onFocus: () => actions.toggleSearch({ focus: true }),
      onMount: () => actions.toggleSearch({ sync: true }),
      onNavigate: item => {
        const pathname = `${item.contentType}/${item.id}`;
        return actions.patchLocation({ pathname, query: { "search-enabled": false } })
      },
      onSubmit: e => {
        e.preventDefault();
        return actions.search({
          persist: true,
          perform: true,
          value: e.target.search.value
        });
      },
      onUp: () => actions.searchPreview("up"),
      onDown: () => actions.searchPreview("down"),
      onActivate: index => actions.searchPreview(index),
      onStop: e =>
        actions.search({ persist: true, perform: true, value: e.target.value })
    },
    dispatch
  );
}

export default connect(mapProps, mapDispatch)(Search);

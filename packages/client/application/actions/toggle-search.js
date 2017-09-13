'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.type = undefined;

const _ = require('./');

exports.default = toggleSearch;
const type = exports.type = 'TOGGLE_SEARCH_ENABLED';

function toggleSearch() {
  const payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return function (dispatch, getState) {
    const state = getState();

    if (payload.sync) {
      focus(state.searchEnabled);
      return;
    }

    const next = 'focus' in payload ? payload.focus : !state.searchEnabled;

    if (!next) {
      dispatch((0, _.search)({ persist: true, value: value() }));
    }

    dispatch((0, _.patchLocation)({ query: { 'search-enabled': next, 'search-preview': 0 } }));
  };
}

toggleSearch.type = type;
toggleSearch.key = 'search-enabled';
toggleSearch.property = 'searchEnabled';

function focus(next) {
  if (!next) {
    return;
  }

  if (!('document' in global)) {
    return;
  }

  setTimeout(() => {
    const el = global.document.query('input[data-search]');

    if (!el) {
      return;
    }

    if (global.document.activeElement !== el) {
      el.focus();
    }

    const range = el.value.length;
    el.setSelectionRange(range, range);
  }, 100);
}

function value() {
  if (!('document' in global)) {
    return;
  }

  const el = global.document.query('input[data-search]');

  if (!el) {
    return;
  }

  return el.value;
}
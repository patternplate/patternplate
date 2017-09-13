'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.type = undefined;

const _raf = require('raf');

const _raf2 = _interopRequireDefault(_raf);

const _ = require('./');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = search;
const type = exports.type = 'SEARCH';

function search(payload) {
  return function (dispatch, getState) {
    const state = getState();

    dispatch({
      type: 'SET_SEARCH',
      payload: payload.value
    });

    (0, _raf2.default)(() => {
      if (payload.persist) {
        dispatch((0, _.patchLocation)({
          query: {
            search: payload.value,
            'search-preview': state.search === payload.value ? state.searchPreview : 0
          }
        }));
      } else if (payload.perform) {
        dispatch({
          type: 'PERFORM_SEARCH',
          payload: payload.value
        });
      }
    });
  };
}

search.type = type;
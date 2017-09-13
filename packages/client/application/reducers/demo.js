'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = demo;
const DEFAULT = {
  error: null,
  fetching: false,
  id: null,
  contents: null
};

function demo() {
  const state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT;
  const action = arguments[1];

  switch (action.type) {
    case 'LOAD_PATTERN_DEMO_START':
      return {
        error: null,
        fetching: true,
        id: action.payload.id,
        contents: null
      };
    case 'LOAD_PATTERN_DEMO_SUCCESS':
      return {
        error: null,
        fetching: false,
        id: action.payload.id,
        contents: action.payload.contents
      };
    case 'LOAD_PATTERN_DEMO_ERROR':
      return {
        error: true,
        fetching: false,
        id: action.payload.id,
        contents: null
      };
    default:
      return state;
  }
}
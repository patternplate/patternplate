const DEFAULT = {
  error: null,
  fetching: false,
  id: null,
  contents: null,
  updated: null
};

export default function demo(state = DEFAULT, action) {
  switch (action.type) {
    case "LOAD_PATTERN_DEMO_START":
      return {
        error: null,
        fetching: true,
        id: action.payload.id,
        contents: state.contents,
        updated: state.updated
      };
    case "LOAD_PATTERN_DEMO_SUCCESS": {
      return {
        error: null,
        fetching: false,
        id: action.payload.id,
        contents: action.payload.contents,
        updated: !action.payload.force && state.contents === action.payload.contents && state.id === action.payload.id
          ? state.updated
          : Date.now()
      };
    }
    case "LOAD_PATTERN_DEMO_ERROR":
      return {
        error: true,
        fetching: false,
        id: action.payload.id,
        contents: null,
        updated: Date.now()
      };
    default:
      return state;
  }
}

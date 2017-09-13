'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _slicedToArray = function () { function sliceIterator(arr, i) { const _arr = []; let _n = true; let _d = false; let _e; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i.return) _i.return(); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); }  throw new TypeError("Invalid attempt to destructure non-iterable instance");  }; }();

const _assert = require('assert');

const _assert2 = _interopRequireDefault(_assert);

const _reduxActions = require('redux-actions');

const _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = handleDependentActions;


function partialReduce(deps) {
  return function (handlers) {
    return Object.entries(handlers).reduce((registry, entry) => {
      let _entry = _slicedToArray(entry, 2),
          name = _entry[0],
          fn = _entry[1];

      registry[name] = function (state, action) {
        return fn(state, action, deps);
      };
      return registry;
    }, {});
  };
}

function handleDependentActions(actionHandlers, options) {
  _assert2.default.ok(Array.isArray(options.dependencies), 'options.dependencies must be an array');

  const handler = function handler() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    let _args$ = args[2],
        dependencies = _args$ === undefined ? {} : _args$;


    if (Object.keys(dependencies).length > 0) {
      const missing = options.dependencies.filter((dependency) => {
        return !(dependency in dependencies);
      });
      _assert2.default.ok(missing.length === 0, 'dependencies for ' + Object.keys(actionHandlers).join(', ') + ' must be present in state. missing: ' + missing.join(',') + '. available: ' + Object.keys(dependencies));
    }

    const deps = (0, _lodash.pick)(dependencies, options.dependencies);
    const handlers = partialReduce(deps)(actionHandlers);
    const reducer = (0, _reduxActions.handleActions)(handlers, options.defaultValue);
    return reducer.apply(undefined, args);
  };
  handler.dependencies = options.dependencies;
  return handler;
}
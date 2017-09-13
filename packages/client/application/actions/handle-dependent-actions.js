'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _reduxActions = require('redux-actions');

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = handleDependentActions;


function partialReduce(deps) {
  return function (handlers) {
    return Object.entries(handlers).reduce(function (registry, entry) {
      var _entry = _slicedToArray(entry, 2),
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

  var handler = function handler() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _args$ = args[2],
        dependencies = _args$ === undefined ? {} : _args$;


    if (Object.keys(dependencies).length > 0) {
      var missing = options.dependencies.filter(function (dependency) {
        return !(dependency in dependencies);
      });
      _assert2.default.ok(missing.length === 0, 'dependencies for ' + Object.keys(actionHandlers).join(', ') + ' must be present in state. missing: ' + missing.join(',') + '. available: ' + Object.keys(dependencies));
    }

    var deps = (0, _lodash.pick)(dependencies, options.dependencies);
    var handlers = partialReduce(deps)(actionHandlers);
    var reducer = (0, _reduxActions.handleActions)(handlers, options.defaultValue);
    return reducer.apply(undefined, args);
  };
  handler.dependencies = options.dependencies;
  return handler;
}
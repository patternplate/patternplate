'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.type = undefined;

var _reactRouterRedux = require('react-router-redux');

var _item = require('../selectors/item');

var _item2 = _interopRequireDefault(_item);

var _pool = require('../selectors/pool');

var _pool2 = _interopRequireDefault(_pool);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = arrow;
var type = exports.type = 'ARROW';

var OFFSETS = {
  up: -1,
  down: 1,
  default: 0
};

function arrow(payload) {
  return function (dispatch, getState) {
    var state = getState();

    // Is handled locally
    if (state.searchEnabled) {
      return;
    }

    if (!state.navigationEnabled) {
      return;
    }

    switch (payload) {
      case 'left':
        {
          var i = (0, _item2.default)(state);
          var p = (0, _pool2.default)(state);
          var id = i.path.slice(0, i.path.length - 1).join('/');
          var next = p.find(function (i) {
            return i.id === id;
          });
          return next && next.href && go(dispatch)(next.href);
        }
      case 'up':
      case 'down':
      default:
        {
          var offset = payload in OFFSETS ? OFFSETS[payload] : OFFSETS.default;
          var _next = jump((0, _pool2.default)(state), (0, _item2.default)(state), offset);
          return _next && go(dispatch)(_next);
        }
    }
  };
}

function go(dispatch) {
  return function (next) {
    return dispatch((0, _reactRouterRedux.push)(next));
  };
}

function jump(pool, start, offset) {
  if (!start) {
    return '';
  }

  if (offset === 0) {
    return start;
  }

  var result = start.href;
  var index = pool.indexOf(start);

  while (result === start.href) {
    index += offset;
    result = pool[index].href;

    if (offset < 0 && index === 0) {
      break;
    }
    if (offset > 0 && index === pool.length) {
      break;
    }
  }

  return result;
}
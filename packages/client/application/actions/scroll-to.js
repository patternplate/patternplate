'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.type = undefined;

const _scrollparent = require('scrollparent');

const _scrollparent2 = _interopRequireDefault(_scrollparent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = scrollTo;
const type = exports.type = 'SCROLL_TO';

function scrollTo(hash) {
  let _global = global,
      document = _global.document;

  if (document) {
    const target = document.getElementById(hash);
    const parent = (0, _scrollparent2.default)(target);
    parent.scrollTop = target.offsetTop;
  }

  return function (dispatch) {
    dispatch({
      type: 'SCROLLED_TO',
      payload: hash
    });
  };
}

scrollTo.type = type;
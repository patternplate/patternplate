'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.type = undefined;

const _urlQuery = require('../utils/url-query');

const _urlQuery2 = _interopRequireDefault(_urlQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = openFullscreen;
const type = exports.type = 'OPEN_FULLSCREEN';

function openFullscreen() {
  return function (dispatch, getState) {
    let _getState = getState(),
        base = _getState.base,
        id = _getState.id,
        environment = _getState.environment;

    if (id === '..' || !global.open) {
      return;
    }

    const href = _urlQuery2.default.format({
      pathname: base + 'demo/' + id + '/index.html',
      query: { environment }
    });

    global.open(href, '_blank');
  };
}

openFullscreen.key = '';
openFullscreen.property = '';
openFullscreen.type = type;
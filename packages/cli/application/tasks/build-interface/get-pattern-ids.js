'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const getPatternIds = (() => {
  const _ref = _asyncToGenerator(function* () {
    const navigation = yield getNavigation.apply(undefined, arguments);
    return (0, _getNavigationUrls2.default)(navigation);
  });

  return function getPatternIds() {
    return _ref.apply(this, arguments);
  };
})();

const _getNavigationUrls = require('./get-navigation-urls');

var _getNavigationUrls2 = _interopRequireDefault(_getNavigationUrls);

const _serverRequire = require('./server-require');

const _serverRequire2 = _interopRequireDefault(_serverRequire);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { const gen = fn.apply(this, arguments); return new Promise((resolve, reject) => { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then((value) => { step("next", value); }, (err) => { step("throw", err); }); } } return step("next"); }); }; }

// Const getNavigation = serverRequire('get-navigation');
exports.default = getPatternIds;
module.exports = exports.default;
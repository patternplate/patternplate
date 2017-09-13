'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _path = require('path');

const _path2 = _interopRequireDefault(_path);

const _sander = require('sander');

const sander = _interopRequireWildcard(_sander);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; }  const newObj = {}; if (obj != null) { for (const key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj;  }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { const gen = fn.apply(this, arguments); return new Promise((resolve, reject) => { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then((value) => { step("next", value); }, (err) => { step("throw", err); }); } } return step("next"); }); }; }

function increment(line) {
  return line[0] === '#' ? `#${line}` : line;
}

exports.default = (() => {
  const _ref = _asyncToGenerator(function* () {
    const context = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    const readmePath = _path2.default.resolve(__dirname, '../../documentation/first-steps.md');
    const readmeSource = yield sander.readFile(readmePath, 'utf-8');

    const readmeLines = readmeSource.split('\n').map(increment);

    return [`# ${context.name}`, readmeLines.join('\n')].join('\n');
  });

  function getReadmeData() {
    return _ref.apply(this, arguments);
  }

  return getReadmeData;
})();

module.exports = exports.default;
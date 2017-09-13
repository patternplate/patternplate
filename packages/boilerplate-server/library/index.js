'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

let boilerplate = (() => {
  var _ref = _asyncToGenerator(function* () {
    let options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    /* eslint-disable no-process-env */

    const augmented = Object.assign({}, {
      cwd: process.cwd(),
      base: options.base || (0, _path.resolve)(__dirname, '../'),
      env: process.env.NODE_ENV || 'development',
      name: options.name || 'boilerplate-server'
    }, options, { api: options });

    return yield (0, _boot2.default)(augmented);
  });

  return function boilerplate() {
    return _ref.apply(this, arguments);
  };
})();

var _path = require('path');

var _boot = require('./boot');

var _boot2 = _interopRequireDefault(_boot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = boilerplate;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9saWJyYXJ5L2luZGV4LmpzIl0sIm5hbWVzIjpbIm9wdGlvbnMiLCJhdWdtZW50ZWQiLCJPYmplY3QiLCJhc3NpZ24iLCJjd2QiLCJwcm9jZXNzIiwiYmFzZSIsIl9fZGlybmFtZSIsImVudiIsIk5PREVfRU5WIiwibmFtZSIsImFwaSIsImJvaWxlcnBsYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OytCQUlBLGFBQXlDO0FBQUEsUUFBZEEsT0FBYyx5REFBSixFQUFJOztBQUN2Qzs7QUFFQSxVQUFNQyxZQUFZQyxPQUFPQyxNQUFQLENBQ2hCLEVBRGdCLEVBRWhCO0FBQ0VDLFdBQUtDLFFBQVFELEdBQVIsRUFEUDtBQUVFRSxZQUFNTixRQUFRTSxJQUFSLElBQWdCLG1CQUFRQyxTQUFSLEVBQW1CLEtBQW5CLENBRnhCO0FBR0VDLFdBQUtILFFBQVFHLEdBQVIsQ0FBWUMsUUFBWixJQUF3QixhQUgvQjtBQUlFQyxZQUFNVixRQUFRVSxJQUFSLElBQWdCO0FBSnhCLEtBRmdCLEVBUWhCVixPQVJnQixFQVNoQixFQUFDVyxLQUFLWCxPQUFOLEVBVGdCLENBQWxCOztBQVlBLFdBQU8sTUFBTSxvQkFBS0MsU0FBTCxDQUFiO0FBQ0QsRzs7a0JBaEJjVyxXOzs7OztBQUpmOztBQUVBOzs7Ozs7OztrQkFvQmVBLFciLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3Jlc29sdmV9IGZyb20gJ3BhdGgnO1xuXG5pbXBvcnQgYm9vdCBmcm9tICcuL2Jvb3QnO1xuXG5hc3luYyBmdW5jdGlvbiBib2lsZXJwbGF0ZShvcHRpb25zID0ge30pIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tcHJvY2Vzcy1lbnYgKi9cblxuICBjb25zdCBhdWdtZW50ZWQgPSBPYmplY3QuYXNzaWduKFxuICAgIHt9LFxuICAgIHtcbiAgICAgIGN3ZDogcHJvY2Vzcy5jd2QoKSxcbiAgICAgIGJhc2U6IG9wdGlvbnMuYmFzZSB8fCByZXNvbHZlKF9fZGlybmFtZSwgJy4uLycpLFxuICAgICAgZW52OiBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcG1lbnQnLFxuICAgICAgbmFtZTogb3B0aW9ucy5uYW1lIHx8ICdib2lsZXJwbGF0ZS1zZXJ2ZXInXG4gICAgfSxcbiAgICBvcHRpb25zLFxuICAgIHthcGk6IG9wdGlvbnN9XG4gICk7XG5cbiAgcmV0dXJuIGF3YWl0IGJvb3QoYXVnbWVudGVkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYm9pbGVycGxhdGU7XG4iXX0=
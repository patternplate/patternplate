'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _engine = require('./engine');

var _engine2 = _interopRequireDefault(_engine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
  after: ['hooks:log:start:after'],
  modes: ['server'],

  start: (() => {
    var _ref = _asyncToGenerator(function* (application) {
      application.engine = (0, _engine2.default)(application);
      return this;
    });

    function startEngineHook(_x) {
      return _ref.apply(this, arguments);
    }

    return startEngineHook;
  })()
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9ob29rcy9lbmdpbmUvaW5kZXguanMiXSwibmFtZXMiOlsiYWZ0ZXIiLCJtb2RlcyIsInN0YXJ0IiwiYXBwbGljYXRpb24iLCJlbmdpbmUiLCJzdGFydEVuZ2luZUhvb2siXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7OztrQkFFZTtBQUNiQSxTQUFPLENBQUMsdUJBQUQsQ0FETTtBQUViQyxTQUFPLENBQUMsUUFBRCxDQUZNOztBQUliQztBQUFBLGlDQUFPLFdBQStCQyxXQUEvQixFQUE0QztBQUNqREEsa0JBQVlDLE1BQVosR0FBcUIsc0JBQU9ELFdBQVAsQ0FBckI7QUFDQSxhQUFPLElBQVA7QUFDRCxLQUhEOztBQUFBLGFBQXNCRSxlQUF0QjtBQUFBO0FBQUE7O0FBQUEsV0FBc0JBLGVBQXRCO0FBQUE7QUFKYSxDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVuZ2luZSBmcm9tICcuL2VuZ2luZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWZ0ZXI6IFsnaG9va3M6bG9nOnN0YXJ0OmFmdGVyJ10sXG4gIG1vZGVzOiBbJ3NlcnZlciddLFxuXG4gIHN0YXJ0OiBhc3luYyBmdW5jdGlvbiBzdGFydEVuZ2luZUhvb2soYXBwbGljYXRpb24pIHtcbiAgICBhcHBsaWNhdGlvbi5lbmdpbmUgPSBlbmdpbmUoYXBwbGljYXRpb24pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59O1xuIl19
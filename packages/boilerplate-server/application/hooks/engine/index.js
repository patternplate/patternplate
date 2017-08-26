'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _engine = require('./engine');

var _engine2 = _interopRequireDefault(_engine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
	'after': ['hooks:log:start:after'],
	'modes': ['server'],

	'start': (() => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9ob29rcy9lbmdpbmUvaW5kZXguanMiXSwibmFtZXMiOlsiYXBwbGljYXRpb24iLCJlbmdpbmUiLCJzdGFydEVuZ2luZUhvb2siXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7OztrQkFFZTtBQUNkLFVBQVMsQ0FBRSx1QkFBRixDQURLO0FBRWQsVUFBUyxDQUFFLFFBQUYsQ0FGSzs7QUFJZDtBQUFBLCtCQUFTLFdBQWlDQSxXQUFqQyxFQUErQztBQUN2REEsZUFBWUMsTUFBWixHQUFxQixzQkFBUUQsV0FBUixDQUFyQjtBQUNBLFVBQU8sSUFBUDtBQUNBLEdBSEQ7O0FBQUEsV0FBd0JFLGVBQXhCO0FBQUE7QUFBQTs7QUFBQSxTQUF3QkEsZUFBeEI7QUFBQTtBQUpjLEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZW5naW5lIGZyb20gJy4vZW5naW5lJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXHQnYWZ0ZXInOiBbICdob29rczpsb2c6c3RhcnQ6YWZ0ZXInIF0sXG5cdCdtb2Rlcyc6IFsgJ3NlcnZlcicgXSxcblxuXHQnc3RhcnQnOiBhc3luYyBmdW5jdGlvbiBzdGFydEVuZ2luZUhvb2sgKCBhcHBsaWNhdGlvbiApIHtcblx0XHRhcHBsaWNhdGlvbi5lbmdpbmUgPSBlbmdpbmUoIGFwcGxpY2F0aW9uICk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn07XG4iXX0=
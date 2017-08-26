'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CODES = {
	'arrow-up': 38,
	'arrow-right': 39,
	'arrow-down': 40,
	'arrow-left': 37,
	'esc': 27,
	'space': 32,
	'c': 67,
	'd': 68,
	'e': 69,
	'f': 70,
	'h': 72,
	'i': 73,
	'o': 79,
	'k': 75,
	'l': 76,
	'm': 77,
	'n': 78,
	'r': 82,
	't': 84
};

var Shortcut = function () {
	function Shortcut(_ref) {
		var action = _ref.action,
		    character = _ref.character,
		    description = _ref.description,
		    modifiers = _ref.modifiers;
		(0, _classCallCheck3.default)(this, Shortcut);

		this.character = character;
		this.code = CODES[character];
		this.action = action;
		this.key = this.action.key;
		this.active = 'document' in global;
		this.description = description;
		this.modifiers = modifiers || ['ctrlKey', 'altKey'];
		this.bind = this.bind.bind(this);
	}

	(0, _createClass3.default)(Shortcut, [{
		key: 'bind',
		value: function bind(store) {
			var _this = this;

			if (!this.active) {
				return;
			}
			global.addEventListener('keydown', function (e) {
				if (!_this.modifiers.every(function (m) {
					return e[m];
				})) {
					return;
				}

				var code = e.data ? e.data.keyCode : e.keyCode;

				if (code !== _this.code) {
					return;
				}

				e.preventDefault();
				store.dispatch(_this.action());
			});
		}
	}, {
		key: 'toString',
		value: function toString() {
			var keys = [].concat((0, _toConsumableArray3.default)(this.modifiers), [this.character]).map(function (c) {
				return c.replace('Key', '');
			});
			return '[' + keys.join('+') + ']';
		}
	}]);
	return Shortcut;
}();

exports.default = Shortcut;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi91dGlscy9zaG9ydGN1dC5qcyJdLCJuYW1lcyI6WyJDT0RFUyIsIlNob3J0Y3V0IiwiYWN0aW9uIiwiY2hhcmFjdGVyIiwiZGVzY3JpcHRpb24iLCJtb2RpZmllcnMiLCJjb2RlIiwia2V5IiwiYWN0aXZlIiwiZ2xvYmFsIiwiYmluZCIsInN0b3JlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZXJ5IiwiZSIsIm0iLCJkYXRhIiwia2V5Q29kZSIsInByZXZlbnREZWZhdWx0IiwiZGlzcGF0Y2giLCJrZXlzIiwibWFwIiwiYyIsInJlcGxhY2UiLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUVBLElBQU1BLFFBQVE7QUFDYixhQUFZLEVBREM7QUFFYixnQkFBZSxFQUZGO0FBR2IsZUFBYyxFQUhEO0FBSWIsZUFBYyxFQUpEO0FBS2IsUUFBTyxFQUxNO0FBTWIsVUFBUyxFQU5JO0FBT2IsTUFBSyxFQVBRO0FBUWIsTUFBSyxFQVJRO0FBU2IsTUFBSyxFQVRRO0FBVWIsTUFBSyxFQVZRO0FBV2IsTUFBSyxFQVhRO0FBWWIsTUFBSyxFQVpRO0FBYWIsTUFBSyxFQWJRO0FBY2IsTUFBSyxFQWRRO0FBZWIsTUFBSyxFQWZRO0FBZ0JiLE1BQUssRUFoQlE7QUFpQmIsTUFBSyxFQWpCUTtBQWtCYixNQUFLLEVBbEJRO0FBbUJiLE1BQUs7QUFuQlEsQ0FBZDs7SUFzQnFCQyxRO0FBQ3BCLHlCQUF5RDtBQUFBLE1BQTVDQyxNQUE0QyxRQUE1Q0EsTUFBNEM7QUFBQSxNQUFwQ0MsU0FBb0MsUUFBcENBLFNBQW9DO0FBQUEsTUFBekJDLFdBQXlCLFFBQXpCQSxXQUF5QjtBQUFBLE1BQVpDLFNBQVksUUFBWkEsU0FBWTtBQUFBOztBQUN4RCxPQUFLRixTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLE9BQUtHLElBQUwsR0FBWU4sTUFBTUcsU0FBTixDQUFaO0FBQ0EsT0FBS0QsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsT0FBS0ssR0FBTCxHQUFXLEtBQUtMLE1BQUwsQ0FBWUssR0FBdkI7QUFDQSxPQUFLQyxNQUFMLEdBQWUsY0FBY0MsTUFBN0I7QUFDQSxPQUFLTCxXQUFMLEdBQW1CQSxXQUFuQjtBQUNBLE9BQUtDLFNBQUwsR0FBaUJBLGFBQWEsQ0FBQyxTQUFELEVBQVksUUFBWixDQUE5QjtBQUNBLE9BQUtLLElBQUwsR0FBWSxLQUFLQSxJQUFMLENBQVVBLElBQVYsQ0FBZSxJQUFmLENBQVo7QUFDQTs7Ozt1QkFFSUMsSyxFQUFPO0FBQUE7O0FBQ1gsT0FBSSxDQUFDLEtBQUtILE1BQVYsRUFBa0I7QUFDakI7QUFDQTtBQUNEQyxVQUFPRyxnQkFBUCxDQUF3QixTQUF4QixFQUFtQyxhQUFLO0FBQ3ZDLFFBQUksQ0FBQyxNQUFLUCxTQUFMLENBQWVRLEtBQWYsQ0FBcUI7QUFBQSxZQUFLQyxFQUFFQyxDQUFGLENBQUw7QUFBQSxLQUFyQixDQUFMLEVBQXNDO0FBQ3JDO0FBQ0E7O0FBRUQsUUFBTVQsT0FBT1EsRUFBRUUsSUFBRixHQUFTRixFQUFFRSxJQUFGLENBQU9DLE9BQWhCLEdBQTBCSCxFQUFFRyxPQUF6Qzs7QUFFQSxRQUFJWCxTQUFTLE1BQUtBLElBQWxCLEVBQXdCO0FBQ3ZCO0FBQ0E7O0FBRURRLE1BQUVJLGNBQUY7QUFDQVAsVUFBTVEsUUFBTixDQUFlLE1BQUtqQixNQUFMLEVBQWY7QUFDQSxJQWJEO0FBY0E7Ozs2QkFFVTtBQUNWLE9BQU1rQixPQUFPLDJDQUFJLEtBQUtmLFNBQVQsSUFBb0IsS0FBS0YsU0FBekIsR0FBb0NrQixHQUFwQyxDQUF3QztBQUFBLFdBQUtDLEVBQUVDLE9BQUYsQ0FBVSxLQUFWLEVBQWlCLEVBQWpCLENBQUw7QUFBQSxJQUF4QyxDQUFiO0FBQ0EsZ0JBQVdILEtBQUtJLElBQUwsQ0FBVSxHQUFWLENBQVg7QUFDQTs7Ozs7a0JBbkNtQnZCLFEiLCJmaWxlIjoic2hvcnRjdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXNzZXJ0IGZyb20gJ2Fzc2VydCc7XG5cbmNvbnN0IENPREVTID0ge1xuXHQnYXJyb3ctdXAnOiAzOCxcblx0J2Fycm93LXJpZ2h0JzogMzksXG5cdCdhcnJvdy1kb3duJzogNDAsXG5cdCdhcnJvdy1sZWZ0JzogMzcsXG5cdCdlc2MnOiAyNyxcblx0J3NwYWNlJzogMzIsXG5cdCdjJzogNjcsXG5cdCdkJzogNjgsXG5cdCdlJzogNjksXG5cdCdmJzogNzAsXG5cdCdoJzogNzIsXG5cdCdpJzogNzMsXG5cdCdvJzogNzksXG5cdCdrJzogNzUsXG5cdCdsJzogNzYsXG5cdCdtJzogNzcsXG5cdCduJzogNzgsXG5cdCdyJzogODIsXG5cdCd0JzogODRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3J0Y3V0IHtcblx0Y29uc3RydWN0b3Ioe2FjdGlvbiwgY2hhcmFjdGVyLCBkZXNjcmlwdGlvbiwgbW9kaWZpZXJzfSkge1xuXHRcdHRoaXMuY2hhcmFjdGVyID0gY2hhcmFjdGVyO1xuXHRcdHRoaXMuY29kZSA9IENPREVTW2NoYXJhY3Rlcl07XG5cdFx0dGhpcy5hY3Rpb24gPSBhY3Rpb247XG5cdFx0dGhpcy5rZXkgPSB0aGlzLmFjdGlvbi5rZXk7XG5cdFx0dGhpcy5hY3RpdmUgPSAoJ2RvY3VtZW50JyBpbiBnbG9iYWwpO1xuXHRcdHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcblx0XHR0aGlzLm1vZGlmaWVycyA9IG1vZGlmaWVycyB8fCBbJ2N0cmxLZXknLCAnYWx0S2V5J107XG5cdFx0dGhpcy5iaW5kID0gdGhpcy5iaW5kLmJpbmQodGhpcyk7XG5cdH1cblxuXHRiaW5kKHN0b3JlKSB7XG5cdFx0aWYgKCF0aGlzLmFjdGl2ZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xuXHRcdFx0aWYgKCF0aGlzLm1vZGlmaWVycy5ldmVyeShtID0+IGVbbV0pKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgY29kZSA9IGUuZGF0YSA/IGUuZGF0YS5rZXlDb2RlIDogZS5rZXlDb2RlO1xuXG5cdFx0XHRpZiAoY29kZSAhPT0gdGhpcy5jb2RlKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0c3RvcmUuZGlzcGF0Y2godGhpcy5hY3Rpb24oKSk7XG5cdFx0fSk7XG5cdH1cblxuXHR0b1N0cmluZygpIHtcblx0XHRjb25zdCBrZXlzID0gWy4uLnRoaXMubW9kaWZpZXJzLCB0aGlzLmNoYXJhY3Rlcl0ubWFwKGMgPT4gYy5yZXBsYWNlKCdLZXknLCAnJykpO1xuXHRcdHJldHVybiBgWyR7a2V5cy5qb2luKCcrJyl9XWA7XG5cdH1cbn1cbiJdfQ==
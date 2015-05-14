'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _lruCache = require('lru-cache');

var _lruCache2 = _interopRequireDefault(_lruCache);

var Cache = (function () {
	function Cache() {
		_classCallCheck(this, Cache);

		this.wait = true;
		this.after = ['hooks:log:start:after'];
	}

	_createClass(Cache, [{
		key: 'start',
		value: function start(application) {
			return regeneratorRuntime.async(function start$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						application.cache = (0, _lruCache2['default'])(this.configuration);

					case 1:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this);
		}
	}]);

	return Cache;
})();

exports['default'] = new Cache();
module.exports = exports['default'];
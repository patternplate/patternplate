'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = patternRouteFactory;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _stripAnsi = require('strip-ansi');

var _stripAnsi2 = _interopRequireDefault(_stripAnsi);

var _urlQuery = require('../utils/url-query');

var _urlQuery2 = _interopRequireDefault(_urlQuery);

var _getPatternDemo = require('@patternplate/server/library/get-pattern-demo');

var _getPatternDemo2 = _interopRequireDefault(_getPatternDemo);

var _getPatternFile = require('@patternplate/server/library/get-pattern-file');

var _getPatternFile2 = _interopRequireDefault(_getPatternFile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Function.prototype.$asyncbind = function $asyncbind(self, catcher) {
	"use strict";

	if (!Function.prototype.$asyncbind) {
		Object.defineProperty(Function.prototype, "$asyncbind", {
			value: $asyncbind,
			enumerable: false,
			configurable: true,
			writable: true
		});
	}

	if (!$asyncbind.trampoline) {
		$asyncbind.trampoline = function trampoline(t, x, s, e, u) {
			return function b(q) {
				while (q) {
					if (q.then) {
						q = q.then(b, e);
						return u ? undefined : q;
					}

					try {
						if (q.pop) {
							if (q.length) return q.pop() ? x.call(t) : q;
							q = s;
						} else q = q.call(t);
					} catch (r) {
						return e(r);
					}
				}
			};
		};
	}

	if (!$asyncbind.LazyThenable) {
		$asyncbind.LazyThenable = function () {
			function isThenable(obj) {
				return obj && obj instanceof Object && typeof obj.then === "function";
			}

			function resolution(p, r, how) {
				try {
					var x = how ? how(r) : r;
					if (p === x) return p.reject(new TypeError("Promise resolution loop"));

					if (isThenable(x)) {
						x.then(function (y) {
							resolution(p, y);
						}, function (e) {
							p.reject(e);
						});
					} else {
						p.resolve(x);
					}
				} catch (ex) {
					p.reject(ex);
				}
			}

			function Chained() {}

			;
			Chained.prototype = {
				resolve: _unchained,
				reject: _unchained,
				then: thenChain
			};

			function _unchained(v) {}

			function thenChain(res, rej) {
				this.resolve = res;
				this.reject = rej;
			}

			function then(res, rej) {
				var chain = new Chained();

				try {
					this._resolver(function (value) {
						return isThenable(value) ? value.then(res, rej) : resolution(chain, value, res);
					}, function (ex) {
						resolution(chain, ex, rej);
					});
				} catch (ex) {
					resolution(chain, ex, rej);
				}

				return chain;
			}

			function Thenable(resolver) {
				this._resolver = resolver;
				this.then = then;
			}

			;

			Thenable.resolve = function (v) {
				return Thenable.isThenable(v) ? v : {
					then: function then(resolve) {
						return resolve(v);
					}
				};
			};

			Thenable.isThenable = isThenable;
			return Thenable;
		}();

		$asyncbind.EagerThenable = $asyncbind.Thenable = ($asyncbind.EagerThenableFactory = function (tick) {
			tick = tick || (typeof process === 'undefined' ? 'undefined' : _typeof(process)) === "object" && process.nextTick || typeof setImmediate === "function" && setImmediate || function (f) {
				setTimeout(f, 0);
			};

			var soon = function () {
				var fq = [],
				    fqStart = 0,
				    bufferSize = 1024;

				function callQueue() {
					while (fq.length - fqStart) {
						try {
							fq[fqStart]();
						} catch (ex) {}

						fq[fqStart++] = undefined;

						if (fqStart === bufferSize) {
							fq.splice(0, bufferSize);
							fqStart = 0;
						}
					}
				}

				return function (fn) {
					fq.push(fn);
					if (fq.length - fqStart === 1) tick(callQueue);
				};
			}();

			function Zousan(func) {
				if (func) {
					var me = this;
					func(function (arg) {
						me.resolve(arg);
					}, function (arg) {
						me.reject(arg);
					});
				}
			}

			Zousan.prototype = {
				resolve: function resolve(value) {
					if (this.state !== undefined) return;
					if (value === this) return this.reject(new TypeError("Attempt to resolve promise with self"));
					var me = this;

					if (value && (typeof value === "function" || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === "object")) {
						try {
							var first = 0;
							var then = value.then;

							if (typeof then === "function") {
								then.call(value, function (ra) {
									if (!first++) {
										me.resolve(ra);
									}
								}, function (rr) {
									if (!first++) {
										me.reject(rr);
									}
								});
								return;
							}
						} catch (e) {
							if (!first) this.reject(e);
							return;
						}
					}

					this.state = STATE_FULFILLED;
					this.v = value;
					if (me.c) soon(function () {
						for (var n = 0, l = me.c.length; n < l; n++) {
							STATE_FULFILLED(me.c[n], value);
						}
					});
				},
				reject: function reject(reason) {
					if (this.state !== undefined) return;
					this.state = STATE_REJECTED;
					this.v = reason;
					var clients = this.c;
					if (clients) soon(function () {
						for (var n = 0, l = clients.length; n < l; n++) {
							STATE_REJECTED(clients[n], reason);
						}
					});
				},
				then: function then(onF, onR) {
					var p = new Zousan();
					var client = {
						y: onF,
						n: onR,
						p: p
					};

					if (this.state === undefined) {
						if (this.c) this.c.push(client);else this.c = [client];
					} else {
						var s = this.state,
						    a = this.v;
						soon(function () {
							s(client, a);
						});
					}

					return p;
				}
			};

			function STATE_FULFILLED(c, arg) {
				if (typeof c.y === "function") {
					try {
						var yret = c.y.call(undefined, arg);
						c.p.resolve(yret);
					} catch (err) {
						c.p.reject(err);
					}
				} else c.p.resolve(arg);
			}

			function STATE_REJECTED(c, reason) {
				if (typeof c.n === "function") {
					try {
						var yret = c.n.call(undefined, reason);
						c.p.resolve(yret);
					} catch (err) {
						c.p.reject(err);
					}
				} else c.p.reject(reason);
			}

			Zousan.resolve = function (val) {
				if (val && val instanceof Zousan) return val;
				var z = new Zousan();
				z.resolve(val);
				return z;
			};

			Zousan.reject = function (err) {
				if (err && err instanceof Zousan) return err;
				var z = new Zousan();
				z.reject(err);
				return z;
			};

			Zousan.version = "2.3.3-nodent";
			return Zousan;
		})();
	}

	var resolver = this;

	switch (catcher) {
		case true:
			return new $asyncbind.Thenable(boundThen);

		case 0:
			return new $asyncbind.LazyThenable(boundThen);

		case undefined:
			boundThen.then = boundThen;
			return boundThen;

		default:
			return function () {
				try {
					return resolver.apply(self, arguments);
				} catch (ex) {
					return catcher(ex);
				}
			};
	}

	function boundThen() {
		return resolver.apply(self, arguments);
	}
};

function withErrorHandling(fn) {
	return function () {
		var $args = arguments;return new Promise(function ($return, $error) {
			var result;
			var $Try_3_Post = function () {
				return $return();
			}.$asyncbind(this, $error);var $Try_3_Catch = function (error) {
				return $return([error]);
			}.$asyncbind(this, $error);
			try {
				return fn.apply(undefined, $args).then(function ($await_5) {
					result = $await_5;
					return $return([null, result]);
				}.$asyncbind(this, $Try_3_Catch), $Try_3_Catch);
			} catch (error) {
				$Try_3_Catch(error)
			}
		}.$asyncbind(this));
	};
}

function getPatternId(raw) {
	var parsed = _path2.default.parse(raw);
	var extension = getPatternExtension(raw);
	var base = _path2.default.basename(raw, _path2.default.extname(raw));

	if (base === 'index' && extension !== 'json') {
		return _path2.default.dirname(raw);
	}

	return _path2.default.dirname(raw) + '/' + _path2.default.basename(parsed.base, _path2.default.extname(parsed.base));
}

function getPatternExtension(raw) {
	return _path2.default.extname(raw).slice(1) || 'html';
}

var getPatternDemoOrError = withErrorHandling(_getPatternDemo2.default);
var getPatternFileOrError = withErrorHandling(_getPatternFile2.default);

function patternRouteFactory(application) {
	return function patternRoute() {
		return new Promise(function ($return, $error) {
			var server, parsed, id, extension, type, errorType, _parsed$query$environ, environment, filters, _ref, _ref2, _error, demo, err, _ref3, _ref4, error, file, _err;

			server = application.parent.server;
			parsed = _urlQuery2.default.parse(this.params.id);
			id = getPatternId(parsed.pathname);
			extension = getPatternExtension(parsed.pathname);
			type = this.accepts('text', 'html', 'json') || extension;
			errorType = type === 'json' ? 'json' : 'html';
			_parsed$query$environ = parsed.query.environment, environment = _parsed$query$environ === undefined ? 'index' : _parsed$query$environ;


			filters = {
				outFormats: [extension],
				environments: [environment].filter(Boolean)
			};

			if (type === 'html' && extension === 'html') {
				return getPatternDemoOrError(server, id, filters, environment, {
					mount: this.query.mount !== 'false'
				}, '/' + this.request.url).then(function ($await_6) {
					_ref = $await_6, _ref2 = _slicedToArray(_ref, 2), _error = _ref2[0], demo = _ref2[1];


					if (_error) {
						this.code = 500;
						this.body = [_error.message, (0, _stripAnsi2.default)(_error.codeFrame)].join('\n');
						return $return();
					}

					if (demo === null) {
						err = new Error('Could not find demo for ' + id + '.');
						err.file = __filename;
						this.throw(404, err);
						return $return();
					}

					this.type = 'html';
					this.body = demo;
					return $return();
				}.$asyncbind(this, $error), $error);
			}

			return getPatternFileOrError(application.parent.server, id, filters, extension, environment).then(function ($await_7) {
				_ref3 = $await_7, _ref4 = _slicedToArray(_ref3, 2), error = _ref4[0], file = _ref4[1];


				if (error) {
					error.expose = true;
					this.type = errorType;
					this.throw(500, error);
				}

				if (file === null) {
					this.type = errorType;
					_err = new Error('Could not find file {index,demo}.' + extension + ' for ' + id + '.');
					_err.file = __filename;
					this.throw(404, _err);
				}

				this.type = extension;
				this.body = file;
				return $return();
			}.$asyncbind(this, $error), $error);
		}.$asyncbind(this));
	};
}
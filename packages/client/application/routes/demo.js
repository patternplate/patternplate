'use strict';

const _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _slicedToArray = function () { function sliceIterator(arr, i) { const _arr = []; let _n = true; let _d = false; let _e; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i.return) _i.return(); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); }  throw new TypeError("Invalid attempt to destructure non-iterable instance");  }; }();

exports.default = patternRouteFactory;

const _path = require('path');

const _path2 = _interopRequireDefault(_path);

const _stripAnsi = require('strip-ansi');

const _stripAnsi2 = _interopRequireDefault(_stripAnsi);

const _urlQuery = require('../utils/url-query');

const _urlQuery2 = _interopRequireDefault(_urlQuery);

const _getPatternDemo = require('@patternplate/server/library/get-pattern-demo');

const _getPatternDemo2 = _interopRequireDefault(_getPatternDemo);

const _getPatternFile = require('@patternplate/server/library/get-pattern-file');

const _getPatternFile2 = _interopRequireDefault(_getPatternFile);

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
          const x = how ? how(r) : r;
          if (p === x) return p.reject(new TypeError("Promise resolution loop"));

          if (isThenable(x)) {
            x.then((y) => {
              resolution(p, y);
            }, (e) => {
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
        const chain = new Chained();

        try {
          this._resolver((value) => {
            return isThenable(value) ? value.then(res, rej) : resolution(chain, value, res);
          }, (ex) => {
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

      const soon = function () {
        let fq = [],
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
          const me = this;
          func((arg) => {
            me.resolve(arg);
          }, (arg) => {
            me.reject(arg);
          });
        }
      }

      Zousan.prototype = {
        resolve: function resolve(value) {
          if (this.state !== undefined) return;
          if (value === this) return this.reject(new TypeError("Attempt to resolve promise with self"));
          const me = this;

          if (value && (typeof value === "function" || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === "object")) {
            try {
              var first = 0;
              const then = value.then;

              if (typeof then === "function") {
                then.call(value, (ra) => {
                  if (!first++) {
                    me.resolve(ra);
                  }
                }, (rr) => {
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
          if (me.c) soon(() => {
            for (let n = 0, l = me.c.length; n < l; n++) {
              STATE_FULFILLED(me.c[n], value);
            }
          });
        },
        reject: function reject(reason) {
          if (this.state !== undefined) return;
          this.state = STATE_REJECTED;
          this.v = reason;
          const clients = this.c;
          if (clients) soon(() => {
            for (let n = 0, l = clients.length; n < l; n++) {
              STATE_REJECTED(clients[n], reason);
            }
          });
        },
        then: function then(onF, onR) {
          const p = new Zousan();
          const client = {
            y: onF,
            n: onR,
            p
          };

          if (this.state === undefined) {
            if (this.c) this.c.push(client);else this.c = [client];
          } else {
            let s = this.state,
                a = this.v;
            soon(() => {
              s(client, a);
            });
          }

          return p;
        }
      };

      function STATE_FULFILLED(c, arg) {
        if (typeof c.y === "function") {
          try {
            const yret = c.y.call(undefined, arg);
            c.p.resolve(yret);
          } catch (err) {
            c.p.reject(err);
          }
        } else c.p.resolve(arg);
      }

      function STATE_REJECTED(c, reason) {
        if (typeof c.n === "function") {
          try {
            const yret = c.n.call(undefined, reason);
            c.p.resolve(yret);
          } catch (err) {
            c.p.reject(err);
          }
        } else c.p.reject(reason);
      }

      Zousan.resolve = function (val) {
        if (val && val instanceof Zousan) return val;
        const z = new Zousan();
        z.resolve(val);
        return z;
      };

      Zousan.reject = function (err) {
        if (err && err instanceof Zousan) return err;
        const z = new Zousan();
        z.reject(err);
        return z;
      };

      Zousan.version = "2.3.3-nodent";
      return Zousan;
    })();
  }

  const resolver = this;

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
    const $args = arguments;return new Promise(function ($return, $error) {
      let result;
      const $Try_3_Post = function () {
        return $return();
      }.$asyncbind(this, $error);const $Try_3_Catch = function (error) {
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
  const parsed = _path2.default.parse(raw);
  const extension = getPatternExtension(raw);
  const base = _path2.default.basename(raw, _path2.default.extname(raw));

  if (base === 'index' && extension !== 'json') {
    return _path2.default.dirname(raw);
  }

  return _path2.default.dirname(raw) + '/' + _path2.default.basename(parsed.base, _path2.default.extname(parsed.base));
}

function getPatternExtension(raw) {
  return _path2.default.extname(raw).slice(1) || 'html';
}

const getPatternDemoOrError = withErrorHandling(_getPatternDemo2.default);
const getPatternFileOrError = withErrorHandling(_getPatternFile2.default);

function patternRouteFactory(application) {
  return function patternRoute() {
    return new Promise(function ($return, $error) {
      let server, parsed, id, extension, type, errorType, _parsed$query$environ, environment, filters, _ref, _ref2, _error, demo, err, _ref3, _ref4, error, file, _err;

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
            console.log(_error);
            this.status = 500;
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
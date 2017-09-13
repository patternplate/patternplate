'use strict';

const _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _fs = require('fs');

const _path = require('path');

const _fs2 = require('mz/fs');

const _pathExists = require('path-exists');

const _pathExists2 = _interopRequireDefault(_pathExists);

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

function devRequire(id) {
  const fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (process.env.NODE_ENV !== 'production') {
    return require(id);
  }
  return fallback;
}

function styleRouteFactory(application) {
  const cwd = application.runtime.cwd;


  return function styleRoute() {
    return new Promise(function ($return, $error) {
      let staticPath, name, path, less, Autoprefix, Cleancss, NpmImport, autoprefix, cleancss, npmimport, buffer, results;

      staticPath = (0, _path.resolve)(cwd, 'assets', 'style', this.params.path);

      this.type = 'css';

      return (0, _pathExists2.default)(staticPath).then(function ($await_2) {
        if ($await_2) {
          this.body = (0, _fs.createReadStream)(staticPath);
          return $return();
        }

        if (process.env.NODE_ENV === 'production') {
          this.throw(404);
        }

        name = (this.params.path || '').replace('.css', '.less');
        path = (0, _path.resolve)(application.runtime.cwd, 'assets', 'style', name);

        return (0, _pathExists2.default)(path).then(function ($await_3) {
          if (!$await_3) {
            this.throw(404);
          }

          const $Try_1_Post = function () {
            return $return();
          }.$asyncbind(this, $error);const $Try_1_Catch = function (err) {
            application.log.error(err);
            this.throw(err, 500);
            return $Try_1_Post();
          }.$asyncbind(this, $error);try {
            less = devRequire('less');
            Autoprefix = devRequire('less-plugin-autoprefix', () => {});
            Cleancss = devRequire('less-plugin-clean-css', () => {});
            NpmImport = devRequire('less-plugin-npm-import', () => {});

            autoprefix = new Autoprefix({ browser: ['IE 8', 'last 2 versions'] });
            cleancss = new Cleancss({ advanced: true });
            npmimport = new NpmImport();

            return (0, _fs2.readFile)(path).then(function ($await_4) {
              buffer = $await_4;
              return less.render(buffer.toString(), {
                paths: [(0, _path.dirname)(path)],
                plugins: [npmimport, autoprefix, cleancss]
              }).then(function ($await_5) {
                results = $await_5;

                this.type = 'css';
                this.body = results.css;
                return $Try_1_Post();
              }.$asyncbind(this, $Try_1_Catch), $Try_1_Catch);
            }.$asyncbind(this, $Try_1_Catch), $Try_1_Catch);
          } catch (err) {
            $Try_1_Catch(err)
          }
        }.$asyncbind(this, $error), $error);
      }.$asyncbind(this, $error), $error);
    }.$asyncbind(this));
  };
}

exports.default = styleRouteFactory;
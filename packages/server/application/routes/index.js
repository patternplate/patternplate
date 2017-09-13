'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const watch = (() => {
  const _ref2 = _asyncToGenerator(function* (context, application) {
    const stream = new _stream.PassThrough();
    const send = function send(type, data) {
      return stream.write(sse(type, data));
    };

    const heartbeat = setInterval(() => {
      send('heartbeat', Date.now());
    }, 1000);

    const end = function end() {
      clearInterval(heartbeat);
      context.res.end();
    };

    context.type = 'text/event-stream';
    context.req.on('close', end);
    context.req.on('finish', end);
    context.req.on('error', (error) => {
      console.error(error);
      end();
    });

    if (application.watcher) {
      let previous = yield (0, _getPatternTree.getPatternTree)('./patterns');

      application.watcher.on('all', (() => {
        const _ref3 = _asyncToGenerator(function* (type, file) {
          send('change', { type, file });
          const patterns = yield (0, _getPatternTree.getPatternTree)('./patterns');
          (yield affected(file, patterns, previous)).forEach((pattern) => {
            return send('reload', { pattern });
          });
          previous = patterns;
        });

        return function (_x3, _x4) {
          return _ref3.apply(this, arguments);
        };
      })());
    }

    return stream;
  });

  return function watch(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
})();

exports.default = indexRouteFactory;

const _path = require('path');

const _path2 = _interopRequireDefault(_path);

var _stream = require('stream');

const _lodash = require('lodash');

const _getSchema = require('../../library/get-schema');

const _getSchema2 = _interopRequireDefault(_getSchema);

var _getPatternTree = require('../../library/utilities/get-pattern-tree');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; }  return Array.from(arr);  }

function _asyncToGenerator(fn) { return function () { const gen = fn.apply(this, arguments); return new Promise((resolve, reject) => { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then((value) => { step("next", value); }, (err) => { step("throw", err); }); } } return step("next"); }); }; }

function indexRouteFactory(application) {
  return (() => {
    const _ref = _asyncToGenerator(function* () {
      switch (this.accepts('json', 'text/event-stream')) {
        case 'text/event-stream':
          {
            this.body = yield watch(this, application);
            return;
          }
        case 'json':
        default:
          this.type = 'json';
          this.body = yield (0, _getSchema2.default)(application.parent, application.client, application);

      }
    });

    function indexRoute() {
      return _ref.apply(this, arguments);
    }

    return indexRoute;
  })();
}

function sse(event, data) {
  return `event:${event}\ndata: ${JSON.stringify(data)}\n\n`;
}

function affected(file, patterns, previous) {
  const b = strip(file);
  const basename = _path2.default.basename(file);

  if (!['demo', 'index'].includes(b) && basename !== 'pattern.json') {
    return [];
  }

  const guess = _path2.default.dirname(file.split(_path2.default.sep).slice(1).join('/'));

  const match = find(patterns, guess);
  const prev = find(previous, guess);

  if (!match) {
    return [];
  }

  if (basename === 'pattern.json' && (0, _lodash.isEqual)(prev.manifest.patterns, match.manifest.patterns)) {
    return [];
  }

  if (b === 'demo') {
    return [match.id];
  }

  const dependents = [].concat(_toConsumableArray(deps(match, patterns, 'dependents')), _toConsumableArray(deps(match, patterns, 'demoDependents')));

  return [match.id].concat(_toConsumableArray(dependents));
}

function deps(pattern, patterns, key) {
  return pattern[key].reduce((d, p) => {
    const match = find(patterns, p);
    return [].concat(_toConsumableArray(d), [p], _toConsumableArray(deps(match, patterns, key)));
  }, []);
}

function find(tree, id) {
  const depth = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];

  if (!tree || !id) {
    return;
  }

  const frags = id.split('/').filter(Boolean);
  const sub = frags.slice(0, depth).map(strip);
  const match = tree.children.find(child => child.path.every((s, i) => sub[i] === strip(s)));

  if (match && depth < frags.length) {
    return find(match, id, depth + 1);
  }

  return match;
}

function strip(b) {
  return _path2.default.basename(b, _path2.default.extname(b));
}
module.exports = exports.default;
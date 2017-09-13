'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _slicedToArray = function () { function sliceIterator(arr, i) { const _arr = []; let _n = true; let _d = false; let _e; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i.return) _i.return(); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); }  throw new TypeError("Invalid attempt to destructure non-iterable instance");  }; }();

const _path = require('path');

const _path2 = _interopRequireDefault(_path);

const _globby = require('globby');

const _globby2 = _interopRequireDefault(_globby);

const _sander = require('sander');

const sander = _interopRequireWildcard(_sander);

const _getPatternManifests = require('../../../library/utilities/get-pattern-manifests');

const _getPatternManifests2 = _interopRequireDefault(_getPatternManifests);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; }  const newObj = {}; if (obj != null) { for (const key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj;  }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { const gen = fn.apply(this, arguments); return new Promise((resolve, reject) => { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then((value) => { step("next", value); }, (err) => { step("throw", err); }); } } return step("next"); }); }; }

const DETECT = /(?:@import\s+|import(?:.+?)from\s+|require\()['"]([^'"]+)['"]\)?(?:;?)/g;
const REWRITE = /(@import\s+|import(?:.+?)from\s+|require\()('|")([^'"]+)('|")(\)?)(;?)/;

exports.default = (() => {
  const _ref = _asyncToGenerator(function* (application) {
    const _ref2 = yield (0, _getPatternManifests2.default)('', './patterns', {
      cache: application.cache
    });

    const _ref3 = _slicedToArray(_ref2, 2);

    const errors = _ref3[0];
    const manifests = _ref3[1];


    if (errors) {
      throw new Error(errors.map((e) => {
        return e.message;
      }).join('\n'));
    }

    return yield Promise.all(manifests.map(rewrite({
      base: _path2.default.resolve('./patterns')
    })));
  });

  function nodeify(_x) {
    return _ref.apply(this, arguments);
  }

  return nodeify;
})();

function rewrite(options) {
  const base = _path2.default.join.bind(null, options.base);

  return (() => {
    const _ref4 = _asyncToGenerator(function* (manifest) {
      const pattern = base.bind(null, manifest.id);

      const dictionary = getDictionary(manifest);
      const translateManifest = manifestTranslator(dictionary);
      const translate = translator(dictionary);

      const manifestSource = JSON.stringify(translateManifest(manifest), null, '  ');
      const files = yield (0, _globby2.default)(['index.*', 'demo.*', '!index.md'], {
        cwd: base(manifest.id)
      });
      yield sander.writeFile(pattern('pattern.json'), manifestSource);

      yield Promise.all(files.map((() => {
        const _ref5 = _asyncToGenerator(function* (file) {
          const buffer = yield sander.readFile(pattern(file));
          const source = buffer.toString();
          const result = translate(source);
          return yield sander.writeFile(pattern(file), Buffer.from(result));
        });

        return function (_x3) {
          return _ref5.apply(this, arguments);
        };
      })()));
    });

    return function (_x2) {
      return _ref4.apply(this, arguments);
    };
  })();
}

function getDictionary(manifest) {
  return Object.entries(manifest.patterns || {}).reduce((results, entry) => {
    const _entry = _slicedToArray(entry, 2);

    const name = _entry[0];
    const id = _entry[1];

    const rewritten = _path2.default.relative(manifest.id, id);
    results[name] = rewritten;
    return results;
  }, {});
}

function manifestTranslator(dictionary) {
  return manifest => {
    return {
      name: manifest.name,
      displayName: manifest.displayName,
      version: manifest.version,
      tags: manifest.tags,
      flag: manifest.flag,
      options: manifest.options,
      patterns: Object.keys(manifest.patterns || {}).reduce((results, name) => {
        results[dictionary[name]] = manifest.patterns[name];
        return results;
      }, {})
    };
  };
}

function translator(dictionary) {
  return source => source.replace(DETECT, (match, name) => {
    if (!(name in dictionary)) {
      return match;
    }
    return match.replace(REWRITE, `$1$2${dictionary[name]}$4$5$6`);
  });
}
module.exports = exports.default;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDocsTree = exports.getDocs = undefined;

const getDocs = exports.getDocs = (() => {
  const _ref = _asyncToGenerator(function* (base) {
    const resolve = _path2.default.resolve.bind(null, base, '@docs');
    const cwd = resolve('.');

    if (!(yield (0, _pathExists2.default)(cwd))) {
      return [];
    }

    const files = yield (0, _globby2.default)(`**/*.md`, { cwd });

    return yield Promise.all(files.map((() => {
      const _ref2 = _asyncToGenerator(function* (file) {
        const read = function read(f) {
          return sander.readFile(resolve(f));
        };
        const contents = String((yield read(file)));
        const ast = (0, _remark2.default)().parse(contents);
        const first = (0, _unistUtilFind2.default)(ast, { type: 'heading', depth: 1 });

        const front = (0, _frontMatter2.default)(contents).attributes;
        const manifest = (0, _lodash.merge)({}, DEFAULT_MANIFEST, front);

        const b = _path2.default.basename(file, _path2.default.extname(file)).toLowerCase();
        const name = b === 'readme' ? _path2.default.dirname(file) : b;

        manifest.name = first ? first.children[0].value : name;
        manifest.displayName = manifest.displayName || manifest.name;

        return {
          contents,
          path: file,
          manifest
        };
      });

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    })()));
  });

  return function getDocs(_x) {
    return _ref.apply(this, arguments);
  };
})();

const getDocsTree = exports.getDocsTree = (() => {
  const _ref3 = _asyncToGenerator(function* (base) {
    return treeFromPaths((yield getDocs(base)));
  });

  return function getDocsTree(_x3) {
    return _ref3.apply(this, arguments);
  };
})();

const treeFromPaths = (() => {
  const _ref4 = _asyncToGenerator(function* (files) {
    // Legacy
    const contents = yield (0, _getReadme2.default)('.', './patterns');

    const tree = {
      id: 'root',
      children: [],
      contents,
      manifest: (0, _lodash.merge)({}, DEFAULT_MANIFEST, {
        name: 'readme',
        displayName: 'Documentation'
      })
    };

    files.forEach((file) => {
      const parts = file.path.split('/');
      let level = tree;

      parts.forEach((part, i) => {
        const existing = level.children.find((c) => {
          return c.name === part;
        });

        if (existing) {
          level = existing;
          return;
        }

        const id = parts.slice(0, i + 1).join('/');
        const sid = _path2.default.join(_path2.default.dirname(id), _path2.default.basename(id, _path2.default.extname(id)));

        const item = {
          name: _path2.default.basename(part, _path2.default.extname(part)),
          manifest: file.manifest,
          contents: file.contents,
          id: sid,
          path: sid.split('/'),
          type: _path2.default.extname(part) ? 'doc' : 'folder'
        };

        if (item.type === 'folder') {
          item.children = [];
        }

        if (part.toLowerCase() === 'readme.md') {
          level.contents = file.contents;
          level.manifest = file.manifest;
        } else {
          level.children.push(item);
          level = item;
        }
      });
    });

    return tree;
  });

  return function treeFromPaths(_x4) {
    return _ref4.apply(this, arguments);
  };
})();

const _path = require('path');

var _path2 = _interopRequireDefault(_path);

const _frontMatter = require('front-matter');

var _frontMatter2 = _interopRequireDefault(_frontMatter);

const _globby = require('globby');

var _globby2 = _interopRequireDefault(_globby);

var _lodash = require('lodash');

const _pathExists = require('path-exists');

var _pathExists2 = _interopRequireDefault(_pathExists);

const _remark = require('remark');

var _remark2 = _interopRequireDefault(_remark);

const _unistUtilFind = require('unist-util-find');

var _unistUtilFind2 = _interopRequireDefault(_unistUtilFind);

const _sander = require('sander');

var sander = _interopRequireWildcard(_sander);

const _getReadme = require('./utilities/get-readme');

var _getReadme2 = _interopRequireDefault(_getReadme);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; }  const newObj = {}; if (obj != null) { for (const key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj;  }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { const gen = fn.apply(this, arguments); return new Promise((resolve, reject) => { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then((value) => { step("next", value); }, (err) => { step("throw", err); }); } } return step("next"); }); }; }

const DEFAULT_MANIFEST = {
  version: '1.0.0',
  flag: 'alpha',
  options: {}
};
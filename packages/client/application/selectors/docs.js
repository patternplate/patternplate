'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flat = undefined;

const _lodash = require('lodash');

const _reselect = require('reselect');

const _seamlessImmutable = require('seamless-immutable');

const _seamlessImmutable2 = _interopRequireDefault(_seamlessImmutable);

const _tree = require('./tree');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const docs = (0, _reselect.createSelector)((state) => {
  return state.schema.docs;
}, (state) => {
  return state.id;
}, (state) => {
  return state.hideEnabled;
}, (state) => {
  return state.routing.locationBeforeTransitions;
}, (state) => {
  return state.base;
}, (tree, id, hide, location, base) => {
  const context = { hide, id, prefix: 'doc', location, base };
  const t = (0, _tree.sanitize)((0, _lodash.merge)({}, tree), context);

  if (!t.children.some((i) => {
    return i.id === 'root';
  })) {
    const doc = (0, _tree.enrich)({
      contents: tree.contents,
      href: '/',
      id: tree.id,
      manifest: tree.manifest,
      path: ['/'],
      type: 'doc'
    }, { id, config: {}, prefix: '/', location, base });

    t.children.push(doc);
  }

  return _seamlessImmutable2.default.from(t);
});

exports.default = docs;
const flat = exports.flat = (0, _reselect.createSelector)(docs, _tree.flatten);
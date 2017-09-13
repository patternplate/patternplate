'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = find;


function find(tree, id, _ref) {
  let type = _ref.type,
      _ref$depth = _ref.depth,
      depth = _ref$depth === undefined ? 1 : _ref$depth;

  if (id === '/') {
    return tree;
  }

  if (!id || !id.startsWith(type + '/')) {
    return null;
  }

  const reg = new RegExp('^' + type + '/');
  const frags = id.replace(reg, '').split('/').filter(Boolean);
  const sub = frags.slice(0, depth);

  const match = tree.children.find((child) => {
    return child.path.every((s, i) => {
      return sub[i] === s;
    }) && (child.type === type || child.type === 'folder');
  });

  if (match && depth < frags.length) {
    return find(match, id, { type, depth: depth + 1 });
  }

  return match;
}
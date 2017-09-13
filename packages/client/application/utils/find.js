'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = find;


function find(tree, id, _ref) {
	var type = _ref.type,
	    _ref$depth = _ref.depth,
	    depth = _ref$depth === undefined ? 1 : _ref$depth;

	if (id === '/') {
		return tree;
	}

	if (!id || !id.startsWith(type + '/')) {
		return null;
	}

	var reg = new RegExp('^' + type + '/');
	var frags = id.replace(reg, '').split('/').filter(Boolean);
	var sub = frags.slice(0, depth);

	var match = tree.children.find(function (child) {
		return child.path.every(function (s, i) {
			return sub[i] === s;
		}) && (child.type === type || child.type === 'folder');
	});

	if (match && depth < frags.length) {
		return find(match, id, { type: type, depth: depth + 1 });
	}

	return match;
}
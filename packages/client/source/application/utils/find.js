export default find;

function find(tree, id, {type, depth = 1}) {
	if (id === '/') {
		return tree;
	}

	if (!id || !id.startsWith(`${type}/`)) {
		return null;
	}

	const reg = new RegExp(`^${type}/`);
	const frags = id.replace(reg, '').split('/').filter(Boolean);
	const sub = frags.slice(0, depth);

	const match = tree.children
		.find(child => child.path.every((s, i) => sub[i] === s) && (child.type === type || child.type === 'folder'));

	if (match && depth < frags.length) {
		return find(match, id, {type, depth: depth + 1});
	}

	return match;
}

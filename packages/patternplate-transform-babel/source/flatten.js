export default flatten;

function flatten(dependencyTree, vault = []) {
	return Object.values(dependencyTree || {})
		.reduce((list, item) => {
			list.push(item);
			flatten(item.dependencies, list);
			return list;
		}, vault);
}

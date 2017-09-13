export default function navigate(id, navigation) {
	let scope = navigation;
	const fragments = id.split('/');

	for (const fragment of fragments) {
		if (scope && fragment in scope) {
			scope = scope[fragment];
			continue;
		}

		if (scope && scope.children && fragment in scope.children) {
			scope = scope.children[fragment];
			continue;
		}

		return null;
	}
	return scope;
}

import path from 'path';
import frontmatter from 'front-matter';

const WEIGHTS = {
	folder: 0,
	doc: 1,
	pattern: 2
};

export function flatten(tree) {
	if (!tree) {
		return [];
	}

	/**
	 * This defines the schema of items to be found
	 * in all tree and pool representations of patterns,
	 * docs and folders
	 */
	const init = [{
		contents: tree.contents,
		demoDependencies: tree.demoDependencies,
		demoDependents: tree.demoDependents,
		dependencies: tree.dependencies,
		dependents: tree.dependents,
		envs: tree.envs,
		href: tree.href,
		id: tree.id,
		manifest: tree.manifest,
		name: tree.name,
		path: tree.path,
		type: tree.type
	}];

	return (tree.children || [])
		.reduce((reg, child) => {
			return [...reg, ...flatten(child)];
		}, init);
}

export function sanitize(tree, context) {
	const {hide, id, config = {}, prefix} = context;
	const filter = hide ? child => !child.manifest.options.hidden : i => i;

	tree.children = tree.children
		.filter(filter)
		.map(child => {
			const enriched = enrich(child, {hide, id, config, prefix});
			return enriched.children ? sanitize(enriched, {hide, id, config, prefix}) : enriched;
		})
		.sort((a, b) => {
			const order = (a.manifest.options.order || 0) - (b.manifest.options.order || 0);
			const weight = (WEIGHTS[a.type] || 0) - (WEIGHTS[b.type] || 0);
			const comp = a.manifest.displayName.localeCompare(b.manifest.displayName);

			if (order !== 0) {
				return order;
			}

			if (weight !== 0) {
				return weight;
			}

			return comp;
		});

	return enrich(tree, {id, config, prefix});
}

export function enrich(child, {id, config, prefix}) {
	const p = prefix.split('/');
	const fragments = id.split('/').filter((f, i) => p[i] !== f);

	child.active = child.id === 'root' ?
		id === '/' :
		(child.path || ['/']).every((f, i) => fragments[i] === f);

	child.href = child.href || path.join(prefix, child.id);
	child.warnings = child.warnings || [];

	if (child.id in config) {
		const o = config[child.id];
		child.manifest.displayName = o.displayName || child.manifest.displayName;
		child.manifest.options.order = o.order || child.manifest.options.order;
		child.manifest.options.icon = o.icon || child.manifest.options.icon;
	}

	if (child.manifest && child.type === 'pattern' && (child.manifest.flag === 'alpha' || child.manifest.flag === 'deprecated')) {
		child.warnings.push({
			type: 'flag',
			value: child.manifest.flag,
			message: `${child.manifest.displayName} is flagged as ${child.manifest.flag}.`
		});
	}

	// If there is no special content in a folder show the first child
	if (child.children && child.children.length > 0 && (!child.contents || !frontmatter(child.contents).body)) {
		child.href = child.children[0].href;
	}

	return child;
}

import {createSelector} from 'reselect';
import selectPool from './pool';
import createRelationSelector from './relation';

const REGISTRY = {
	'/': 'doc/root'
};

const selectItem = createSelector(
	selectPool,
	state => state.id,
	(pool, id) => {
		const search = id in REGISTRY ? REGISTRY[id] : id;
		return pool.find(item => search === `${item.type}/${item.id}`);
	}
);

export default selectItem;

const filter = hidden => {
	return hidden ? item => (item.manifest.options || {}).hidden !== true : i => i;
};

const selectFilter = createSelector(
	state => state.hide,
	hide => filter(hide)
);

const relation = key => createRelationSelector(key, selectItem, selectFilter);

export const selectDemoDependencies = relation('demoDependencies');
export const selectDemoDependents = relation('demoDependents');
export const selectDependencies = relation('dependencies');
export const selectDependents = relation('dependents');

export const selectManifest = createSelector(
	selectItem,
	item => item ? JSON.stringify(item.manifest, null, '  ') : ''
);

export const selectType = createSelector(
	selectItem,
	item => item ? item.type : ''
);

export const selectActive = createSelector(
	selectItem,
	state => state.searchEnabled,
	(item, search) => !search && item !== null && typeof item !== 'undefined'
);

const selectOptions = createSelector(
	selectItem,
	item => item.manifest.options || {}
);

const selectReactToMarkup = createSelector(
	selectOptions,
	options => options['react-to-markup'] || {}
);

const selectReactToMarkupOpts = createSelector(
	selectReactToMarkup,
	r => r.opts || {}
);

export const selectAutomount = createSelector(
	selectReactToMarkupOpts,
	state => state.schema.automount,
	state => state.mountEnabled,
	(opts, globalConfig, enabled) => {
		if (enabled !== null) {
			return enabled;
		}

		return 'automount' in opts ? opts.automount : globalConfig;
	}
);

export const selectIcon = createSelector(
	selectItem,
	item => item ? item.manifest.icon || item.type : ''
);

export const selectName = createSelector(
	selectItem,
	item => item ? item.manifest.displayName : ''
);

export const selectTags = createSelector(
	selectItem,
	item => item ? item.manifest.tags : []
);

export const selectVersion = createSelector(
	selectItem,
	item => item ? item.manifest.version : ''
);

export const selectFlag = createSelector(
	selectItem,
	item => item ? item.manifest.flag : ''
);

export const selectId = createSelector(
	selectItem,
	item => item ? item.id : ''
);

export const selectEnv = createSelector(
	state => state.environment,
	state => state.schema.envs,
	(env, envs) => {
		const found = envs.find(e => e.name === env);
		return {
			name: found.name,
			displayName: found.displayName
		};
	}
);

export const selectEnvs = createSelector(
	selectItem,
	state => state.schema.envs,
	(item, envs) => {
		if (!item) {
			return [];
		}

		return (item.envs || []).map(e => {
			const found = envs.find(env => env.name === e);
			return {
				name: found.name,
				displayName: found.displayName
			};
		});
	}
);

export const selectContents = createSelector(
	selectItem,
	item => {
		if (!item) {
			return null;
		}
		return typeof item.contents === 'string' ? item.contents : null;
	}
);

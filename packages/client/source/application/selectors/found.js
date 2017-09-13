import Fuse from 'fuse.js';
import Immutable from 'seamless-immutable';
import {flatten, uniq, uniqBy, sortBy} from 'lodash';
import {createSelector} from 'reselect';
import semver from 'semver';
import selectPool from './pool';
import {apply, parse, parseTerm} from './search';
import createRelationSelector from './relation';

const FLAGS = {
	alpha: 0,
	beta: 1,
	rc: 2,
	stable: 3,
	deprecated: 4
};

const FIELDS = [
	{
		type: 'field',
		key: 'depends',
		value: 'depends',
		description: 'patterns depending on id',
		operators: ['=', '!=', '^=', '~=']
	},
	{
		type: 'field',
		key: 'has',
		value: 'has',
		description: 'pattern featuring data of [value]',
		operators: ['=', '!=']
	},
	{
		type: 'field',
		key: 'provides',
		value: 'provides',
		description: 'patterns providing for id',
		operators: ['=', '!=', '^=', '~=']
	},
	{
		type: 'field',
		key: 'tags',
		value: 'tags',
		description: 'pattern manifest .tags',
		operators: ['=', '!=', '^=', '~=']
	},
	{
		type: 'field',
		key: 'version',
		value: 'version',
		description: 'semantic version of pattern',
		operators: ['=', '!=', '>', '>=', '<', '<=', '^=', '~=']
	},
	{
		type: 'field',
		key: 'flag',
		value: 'flag',
		description: 'stability flag of pattern',
		operators: ['=', '!=', '>', '>=', '<', '<=', '^=', '~=']
	}
];

const OPERATORS = [
	{
		type: 'op',
		key: '=',
		description: 'exact match'
	},
	{
		type: 'op',
		key: '!=',
		description: 'negated match'
	},
	{
		type: 'op',
		key: '>',
		description: 'greater than'
	},
	{
		type: 'op',
		key: '>=',
		description: 'greater than or equal'
	},
	{
		type: 'op',
		key: '<',
		description: 'lesser than'
	},
	{
		type: 'op',
		key: '<=',
		description: 'lesser than or equal'
	},
	{
		type: 'op',
		key: '^=',
		description: 'starts with'
	},
	{
		type: 'op',
		key: '~=',
		description: 'contains'
	}
];

const selectFuse = createSelector(
	selectPool,
	pool => {
		return new Fuse(pool, {
			id: 'id',
			keys: [
				'id',
				'contents',
				'mainfest.displayName',
				'manifest.name',
				'manifest.version',
				'manifest.tags',
				'manifest.flag'
			]
		});
	}
);

const selectMatches = createSelector(
	state => state.search,
	selectFuse,
	selectPool,
	(search, fuse, pool) => {
		if (typeof search !== 'string' || search.length < 3) {
			return [];
		}

		const perform = apply(fuse, pool);
		const query = parse(search);
		return perform(query);
	}
);

const selectParsedValue = createSelector(
	state => state.searchValue,
	search => parse(search)
);

const selectLastQuery = createSelector(
	selectParsedValue,
	parsed => last(parsed)
);

function last(query) {
	switch (query.type) {
		case 'string':
			return query.value;
		case 'and':
		case 'or':
		default: {
			const q = query || {};
			const values = q.values || [];
			const cand = values[values.length - 1];
			return cand ? last(cand) : '';
		}
	}
}

const selectFields = createSelector(
	selectLastQuery,
	query => FIELDS.filter(f => f.value.startsWith(query))
);

const selectFieldHit = createSelector(
	state => state.searchValue,
	selectLastQuery,
	(value, query) => {
		if (query.length === 0) {
			return null;
		}

		return FIELDS.find(f => query.startsWith(f.value));
	}
);

const selectParsedQuery = createSelector(
	selectLastQuery,
	query => parseTerm(query)
);

const selectOps = createSelector(
	selectParsedQuery,
	selectFieldHit,
	(parsed, hit) => {
		if (!hit) {
			return [];
		}
		return hit.operators
			.map(o => OPERATORS.find(op => op.key === o))
			.filter(o => !parsed.operators || o.key.includes(parsed.operators))
			.map(o => {
				o.value = `${hit.value}${o.key}`;
				return o;
			});
	}
);

const selectOpsHit = createSelector(
	selectParsedQuery,
	selectOps,
	(query, ops) => {
		return ops.find(i => {
			if (query.negated) {
				return i.key === `!${query.operators}`;
			}
			return i.key === query.operators;
		});
	}
);

export const selectFound = createSelector(
	selectPool,
	selectMatches,
	(pool, matches) => {
		const sorted = uniqBy(sortBy(matches.map(match => pool.find(p => p.id === match)), 'type'), 'id');
		return sorted
			.filter(s => s.type !== 'folder')
			.map((s, i) => Immutable.set(s, 'index', i));
	}
);

export const selectPatterns = createSelector(
	selectFound,
	found => found.filter(f => f.type === 'pattern')
);

const selectPatternPool = createSelector(
	selectPool,
	pool => pool.filter(f => f.type === 'pattern')
);

const selectOptions = createSelector(
	selectPatternPool,
	selectParsedQuery,
	selectFieldHit,
	selectOpsHit,
	(patterns, parsed, field, op) => {
		if (!field || !op) {
			return [];
		}

		switch (field.key) {
			case 'has':
				return [
					{
						type: 'quality',
						key: 'docs',
						value: [field.key, op.key, 'docs'].join(''),
						description: 'patterns with documentation'
					},
					{
						type: 'quality',
						key: 'dependencies',
						value: [field.key, op.key, 'dependencies'].join(''),
						description: 'patterns with dependencies'
					},
					{
						type: 'quality',
						key: 'dependents',
						value: [field.key, op.key, 'dependents'].join(''),
						description: 'patterns with dependents'
					},
					{
						type: 'quality',
						key: 'tags',
						value: [field.key, op.key, 'tags'].join(''),
						description: 'patterns with tags'
					}
				];
			case 'depends':
			case 'provides':
				return patterns
					.filter(item => item.id.startsWith(parsed.value || ''))
					.map(item => {
						return {
							type: 'pattern',
							key: item.id,
							value: [field.key, op.key, item.id].join(''),
							description: `${item.id}`
						};
					});
			case 'tags':
				return uniq(flatten(patterns.map(item => item.manifest.tags)))
					.filter(Boolean)
					.map(tag => {
						return {
							type: 'tag',
							key: tag,
							value: [field.key, op.key, tag].join(''),
							description: tag
						};
					});
			case 'version': {
				const versions = uniqBy(patterns.filter(item => item.manifest.version.startsWith(parsed.value || ''))
					.map(item => item.manifest.version))
					.filter(version => semver.valid(version))
					.sort((a, b) => semver.gt(a, b) ? 1 : -1);

				return versions.map(v => {
					return {
						type: 'version',
						key: v,
						value: [field.key, op.key, v].join(''),
						description: `${v}`
					};
				});
			}
			case 'flag': {
				const flags = uniqBy(patterns.filter(item => item.manifest.flag.startsWith(parsed.value || ''))
					.map(item => item.manifest.flag))
					.filter(flag => typeof flag === 'string')
					.sort((a, b) => {
						const delta = (FLAGS[a] || 0) - (FLAGS[b] || 0);
						return delta === 0 ? a.localeCompare(b) : delta;
					});

				return flags
					.map(f => {
						return {
							type: 'flag',
							key: f,
							value: [field.key, op.key, f].join(''),
							description: `${f}`
						};
					});
			}
			default:
				return [];
		}
	}
);

export const selectLegend = createSelector(
	selectParsedValue,
	selectParsedQuery,
	selectFields,
	selectFieldHit,
	selectOps,
	selectOpsHit,
	selectOptions,
	(parsedValue, parsed, fields, fieldHit, ops, opsHit, options, optionsHit) => {
		if (parsedValue && parsedValue.values) {
			return {
				name: '',
				items: []
			};
		}

		if (!fieldHit) {
			return {
				name: 'Fields',
				items: fields
			};
		}

		if (!opsHit && !parsed.value) {
			return {
				name: 'Operators',
				items: ops
			};
		}

		if (!optionsHit && fieldHit && opsHit) {
			return {
				name: fieldHit.key,
				items: options
			};
		}

		return {};
	}
);

export const selectDocs = createSelector(
	selectFound,
	found => found.filter(f => f.type === 'doc')
);

export const selectSuggestion = createSelector(
	state => state.searchValue,
	selectPool,
	selectLegend,
	(search, pool, legend) => {
		if (typeof search !== 'string' || search.length === 0) {
			return '';
		}

		const match = pool.find(m => [m.id, m.name, (m.manifest || {}).displayName].some(k => k && k.startsWith(search)));

		if (match) {
			return [match.id, match.name, match.manifest.displayName].find(k => k && k.startsWith(search)) || '';
		}

		const lmatch = (legend.items || []).find(i => i.value.startsWith(search));
		return lmatch ? lmatch.value : null;
	}
);

export const selectActiveItem = createSelector(
	state => state,
	selectFound,
	state => state.searchPreview,
	(state, found, preview) => {
		const index = Math.min(preview, found.length - 1);
		const item = found[index];
		const selectItem = () => item;
		const rel = item ? key => createRelationSelector(key, selectItem)(state) : i => i;

		return item ?
			Immutable.merge(item, {
				index,
				demoDependents: rel('demoDependents'),
				demoDependencies: rel('demoDependencies'),
				dependents: rel('dependents'),
				dependencies: rel('dependencies')
			}) :
			item;
	}
);

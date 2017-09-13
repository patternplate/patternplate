import {flatten, intersection} from 'lodash';
import semver from 'semver';
import q from 'logic-query-parser';

export function apply(fuse, pool) {
	const m = match(fuse, pool);
	return function perform(query) {
		switch (query.type) {
			case 'and': {
				return intersection(...query.values.map(value => perform(value)));
			}
			case 'or': {
				return flatten(query.values.map(value => perform(value)));
			}
			case 'string':
			default:
				return m(query.value || '');
		}
	};
}

export function match(fuse, pool) {
	return term => {
		const parsed = parseTerm(term);

		if (parsed.valid) {
			return searchField(pool, parsed);
		}

		return fuse.search(term);
	};
}

export function parse(search) {
	try {
		return q.utils.binaryTreeToQueryJson(q.parse(search));
	} catch (err) {
		return {type: 'and', values: []};
	}
}

const OPERATORS = /([^!><\^~\n=]+)?(?:(!)?(>|<|\^|~)?(=)?)([^!><\^~\n=]+)?/;

export function parseTerm(term) {
	const found = term.match(OPERATORS) || [];
	const [raw, field, negator, modifier, equality, value] = found;

	return {
		field,
		value,
		raw,
		operators: [modifier, equality].join(''),
		negated: negator === '!',
		greater: modifier === '>',
		lower: modifier === '<',
		startsWith: equality === '=' && modifier === '^',
		includes: equality === '=' && modifier === '~',
		equals: equality === '=',
		valid: Boolean(field && value && (typeof modifier === 'string' || typeof equality === 'string'))
	};
}

function searchField(pool, options) {
	const tester = test(options.field, options.value, options);

	return pool
		.filter(item => typeof item.manifest === 'object')
		.filter(item => options.negated ? !tester(item) : tester(item))
		.map(i => i.id);
}

function test(field, value, options) {
	const depends = matchDepends(value, options);
	const has = matchHas(value, options);
	const provides = matchProvides(value, options);
	const flag = matchFlag(value, options);
	const tags = matchTags(value, options);
	const version = matchVersion(value, options);

	return item => {
		switch (field) {
			case 'depends':
				return depends(item);
			case 'has':
				return has(item);
			case 'provides':
				return provides(item);
			case 'tag':
			case 'tags':
				return tags(item);
			case 'version':
				return version(item);
			case 'flag':
				return flag(item);
			default:
				return item[field] === value || item.manifest[field] === value;
		}
	};
}

export const FLAGS = {
	deprecated: 0,
	alpha: 0,
	beta: 1,
	rc: 2,
	stable: 3
};

const manifest = item => item.manifest;
const flag = item => manifest(item).flag;
const index = item => FLAGS[flag(item)] || 0;
const version = item => manifest(item).version;
const tags = item => manifest(item).tags || [];
const depends = item => (item.dependencies || []).filter(i => typeof i === 'string');
const dependents = item => (item.dependents || []).filter(i => typeof i === 'string');

function matchHas(value) {
	return item => {
		switch (value) {
			case 'dependencies':
				return (item.dependencies || []).length > 0;
			case 'dependents':
				return (item.dependents || []).length > 0;
			case 'doc':
			case 'docs':
				return Boolean(item.contents);
			case 'tags':
				return (item.manifest.tags || []).length > 0;
			default:
				return false;
		}
	};
}

function matchDepends(value, options) {
	if (options.startsWith) {
		return item => depends(item).length > 0 && depends(item).some(d => d.startsWith(value));
	}

	if (options.includes) {
		return item => depends(item).length > 0 && depends(item).some(d => d.includes(value));
	}

	return item => depends(item).includes(value);
}

function matchFlag(value, options) {
	const i = FLAGS[value] || 0;

	if (options.lower) {
		return item => options.equals ? index(item) <= i : index(item) < i;
	}
	if (options.greater) {
		return item => options.equals ? index(item) >= i : index(item) > i;
	}
	if (options.startsWith) {
		return item => flag(item).startsWith(value);
	}
	if (options.includes) {
		return item => flag(item).includes(value);
	}
	return item => flag(item) === value;
}

function matchProvides(value, options) {
	if (options.startsWith) {
		return item => dependents(item).length > 0 && dependents(item).some(d => d.startsWith(value));
	}

	if (options.includes) {
		return item => dependents(item).length > 0 && dependents(item).some(d => d.includes(value));
	}

	return item => dependents(item).includes(value);
}

function matchTags(value, options) {
	if (options.startsWith) {
		return item => tags(item).length > 0 && tags(item).some(tag => tag.startsWith(value));
	}

	if (options.includes) {
		return item => tags(item).length > 0 && tags(item).some(tag => tag.includes(value));
	}

	return item => tags(item).includes(value);
}

function matchVersion(value, options) {
	const modified = options.lower || options.greater || options.startsWith || options.includes;
	const valid = item => semver.valid(version(item));

	if (modified) {
		return item => valid(item) ? semver.satisfies(version(item), `${options.operators}${options.value}`) : false;
	}

	return item => valid(item) ? semver.satisfies(version(item), options.value) : false;
}

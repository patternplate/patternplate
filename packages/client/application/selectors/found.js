'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.selectActiveItem = exports.selectSuggestion = exports.selectDocs = exports.selectLegend = exports.selectPatterns = exports.selectFound = undefined;

var _fuse = require('fuse.js');

var _fuse2 = _interopRequireDefault(_fuse);

var _seamlessImmutable = require('seamless-immutable');

var _seamlessImmutable2 = _interopRequireDefault(_seamlessImmutable);

var _lodash = require('lodash');

var _reselect = require('reselect');

var _semver = require('semver');

var _semver2 = _interopRequireDefault(_semver);

var _pool = require('./pool');

var _pool2 = _interopRequireDefault(_pool);

var _search = require('./search');

var _relation = require('./relation');

var _relation2 = _interopRequireDefault(_relation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FLAGS = {
	alpha: 0,
	beta: 1,
	rc: 2,
	stable: 3,
	deprecated: 4
};

var FIELDS = [{
	type: 'field',
	key: 'depends',
	value: 'depends',
	description: 'patterns depending on id',
	operators: ['=', '!=', '^=', '~=']
}, {
	type: 'field',
	key: 'has',
	value: 'has',
	description: 'pattern featuring data of [value]',
	operators: ['=', '!=']
}, {
	type: 'field',
	key: 'provides',
	value: 'provides',
	description: 'patterns providing for id',
	operators: ['=', '!=', '^=', '~=']
}, {
	type: 'field',
	key: 'tags',
	value: 'tags',
	description: 'pattern manifest .tags',
	operators: ['=', '!=', '^=', '~=']
}, {
	type: 'field',
	key: 'version',
	value: 'version',
	description: 'semantic version of pattern',
	operators: ['=', '!=', '>', '>=', '<', '<=', '^=', '~=']
}, {
	type: 'field',
	key: 'flag',
	value: 'flag',
	description: 'stability flag of pattern',
	operators: ['=', '!=', '>', '>=', '<', '<=', '^=', '~=']
}];

var OPERATORS = [{
	type: 'op',
	key: '=',
	description: 'exact match'
}, {
	type: 'op',
	key: '!=',
	description: 'negated match'
}, {
	type: 'op',
	key: '>',
	description: 'greater than'
}, {
	type: 'op',
	key: '>=',
	description: 'greater than or equal'
}, {
	type: 'op',
	key: '<',
	description: 'lesser than'
}, {
	type: 'op',
	key: '<=',
	description: 'lesser than or equal'
}, {
	type: 'op',
	key: '^=',
	description: 'starts with'
}, {
	type: 'op',
	key: '~=',
	description: 'contains'
}];

var selectFuse = (0, _reselect.createSelector)(_pool2.default, function (pool) {
	return new _fuse2.default(pool, {
		id: 'id',
		keys: ['id', 'contents', 'mainfest.displayName', 'manifest.name', 'manifest.version', 'manifest.tags', 'manifest.flag']
	});
});

var selectMatches = (0, _reselect.createSelector)(function (state) {
	return state.search;
}, selectFuse, _pool2.default, function (search, fuse, pool) {
	if (typeof search !== 'string' || search.length < 3) {
		return [];
	}

	var perform = (0, _search.apply)(fuse, pool);
	var query = (0, _search.parse)(search);
	return perform(query);
});

var selectParsedValue = (0, _reselect.createSelector)(function (state) {
	return state.searchValue;
}, function (search) {
	return (0, _search.parse)(search);
});

var selectLastQuery = (0, _reselect.createSelector)(selectParsedValue, function (parsed) {
	return last(parsed);
});

function last(query) {
	switch (query.type) {
		case 'string':
			return query.value;
		case 'and':
		case 'or':
		default:
			{
				var q = query || {};
				var values = q.values || [];
				var cand = values[values.length - 1];
				return cand ? last(cand) : '';
			}
	}
}

var selectFields = (0, _reselect.createSelector)(selectLastQuery, function (query) {
	return FIELDS.filter(function (f) {
		return f.value.startsWith(query);
	});
});

var selectFieldHit = (0, _reselect.createSelector)(function (state) {
	return state.searchValue;
}, selectLastQuery, function (value, query) {
	if (query.length === 0) {
		return null;
	}

	return FIELDS.find(function (f) {
		return query.startsWith(f.value);
	});
});

var selectParsedQuery = (0, _reselect.createSelector)(selectLastQuery, function (query) {
	return (0, _search.parseTerm)(query);
});

var selectOps = (0, _reselect.createSelector)(selectParsedQuery, selectFieldHit, function (parsed, hit) {
	if (!hit) {
		return [];
	}
	return hit.operators.map(function (o) {
		return OPERATORS.find(function (op) {
			return op.key === o;
		});
	}).filter(function (o) {
		return !parsed.operators || o.key.includes(parsed.operators);
	}).map(function (o) {
		o.value = '' + hit.value + o.key;
		return o;
	});
});

var selectOpsHit = (0, _reselect.createSelector)(selectParsedQuery, selectOps, function (query, ops) {
	return ops.find(function (i) {
		if (query.negated) {
			return i.key === '!' + query.operators;
		}
		return i.key === query.operators;
	});
});

var selectFound = exports.selectFound = (0, _reselect.createSelector)(_pool2.default, selectMatches, function (pool, matches) {
	var sorted = (0, _lodash.uniqBy)((0, _lodash.sortBy)(matches.map(function (match) {
		return pool.find(function (p) {
			return p.id === match;
		});
	}), 'type'), 'id');
	return sorted.filter(function (s) {
		return s.type !== 'folder';
	}).map(function (s, i) {
		return _seamlessImmutable2.default.set(s, 'index', i);
	});
});

var selectPatterns = exports.selectPatterns = (0, _reselect.createSelector)(selectFound, function (found) {
	return found.filter(function (f) {
		return f.type === 'pattern';
	});
});

var selectPatternPool = (0, _reselect.createSelector)(_pool2.default, function (pool) {
	return pool.filter(function (f) {
		return f.type === 'pattern';
	});
});

var selectOptions = (0, _reselect.createSelector)(selectPatternPool, selectParsedQuery, selectFieldHit, selectOpsHit, function (patterns, parsed, field, op) {
	if (!field || !op) {
		return [];
	}

	switch (field.key) {
		case 'has':
			return [{
				type: 'quality',
				key: 'docs',
				value: [field.key, op.key, 'docs'].join(''),
				description: 'patterns with documentation'
			}, {
				type: 'quality',
				key: 'dependencies',
				value: [field.key, op.key, 'dependencies'].join(''),
				description: 'patterns with dependencies'
			}, {
				type: 'quality',
				key: 'dependents',
				value: [field.key, op.key, 'dependents'].join(''),
				description: 'patterns with dependents'
			}, {
				type: 'quality',
				key: 'tags',
				value: [field.key, op.key, 'tags'].join(''),
				description: 'patterns with tags'
			}];
		case 'depends':
		case 'provides':
			return patterns.filter(function (item) {
				return item.id.startsWith(parsed.value || '');
			}).map(function (item) {
				return {
					type: 'pattern',
					key: item.id,
					value: [field.key, op.key, item.id].join(''),
					description: '' + item.id
				};
			});
		case 'tags':
			return (0, _lodash.uniq)((0, _lodash.flatten)(patterns.map(function (item) {
				return item.manifest.tags;
			}))).filter(Boolean).map(function (tag) {
				return {
					type: 'tag',
					key: tag,
					value: [field.key, op.key, tag].join(''),
					description: tag
				};
			});
		case 'version':
			{
				var versions = (0, _lodash.uniqBy)(patterns.filter(function (item) {
					return item.manifest.version.startsWith(parsed.value || '');
				}).map(function (item) {
					return item.manifest.version;
				})).filter(function (version) {
					return _semver2.default.valid(version);
				}).sort(function (a, b) {
					return _semver2.default.gt(a, b) ? 1 : -1;
				});

				return versions.map(function (v) {
					return {
						type: 'version',
						key: v,
						value: [field.key, op.key, v].join(''),
						description: '' + v
					};
				});
			}
		case 'flag':
			{
				var flags = (0, _lodash.uniqBy)(patterns.filter(function (item) {
					return item.manifest.flag.startsWith(parsed.value || '');
				}).map(function (item) {
					return item.manifest.flag;
				})).filter(function (flag) {
					return typeof flag === 'string';
				}).sort(function (a, b) {
					var delta = (FLAGS[a] || 0) - (FLAGS[b] || 0);
					return delta === 0 ? a.localeCompare(b) : delta;
				});

				return flags.map(function (f) {
					return {
						type: 'flag',
						key: f,
						value: [field.key, op.key, f].join(''),
						description: '' + f
					};
				});
			}
		default:
			return [];
	}
});

var selectLegend = exports.selectLegend = (0, _reselect.createSelector)(selectParsedValue, selectParsedQuery, selectFields, selectFieldHit, selectOps, selectOpsHit, selectOptions, function (parsedValue, parsed, fields, fieldHit, ops, opsHit, options, optionsHit) {
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
});

var selectDocs = exports.selectDocs = (0, _reselect.createSelector)(selectFound, function (found) {
	return found.filter(function (f) {
		return f.type === 'doc';
	});
});

var selectSuggestion = exports.selectSuggestion = (0, _reselect.createSelector)(function (state) {
	return state.searchValue;
}, _pool2.default, selectLegend, function (search, pool, legend) {
	if (typeof search !== 'string' || search.length === 0) {
		return '';
	}

	var match = pool.find(function (m) {
		return [m.id, m.name, (m.manifest || {}).displayName].some(function (k) {
			return k && k.startsWith(search);
		});
	});

	if (match) {
		return [match.id, match.name, match.manifest.displayName].find(function (k) {
			return k && k.startsWith(search);
		}) || '';
	}

	var lmatch = (legend.items || []).find(function (i) {
		return i.value.startsWith(search);
	});
	return lmatch ? lmatch.value : null;
});

var selectActiveItem = exports.selectActiveItem = (0, _reselect.createSelector)(function (state) {
	return state;
}, selectFound, function (state) {
	return state.searchPreview;
}, function (state, found, preview) {
	var index = Math.min(preview, found.length - 1);
	var item = found[index];
	var selectItem = function selectItem() {
		return item;
	};
	var rel = item ? function (key) {
		return (0, _relation2.default)(key, selectItem)(state);
	} : function (i) {
		return i;
	};

	return item ? _seamlessImmutable2.default.merge(item, {
		index: index,
		demoDependents: rel('demoDependents'),
		demoDependencies: rel('demoDependencies'),
		dependents: rel('dependents'),
		dependencies: rel('dependencies')
	}) : item;
});
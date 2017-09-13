'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectActiveItem = exports.selectSuggestion = exports.selectDocs = exports.selectLegend = exports.selectPatterns = exports.selectFound = undefined;

const _fuse = require('fuse.js');

const _fuse2 = _interopRequireDefault(_fuse);

const _seamlessImmutable = require('seamless-immutable');

const _seamlessImmutable2 = _interopRequireDefault(_seamlessImmutable);

const _lodash = require('lodash');

const _reselect = require('reselect');

const _semver = require('semver');

const _semver2 = _interopRequireDefault(_semver);

const _pool = require('./pool');

const _pool2 = _interopRequireDefault(_pool);

const _search = require('./search');

const _relation = require('./relation');

const _relation2 = _interopRequireDefault(_relation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const FLAGS = {
  alpha: 0,
  beta: 1,
  rc: 2,
  stable: 3,
  deprecated: 4
};

const FIELDS = [{
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

const OPERATORS = [{
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

const selectFuse = (0, _reselect.createSelector)(_pool2.default, (pool) => {
  return new _fuse2.default(pool, {
    id: 'id',
    keys: ['id', 'contents', 'mainfest.displayName', 'manifest.name', 'manifest.version', 'manifest.tags', 'manifest.flag']
  });
});

const selectMatches = (0, _reselect.createSelector)((state) => {
  return state.search;
}, selectFuse, _pool2.default, (search, fuse, pool) => {
  if (typeof search !== 'string' || search.length < 3) {
    return [];
  }

  const perform = (0, _search.apply)(fuse, pool);
  const query = (0, _search.parse)(search);
  return perform(query);
});

const selectParsedValue = (0, _reselect.createSelector)((state) => {
  return state.searchValue;
}, (search) => {
  return (0, _search.parse)(search);
});

const selectLastQuery = (0, _reselect.createSelector)(selectParsedValue, (parsed) => {
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
        const q = query || {};
        const values = q.values || [];
        const cand = values[values.length - 1];
        return cand ? last(cand) : '';
      }
  }
}

const selectFields = (0, _reselect.createSelector)(selectLastQuery, (query) => {
  return FIELDS.filter((f) => {
    return f.value.startsWith(query);
  });
});

const selectFieldHit = (0, _reselect.createSelector)((state) => {
  return state.searchValue;
}, selectLastQuery, (value, query) => {
  if (query.length === 0) {
    return null;
  }

  return FIELDS.find((f) => {
    return query.startsWith(f.value);
  });
});

const selectParsedQuery = (0, _reselect.createSelector)(selectLastQuery, (query) => {
  return (0, _search.parseTerm)(query);
});

const selectOps = (0, _reselect.createSelector)(selectParsedQuery, selectFieldHit, (parsed, hit) => {
  if (!hit) {
    return [];
  }
  return hit.operators.map((o) => {
    return OPERATORS.find((op) => {
      return op.key === o;
    });
  }).filter((o) => {
    return !parsed.operators || o.key.includes(parsed.operators);
  }).map((o) => {
    o.value = String(hit.value) + o.key;
    return o;
  });
});

const selectOpsHit = (0, _reselect.createSelector)(selectParsedQuery, selectOps, (query, ops) => {
  return ops.find((i) => {
    if (query.negated) {
      return i.key === '!' + query.operators;
    }
    return i.key === query.operators;
  });
});

const selectFound = exports.selectFound = (0, _reselect.createSelector)(_pool2.default, selectMatches, (pool, matches) => {
  const sorted = (0, _lodash.uniqBy)((0, _lodash.sortBy)(matches.map((match) => {
    return pool.find((p) => {
      return p.id === match;
    });
  }), 'type'), 'id');
  return sorted.filter((s) => {
    return s.type !== 'folder';
  }).map((s, i) => {
    return _seamlessImmutable2.default.set(s, 'index', i);
  });
});

const selectPatterns = exports.selectPatterns = (0, _reselect.createSelector)(selectFound, (found) => {
  return found.filter((f) => {
    return f.type === 'pattern';
  });
});

const selectPatternPool = (0, _reselect.createSelector)(_pool2.default, (pool) => {
  return pool.filter((f) => {
    return f.type === 'pattern';
  });
});

const selectOptions = (0, _reselect.createSelector)(selectPatternPool, selectParsedQuery, selectFieldHit, selectOpsHit, (patterns, parsed, field, op) => {
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
      return patterns.filter((item) => {
        return item.id.startsWith(parsed.value || '');
      }).map((item) => {
        return {
          type: 'pattern',
          key: item.id,
          value: [field.key, op.key, item.id].join(''),
          description: String(item.id)
        };
      });
    case 'tags':
      return (0, _lodash.uniq)((0, _lodash.flatten)(patterns.map((item) => {
        return item.manifest.tags;
      }))).filter(Boolean).map((tag) => {
        return {
          type: 'tag',
          key: tag,
          value: [field.key, op.key, tag].join(''),
          description: tag
        };
      });
    case 'version':
      {
        const versions = (0, _lodash.uniqBy)(patterns.filter((item) => {
          return item.manifest.version.startsWith(parsed.value || '');
        }).map((item) => {
          return item.manifest.version;
        })).filter((version) => {
          return _semver2.default.valid(version);
        }).sort((a, b) => {
          return _semver2.default.gt(a, b) ? 1 : -1;
        });

        return versions.map((v) => {
          return {
            type: 'version',
            key: v,
            value: [field.key, op.key, v].join(''),
            description: String(v)
          };
        });
      }
    case 'flag':
      {
        const flags = (0, _lodash.uniqBy)(patterns.filter((item) => {
          return item.manifest.flag.startsWith(parsed.value || '');
        }).map((item) => {
          return item.manifest.flag;
        })).filter((flag) => {
          return typeof flag === 'string';
        }).sort((a, b) => {
          const delta = (FLAGS[a] || 0) - (FLAGS[b] || 0);
          return delta === 0 ? a.localeCompare(b) : delta;
        });

        return flags.map((f) => {
          return {
            type: 'flag',
            key: f,
            value: [field.key, op.key, f].join(''),
            description: String(f)
          };
        });
      }
    default:
      return [];
  }
});

const selectLegend = exports.selectLegend = (0, _reselect.createSelector)(selectParsedValue, selectParsedQuery, selectFields, selectFieldHit, selectOps, selectOpsHit, selectOptions, (parsedValue, parsed, fields, fieldHit, ops, opsHit, options, optionsHit) => {
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

const selectDocs = exports.selectDocs = (0, _reselect.createSelector)(selectFound, (found) => {
  return found.filter((f) => {
    return f.type === 'doc';
  });
});

const selectSuggestion = exports.selectSuggestion = (0, _reselect.createSelector)((state) => {
  return state.searchValue;
}, _pool2.default, selectLegend, (search, pool, legend) => {
  if (typeof search !== 'string' || search.length === 0) {
    return '';
  }

  const match = pool.find((m) => {
    return [m.id, m.name, (m.manifest || {}).displayName].some((k) => {
      return k && k.startsWith(search);
    });
  });

  if (match) {
    return [match.id, match.name, match.manifest.displayName].find((k) => {
      return k && k.startsWith(search);
    }) || '';
  }

  const lmatch = (legend.items || []).find((i) => {
    return i.value.startsWith(search);
  });
  return lmatch ? lmatch.value : null;
});

const selectActiveItem = exports.selectActiveItem = (0, _reselect.createSelector)((state) => {
  return state;
}, selectFound, (state) => {
  return state.searchPreview;
}, (state, found, preview) => {
  const index = Math.min(preview, found.length - 1);
  const item = found[index];
  const selectItem = function selectItem() {
    return item;
  };
  const rel = item ? function (key) {
    return (0, _relation2.default)(key, selectItem)(state);
  } : function (i) {
    return i;
  };

  return item ? _seamlessImmutable2.default.merge(item, {
    index,
    demoDependents: rel('demoDependents'),
    demoDependencies: rel('demoDependencies'),
    dependents: rel('dependents'),
    dependencies: rel('dependencies')
  }) : item;
});
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FLAGS = undefined;

const _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

const _slicedToArray = function () { function sliceIterator(arr, i) { const _arr = []; let _n = true; let _d = false; let _e; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i.return) _i.return(); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); }  throw new TypeError("Invalid attempt to destructure non-iterable instance");  }; }();

exports.apply = apply;
exports.match = match;
exports.parse = parse;
exports.parseTerm = parseTerm;

const _lodash = require('lodash');

const _semver = require('semver');

const _semver2 = _interopRequireDefault(_semver);

const _logicQueryParser = require('logic-query-parser');

const _logicQueryParser2 = _interopRequireDefault(_logicQueryParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; }  return Array.from(arr);  }

function apply(fuse, pool) {
  const m = match(fuse, pool);
  return function perform(query) {
    switch (query.type) {
      case 'and':
        {
          return _lodash.intersection.apply(undefined, _toConsumableArray(query.values.map((value) => {
            return perform(value);
          })));
        }
      case 'or':
        {
          return (0, _lodash.flatten)(query.values.map((value) => {
            return perform(value);
          }));
        }
      case 'string':
      default:
        return m(query.value || '');
    }
  };
}

function match(fuse, pool) {
  return function (term) {
    const parsed = parseTerm(term);

    if (parsed.valid) {
      return searchField(pool, parsed);
    }

    return fuse.search(term);
  };
}

function parse(search) {
  try {
    return _logicQueryParser2.default.utils.binaryTreeToQueryJson(_logicQueryParser2.default.parse(search));
  } catch (err) {
    return { type: 'and', values: [] };
  }
}

const OPERATORS = /([^!><\^~\n=]+)?(?:(!)?(>|<|\^|~)?(=)?)([^!><\^~\n=]+)?/;

function parseTerm(term) {
  const found = term.match(OPERATORS) || [];

  let _found = _slicedToArray(found, 6),
      raw = _found[0],
      field = _found[1],
      negator = _found[2],
      modifier = _found[3],
      equality = _found[4],
      value = _found[5];

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

  return pool.filter((item) => {
    return _typeof(item.manifest) === 'object';
  }).filter((item) => {
    return options.negated ? !tester(item) : tester(item);
  }).map((i) => {
    return i.id;
  });
}

function test(field, value, options) {
  const depends = matchDepends(value, options);
  const has = matchHas(value, options);
  const provides = matchProvides(value, options);
  const flag = matchFlag(value, options);
  const tags = matchTags(value, options);
  const version = matchVersion(value, options);

  return function (item) {
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

const FLAGS = exports.FLAGS = {
  deprecated: 0,
  alpha: 0,
  beta: 1,
  rc: 2,
  stable: 3
};

const manifest = function manifest(item) {
  return item.manifest;
};
const flag = function flag(item) {
  return manifest(item).flag;
};
const index = function index(item) {
  return FLAGS[flag(item)] || 0;
};
const version = function version(item) {
  return manifest(item).version;
};
const tags = function tags(item) {
  return manifest(item).tags || [];
};
const depends = function depends(item) {
  return (item.dependencies || []).filter((i) => {
    return typeof i === 'string';
  });
};
const dependents = function dependents(item) {
  return (item.dependents || []).filter((i) => {
    return typeof i === 'string';
  });
};

function matchHas(value) {
  return function (item) {
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
    return function (item) {
      return depends(item).length > 0 && depends(item).some((d) => {
        return d.startsWith(value);
      });
    };
  }

  if (options.includes) {
    return function (item) {
      return depends(item).length > 0 && depends(item).some((d) => {
        return d.includes(value);
      });
    };
  }

  return function (item) {
    return depends(item).includes(value);
  };
}

function matchFlag(value, options) {
  const i = FLAGS[value] || 0;

  if (options.lower) {
    return function (item) {
      return options.equals ? index(item) <= i : index(item) < i;
    };
  }
  if (options.greater) {
    return function (item) {
      return options.equals ? index(item) >= i : index(item) > i;
    };
  }
  if (options.startsWith) {
    return function (item) {
      return flag(item).startsWith(value);
    };
  }
  if (options.includes) {
    return function (item) {
      return flag(item).includes(value);
    };
  }
  return function (item) {
    return flag(item) === value;
  };
}

function matchProvides(value, options) {
  if (options.startsWith) {
    return function (item) {
      return dependents(item).length > 0 && dependents(item).some((d) => {
        return d.startsWith(value);
      });
    };
  }

  if (options.includes) {
    return function (item) {
      return dependents(item).length > 0 && dependents(item).some((d) => {
        return d.includes(value);
      });
    };
  }

  return function (item) {
    return dependents(item).includes(value);
  };
}

function matchTags(value, options) {
  if (options.startsWith) {
    return function (item) {
      return tags(item).length > 0 && tags(item).some((tag) => {
        return tag.startsWith(value);
      });
    };
  }

  if (options.includes) {
    return function (item) {
      return tags(item).length > 0 && tags(item).some((tag) => {
        return tag.includes(value);
      });
    };
  }

  return function (item) {
    return tags(item).includes(value);
  };
}

function matchVersion(value, options) {
  const modified = options.lower || options.greater || options.startsWith || options.includes;
  const valid = function valid(item) {
    return _semver2.default.valid(version(item));
  };

  if (modified) {
    return function (item) {
      return valid(item) ? _semver2.default.satisfies(version(item), String(options.operators) + options.value) : false;
    };
  }

  return function (item) {
    return valid(item) ? _semver2.default.satisfies(version(item), options.value) : false;
  };
}
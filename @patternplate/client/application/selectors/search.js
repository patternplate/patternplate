'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.FLAGS = undefined;

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.apply = apply;
exports.match = match;
exports.parse = parse;
exports.parseTerm = parseTerm;

var _lodash = require('lodash');

var _semver = require('semver');

var _semver2 = _interopRequireDefault(_semver);

var _logicQueryParser = require('logic-query-parser');

var _logicQueryParser2 = _interopRequireDefault(_logicQueryParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function apply(fuse, pool) {
	var m = match(fuse, pool);
	return function perform(query) {
		switch (query.type) {
			case 'and':
				{
					return _lodash.intersection.apply(undefined, (0, _toConsumableArray3.default)(query.values.map(function (value) {
						return perform(value);
					})));
				}
			case 'or':
				{
					return (0, _lodash.flatten)(query.values.map(function (value) {
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
		var parsed = parseTerm(term);

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

var OPERATORS = /([^!><\^~\n=]+)?(?:(!)?(>|<|\^|~)?(=)?)([^!><\^~\n=]+)?/;

function parseTerm(term) {
	var found = term.match(OPERATORS) || [];

	var _found = (0, _slicedToArray3.default)(found, 6),
	    raw = _found[0],
	    field = _found[1],
	    negator = _found[2],
	    modifier = _found[3],
	    equality = _found[4],
	    value = _found[5];

	return {
		field: field,
		value: value,
		raw: raw,
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
	var tester = test(options.field, options.value, options);

	return pool.filter(function (item) {
		return (0, _typeof3.default)(item.manifest) === 'object';
	}).filter(function (item) {
		return options.negated ? !tester(item) : tester(item);
	}).map(function (i) {
		return i.id;
	});
}

function test(field, value, options) {
	var depends = matchDepends(value, options);
	var has = matchHas(value, options);
	var provides = matchProvides(value, options);
	var flag = matchFlag(value, options);
	var tags = matchTags(value, options);
	var version = matchVersion(value, options);

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

var FLAGS = exports.FLAGS = {
	deprecated: 0,
	alpha: 0,
	beta: 1,
	rc: 2,
	stable: 3
};

var manifest = function manifest(item) {
	return item.manifest;
};
var flag = function flag(item) {
	return manifest(item).flag;
};
var index = function index(item) {
	return FLAGS[flag(item)] || 0;
};
var version = function version(item) {
	return manifest(item).version;
};
var tags = function tags(item) {
	return manifest(item).tags || [];
};
var depends = function depends(item) {
	return (item.dependencies || []).filter(function (i) {
		return typeof i === 'string';
	});
};
var dependents = function dependents(item) {
	return (item.dependents || []).filter(function (i) {
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
			return depends(item).length > 0 && depends(item).some(function (d) {
				return d.startsWith(value);
			});
		};
	}

	if (options.includes) {
		return function (item) {
			return depends(item).length > 0 && depends(item).some(function (d) {
				return d.includes(value);
			});
		};
	}

	return function (item) {
		return depends(item).includes(value);
	};
}

function matchFlag(value, options) {
	var i = FLAGS[value] || 0;

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
			return dependents(item).length > 0 && dependents(item).some(function (d) {
				return d.startsWith(value);
			});
		};
	}

	if (options.includes) {
		return function (item) {
			return dependents(item).length > 0 && dependents(item).some(function (d) {
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
			return tags(item).length > 0 && tags(item).some(function (tag) {
				return tag.startsWith(value);
			});
		};
	}

	if (options.includes) {
		return function (item) {
			return tags(item).length > 0 && tags(item).some(function (tag) {
				return tag.includes(value);
			});
		};
	}

	return function (item) {
		return tags(item).includes(value);
	};
}

function matchVersion(value, options) {
	var modified = options.lower || options.greater || options.startsWith || options.includes;
	var valid = function valid(item) {
		return _semver2.default.valid(version(item));
	};

	if (modified) {
		return function (item) {
			return valid(item) ? _semver2.default.satisfies(version(item), '' + options.operators + options.value) : false;
		};
	}

	return function (item) {
		return valid(item) ? _semver2.default.satisfies(version(item), options.value) : false;
	};
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9zZWxlY3RvcnMvc2VhcmNoLmpzIl0sIm5hbWVzIjpbImFwcGx5IiwibWF0Y2giLCJwYXJzZSIsInBhcnNlVGVybSIsImZ1c2UiLCJwb29sIiwibSIsInBlcmZvcm0iLCJxdWVyeSIsInR5cGUiLCJ2YWx1ZXMiLCJtYXAiLCJ2YWx1ZSIsInBhcnNlZCIsInRlcm0iLCJ2YWxpZCIsInNlYXJjaEZpZWxkIiwic2VhcmNoIiwidXRpbHMiLCJiaW5hcnlUcmVlVG9RdWVyeUpzb24iLCJlcnIiLCJPUEVSQVRPUlMiLCJmb3VuZCIsInJhdyIsImZpZWxkIiwibmVnYXRvciIsIm1vZGlmaWVyIiwiZXF1YWxpdHkiLCJvcGVyYXRvcnMiLCJqb2luIiwibmVnYXRlZCIsImdyZWF0ZXIiLCJsb3dlciIsInN0YXJ0c1dpdGgiLCJpbmNsdWRlcyIsImVxdWFscyIsIkJvb2xlYW4iLCJvcHRpb25zIiwidGVzdGVyIiwidGVzdCIsImZpbHRlciIsIml0ZW0iLCJtYW5pZmVzdCIsImkiLCJpZCIsImRlcGVuZHMiLCJtYXRjaERlcGVuZHMiLCJoYXMiLCJtYXRjaEhhcyIsInByb3ZpZGVzIiwibWF0Y2hQcm92aWRlcyIsImZsYWciLCJtYXRjaEZsYWciLCJ0YWdzIiwibWF0Y2hUYWdzIiwidmVyc2lvbiIsIm1hdGNoVmVyc2lvbiIsIkZMQUdTIiwiZGVwcmVjYXRlZCIsImFscGhhIiwiYmV0YSIsInJjIiwic3RhYmxlIiwiaW5kZXgiLCJkZXBlbmRlbmNpZXMiLCJkZXBlbmRlbnRzIiwibGVuZ3RoIiwiY29udGVudHMiLCJzb21lIiwiZCIsInRhZyIsIm1vZGlmaWVkIiwic2F0aXNmaWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBSWdCQSxLLEdBQUFBLEs7UUFpQkFDLEssR0FBQUEsSztRQVlBQyxLLEdBQUFBLEs7UUFVQUMsUyxHQUFBQSxTOztBQTNDaEI7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRU8sU0FBU0gs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QVI7QUFBQSxFQUFkOztBQUVBLEtBQUk4QixRQUFKLEVBQWM7QUFDYixTQUFPO0FBQUEsVUFBUXhELE1BQU0wQixJQUFOLElBQWMsaUJBQU8rQixTQUFQLENBQWlCakIsUUFBUWQsSUFBUixDQUFqQixPQUFtQ0osUUFBUVQsU0FBM0MsR0FBdURTLFFBQVF6QixLQUEvRCxDQUFkLEdBQXdGLEtBQWhHO0FBQUEsR0FBUDtBQUNBOztBQUVELFFBQU87QUFBQSxTQUFRRyxNQUFNMEIsSUFBTixJQUFjLGlCQUFPK0IsU0FBUCxDQUFpQmpCLFFBQVFkLElBQVIsQ0FBakIsRUFBZ0NKLFFBQVF6QixLQUF4QyxDQUFkLEdBQStELEtBQXZFO0FBQUEsRUFBUDtBQUNBIiwiZmlsZSI6InNlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZmxhdHRlbiwgaW50ZXJzZWN0aW9ufSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHNlbXZlciBmcm9tICdzZW12ZXInO1xuaW1wb3J0IHEgZnJvbSAnbG9naWMtcXVlcnktcGFyc2VyJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5KGZ1c2UsIHBvb2wpIHtcblx0Y29uc3QgbSA9IG1hdGNoKGZ1c2UsIHBvb2wpO1xuXHRyZXR1cm4gZnVuY3Rpb24gcGVyZm9ybShxdWVyeSkge1xuXHRcdHN3aXRjaCAocXVlcnkudHlwZSkge1xuXHRcdFx0Y2FzZSAnYW5kJzoge1xuXHRcdFx0XHRyZXR1cm4gaW50ZXJzZWN0aW9uKC4uLnF1ZXJ5LnZhbHVlcy5tYXAodmFsdWUgPT4gcGVyZm9ybSh2YWx1ZSkpKTtcblx0XHRcdH1cblx0XHRcdGNhc2UgJ29yJzoge1xuXHRcdFx0XHRyZXR1cm4gZmxhdHRlbihxdWVyeS52YWx1ZXMubWFwKHZhbHVlID0+IHBlcmZvcm0odmFsdWUpKSk7XG5cdFx0XHR9XG5cdFx0XHRjYXNlICdzdHJpbmcnOlxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIG0ocXVlcnkudmFsdWUgfHwgJycpO1xuXHRcdH1cblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoKGZ1c2UsIHBvb2wpIHtcblx0cmV0dXJuIHRlcm0gPT4ge1xuXHRcdGNvbnN0IHBhcnNlZCA9IHBhcnNlVGVybSh0ZXJtKTtcblxuXHRcdGlmIChwYXJzZWQudmFsaWQpIHtcblx0XHRcdHJldHVybiBzZWFyY2hGaWVsZChwb29sLCBwYXJzZWQpO1xuXHRcdH1cblxuXHRcdHJldHVybiBmdXNlLnNlYXJjaCh0ZXJtKTtcblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlKHNlYXJjaCkge1xuXHR0cnkge1xuXHRcdHJldHVybiBxLnV0aWxzLmJpbmFyeVRyZWVUb1F1ZXJ5SnNvbihxLnBhcnNlKHNlYXJjaCkpO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHRyZXR1cm4ge3R5cGU6ICdhbmQnLCB2YWx1ZXM6IFtdfTtcblx0fVxufVxuXG5jb25zdCBPUEVSQVRPUlMgPSAvKFteIT48XFxeflxcbj1dKyk/KD86KCEpPyg+fDx8XFxefH4pPyg9KT8pKFteIT48XFxeflxcbj1dKyk/LztcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVGVybSh0ZXJtKSB7XG5cdGNvbnN0IGZvdW5kID0gdGVybS5tYXRjaChPUEVSQVRPUlMpIHx8IFtdO1xuXHRjb25zdCBbcmF3LCBmaWVsZCwgbmVnYXRvciwgbW9kaWZpZXIsIGVxdWFsaXR5LCB2YWx1ZV0gPSBmb3VuZDtcblxuXHRyZXR1cm4ge1xuXHRcdGZpZWxkLFxuXHRcdHZhbHVlLFxuXHRcdHJhdyxcblx0XHRvcGVyYXRvcnM6IFttb2RpZmllciwgZXF1YWxpdHldLmpvaW4oJycpLFxuXHRcdG5lZ2F0ZWQ6IG5lZ2F0b3IgPT09ICchJyxcblx0XHRncmVhdGVyOiBtb2RpZmllciA9PT0gJz4nLFxuXHRcdGxvd2VyOiBtb2RpZmllciA9PT0gJzwnLFxuXHRcdHN0YXJ0c1dpdGg6IGVxdWFsaXR5ID09PSAnPScgJiYgbW9kaWZpZXIgPT09ICdeJyxcblx0XHRpbmNsdWRlczogZXF1YWxpdHkgPT09ICc9JyAmJiBtb2RpZmllciA9PT0gJ34nLFxuXHRcdGVxdWFsczogZXF1YWxpdHkgPT09ICc9Jyxcblx0XHR2YWxpZDogQm9vbGVhbihmaWVsZCAmJiB2YWx1ZSAmJiAodHlwZW9mIG1vZGlmaWVyID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgZXF1YWxpdHkgPT09ICdzdHJpbmcnKSlcblx0fTtcbn1cblxuZnVuY3Rpb24gc2VhcmNoRmllbGQocG9vbCwgb3B0aW9ucykge1xuXHRjb25zdCB0ZXN0ZXIgPSB0ZXN0KG9wdGlvbnMuZmllbGQsIG9wdGlvbnMudmFsdWUsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBwb29sXG5cdFx0LmZpbHRlcihpdGVtID0+IHR5cGVvZiBpdGVtLm1hbmlmZXN0ID09PSAnb2JqZWN0Jylcblx0XHQuZmlsdGVyKGl0ZW0gPT4gb3B0aW9ucy5uZWdhdGVkID8gIXRlc3RlcihpdGVtKSA6IHRlc3RlcihpdGVtKSlcblx0XHQubWFwKGkgPT4gaS5pZCk7XG59XG5cbmZ1bmN0aW9uIHRlc3QoZmllbGQsIHZhbHVlLCBvcHRpb25zKSB7XG5cdGNvbnN0IGRlcGVuZHMgPSBtYXRjaERlcGVuZHModmFsdWUsIG9wdGlvbnMpO1xuXHRjb25zdCBoYXMgPSBtYXRjaEhhcyh2YWx1ZSwgb3B0aW9ucyk7XG5cdGNvbnN0IHByb3ZpZGVzID0gbWF0Y2hQcm92aWRlcyh2YWx1ZSwgb3B0aW9ucyk7XG5cdGNvbnN0IGZsYWcgPSBtYXRjaEZsYWcodmFsdWUsIG9wdGlvbnMpO1xuXHRjb25zdCB0YWdzID0gbWF0Y2hUYWdzKHZhbHVlLCBvcHRpb25zKTtcblx0Y29uc3QgdmVyc2lvbiA9IG1hdGNoVmVyc2lvbih2YWx1ZSwgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGl0ZW0gPT4ge1xuXHRcdHN3aXRjaCAoZmllbGQpIHtcblx0XHRcdGNhc2UgJ2RlcGVuZHMnOlxuXHRcdFx0XHRyZXR1cm4gZGVwZW5kcyhpdGVtKTtcblx0XHRcdGNhc2UgJ2hhcyc6XG5cdFx0XHRcdHJldHVybiBoYXMoaXRlbSk7XG5cdFx0XHRjYXNlICdwcm92aWRlcyc6XG5cdFx0XHRcdHJldHVybiBwcm92aWRlcyhpdGVtKTtcblx0XHRcdGNhc2UgJ3RhZyc6XG5cdFx0XHRjYXNlICd0YWdzJzpcblx0XHRcdFx0cmV0dXJuIHRhZ3MoaXRlbSk7XG5cdFx0XHRjYXNlICd2ZXJzaW9uJzpcblx0XHRcdFx0cmV0dXJuIHZlcnNpb24oaXRlbSk7XG5cdFx0XHRjYXNlICdmbGFnJzpcblx0XHRcdFx0cmV0dXJuIGZsYWcoaXRlbSk7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gaXRlbVtmaWVsZF0gPT09IHZhbHVlIHx8IGl0ZW0ubWFuaWZlc3RbZmllbGRdID09PSB2YWx1ZTtcblx0XHR9XG5cdH07XG59XG5cbmV4cG9ydCBjb25zdCBGTEFHUyA9IHtcblx0ZGVwcmVjYXRlZDogMCxcblx0YWxwaGE6IDAsXG5cdGJldGE6IDEsXG5cdHJjOiAyLFxuXHRzdGFibGU6IDNcbn07XG5cbmNvbnN0IG1hbmlmZXN0ID0gaXRlbSA9PiBpdGVtLm1hbmlmZXN0O1xuY29uc3QgZmxhZyA9IGl0ZW0gPT4gbWFuaWZlc3QoaXRlbSkuZmxhZztcbmNvbnN0IGluZGV4ID0gaXRlbSA9PiBGTEFHU1tmbGFnKGl0ZW0pXSB8fCAwO1xuY29uc3QgdmVyc2lvbiA9IGl0ZW0gPT4gbWFuaWZlc3QoaXRlbSkudmVyc2lvbjtcbmNvbnN0IHRhZ3MgPSBpdGVtID0+IG1hbmlmZXN0KGl0ZW0pLnRhZ3MgfHwgW107XG5jb25zdCBkZXBlbmRzID0gaXRlbSA9PiAoaXRlbS5kZXBlbmRlbmNpZXMgfHwgW10pLmZpbHRlcihpID0+IHR5cGVvZiBpID09PSAnc3RyaW5nJyk7XG5jb25zdCBkZXBlbmRlbnRzID0gaXRlbSA9PiAoaXRlbS5kZXBlbmRlbnRzIHx8IFtdKS5maWx0ZXIoaSA9PiB0eXBlb2YgaSA9PT0gJ3N0cmluZycpO1xuXG5mdW5jdGlvbiBtYXRjaEhhcyh2YWx1ZSkge1xuXHRyZXR1cm4gaXRlbSA9PiB7XG5cdFx0c3dpdGNoICh2YWx1ZSkge1xuXHRcdFx0Y2FzZSAnZGVwZW5kZW5jaWVzJzpcblx0XHRcdFx0cmV0dXJuIChpdGVtLmRlcGVuZGVuY2llcyB8fCBbXSkubGVuZ3RoID4gMDtcblx0XHRcdGNhc2UgJ2RlcGVuZGVudHMnOlxuXHRcdFx0XHRyZXR1cm4gKGl0ZW0uZGVwZW5kZW50cyB8fCBbXSkubGVuZ3RoID4gMDtcblx0XHRcdGNhc2UgJ2RvYyc6XG5cdFx0XHRjYXNlICdkb2NzJzpcblx0XHRcdFx0cmV0dXJuIEJvb2xlYW4oaXRlbS5jb250ZW50cyk7XG5cdFx0XHRjYXNlICd0YWdzJzpcblx0XHRcdFx0cmV0dXJuIChpdGVtLm1hbmlmZXN0LnRhZ3MgfHwgW10pLmxlbmd0aCA+IDA7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9O1xufVxuXG5mdW5jdGlvbiBtYXRjaERlcGVuZHModmFsdWUsIG9wdGlvbnMpIHtcblx0aWYgKG9wdGlvbnMuc3RhcnRzV2l0aCkge1xuXHRcdHJldHVybiBpdGVtID0+IGRlcGVuZHMoaXRlbSkubGVuZ3RoID4gMCAmJiBkZXBlbmRzKGl0ZW0pLnNvbWUoZCA9PiBkLnN0YXJ0c1dpdGgodmFsdWUpKTtcblx0fVxuXG5cdGlmIChvcHRpb25zLmluY2x1ZGVzKSB7XG5cdFx0cmV0dXJuIGl0ZW0gPT4gZGVwZW5kcyhpdGVtKS5sZW5ndGggPiAwICYmIGRlcGVuZHMoaXRlbSkuc29tZShkID0+IGQuaW5jbHVkZXModmFsdWUpKTtcblx0fVxuXG5cdHJldHVybiBpdGVtID0+IGRlcGVuZHMoaXRlbSkuaW5jbHVkZXModmFsdWUpO1xufVxuXG5mdW5jdGlvbiBtYXRjaEZsYWcodmFsdWUsIG9wdGlvbnMpIHtcblx0Y29uc3QgaSA9IEZMQUdTW3ZhbHVlXSB8fCAwO1xuXG5cdGlmIChvcHRpb25zLmxvd2VyKSB7XG5cdFx0cmV0dXJuIGl0ZW0gPT4gb3B0aW9ucy5lcXVhbHMgPyBpbmRleChpdGVtKSA8PSBpIDogaW5kZXgoaXRlbSkgPCBpO1xuXHR9XG5cdGlmIChvcHRpb25zLmdyZWF0ZXIpIHtcblx0XHRyZXR1cm4gaXRlbSA9PiBvcHRpb25zLmVxdWFscyA/IGluZGV4KGl0ZW0pID49IGkgOiBpbmRleChpdGVtKSA+IGk7XG5cdH1cblx0aWYgKG9wdGlvbnMuc3RhcnRzV2l0aCkge1xuXHRcdHJldHVybiBpdGVtID0+IGZsYWcoaXRlbSkuc3RhcnRzV2l0aCh2YWx1ZSk7XG5cdH1cblx0aWYgKG9wdGlvbnMuaW5jbHVkZXMpIHtcblx0XHRyZXR1cm4gaXRlbSA9PiBmbGFnKGl0ZW0pLmluY2x1ZGVzKHZhbHVlKTtcblx0fVxuXHRyZXR1cm4gaXRlbSA9PiBmbGFnKGl0ZW0pID09PSB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gbWF0Y2hQcm92aWRlcyh2YWx1ZSwgb3B0aW9ucykge1xuXHRpZiAob3B0aW9ucy5zdGFydHNXaXRoKSB7XG5cdFx0cmV0dXJuIGl0ZW0gPT4gZGVwZW5kZW50cyhpdGVtKS5sZW5ndGggPiAwICYmIGRlcGVuZGVudHMoaXRlbSkuc29tZShkID0+IGQuc3RhcnRzV2l0aCh2YWx1ZSkpO1xuXHR9XG5cblx0aWYgKG9wdGlvbnMuaW5jbHVkZXMpIHtcblx0XHRyZXR1cm4gaXRlbSA9PiBkZXBlbmRlbnRzKGl0ZW0pLmxlbmd0aCA+IDAgJiYgZGVwZW5kZW50cyhpdGVtKS5zb21lKGQgPT4gZC5pbmNsdWRlcyh2YWx1ZSkpO1xuXHR9XG5cblx0cmV0dXJuIGl0ZW0gPT4gZGVwZW5kZW50cyhpdGVtKS5pbmNsdWRlcyh2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIG1hdGNoVGFncyh2YWx1ZSwgb3B0aW9ucykge1xuXHRpZiAob3B0aW9ucy5zdGFydHNXaXRoKSB7XG5cdFx0cmV0dXJuIGl0ZW0gPT4gdGFncyhpdGVtKS5sZW5ndGggPiAwICYmIHRhZ3MoaXRlbSkuc29tZSh0YWcgPT4gdGFnLnN0YXJ0c1dpdGgodmFsdWUpKTtcblx0fVxuXG5cdGlmIChvcHRpb25zLmluY2x1ZGVzKSB7XG5cdFx0cmV0dXJuIGl0ZW0gPT4gdGFncyhpdGVtKS5sZW5ndGggPiAwICYmIHRhZ3MoaXRlbSkuc29tZSh0YWcgPT4gdGFnLmluY2x1ZGVzKHZhbHVlKSk7XG5cdH1cblxuXHRyZXR1cm4gaXRlbSA9PiB0YWdzKGl0ZW0pLmluY2x1ZGVzKHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gbWF0Y2hWZXJzaW9uKHZhbHVlLCBvcHRpb25zKSB7XG5cdGNvbnN0IG1vZGlmaWVkID0gb3B0aW9ucy5sb3dlciB8fCBvcHRpb25zLmdyZWF0ZXIgfHwgb3B0aW9ucy5zdGFydHNXaXRoIHx8IG9wdGlvbnMuaW5jbHVkZXM7XG5cdGNvbnN0IHZhbGlkID0gaXRlbSA9PiBzZW12ZXIudmFsaWQodmVyc2lvbihpdGVtKSk7XG5cblx0aWYgKG1vZGlmaWVkKSB7XG5cdFx0cmV0dXJuIGl0ZW0gPT4gdmFsaWQoaXRlbSkgPyBzZW12ZXIuc2F0aXNmaWVzKHZlcnNpb24oaXRlbSksIGAke29wdGlvbnMub3BlcmF0b3JzfSR7b3B0aW9ucy52YWx1ZX1gKSA6IGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuIGl0ZW0gPT4gdmFsaWQoaXRlbSkgPyBzZW12ZXIuc2F0aXNmaWVzKHZlcnNpb24oaXRlbSksIG9wdGlvbnMudmFsdWUpIDogZmFsc2U7XG59XG4iXX0=
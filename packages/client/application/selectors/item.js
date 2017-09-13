'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.selectContents = exports.selectEnvs = exports.selectEnv = exports.selectId = exports.selectFlag = exports.selectVersion = exports.selectTags = exports.selectName = exports.selectIcon = exports.selectAutomount = exports.selectActive = exports.selectType = exports.selectManifest = exports.selectDependents = exports.selectDependencies = exports.selectDemoDependents = exports.selectDemoDependencies = undefined;

var _reselect = require('reselect');

var _pool = require('./pool');

var _pool2 = _interopRequireDefault(_pool);

var _relation = require('./relation');

var _relation2 = _interopRequireDefault(_relation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var REGISTRY = {
	'/': 'doc/root'
};

var selectItem = (0, _reselect.createSelector)(_pool2.default, function (state) {
	return state.id;
}, function (pool, id) {
	var search = id in REGISTRY ? REGISTRY[id] : id;
	return pool.find(function (item) {
		return search === item.type + '/' + item.id;
	});
});

exports.default = selectItem;


var filter = function filter(hidden) {
	return hidden ? function (item) {
		return (item.manifest.options || {}).hidden !== true;
	} : function (i) {
		return i;
	};
};

var selectFilter = (0, _reselect.createSelector)(function (state) {
	return state.hide;
}, function (hide) {
	return filter(hide);
});

var relation = function relation(key) {
	return (0, _relation2.default)(key, selectItem, selectFilter);
};

var selectDemoDependencies = exports.selectDemoDependencies = relation('demoDependencies');
var selectDemoDependents = exports.selectDemoDependents = relation('demoDependents');
var selectDependencies = exports.selectDependencies = relation('dependencies');
var selectDependents = exports.selectDependents = relation('dependents');

var selectManifest = exports.selectManifest = (0, _reselect.createSelector)(selectItem, function (item) {
	return item ? JSON.stringify(item.manifest, null, '  ') : '';
});

var selectType = exports.selectType = (0, _reselect.createSelector)(selectItem, function (item) {
	return item ? item.type : '';
});

var selectActive = exports.selectActive = (0, _reselect.createSelector)(selectItem, function (state) {
	return state.searchEnabled;
}, function (item, search) {
	return !search && item !== null && typeof item !== 'undefined';
});

var selectOptions = (0, _reselect.createSelector)(selectItem, function (item) {
	return item.manifest.options || {};
});

var selectReactToMarkup = (0, _reselect.createSelector)(selectOptions, function (options) {
	return options['react-to-markup'] || {};
});

var selectReactToMarkupOpts = (0, _reselect.createSelector)(selectReactToMarkup, function (r) {
	return r.opts || {};
});

var selectAutomount = exports.selectAutomount = (0, _reselect.createSelector)(selectReactToMarkupOpts, function (state) {
	return state.schema.automount;
}, function (state) {
	return state.mountEnabled;
}, function (opts, globalConfig, enabled) {
	if (enabled !== null) {
		return enabled;
	}

	return 'automount' in opts ? opts.automount : globalConfig;
});

var selectIcon = exports.selectIcon = (0, _reselect.createSelector)(selectItem, function (item) {
	return item ? item.manifest.icon || item.type : '';
});

var selectName = exports.selectName = (0, _reselect.createSelector)(selectItem, function (item) {
	return item ? item.manifest.displayName : '';
});

var selectTags = exports.selectTags = (0, _reselect.createSelector)(selectItem, function (item) {
	return item ? item.manifest.tags : [];
});

var selectVersion = exports.selectVersion = (0, _reselect.createSelector)(selectItem, function (item) {
	return item ? item.manifest.version : '';
});

var selectFlag = exports.selectFlag = (0, _reselect.createSelector)(selectItem, function (item) {
	return item ? item.manifest.flag : '';
});

var selectId = exports.selectId = (0, _reselect.createSelector)(selectItem, function (item) {
	return item ? item.id : '';
});

var selectEnv = exports.selectEnv = (0, _reselect.createSelector)(function (state) {
	return state.environment;
}, function (state) {
	return state.schema.envs;
}, function (env, envs) {
	var found = envs.find(function (e) {
		return e.name === env;
	});
	return {
		name: found.name,
		displayName: found.displayName
	};
});

var selectEnvs = exports.selectEnvs = (0, _reselect.createSelector)(selectItem, function (state) {
	return state.schema.envs;
}, function (item, envs) {
	if (!item) {
		return [];
	}

	return (item.envs || []).map(function (e) {
		var found = envs.find(function (env) {
			return env.name === e;
		});
		return {
			name: found.name,
			displayName: found.displayName
		};
	});
});

var selectContents = exports.selectContents = (0, _reselect.createSelector)(selectItem, function (item) {
	if (!item) {
		return null;
	}
	return typeof item.contents === 'string' ? item.contents : null;
});
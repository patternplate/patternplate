'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectContents = exports.selectEnvs = exports.selectEnv = exports.selectId = exports.selectFlag = exports.selectVersion = exports.selectTags = exports.selectName = exports.selectIcon = exports.selectAutomount = exports.selectActive = exports.selectType = exports.selectManifest = exports.selectDependents = exports.selectDependencies = exports.selectDemoDependents = exports.selectDemoDependencies = undefined;

const _reselect = require('reselect');

const _pool = require('./pool');

const _pool2 = _interopRequireDefault(_pool);

const _relation = require('./relation');

const _relation2 = _interopRequireDefault(_relation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const REGISTRY = {
  '/': 'doc/root'
};

const selectItem = (0, _reselect.createSelector)(_pool2.default, (state) => {
  return state.id;
}, (pool, id) => {
  const search = id in REGISTRY ? REGISTRY[id] : id;
  return pool.find((item) => {
    return search === item.type + '/' + item.id;
  });
});

exports.default = selectItem;


const filter = function filter(hidden) {
  return hidden ? function (item) {
    return (item.manifest.options || {}).hidden !== true;
  } : function (i) {
    return i;
  };
};

const selectFilter = (0, _reselect.createSelector)((state) => {
  return state.hide;
}, (hide) => {
  return filter(hide);
});

const relation = function relation(key) {
  return (0, _relation2.default)(key, selectItem, selectFilter);
};

const selectDemoDependencies = exports.selectDemoDependencies = relation('demoDependencies');
const selectDemoDependents = exports.selectDemoDependents = relation('demoDependents');
const selectDependencies = exports.selectDependencies = relation('dependencies');
const selectDependents = exports.selectDependents = relation('dependents');

const selectManifest = exports.selectManifest = (0, _reselect.createSelector)(selectItem, (item) => {
  return item ? JSON.stringify(item.manifest, null, '  ') : '';
});

const selectType = exports.selectType = (0, _reselect.createSelector)(selectItem, (item) => {
  return item ? item.type : '';
});

const selectActive = exports.selectActive = (0, _reselect.createSelector)(selectItem, (state) => {
  return state.searchEnabled;
}, (item, search) => {
  return !search && item !== null && typeof item !== 'undefined';
});

const selectOptions = (0, _reselect.createSelector)(selectItem, (item) => {
  return item.manifest.options || {};
});

const selectReactToMarkup = (0, _reselect.createSelector)(selectOptions, (options) => {
  return options['react-to-markup'] || {};
});

const selectReactToMarkupOpts = (0, _reselect.createSelector)(selectReactToMarkup, (r) => {
  return r.opts || {};
});

const selectAutomount = exports.selectAutomount = (0, _reselect.createSelector)(selectReactToMarkupOpts, (state) => {
  return state.schema.automount;
}, (state) => {
  return state.mountEnabled;
}, (opts, globalConfig, enabled) => {
  if (enabled !== null) {
    return enabled;
  }

  return 'automount' in opts ? opts.automount : globalConfig;
});

const selectIcon = exports.selectIcon = (0, _reselect.createSelector)(selectItem, (item) => {
  return item ? item.manifest.icon || item.type : '';
});

const selectName = exports.selectName = (0, _reselect.createSelector)(selectItem, (item) => {
  return item ? item.manifest.displayName : '';
});

const selectTags = exports.selectTags = (0, _reselect.createSelector)(selectItem, (item) => {
  return item ? item.manifest.tags : [];
});

const selectVersion = exports.selectVersion = (0, _reselect.createSelector)(selectItem, (item) => {
  return item ? item.manifest.version : '';
});

const selectFlag = exports.selectFlag = (0, _reselect.createSelector)(selectItem, (item) => {
  return item ? item.manifest.flag : '';
});

const selectId = exports.selectId = (0, _reselect.createSelector)(selectItem, (item) => {
  return item ? item.id : '';
});

const selectEnv = exports.selectEnv = (0, _reselect.createSelector)((state) => {
  return state.environment;
}, (state) => {
  return state.schema.envs;
}, (env, envs) => {
  const found = envs.find((e) => {
    return e.name === env;
  });
  return {
    name: found.name,
    displayName: found.displayName
  };
});

const selectEnvs = exports.selectEnvs = (0, _reselect.createSelector)(selectItem, (state) => {
  return state.schema.envs;
}, (item, envs) => {
  if (!item) {
    return [];
  }

  return (item.envs || []).map((e) => {
    const found = envs.find((env) => {
      return env.name === e;
    });
    return {
      name: found.name,
      displayName: found.displayName
    };
  });
});

const selectContents = exports.selectContents = (0, _reselect.createSelector)(selectItem, (item) => {
  if (!item) {
    return null;
  }
  return typeof item.contents === 'string' ? item.contents : null;
});
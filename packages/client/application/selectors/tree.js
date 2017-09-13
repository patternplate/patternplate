'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.flatten = flatten;
exports.sanitize = sanitize;
exports.enrich = enrich;

const _path = require('path');

const _path2 = _interopRequireDefault(_path);

const _url = require('url');

const _url2 = _interopRequireDefault(_url);

const _frontMatter = require('front-matter');

const _frontMatter2 = _interopRequireDefault(_frontMatter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; }  return Array.from(arr);  }

const WEIGHTS = {
  folder: 0,
  doc: 1,
  pattern: 2
};

function flatten(tree) {
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

  return (tree.children || []).reduce((reg, child) => {
    return [].concat(_toConsumableArray(reg), _toConsumableArray(flatten(child)));
  }, init);
}

function sanitize(tree, context) {
  let hide = context.hide,
      id = context.id,
      _context$config = context.config,
      config = _context$config === undefined ? {} : _context$config,
      prefix = context.prefix,
      base = context.base,
      location = context.location;

  const filter = hide ? function (child) {
    return !child.manifest.options.hidden;
  } : function (i) {
    return i;
  };

  tree.children = tree.children.filter(filter).map((child) => {
    const enriched = enrich(child, {
      base,
      location,
      hide,
      id,
      config,
      prefix
    });
    return enriched.children ? sanitize(enriched, { base, location, hide, id, config, prefix }) : enriched;
  }).sort((a, b) => {
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

  return enrich(tree, { base, location, id, config, prefix });
}

function enrich(child, context) {
  let id = context.id,
      config = context.config,
      prefix = context.prefix;

  const p = prefix.split('/');
  const fragments = id.split('/').filter((f, i) => {
    return p[i] !== f;
  });

  child.active = child.id === 'root' ? id === '/' : (child.path || ['/']).every((f, i) => {
    return fragments[i] === f;
  });

  const parsed = _url2.default.parse(child.href || _path2.default.join(prefix, child.id));

  child.href = _url2.default.format({
    pathname: typeof parsed.pathname === 'string' ? _url2.default.resolve(context.base, parsed.pathname) : location.pathname,
    query: _extends({}, context.location.query, parsed.query)
  });

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
      message: child.manifest.displayName + ' is flagged as ' + child.manifest.flag + '.'
    });
  }

  // If there is no special content in a folder show the first child
  if (child.children && child.children.length > 0 && (!child.contents || !(0, _frontMatter2.default)(child.contents).body)) {
    child.href = child.children[0].href;
  }

  return child;
}
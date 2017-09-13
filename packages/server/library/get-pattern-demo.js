'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

let getPatternDemo = (() => {
  var _ref = _asyncToGenerator(function* (application, id, filters, environment, options) {
    const getFile = (0, _getPatternSource2.default)(application);
    filters.outFormats = ['html'];

    var _ref2 = yield (0, _getPatternRetriever2.default)(application)(id, filters, environment, ['read'], {
      automount: options.mount
    });

    var _ref3 = _slicedToArray(_ref2, 1);

    const pattern = _ref3[0];


    if (!pattern) {
      return null;
    }

    const order = ['demo', 'index'];

    const path = Object.values(pattern.files).sort(function (a, b) {
      return order.indexOf(a.basename) - order.indexOf(b.basename);
    }).map(function (file) {
      return file.path;
    })[0];

    if (!path) {
      return null;
    }

    const automount = selectAutoMount(application, pattern, options.mount);
    const content = yield getFile(path, 'transformed', environment, { automount: automount });
    const formats = application.configuration.patterns.formats;


    if (automount) {
      yield (0, _getComponent2.default)(application, pattern.id, environment);
    }

    const render = getRenderer(formats, automount);
    const resources = (application.resources || []).filter(function (_ref4) {
      let p = _ref4.pattern;
      return p === null || p === pattern.id;
    });
    return render(content.body, pattern, resources);
  });

  return function getPatternDemo(_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
})();

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _lodash = require('lodash');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _getPatternRetriever = require('./utilities/get-pattern-retriever');

var _getPatternRetriever2 = _interopRequireDefault(_getPatternRetriever);

var _urlQuery = require('./utilities/url-query');

var _urlQuery2 = _interopRequireDefault(_urlQuery);

var _getPatternSource = require('./get-pattern-source');

var _getPatternSource2 = _interopRequireDefault(_getPatternSource);

var _getComponent = require('./get-component');

var _getComponent2 = _interopRequireDefault(_getComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = getPatternDemo;


function selectAutoMount(a, p, forced) {
  const transform = a.configuration.transforms['react-to-markup'] || {};
  const pattern = selectReactToMarkup(selectManifestOptions(p));
  const settings = (0, _lodash.merge)({}, transform.opts, pattern.opts, { automount: forced });
  return settings.automount || false;
}

function selectReactToMarkup(o) {
  return o['react-to-markup'] || {};
}

function selectManifestOptions(p) {
  return p.manifest.options || {};
}

function getRenderer(formats) {
  let component = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

  return (content, result, resources) => {
    const transforms = result.config.transforms;
    const styleFormat = getFormat(formats, transforms, 'style');
    const scriptFormat = getFormat(formats, transforms, 'script');
    const styleReference = getUriByFormat(result, styleFormat, '/demo');

    const markupContent = [{ content: content }];
    const styleContent = resources.filter(r => r.type === 'css' && !r.reference);
    const scriptContent = resources.filter(r => r.type === 'js' && !r.reference);

    const scripts = component ? [] : [{ uri: getUriByFormat(result, scriptFormat, '/demo') }];
    const styles = [{ id: styleReference }].filter(i => i.id);

    const markupReferences = (0, _lodash.uniqBy)(resources.filter(r => r.type === 'html' && r.reference), 'id');
    const styleReferences = (0, _lodash.uniqBy)([].concat(_toConsumableArray(styles), _toConsumableArray(resources.filter(r => r.type === 'css' && r.reference))), 'id');
    const scriptReferences = (0, _lodash.uniqBy)([].concat(_toConsumableArray(resources.filter(r => r.type === 'js' && r.reference)), scripts), 'id').filter(s => component || !String(s.id).startsWith('react-mount'));

    return layout({
      title: result.id,
      content: {
        markup: markupContent,
        style: styleContent,
        script: scriptContent
      },
      reference: {
        markup: markupReferences,
        style: styleReferences,
        script: scriptReferences
      }
    });
  };
}

const formatNames = {
  markup: 'html',
  style: 'css',
  script: 'js'
};

function getUriByFormat(pattern) {
  let format = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
  let base = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];

  if (!format) {
    return null;
  }

  const outFormats = pattern.outFormats || [];
  const type = format.toLowerCase();
  const match = outFormats.find(o => o.type === type);

  if (match) {
    return _urlQuery2.default.format({
      pathname: `${base}/${pattern.id}/index.${match.extension}`,
      query: {
        environment: pattern.filters.environments[0] || 'index'
      }
    });
  }

  return null;
}

function getFormat(formats, transforms, type) {
  const entries = Object.entries(formats);
  // try to get a format with matching outFormat
  // markup => html
  // style => css
  // script => js
  const formatName = formatNames[type];
  const found = entries.find(findByOutFormat(formatName, transforms));

  if (found) {
    return (found[1] || {}).name || found[0];
  }

  // Legacy get format by name
  // {name: 'Format'}
  const legacy = entries.find(findByName(type));
  if (legacy) {
    return (legacy[0] || {}).name || legacy[0];
  }

  return null;
}

function findByName(name) {
  return entry => entry[1].name.toLowerCase() === name;
}

function findByOutFormat(name, transforms) {
  return entry => {
    const outFormat = getOutFormat(entry, transforms);
    return name === outFormat;
  };
}

function getOutFormat(entry, transforms) {
  const entryTransforms = entry[1].transforms || [];
  // If no transforms are configured
  // use the inbound transform extension as outFormat
  if (!entryTransforms.length) {
    return entry[0];
  }

  const transformName = entryTransforms[entryTransforms.length - 1];
  const transformConfig = transforms[transformName];
  return transformConfig.outFormat;
}

function layout(props) {
  const styleRefs = (props.reference.style || []).filter(isReference);
  const scriptRefs = (props.reference.script || []).filter(isReference);

  const demo = _react2.default.createElement(Demo, {
    content: props.content,
    title: props.title,
    styleRefs: styleRefs,
    scriptRefs: scriptRefs
  });

  return `<!doctype html>\n${(0, _server.renderToStaticMarkup)(demo)}`;
}

function isAbsolute(reference) {
  return !isRelative(reference) && !hasUri(reference);
}

function isReference(reference) {
  return 'id' in reference || 'uri' in reference;
}

function isRelative(reference) {
  return (reference.id || '').charAt(0) === '.' || hasUri(reference);
}

function hasUri(reference) {
  return 'uri' in reference;
}

function Demo(props) {
  return _react2.default.createElement(
    'html',
    null,
    _react2.default.createElement(
      'head',
      null,
      _react2.default.createElement(
        'title',
        null,
        props.title
      ),
      _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=no' }),
      _react2.default.createElement('link', { rel: 'icon', href: 'data:;base64,iVBORw0KGgo=' }),
      props.styleRefs.filter(isAbsolute).map(style => _react2.default.createElement('link', { rel: 'stylesheet', href: _url2.default.resolve(`/api/resource/`, style.id) })),
      props.styleRefs.filter(isRelative).map(style => _react2.default.createElement('link', { rel: 'stylesheet', href: style.uri || style.id }))
    ),
    _react2.default.createElement(
      'body',
      null,
      _react2.default.createElement('div', { style: { display: 'none' }, dangerouslySetInnerHTML: { __html: (props.content.style || []).map(style => style.wrap === false ? style.content : `<style>${style.content}</style>`).join('\n') } }),
      (props.content.markup || []).map(markup => _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: markup.content } })),
      props.scriptRefs.filter(isAbsolute).map(script => _react2.default.createElement('script', { src: `/api/resource/${script.id}.js` })),
      props.scriptRefs.filter(isRelative).filter(script => Boolean(script.uri || script.id)).map(script => _react2.default.createElement('script', { src: script.uri || script.id }))
    )
  );
}
module.exports = exports['default'];
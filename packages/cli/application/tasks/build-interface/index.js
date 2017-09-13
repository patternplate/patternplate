'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Create a static build of a patternplate instance ready to be deployed on a static web server
 * @param {Object} application
 * @param {Object} configuration
 * @return {Promise<void>}
 */
const buildInterface = (() => {
  const _ref = _asyncToGenerator(function* (application, configuration) {
    const verbose = typeof configuration.verbose === 'boolean' ? configuration.verbose : _isCi2.default;
    const renderer = verbose ? 'verbose' : 'default';
    const concurrent = Boolean(configuration.concurrent);

    const settings = (0, _lodash.merge)({}, defaults, configuration);
    const targetPath = cwd(settings.out || settings.target);
    const patternsPath = cwd('./patterns');

    const app = application.parent;
    const client = application.parent.client;
    const server = application.parent.server;

    const automount = selectAutoMount(server);

    const environments = yield getEnvironments(patternsPath, {
      cache: server.cache
    });

    const flags = settings.flags || [];
    const filterPatternData = flags.length > 0 ? function (i) {
      return flags.includes(i.manifest.flag);
    } : function () {
      return true;
    };

    const jobMax = 1 + (0, _fp.max)(jobPrefixes.map((i) => {
      return i.length;
    }));
    const jobPad = (0, _fp.padEnd)(jobMax);

    const rewriter = yield (0, _getRewriter2.default)(targetPath);
    const serverContext = {
      app: server,
      automount,
      rewriter,
      jobPad,
      flags,
      verbose
    };
    const clientContext = { app: client, rewriter, jobPad, flags, verbose };

    const apiTargetPath = _path2.default.resolve(targetPath, 'api');
    const apiPatternTargetPath = _path2.default.resolve(apiTargetPath, 'pattern');
    const apiResourceTargetPath = _path2.default.resolve(apiTargetPath, 'resource');
    const patternTargetPath = _path2.default.resolve(targetPath, 'pattern');
    const demoTargetPath = _path2.default.resolve(targetPath, 'demo');

    const dataStream = (0, _getPatternDatasets2.default)(app, client, server);
    const rawPatternData = [];

    const schema = yield getSchema(app, client, server);
    const sch = _path2.default.resolve(apiTargetPath, 'index.html');
    yield sander.writeFile(sch, Buffer.from(JSON.stringify(schema)));

    const dataTask = new _listr2.default([{
      title: 'Pattern data',
      task: function task() {
        return dataStream.map(d => {
          if (d.data) {
            rawPatternData.push(d.data);
          }
          return d;
        }).map(d => d.message).filter(Boolean).map(m => `${verbose ? 'Pattern data: ' : ''}${m}`);
      }
    }], { renderer });

    yield dataTask.run();

    const patternData = rawPatternData.filter(filterPatternData).map((p) => {
      p.environmentNames = environments.filter((env) => {
        return env.display !== false;
      }).map((env) => {
        return env.name;
      });
      return p;
    });

    const release = verbose ? function () {} : (0, _trap2.default)(app);

    const tasks = new _listr2.default([{
      title: 'Entry files',
      task: function task() {
        return (0, _buildEntry2.default)('/', targetPath, clientContext);
      }
    }, {
      title: 'Docs',
      task: function task() {
        return (0, _buildDocs2.default)(patternsPath, targetPath, clientContext);
      }
    }, {
      title: 'Static files',
      task: function task() {
        return (0, _buildStatics2.default)('@patternplate/client', targetPath, serverContext);
      }
    }, {
      title: 'Data',
      task: function task() {
        return (0, _buildData2.default)(patternData, apiPatternTargetPath, serverContext);
      }
    }, {
      title: 'Page files',
      task: function task() {
        return (0, _buildPages2.default)(patternData, patternTargetPath, clientContext);
      }
    }, {
      title: 'Sources',
      task: function task() {
        return (0, _buildSources2.default)(patternData, _path2.default.resolve(targetPath, 'api', 'file'), serverContext);
      }
    }, {
      title: 'Demo Files',
      task: function task() {
        return (0, _buildDemoFiles2.default)(patternData, demoTargetPath, serverContext);
      }
    }, {
      title: 'Demos',
      task: function task() {
        return (0, _buildDemos2.default)(patternData, demoTargetPath, serverContext);
      }
    }, {
      title: 'Automount components',
      task: function task() {
        return (0, _buildComponents2.default)(patternData, demoTargetPath, serverContext);
      }
    }], { concurrent, renderer });

    yield tasks.run();

    const resourceTask = new _listr2.default([{
      title: 'Pattern resources',
      task: function task() {
        return (0, _buildResources2.default)(application.resources, apiResourceTargetPath, serverContext);
      }
    }], { renderer });

    yield resourceTask.run();

    release((m) => {
      return m.forEach((message) => {
        return console.log(message);
      });
    });
  });

  return function buildInterface(_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();

const _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _lodash = require('lodash');

var _fp = require('lodash/fp');

const _listr = require('listr');

var _listr2 = _interopRequireDefault(_listr);

const _isCi = require('is-ci');

var _isCi2 = _interopRequireDefault(_isCi);

const _sander = require('sander');

var sander = _interopRequireWildcard(_sander);

const _buildComponents = require('./build-components');

var _buildComponents2 = _interopRequireDefault(_buildComponents);

const _buildData = require('./build-data');

var _buildData2 = _interopRequireDefault(_buildData);

const _buildDemoFiles = require('./build-demo-files');

var _buildDemoFiles2 = _interopRequireDefault(_buildDemoFiles);

const _buildDemos = require('./build-demos');

var _buildDemos2 = _interopRequireDefault(_buildDemos);

const _buildDocs = require('./build-docs');

var _buildDocs2 = _interopRequireDefault(_buildDocs);

const _buildEntry = require('./build-entry');

var _buildEntry2 = _interopRequireDefault(_buildEntry);

const _buildPages = require('./build-pages');

var _buildPages2 = _interopRequireDefault(_buildPages);

const _buildResources = require('./build-resources');

var _buildResources2 = _interopRequireDefault(_buildResources);

const _buildSources = require('./build-sources');

var _buildSources2 = _interopRequireDefault(_buildSources);

const _buildStatics = require('./build-statics');

var _buildStatics2 = _interopRequireDefault(_buildStatics);

const _getPatternDatasets = require('./get-pattern-datasets');

var _getPatternDatasets2 = _interopRequireDefault(_getPatternDatasets);

const _getRewriter = require('./get-rewriter');

var _getRewriter2 = _interopRequireDefault(_getRewriter);

const _serverRequire = require('./server-require');

const _serverRequire2 = _interopRequireDefault(_serverRequire);

const _trap = require('./trap');

var _trap2 = _interopRequireDefault(_trap);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; }  const newObj = {}; if (obj != null) { for (const key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj;  }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { const gen = fn.apply(this, arguments); return new Promise((resolve, reject) => { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then((value) => { step("next", value); }, (err) => { step("throw", err); }); } } return step("next"); }); }; }

// Const getEnvironments = serverRequire('get-environments');
// const getSchema = serverRequire('get-schema');

const defaults = {
  out: 'build/build-interface'
};

const jobPrefixes = ['read', 'render entry', 'write entry', 'entry', 'pages', 'data', 'demo', 'demo files', 'source'];

const selectAutoMount = (0, _fp.get)('configuration.transforms.react-to-markup.opts.automount');
const CWD = process.cwd();
const cwd = _path2.default.resolve.bind(null, CWD);

exports.default = buildInterface;
module.exports = exports.default;
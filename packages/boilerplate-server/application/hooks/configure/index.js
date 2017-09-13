'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _lodash = require('lodash');

var _findRoot = require('find-root');

var _findRoot2 = _interopRequireDefault(_findRoot);

var _pathExists = require('path-exists');

var _pathExists2 = _interopRequireDefault(_pathExists);

var _configuration = require('../../../library/utilities/configuration');

var _configuration2 = _interopRequireDefault(_configuration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
  after: ['application:before'],

  defaults: {
    path: './configuration',
    filter: /(.*).(js|json)$/
  },

  configure: function configure(application) {
    var _this = this;

    return _asyncToGenerator(function* () {
      application.configuration = {};
      _this.configuration = (0, _lodash.merge)({}, _this.defaults, {
        path: (0, _path.resolve)(application.runtime.base, _this.defaults.path)
      });
      return _this;
    })();
  },
  start: function start(application) {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      // Load boilerplate-server core configuration
      const core = (0, _configuration2.default)((0, _path.resolve)((0, _findRoot2.default)(__dirname), _this2.configuration.path), _this2.configuration.filter, application.runtime.env);

      // Load package.jsons
      const corePkgPath = (0, _path.resolve)(application.runtime.base, 'package.json');
      const pkgPath = (0, _path.resolve)(application.runtime.cwd, 'package.json');

      const corePkg = require(corePkgPath);
      const userPkg = require(pkgPath);
      const pkg = (0, _lodash.merge)({}, corePkg, userPkg);

      // Allow user to override core behaviour via cli and *rc files
      (0, _lodash.merge)(core, { pkg: pkg }, application.runtime.api);

      // Find all node modules on the way from here to the top
      let modulePaths = [(0, _path.dirname)(module.filename)];
      let moduleRoot = module;
      while (moduleRoot.parent) {
        moduleRoot = moduleRoot.parent;
        modulePaths.push((0, _path.dirname)(moduleRoot.filename));
      }

      modulePaths = [].concat(_toConsumableArray(new Set(modulePaths)));
      modulePaths = modulePaths.filter(function (modulePath) {
        return !modulePath.includes((0, _findRoot2.default)(__dirname));
      });

      const existingModulePaths = [];

      for (const modulePath of modulePaths) {
        // eslint-disable-line prefer-const
        let moduleRoot = modulePath;
        while ((yield (0, _pathExists2.default)((0, _path.resolve)(moduleRoot, 'package.json'))) === false) {
          // eslint-disable-line babel/no-await-in-loop
          moduleRoot = (0, _path.dirname)(moduleRoot);
        }
        existingModulePaths.push(moduleRoot);
      }

      // Set application runtime cwds
      application.runtime.cwds = [].concat(_toConsumableArray(new Set([application.runtime.cwd].concat(existingModulePaths, [process.cwd()]))));

      // Check which user config paths exist
      let existingConfigPaths = [];
      for (const configPath of core.paths.configuration) {
        for (const cwd of application.runtime.cwds) {
          for (const suffix of ['', userPkg.name]) {
            const userPath = (0, _path.resolve)(cwd, configPath, suffix);
            if (yield (0, _pathExists2.default)(userPath)) {
              // eslint-disable-line babel/no-await-in-loop
              existingConfigPaths.push(userPath);
            }
          }
        }
      }

      // Load most specific paths only
      // Check if paths have siblings that contain them completely, thus are sub directories / more specific configuration folders
      existingConfigPaths = existingConfigPaths.filter(function (configPath) {
        const match = existingConfigPaths.filter(function (subConfigPath) {
          return subConfigPath.includes(configPath) && subConfigPath !== configPath;
        });
        return match.length === 0;
      });

      // Load dem configs from filtered paths
      let user = {};
      for (const userPath of existingConfigPaths) {
        _this2.log.debug(`Loading configuration from '${userPath}'`);
        const userPathConfig = (0, _configuration2.default)(userPath, _this2.configuration.filter, application.runtime.env);
        user = (0, _lodash.merge)(user, userPathConfig);
      }

      (0, _lodash.merge)(application.configuration, core, user, application.runtime.api, function (a, b) {
        if (Array.isArray(b) && typeof a === 'string') {
          return b;
        }
      });

      if (application.name in user) {
        (0, _lodash.merge)(application.configuration, user[application.name]);
      }

      application.runtime.prefix = application.runtime.prefix || '/';
      application.runtime.mode = application.runtime.mode || 'server';
      return _this2;
    })();
  }
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9ob29rcy9jb25maWd1cmUvaW5kZXguanMiXSwibmFtZXMiOlsiYWZ0ZXIiLCJkZWZhdWx0cyIsInBhdGgiLCJmaWx0ZXIiLCJjb25maWd1cmUiLCJhcHBsaWNhdGlvbiIsImNvbmZpZ3VyYXRpb24iLCJydW50aW1lIiwiYmFzZSIsInN0YXJ0IiwiY29yZSIsIl9fZGlybmFtZSIsImVudiIsImNvcmVQa2dQYXRoIiwicGtnUGF0aCIsImN3ZCIsImNvcmVQa2ciLCJyZXF1aXJlIiwidXNlclBrZyIsInBrZyIsImFwaSIsIm1vZHVsZVBhdGhzIiwibW9kdWxlIiwiZmlsZW5hbWUiLCJtb2R1bGVSb290IiwicGFyZW50IiwicHVzaCIsIlNldCIsIm1vZHVsZVBhdGgiLCJpbmNsdWRlcyIsImV4aXN0aW5nTW9kdWxlUGF0aHMiLCJjd2RzIiwicHJvY2VzcyIsImV4aXN0aW5nQ29uZmlnUGF0aHMiLCJjb25maWdQYXRoIiwicGF0aHMiLCJzdWZmaXgiLCJuYW1lIiwidXNlclBhdGgiLCJtYXRjaCIsInN1YkNvbmZpZ1BhdGgiLCJsZW5ndGgiLCJ1c2VyIiwibG9nIiwiZGVidWciLCJ1c2VyUGF0aENvbmZpZyIsImEiLCJiIiwiQXJyYXkiLCJpc0FycmF5IiwicHJlZml4IiwibW9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7O2tCQUVlO0FBQ2JBLFNBQU8sQ0FBQyxvQkFBRCxDQURNOztBQUdiQyxZQUFVO0FBQ1JDLFVBQU0saUJBREU7QUFFUkMsWUFBUTtBQUZBLEdBSEc7O0FBUVBDLFdBUk8scUJBUUdDLFdBUkgsRUFRZ0I7QUFBQTs7QUFBQTtBQUMzQkEsa0JBQVlDLGFBQVosR0FBNEIsRUFBNUI7QUFDQSxZQUFLQSxhQUFMLEdBQXFCLG1CQUFNLEVBQU4sRUFBVSxNQUFLTCxRQUFmLEVBQXlCO0FBQzVDQyxjQUFNLG1CQUFRRyxZQUFZRSxP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bmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZGlybmFtZSwgcmVzb2x2ZX0gZnJvbSAncGF0aCc7XG5pbXBvcnQge21lcmdlfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGZpbmRSb290IGZyb20gJ2ZpbmQtcm9vdCc7XG5pbXBvcnQgZXhpc3RzIGZyb20gJ3BhdGgtZXhpc3RzJztcblxuaW1wb3J0IGxvYWQgZnJvbSAnLi4vLi4vLi4vbGlicmFyeS91dGlsaXRpZXMvY29uZmlndXJhdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWZ0ZXI6IFsnYXBwbGljYXRpb246YmVmb3JlJ10sXG5cbiAgZGVmYXVsdHM6IHtcbiAgICBwYXRoOiAnLi9jb25maWd1cmF0aW9uJyxcbiAgICBmaWx0ZXI6IC8oLiopLihqc3xqc29uKSQvXG4gIH0sXG5cbiAgYXN5bmMgY29uZmlndXJlKGFwcGxpY2F0aW9uKSB7XG4gICAgYXBwbGljYXRpb24uY29uZmlndXJhdGlvbiA9IHt9O1xuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IG1lcmdlKHt9LCB0aGlzLmRlZmF1bHRzLCB7XG4gICAgICBwYXRoOiByZXNvbHZlKGFwcGxpY2F0aW9uLnJ1bnRpbWUuYmFzZSwgdGhpcy5kZWZhdWx0cy5wYXRoKVxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIGFzeW5jIHN0YXJ0KGFwcGxpY2F0aW9uKSB7XG4gICAgLy8gTG9hZCBib2lsZXJwbGF0ZS1zZXJ2ZXIgY29yZSBjb25maWd1cmF0aW9uXG4gICAgY29uc3QgY29yZSA9IGxvYWQoXG4gICAgICByZXNvbHZlKGZpbmRSb290KF9fZGlybmFtZSksIHRoaXMuY29uZmlndXJhdGlvbi5wYXRoKSxcbiAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5maWx0ZXIsXG4gICAgICBhcHBsaWNhdGlvbi5ydW50aW1lLmVudlxuICAgICk7XG5cbiAgICAvLyBMb2FkIHBhY2thZ2UuanNvbnNcbiAgICBjb25zdCBjb3JlUGtnUGF0aCA9IHJlc29sdmUoYXBwbGljYXRpb24ucnVudGltZS5iYXNlLCAncGFja2FnZS5qc29uJyk7XG4gICAgY29uc3QgcGtnUGF0aCA9IHJlc29sdmUoYXBwbGljYXRpb24ucnVudGltZS5jd2QsICdwYWNrYWdlLmpzb24nKTtcblxuICAgIGNvbnN0IGNvcmVQa2cgPSByZXF1aXJlKGNvcmVQa2dQYXRoKTtcbiAgICBjb25zdCB1c2VyUGtnID0gcmVxdWlyZShwa2dQYXRoKTtcbiAgICBjb25zdCBwa2cgPSBtZXJnZSh7fSwgY29yZVBrZywgdXNlclBrZyk7XG5cbiAgICAvLyBBbGxvdyB1c2VyIHRvIG92ZXJyaWRlIGNvcmUgYmVoYXZpb3VyIHZpYSBjbGkgYW5kICpyYyBmaWxlc1xuICAgIG1lcmdlKGNvcmUsIHtwa2d9LCBhcHBsaWNhdGlvbi5ydW50aW1lLmFwaSk7XG5cbiAgICAvLyBGaW5kIGFsbCBub2RlIG1vZHVsZXMgb24gdGhlIHdheSBmcm9tIGhlcmUgdG8gdGhlIHRvcFxuICAgIGxldCBtb2R1bGVQYXRocyA9IFtkaXJuYW1lKG1vZHVsZS5maWxlbmFtZSldO1xuICAgIGxldCBtb2R1bGVSb290ID0gbW9kdWxlO1xuICAgIHdoaWxlIChtb2R1bGVSb290LnBhcmVudCkge1xuICAgICAgbW9kdWxlUm9vdCA9IG1vZHVsZVJvb3QucGFyZW50O1xuICAgICAgbW9kdWxlUGF0aHMucHVzaChkaXJuYW1lKG1vZHVsZVJvb3QuZmlsZW5hbWUpKTtcbiAgICB9XG5cbiAgICBtb2R1bGVQYXRocyA9IFsuLi5uZXcgU2V0KG1vZHVsZVBhdGhzKV07XG4gICAgbW9kdWxlUGF0aHMgPSBtb2R1bGVQYXRocy5maWx0ZXIoXG4gICAgICBtb2R1bGVQYXRoID0+ICFtb2R1bGVQYXRoLmluY2x1ZGVzKGZpbmRSb290KF9fZGlybmFtZSkpXG4gICAgKTtcblxuICAgIGNvbnN0IGV4aXN0aW5nTW9kdWxlUGF0aHMgPSBbXTtcblxuICAgIGZvciAoY29uc3QgbW9kdWxlUGF0aCBvZiBtb2R1bGVQYXRocykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBwcmVmZXItY29uc3RcbiAgICAgIGxldCBtb2R1bGVSb290ID0gbW9kdWxlUGF0aDtcbiAgICAgIHdoaWxlICgoYXdhaXQgZXhpc3RzKHJlc29sdmUobW9kdWxlUm9vdCwgJ3BhY2thZ2UuanNvbicpKSkgPT09IGZhbHNlKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgYmFiZWwvbm8tYXdhaXQtaW4tbG9vcFxuICAgICAgICBtb2R1bGVSb290ID0gZGlybmFtZShtb2R1bGVSb290KTtcbiAgICAgIH1cbiAgICAgIGV4aXN0aW5nTW9kdWxlUGF0aHMucHVzaChtb2R1bGVSb290KTtcbiAgICB9XG5cbiAgICAvLyBTZXQgYXBwbGljYXRpb24gcnVudGltZSBjd2RzXG4gICAgYXBwbGljYXRpb24ucnVudGltZS5jd2RzID0gW1xuICAgICAgLi4ubmV3IFNldChbXG4gICAgICAgIGFwcGxpY2F0aW9uLnJ1bnRpbWUuY3dkLFxuICAgICAgICAuLi5leGlzdGluZ01vZHVsZVBhdGhzLFxuICAgICAgICBwcm9jZXNzLmN3ZCgpXG4gICAgICBdKVxuICAgIF07XG5cbiAgICAvLyBDaGVjayB3aGljaCB1c2VyIGNvbmZpZyBwYXRocyBleGlzdFxuICAgIGxldCBleGlzdGluZ0NvbmZpZ1BhdGhzID0gW107XG4gICAgZm9yIChjb25zdCBjb25maWdQYXRoIG9mIGNvcmUucGF0aHMuY29uZmlndXJhdGlvbikge1xuICAgICAgZm9yIChjb25zdCBjd2Qgb2YgYXBwbGljYXRpb24ucnVudGltZS5jd2RzKSB7XG4gICAgICAgIGZvciAoY29uc3Qgc3VmZml4IG9mIFsnJywgdXNlclBrZy5uYW1lXSkge1xuICAgICAgICAgIGNvbnN0IHVzZXJQYXRoID0gcmVzb2x2ZShjd2QsIGNvbmZpZ1BhdGgsIHN1ZmZpeCk7XG4gICAgICAgICAgaWYgKGF3YWl0IGV4aXN0cyh1c2VyUGF0aCkpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgYmFiZWwvbm8tYXdhaXQtaW4tbG9vcFxuICAgICAgICAgICAgZXhpc3RpbmdDb25maWdQYXRocy5wdXNoKHVzZXJQYXRoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBMb2FkIG1vc3Qgc3BlY2lmaWMgcGF0aHMgb25seVxuICAgIC8vIENoZWNrIGlmIHBhdGhzIGhhdmUgc2libGluZ3MgdGhhdCBjb250YWluIHRoZW0gY29tcGxldGVseSwgdGh1cyBhcmUgc3ViIGRpcmVjdG9yaWVzIC8gbW9yZSBzcGVjaWZpYyBjb25maWd1cmF0aW9uIGZvbGRlcnNcbiAgICBleGlzdGluZ0NvbmZpZ1BhdGhzID0gZXhpc3RpbmdDb25maWdQYXRocy5maWx0ZXIoY29uZmlnUGF0aCA9PiB7XG4gICAgICBjb25zdCBtYXRjaCA9IGV4aXN0aW5nQ29uZmlnUGF0aHMuZmlsdGVyKFxuICAgICAgICBzdWJDb25maWdQYXRoID0+XG4gICAgICAgICAgc3ViQ29uZmlnUGF0aC5pbmNsdWRlcyhjb25maWdQYXRoKSAmJiBzdWJDb25maWdQYXRoICE9PSBjb25maWdQYXRoXG4gICAgICApO1xuICAgICAgcmV0dXJuIG1hdGNoLmxlbmd0aCA9PT0gMDtcbiAgICB9KTtcblxuICAgIC8vIExvYWQgZGVtIGNvbmZpZ3MgZnJvbSBmaWx0ZXJlZCBwYXRoc1xuICAgIGxldCB1c2VyID0ge307XG4gICAgZm9yIChjb25zdCB1c2VyUGF0aCBvZiBleGlzdGluZ0NvbmZpZ1BhdGhzKSB7XG4gICAgICB0aGlzLmxvZy5kZWJ1ZyhgTG9hZGluZyBjb25maWd1cmF0aW9uIGZyb20gJyR7dXNlclBhdGh9J2ApO1xuICAgICAgY29uc3QgdXNlclBhdGhDb25maWcgPSBsb2FkKFxuICAgICAgICB1c2VyUGF0aCxcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmZpbHRlcixcbiAgICAgICAgYXBwbGljYXRpb24ucnVudGltZS5lbnZcbiAgICAgICk7XG4gICAgICB1c2VyID0gbWVyZ2UodXNlciwgdXNlclBhdGhDb25maWcpO1xuICAgIH1cblxuICAgIG1lcmdlKFxuICAgICAgYXBwbGljYXRpb24uY29uZmlndXJhdGlvbixcbiAgICAgIGNvcmUsXG4gICAgICB1c2VyLFxuICAgICAgYXBwbGljYXRpb24ucnVudGltZS5hcGksXG4gICAgICAoYSwgYikgPT4ge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShiKSAmJiB0eXBlb2YgYSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICByZXR1cm4gYjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG5cbiAgICBpZiAoYXBwbGljYXRpb24ubmFtZSBpbiB1c2VyKSB7XG4gICAgICBtZXJnZShhcHBsaWNhdGlvbi5jb25maWd1cmF0aW9uLCB1c2VyW2FwcGxpY2F0aW9uLm5hbWVdKTtcbiAgICB9XG5cbiAgICBhcHBsaWNhdGlvbi5ydW50aW1lLnByZWZpeCA9IGFwcGxpY2F0aW9uLnJ1bnRpbWUucHJlZml4IHx8ICcvJztcbiAgICBhcHBsaWNhdGlvbi5ydW50aW1lLm1vZGUgPSBhcHBsaWNhdGlvbi5ydW50aW1lLm1vZGUgfHwgJ3NlcnZlcic7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn07XG4iXX0=
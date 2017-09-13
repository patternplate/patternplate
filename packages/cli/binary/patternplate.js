#!/usr/bin/env node
'use strict';

const _slicedToArray = function () { function sliceIterator(arr, i) { const _arr = []; let _n = true; let _d = false; let _e; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i.return) _i.return(); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); }  throw new TypeError("Invalid attempt to destructure non-iterable instance");  }; }();

const _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const main = (() => {
  const _ref = _asyncToGenerator(function* () {
    const command = arguments.length <= 0 || arguments[0] === undefined ? 'start' : arguments[0];
    const options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
    const input = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];

    if (command === 'help') {
      cli.showHelp(0);
      return;
    }

    options.log.showLevel = options.log['show-level'];
    options.server.autoPort = options.server['auto-port'];

    const normalized = (0, _lodash.omitBy)(options, _lodash.isNull);
    normalized.log = (0, _lodash.omitBy)(normalized.log, _lodash.isNull);
    normalized.server = (0, _lodash.omitBy)(normalized.server, _lodash.isNull);

    const mode = command === 'console' ? 'console' : 'server';
    const settings = _extends({}, normalized, { mode });

    if (command === 'init') {
      const _input = _slicedToArray(input, 2);

      const path = _input[1];

      yield (0, _index2.default)(path, settings);
      return { mode: 'console' };
    }

    const spinner = (0, _ora2.default)('Starting').start();
    const application = yield (0, _2.default)(settings);
    spinner.stop();

    if (mode === 'console') {
      const _input2 = _slicedToArray(input, 2);

      const consoleCommand = _input2[1];

      yield application.server.run(consoleCommand, settings);
      return { mode: 'console' };
    }

    yield application.start();

    if (settings.open) {
      const _application$configur = application.configuration.server;
      const host = _application$configur.host;
      const port = _application$configur.port;

      const address = `http://${host}:${port}`;
      const explicit = typeof settings.open === 'string';
      const openOptions = explicit ? { app: settings.open } : {};
      const browserName = explicit ? settings.open : 'default browser';
      application.log.info(`Opening ${browserName} at ${address}`);

      (0, _opn2.default)(address, openOptions).catch((error) => {
        application.log.error(error);
        console.log(error.stack);
      });
    }

    return { mode: 'server' };
  });

  return function main() {
    return _ref.apply(this, arguments);
  };
})();

require('babel-polyfill');

const _meow = require('meow');

const _meow2 = _interopRequireDefault(_meow);

const _opn = require('opn');

var _opn2 = _interopRequireDefault(_opn);

const _ora = require('ora');

var _ora2 = _interopRequireDefault(_ora);

var _lodash = require('lodash');

const _ = require('../');

var _2 = _interopRequireDefault(_);

const _index = require('../library/init/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { const gen = fn.apply(this, arguments); return new Promise((resolve, reject) => { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then((value) => { step("next", value); }, (err) => { step("throw", err); }); } } return step("next"); }); }; }

const defaults = {
  open: null,
  'log.level': 'info',
  'log.colorize': null,
  'log.timestamp': null,
  'log.showLevel': null,
  'server.autoPort': null
};

const cli = (0, _meow2.default)(`
	Usage
	$ patternplate [command=start] [options]

	Commands
	  start   - start a patternplate instance in cwd
	  console - execute a task in patternplate console
	  init    - initialize a patternplate project in cwd
	  help    - show this help

	Global Options (patternplate [=start, console, init])
	  env                  - set the runtime environment [=development, production]
	  log.level            - log level [silly, =debug, info, warn, error]
	  log.colorize         - enable/disable colored log output [=true, false]
	  log.timestamp        - enable/disable timestamp on log output [=true, false]
	  log.showLevel        - enable/disable level stamp on log outpu [=true, false]
	  help                 - show this help

	Start options (patternplate [=start])
		open                 - enable/disable automatic opening of default browser after start [true, =false]
	  server.port          - set the port the server should listen on [=1337]
	  server.host          - set the host the server should listen on [=localhost]
	  server.autoPort      - enable/disable free port detection if server.port is taken [=true, false]
	  patternplate         - override global settings for patternplate
	  patternplate-client  - override global settings on patternplate-client
	  patternplate-server  - override global settings on patternplate-server

	Console options (patternplate console)
	  # No command specific options yet

	Init options (patternplate init)
	  # No command specific options yet

	Examples
	  $ patternplate start
		$ patternplate start --open # Start and open in default browser
		$ patternplate start --open=safari # Start and open in safari
	  $ patternplate console build-commonjs
	  $ patternplate init

	  # Execute patternplate and server in development, client in production mode
	  $ patternplate start --env=development --patternplate-client.env=production
	`, {
  boolean: ['log.colorize', 'log.timestamp', 'log.showLevel', 'server.autoPort'],
  default: defaults
});

const input = cli.input;
const flags = cli.flags;

const _input3 = _slicedToArray(input, 1);

const command = _input3[0];


main(command, flags, input).then(i => {
  if (i.mode === 'console') {
    process.exit(0);
  }
}).catch(error => {
  if (error.patternplate) {
    console.log(cli.help);
    console.error(error.message);
    process.exit(1);
  }

  setTimeout(() => {
    throw error;
  });
});
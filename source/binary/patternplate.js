#!/usr/bin/env node

import 'babel-polyfill';
import meow from 'meow';
import opn from 'opn';
import {omitBy, isNull} from 'lodash';

import patternplate from '../';
import patternplateInit from '../library/init/index.js';

const defaults = {
	'open': null,
	'log.level': 'info',
	'log.colorize': null,
	'log.timestamp': null,
	'log.showLevel': null,
	'server.autoPort': null
};

const cli = meow(`
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
		boolean: [
			'log.colorize',
			'log.timestamp',
			'log.showLevel',
			'server.autoPort'
		],
		default: defaults
	});

async function main(command = 'start', options = {}, input = []) {
	if (command === 'help') {
		cli.showHelp(0);
		return;
	}

	options.log.showLevel = options.log['show-level'];
	options.server.autoPort = options.server['auto-port'];

	const normalized = omitBy(options, isNull);
	normalized.log = omitBy(normalized.log, isNull);
	normalized.server = omitBy(normalized.server, isNull);

	const mode = command === 'console' ? 'console' : 'server';
	const settings = {...normalized, mode};

	if (command === 'init') {
		const [, path] = input;
		await patternplateInit(path, settings);
		return;
	}

	const application = await patternplate(settings);

	if (mode === 'console') {
		const [, consoleCommand] = input;
		await application.server.run(consoleCommand, settings);
		return;
	}

	await application.start();

	if (settings.open) {
		const {host, port} = application.configuration.server;
		const address = `http://${host}:${port}`;
		const explicit = typeof settings.open === 'string';
		const openOptions = explicit ? {app: settings.open} : {};
		const browserName = explicit ? settings.open : 'default browser';
		application.log.info(`[application] Opening ${browserName} at ${address}`);

		opn(address, openOptions)
			.catch(error => {
				application.log.error(error);
				console.log(error.stack);
			});
	}
}

const {input, flags} = cli;
const [command] = input;

main(command, flags, input)
	.catch(error => {
		if (error.patternplate) {
			console.log(cli.help);
			console.error(error.message);
			process.exit(1);
		}

		setTimeout(() => {
			throw error;
		});
	});

// Catch unhandled rejections globally
process.on('unhandledRejection', (reason, promise) => {
	console.log('Unhandled Rejection at: Promise ', promise, ' reason: ', reason);
	throw reason;
});

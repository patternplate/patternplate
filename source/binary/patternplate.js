#!/usr/bin/env node

import 'babel-polyfill';
import meow from 'meow';

import patternplate from '../';
import init from '../library/init';

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
		]
	});

async function main(command = 'start', options = {}, input = []) {
	if (command === 'help') {
		cli.showHelp(0);
		return;
	}

	const mode = command === 'console' ? 'console' : 'server';
	const settings = {...options, mode};

	if (command === 'init') {
		await init(settings);
		return;
	}

	const application = await patternplate(settings);

	if (mode === 'console') {
		const [, consoleCommand] = input;
		await application.server.run(consoleCommand, settings);
		return;
	}

	await application.start();
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

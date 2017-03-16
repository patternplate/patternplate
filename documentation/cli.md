> < [Back](./readme.md) to Readme

# Command Line Interface

patternplate ships with a command line interface designed for flexibility and ease of use.

## Basics
The command line interface contains four main commands:

* **start** - starts a patternplate serve
* **console** - allows for the execution of build tasks
* **init** - bootstrap a default patternplate setup
* **help** - prints the inline help

Apart from help all commands accept **Global Options**. Commands additionally allow for **Command Specific Options**.

## Usage

The help command provides basic documentation that always sits at your fingertips.

```

❯ patternplate help

  Create, show and deliver component libraries

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
```

## Concepts

### Overriding file based configuration
Options passed via CLI always override their file based counterparts. This holds true for both user- and library-provided configuration:

```js
// node_modules/patternplate/configuration/server.js
{
	port: 1338
}
```

```js
// configuration/patternplate/server.js
// beats node_modules/patternplate-server/configuration/server.js
{
	port: 1337
}
```

```bash
# beats configuration/patternplate/server.js
# server will start on port 1339
❯ patternplate start --server.port=1339
```

### Nested configuration
patternplate reads configuration from conventionalized places on the filesystem. Generally speaking the contents of configuration files are merged into patternplate config under a key matching the filename. This means the file

```js
// configuration/patternplate/server.js
{
	port: 1338
}
```

will yield a `server` object on `patternplate.configuration.server`. You may override or add any key to `patternplate.configuration` via a dot notation:

```
patternplate start --server.port=1339 --server.foo=bar --server.bar.foo
```

yields

```js
patternplate.configuration.server;
// => {port: 1339, foo: 'bar', bar:{foo: true}}
```

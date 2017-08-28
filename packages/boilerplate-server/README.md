# boilerplate-server
A lean JS server framework designed to get you kicking and hacking on the edge of things real fast.

# Design principles
* **Convention over configuration** boilerplate-server heavily borrows from the Ruby on Rails concept to behave by convention instead of explicit configuration. In practice this means that boilerplate-server does a lot of things automagically based on sane defaults. See [Extending boilerplate-server](#extending-boilerplate-server) for examples.
* **Bleeding edge** The entire boilerplate-server source is designed with future ways of creating javascript applications on the server in mind. Therefore this project uses bleeding edge `babel` features uncompromisingly. See [Development](#development) for details.
* **Hardcore modularity** Splitting things up into their smallest useful form helps with code readability and reasoning about responsibilities.  
* **Do things right™** boilerplate-server strives to be compliant with the principles verbalized by the [12Factor](http://12factor.net/) initiative.

# Getting started

boilerplate-server has few global dependencies.
We recommend `nvm` or `n` for node/io version management.

```javascript
// ./package.json
"engines": {
  "iojs": ">= 1.4.3",
  "node": ">= 0.12.0",
  "npm": ">= 2.5.1"
}
```

```bash
# Fetch and start the project
git clone https://github.com/sinnerschrader/boilerplate-server.git
cd boilerplate-server
nvm use v1.4.3 # assuming nvm is installed
npm install
npm start
```
or
```bash
# Install and use as dependency
npm install --save git+https://github.com/sinnerschrader/boilerplate-server.git
```
```javascript
// in your package.json
{
  "scripts": {
    "start": "boilerplate-server",
    "console": "boilerplate-console"
  }
}
```
```bash
npm start
```

# Usage
boilerplate-server is designed to cater for as many use cases as possible. For dependency cases, refer to [CLI Usage](#cli) or [programmatic Usage](#programmatic-api). For deployment and boilerplate project scenarios refer to [environment variables](#environment-variables) or [configuration files](#configuration-files). The precedence chain of all interfaces is:

* CLI
* Evironment variables
* Configuration files

## CLI
After installation boilerplate-server exposes two commands. When installed globally they will be available in your `$PATH`, when installed locally they are to be found in `./node_modules/.bin/` an therefore are useable from `npm scripts`.

### boilerplate-server
Start a boilerplate-server. The command line interface allows you to override the default configuration found in [`./source/configuration`](./source/configuration). Note that you can override nested configuration options by using flags with dot notation. `--server.port=1338` will override the value found in [`./source/configuration/server.js`](./source/configuration/server.js) stored in the property `port`. Most common use cases are presented as examples below.
```bash
boilerplate-server
  --development        # Run in development mode, default
  --production         # Run in production mode
  --server.port=[PORT] # Port to bind the server to, defaults to 1337
  --server.host=[HOST] # Host to bind the server to, defaults to localhost
  --cwd=[PATH]         # Set the path from where the application and configuration folders should be searched. Defaults to process.cwd
```

### boilerplate-console
Start the boilerplate-console and run a task. Note that there is only a very simple example task provided by default. See [Extending boilerplate-server > Tasks](#tasks) to learn about creating and running your own tasks.
```bash
boilerplate-console [taskname] # Task name is required
```

## Environment variables
For easy deployments boilerplate-server accepts configuration via specific environment variables. Explicit configuration via [CLI](#cli) take precedence over them.

* **ENV** sets `application.runtime.env`
* **PORT** sets `server.port`
* **HOST** sets `server.host`
* **LOG_LEVEL** sets `log.level`

To avoid conflicts with other processes using these environment variables, they are aliased with the following prefixes, ordered by precedence. Unprefixed variables have the lowest priority. It is recommended to use the most specific prefix (`BOILERPLATESERVER_*`).

* **BOILERPLATESERVER_***
* **BOILERPLATE_***
* **NODE_***

## Configuration files
Although boilerplate-server is designed to be installed and used as dependency in your project, you can check out this repository and use it as a starting point for your own setup. In this case your primary interface will be the configuration files in `./source/configuration`, which compile to `./configuration`. See [Development > Building](#building) for details. Edit the files at `./source/configuration` and make sure to build them, as they are not applied if not found in `./configuration`.

### Environments
Based on environment file-based configuration can be overridden, e.g. a less verbose log level can be applied for production mode. Place the override config in `./source/configuration/environments/${environmentname}/${filetooverride}.js`. Files found in an applicable environment directory are deep-merged with their generic counterparts during configuration phase. E.g. `source/configuration/production/server.js` is merged with `source/configuration/server.js` when running in production.

```javascript
// boilerplate-server --production
// configuration/server.js
{  
  'host': 'localhost',
  'port': 1337,
  'autoPort': true
}

// configuration/environments/production/server.js
{  
  'autoPort': false
}

// application.configuration.server
{  
  'host': 'localhost',
  'port': 1337,
  'autoPort': false
}
```

## Programmatic API
boilerplate-server exposes itself as commonjs module. The only export is a factory for the [Application](#application) object.

```javascript
import boilerplateServer from 'boilerplate-server';

let application = boilerplateServer(options);
await application.start();
```

### Application
The application object carries the following public methods

* `async start ( host = this.configuration.server.host, port = this.configuration.server.port )` - Mount routes, middlewares and start the internal koa server, binding it to the configured or passed hostname and port.

* `async stop ( )` - Stop the internal koa server, freeing the used port.

* `mount( mountable, path = '/' )` - Mount `mountable` on `path`, making its configuration, hooks, routes and middlewares available to the application. Routes and registered on mountable are available prefixed with `path` after starting the host application. Typically mountable is another boilerplate-server application. The mountable inherits active middlewares and tasks from the host application. Mounting has to be performed before starting the host application.

# Extending boilerplate-server
## Routes
Routes are run when boilerplate-server receives requests matching their `path` configuration. Only the first matched route runs for every given request. Refer to the [koa documentation](https://github.com/koajs/koa/blob/master/docs/api/context.md) about information how to write routes. Included routes:

* `/ => index` - Compliments you about getting boilerplate-server started and wants you to create own routes

### Basics
* Place in `./applcation/routes/${routeName}.js`
* Expected to export a factory function. Received parameters
  * `application` - The hosting boilerplate-server instance
  * `config` - Route configuration read from `./configuration/routes.js[${routeName}]`
* The factory function is expected to return a valid [koa](https://github.com/koajs/koa#example) middleware function
  * The technical documentation for koa middlewares applies
  * async-await and generator style middlewares are supported

### Example
```javascript
// application/middlewares/example.js
export default function exampleRouteFactory (application, config) {
  return async function exampleRoute () {
    application.log.info(`Running the example route with config ${JSON.stringify(config)}.`);
    this.body = 'Hello world, ${this.params.id}';
  };
}
```

### Configuration
In order to enable a route for boilerplate-server you have enable it in configuration by adding a config object under the key ${routeName} to the routes configuration.

Available options:
* `enabled = true`, boolean,  If the route is to be mounted, useful for environment based toggling of routes
* `method = 'GET'`, string `['GET', 'PUT', 'POST', 'DELETE', 'HEAD']`, HTTP method the route should respond to
* `path`, string, [path-to-regexp](https://github.com/component/path-to-regexp) expression matching against the requested path. Named and anonymous params are passed to the route context as members of `params` (See route example)

```javascript
// configuration/routes.js
const routes = {
  'enabled': {
    'example': {
      'enabled': true,
      'method': 'GET',
      'path': '/example/:id?'
    }
  }
};

export default routes;

```

## Middlewares
Middlewares are run for every given request against boilerplate-server. Any number of middlewares can be run for every given request. Included middlewares:

* **environment** - Set a custom `X-Environment` header field with the value of `application.runtime.env`
* **jsonerror** - Central error handling and json response utiltiy
* **log** - Log requests
* **response-time** - Measure response time and set a custom `X-ResponseTime` header field with the elapsed time in milliseconds.

### Basics
* Place in `./application/middlewares/${middlewareName}.js`
* Expected to export a factory function. Received parameters
  * `application` - The hosting boilerplate-server instance
  * `config` - Route configuration read from `./configuration/middlewares.js[${middlewareName}]`
* The factory function is expected to return a valid [koa](https://github.com/koajs/koa#example) middleware function
  * The technical documentation for koa middlewares applies
  * async-await and generator style middlewares are supported

### Example
```javascript
// application/middlewares/log.js
export default function logMiddlewareFactory ( application ) {
  return function * logMiddleware ( next ) {
    let start = new Date();
    yield next;
    let delta = new Date() - start;
    application.log.debug( '[application:request]', `${start} - ${this.method} ${this.url} - ${this.response.status} ${this.response.message} - ${delta}ms` );
  };
}
```

### Configuration
```javascript
// configuration/middlewares.js
const middlewares = {
  'enabled': {
    'log': true
  }
};

export default middlewares;
```

## Hooks
Hooks are run when starting the application and provide an interface to alter and extend core behaviour of the application. boilerplate-server uses the hook API internally to provide most of its functionality. Included hooks:

* **configure** - Find, read, aggregate all configuration sources
* **console** - Provide application wide task runner utility
* **engine** - Maintain and start the internal koa application
* **log** - Provide application wide logging utility
* **middlewares** - Read, configure, mount middlewares
* **routes** - Read, configure, mount routes
* **user-hooks** - Find, configure and run user provided hooks

### Basics
* Place in `./application/hooks/${middlewareName}/index.js`
* Expected to export a configuration object. See API.

### Example
This hook waits for the engine hook to start before printing a log message

```javascript
{
  'wait': false,
	'after': ['hooks:engine:start:after'],
	'start': async function( application ) {
		application.log.info('I know the engine hook has started. Now application.engine is available.');
	}
}
```

### API
```javascript
{
  'wait': true,
  // The application will not report as started before the hook has executed when this is true. Defaults to true.

  'disabled': false,
  // If this hook should be ignored during startup. Defaults to false.

  'modes': [],
  // Modes this hook should be executed for (server, console are available). Defaults to [], running in every mode,

	'after': ['application:after'],
  /**
   * Events to wait for before running this hook. Every hook emits events for all run stages:
   * hooks:${hookName}:register:before
   * hooks:${hookName}:register:after
   * hooks:${hookName}:configure:before
   * hooks:${hookName}:configure:after
   * hooks:${hookName}:start:before
   * hooks:${hookName}:start:after
   **/

	'configure': async function( application ) {}
	/* Sets configuration property of the hook by default, can be overridden here */

	'start': async function( application ) {},
	/* Final stage, here will most of your hook responsibilities live */

	'hookWillConfigure': function( application ) {},
	/* Lifecycle callback run right before configure */

	'hookDidConfigure': function( application ) { },
	/* Lifecycle callback run right after configure */

	'hookWillRegister': function( application ) {},
	/* Lifecycle callback run right before hook registers with host application */

	'hookDidRegister': function( application ) {},
	/* Lifecycle callback run right after hook registers with host application */

	'hookWillStart': function( application ) {},
	/* Lifecycle callback run right before hook runs */

	'hookDidStart': function( application ) {}
	/* Lifecycle callback run right after hook has run */
};
```

## Tasks
Tasks are functions that can be called by `boilerplate-console` or `application.run`

### Basics
* Place in `./application/tasks/${taskName}/index.js`
* Expected to export an async function. Passed parameters:
  * **application** - Host application instance
  * **config** - configuration read from './configuration/tasks.js${taskName}'

### Example
```javascript
// application/tasks/test/index.js
export default async function testTask ( application, config ) {
	console.log(config.message);
}

// configuration/tasks.js
export default {
	'test': {
		'message': 'Hello, i am the test task'
	}
};
```

```bash
$ boilerplate-console test
$ Hello, i am the test task
```

or

```javascript
await application.run('test');
```

# Development
## Tooling
Make sure to install the following plugins for your editor
* editorconfig
* eslint

## npm scripts
```javascript
"scripts": {
  "start", // Start the boilerplate-server,
  "console", // Run the boilerplate-console,
  "build": // Build from ./source to ./,
  "watch": // Build from ./source to ./, watch changes,
  "clean": // Remove compile products
}
```

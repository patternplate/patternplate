> Documentation and development interface for component libraries

# @patternplate/client

* Framework independent
* Bring design docs to live with real components
* Powerful search and meta data system

This is the contributor documentation for `@patternplate/cli`
For user docs see [patternplate.github.io](https://patternplate.github.io)

## About @patternplate/client

`@patternplate/client` is a universally rendering application that provides
the GUI available at `http://localhost:1337` when executing `patternplate start`.

The client entry point is `src/client`, the server entry point `src/server`.

`@patternplate/client` also provides means to export required client
assets statically. 

`@patternplate/client` interfaces with `@patternplate/api` to fetch data
and uses fronted compenents `@patternplate/components`.

## Quick start

```sh
git clone https://github.com/patternplate/patternplate.git
cd patternplate/packages/client
yarn
yarn start
```

## Usage

### Use the express middleware

```js
const client = require("@patternplate/client");

(async () => {
  const app = express();
  const server = http.createServer(app);

  const clientMiddleware = await client({
    cwd: options.cwd,
    config: options.config,
    server
  });

  app.use(clientMiddleware);
})();
```

### Render a page

```js
const render = require("@patternplate/client/render");

(async () => {
  const html = await render("/", {
    base: "" // base url to assume, e.g. patternplate in https://git.io/patternplate,
    config: {},
    schema: {
      meta: {}, // pattern tree, see @patternplate/load-meta 
      docs: {} // pattern docs, see @patternplate/load-docs 
    },
    isStatic: 
  });
})();
```

### Eject a virtual fs with static assets 

```js
const eject = require("@patternplate/client/eject");

(async () => {
  const vfs = await eject(); // MemoryFilesystem({ /static/, /lib/ });
})();
```

## License

Copyright by SinnerSchrader. All `@patternplate` packages are released under the MIT license.


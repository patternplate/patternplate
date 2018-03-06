> Documentation and development interface for component libraries

# @patternplate/api

* Framework independent
* Bring design docs to live with real components
* Powerful search and meta data system

This is the contributor documentation for `@patternplate/cli`
For user configuration see [sinnerschrader.github.com/patternplate](https://sinnerschrader.github.com/patternplate)


## About @patternplate/api

`@patternplate/api` provides an express middleware for use with 
`@patternplate/client`, as well as a web socket emitting
data about file changes and compilation processes.

### Endpoints

* `/` - Web socket
* `/state.json` - Document and pattern tree
* `/demo/*.html` - Demo renderings

### WebSocket

The web socket on `/` emits the following events:

* `{type: "change", "payload": {file: "string", p: conntentType: "pattern" | "doc"}"}`
* `{type: "error", "payload": Error"}`
* `{type: "start", "payload": {target: "node" | "web"}}`
* `{type: "done", "payload": {target: "node" | "web"}}`

## Quick start

```sh
git clone https://github.com/sinnerschrader/patternplate.git
cd patternplate/packages/cli
yarn
yarn start
```

## License

Copyright by SinnerSchrader. All `@patternplate` packages are released under the MIT license.


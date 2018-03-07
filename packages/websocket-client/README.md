> Documentation and development interface for component libraries

# @patternplate/websocket-client

* Framework independent
* Bring design docs to live with real components
* Powerful search and meta data system

This is the contributor documentation for `@patternplate/websocket-client`
For user docs see [patternplate.github.io](https://patternplate.github.io)

## About @patternplate/websocket-client

Create a `ws://` connection that reconnects when disconnected.

## Usage

```js
const { WebSocketClient } = require("@patternplate/websocket-client");

const ws = new WebSocketClient({
  src: `ws://localhost:1337/api/`,
  reconnect: true,
  interval: 1000
});

ws.open();
ws.onMessage(message => console.log(message));
```

## License

Copyright by SinnerSchrader. All `@patternplate` packages are released under the MIT license.


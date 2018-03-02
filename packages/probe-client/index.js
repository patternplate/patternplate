/* eslint-env browser */
/* eslint-disable no-var */
const querystring = require("querystring");
const ARSON = require("arson");
const { WebSocketClient } = require("@patternplate/websocket-client");

main();

function main() {
  const query = querystring.parse(global.location.search.slice(1));

  if (query.resize === "true") {
    require("iframe-resizer").iframeResizerContentWindow;
  }

  if (query.reload === "true") {
    const ws = new WebSocketClient({
      src: `ws://${global.location.host}/api/`,
      reconnect: true,
      interval: 1000
    });

    ws.open();

    ws.onMessage(envelope => {
      const message = ARSON.parse(envelope.data);
      if (message.type === "start") {
        window.location.reload();
      }
    });
  }

  window.addEventListener("keydown", e => {
    top.postMessage(ARSON.stringify({
      type: "keydown",
      payload: {
        keyCode: (e.data || e).keyCode,
        altKey: e.altKey,
        ctrlKey: e.ctrlKey
      }
    }), "*");
  });
}

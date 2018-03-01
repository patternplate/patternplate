import url from "url";
import { WebSocketClient } from "@patternplate/websocket-client";
import ARSON from "arson";
import { createPromiseThunkAction } from "./promise-thunk-action";
import loadPatternDemo from "./load-pattern-demo";
import loadSchema from "./load-schema";

export default createPromiseThunkAction(
  "LISTEN",
  (payload, dispatch, getState) => {
    const {WebSocket} = global;

    if (!WebSocket) {
      return;
    }

    const state = getState();
    const source = url.resolve(state.base, payload.url);

    const ws = new WebSocketClient({
      src: `ws://${global.location.host}${source}/`,
      reconnect: true,
      interval: 1000
    });

    ws.open();

    ws.onOpen(() => dispatch({ type: "LISTEN_HEARTBEAT", payload: {}}));
    ws.onClose(() => dispatch({ type: "ERROR_HEARTBEAT", payload: {}}));
    ws.onError(() => dispatch({ type: "ERROR_HEARTBEAT", payload: {}}));

    ws.onMessage(async envelope => {
      const message = ARSON.parse(envelope.data);
      const {type, payload} = message;

      switch (type) {
        case "error":
          return dispatch({
            type: "ERROR_HEARTBEAT",
            payload
          });
        case "start": {
          // TODO: only reload pattern if the current pattern is affected
          return dispatch(loadPatternDemo({force: false}));
        }
        case "done": {
          return dispatch({
            type: "LISTEN_HEARTBEAT",
            payload: {}
          });
        }
        case "change": {
          return dispatch(loadSchema());
        }
        default: {
          throw new TypeError(`Received unknown message of type ${type}`);
        }
      }
    });
  }
);

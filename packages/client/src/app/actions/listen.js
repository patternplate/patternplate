import url from "url";
import { WebSocketClient } from "@patternplate/websocket-client";
import ARSON from "arson";
import { createPromiseThunkAction } from "./promise-thunk-action";
import loadPatternDemo from "./load-pattern-demo";
import loadSchema from "./load-schema";
import { flat as selectPool } from "../selectors/pool";
import { patchLocation } from "./";

export default createPromiseThunkAction(
  "LISTEN",
  (payload, dispatch, getState) => {
    const { WebSocket } = global;

    if (!WebSocket) {
      return;
    }

    const state = getState();

    window.addEventListener("message", envelope => {
      if (typeof envelope.data !== "string") {
        return;
      }

      if (envelope.data.indexOf("[iFrameSizer]") === 0) {
        return;
      }

      const message = safeParse(envelope.data);
      if (message.type === "navigate") {
        dispatch(
          patchLocation({
            pathname: [message.itemType, message.id].join("/")
          })
        );
      }
    });

    if (state.isStatic) {
      return;
    }

    const source = url.resolve(state.base, payload.url);

    const ws = new WebSocketClient({
      src: `ws://${global.location.host}${source}/`,
      reconnect: true,
      interval: 1000
    });

    ws.open();

    ws.onOpen(() => dispatch({ type: "LISTEN_HEARTBEAT", payload: {} }));
    ws.onClose(() => dispatch({ type: "ERROR_HEARTBEAT", payload: {} }));
    ws.onError(() => dispatch({ type: "ERROR_HEARTBEAT", payload: {} }));

    ws.onMessage(async envelope => {
      const message = ARSON.parse(envelope.data);
      const { type, payload } = message;

      switch (type) {
        case "error":
          return dispatch({
            type: "ERROR_HEARTBEAT",
            payload
          });
        case "start": {
          return dispatch(loadSchema());
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
      }
    });
  }
);

function safeParse(data) {
  try {
    return JSON.parse(data);
  } catch (err) {
    return {};
  }
}

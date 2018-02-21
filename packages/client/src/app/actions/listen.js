import url from "url";
import {EventEmitter} from "events";
import { createPromiseThunkAction } from "./promise-thunk-action";
import loadPatternDemo from "./load-pattern-demo";
// import loadSchema from "./load-schema";

class WebSocketClient{
  constructor({src, reconnect, interval}) {
    this.src = src;
    this.reconnect = reconnect;
    this.interval = interval;
    this.opened = false;
    this.ended = false;
    this.ee = new EventEmitter();
  }

  open() {
    const exec = (type, args) => this.ee.listeners(type).forEach(l => l(...args));

    const open = () => {
      this.instance = new global.WebSocket(this.src);

      // Make Chrome behave and close the websocket connection
      // before unloading the browsing context. Ref: https://github.com/websockets/ws/issues/1256
      global.addEventListener("beforeunload", this.close);

      this.instance.addEventListener("open", (...args) => {
        this.opened = true;
        exec("open", args);
      });

      this.instance.addEventListener("close", (...args) => {
        global.removeEventListener("beforeunload", this.close);
        this.opened = false;
        exec("close", args);
      });

      this.instance.addEventListener("error", (...args) => {
        global.removeEventListener("beforeunload", this.close);
        this.opened = false;
        exec("error", args);
      });

      this.instance.addEventListener("message", (...args) => {
        exec("message", args);
      });
    };

    open();

    if (this.reconnect) {
      this.loop = setInterval(() => {
        if (this.ended  || this.opened) {
          return;
        }
        this.instance.close();
        open();
      }, this.interval);
    }
  }

  close() {
    this.ended = true;
    if (this.opened) {
      this.instance.close();
    }
  }

  onOpen(handler) {
    this.ee.on("open", handler);
  }

  onClose(handler) {
    this.ee.on("close", handler);
    this.instance.addEventListener("close", handler);
  }

  onError(handler) {
    this.ee.on("error", handler);
    this.instance.addEventListener("error", handler);
  }

  onMessage(handler) {
    this.ee.on("message", handler);
    this.instance.addEventListener("message", handler);
  }
}

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
      const message = JSON.parse(envelope.data);
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
        default: {
          throw new TypeError(`Received unknown message of type ${type}`);
        }
      }
    });
  }
);

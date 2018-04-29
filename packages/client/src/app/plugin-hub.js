import ARSON from 'arson';
import { WebSocketClient } from "@patternplate/websocket-client";
import * as uuid from "uuid";

const SINGLETON = { nonce: uuid.v4() };
const SCOPE = new WeakMap();

export class PluginHub {
  static create(init) {
    if (!SCOPE.has(SINGLETON)) {
      SCOPE.set(SINGLETON, new PluginHub({
        ...init,
        nonce: SINGLETON
      }));
    }
    return SCOPE.get(SINGLETON);
  }

  constructor(init) {
    if (init.nonce !== SINGLETON) {
      throw new TypeError(`Calling new PluginHub() directly is not supported, use PluginHub.create()`);
    }

    const ws = new WebSocketClient({
      src: init.src,
      reconnect: true,
      interval: 1000
    });

    ws.open();

    SCOPE.set(this, {ws});
  }

  send(message) {
    const {ws} = SCOPE.get(this);
    message.type = 'plugin';
    ws.send(ARSON.stringify(message));
  }
}

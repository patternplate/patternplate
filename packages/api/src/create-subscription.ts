import * as Config from "@patternplate/validate-config";
import * as LoadConfig from "@patternplate/load-config";
import * as Types from "@patternplate/types";
import * as T from "./types";
import * as ws from "ws";
import * as Util from "util";
import { createCompiler } from "./create-compiler";

export interface SubscriptionContext {
  cwd: string;
  wss: ws.Server;
  queues: {
    server: T.MsgQueue;
    client: T.MsgQueue;
  };
  config: Types.PatternplateConfig;
  watcher: T.ObservableWatcher;
  inspect: {
    port: number;
    enabled: boolean;
    break: boolean;
  }
}

export const createSubscription = function createSubscription(context: SubscriptionContext): (handler: (m: T.QueueMessage) => void) => void {
  const debug = Util.debuglog("PATTERNPLATE");
  const { queues, config, cwd, wss, watcher } = context;

  return handler => {
    debug("subscribing to webpack and fs events");

    // Prevent client errors (frequently caused by Chrome disconnecting on reload)
    // from bubbling up and making the server fail, ref: https://github.com/websockets/ws/issues/1256
    wss.on("connection", ws => {
      ws.on("error", err => {
        if ((err as any).errno === "ECONNRESET") {
          return;
        }
        console.error(err);
      });
    });

    const send = getSender(wss, handler);

    queues.client.subscribe(queue => {
      const [message] = queue;
      send(message);
    });

    let configError = false;

    watcher.subscribe(message => {
      if (
        message.type === "change" &&
        message.payload.contentType === "config"
      ) {
        (async () => {
          const { config: loadedConfig, filepath } = await LoadConfig.loadConfig({ cwd });

          const [error] = filepath
            ? Config.validate({ target: config, name: filepath })
            : [null];

          if (error) {
            configError = true;
            send({ type: "error", payload: error });
            return;
          }

          if (configError) {
            console.log(`Resolved config error, applying ${filepath}`);
            configError = false;
          }

          Object.assign(config, loadedConfig);

          queues.client.stop();
          queues.server.stop();

          const [clientQueue, serverQueue] = await Promise.all([
            createCompiler({ config, cwd, inspect: context.inspect, target: Types.CompileTarget.Web }),
            createCompiler({ config, cwd, inspect: context.inspect, target: Types.CompileTarget.Node })
          ]);

          queues.client = clientQueue;
          queues.server = serverQueue;
        })().catch(err => {
          configError = true;
          send({ type: "error", payload: err });
        });
      }

      send(message);
    });
  };
};

function getSender(wss: ws.Server, handler: (m: T.QueueMessage) => void) {
  const ARSON = require("arson");

  return (message: T.QueueMessage) => {
    if (typeof handler === "function") {
      handler(message);
    }
    wss.clients.forEach(client => {
      if (client.readyState === ws.OPEN) {
        const msg = filterMessage(message);

        client.send(ARSON.stringify(message));
      }
    });
  };
}

function filterMessage(message: T.QueueMessage): T.QueueMessage {
  if (message.type === 'done') {
    return { type: 'done', target: message.target, payload: { fs: undefined } };
  }

  return message;
}

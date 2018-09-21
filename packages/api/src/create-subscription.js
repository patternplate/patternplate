const Path = require("path");
const ARSON = require("arson");
const { validate } = require("@patternplate/validate-config");
const WebSocket = require("ws");
const { loadConfig } = require("@patternplate/load-config");

const { createCompiler } = require("./create-compiler");

const debug = require("util").debuglog("PATTERNPLATE");

module.exports.createSubscription = function createSubscription(context) {
  const { queues, config, cwd, wss, watcher } = context;

  return handler => {
    debug("subscribing to webpack and fs events");

    // Prevent client errors (frequently caused by Chrome disconnecting on reload)
    // from bubbling up and making the server fail, ref: https://github.com/websockets/ws/issues/1256
    wss.on("connection", ws => {
      ws.on("error", err => {
        if (err.errno === "ECONNRESET") {
          return;
        }
        console.error(err);
      });
    });

    const send = getSender(wss, handler);

    queues.client.subscribe(queue => {
      const [message] = queue;
      send({ type: message.type, payload: message.payload });
    });

    queues.client.subscribe(queue => {
      const [message] = queue;
      send({ type: message.type, payload: message.payload });
    });

    let configError = false;

    watcher.subscribe(message => {
      if (
        message.type === "change" &&
        message.payload.contentType === "config"
      ) {
        (async () => {
          const { config: loadedConfig, filepath } = await loadConfig({ cwd });
          const [error] = validate({ target: config, name: filepath });

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
            createCompiler({ config, cwd, target: "web" }),
            createCompiler({ config, cwd, target: "node" })
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

function getSender(wss, handler) {
  return message => {
    if (typeof handler === "function") {
      handler(message);
    }
    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(ARSON.stringify(message));
      }
    });
  };
}

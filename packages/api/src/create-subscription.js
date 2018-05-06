const Path = require("path");
const ARSON = require("arson");
const { validate } = require("@patternplate/validate-config");
const WebSocket = require("ws");
const loadConfig = require("@patternplate/load-config");

const createCompiler = require("./compiler");
const { PluginApi } = require("./plugin-api");

const debug = require("util").debuglog("PATTERNPLATE");

module.exports.createSubscription = function createSubscription(context) {
  const { queues, config, cwd, wss, server, watcher } = context;

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

      ws.on("message", async envelope => {
        const message = ARSON.parse(envelope);
        switch (message.type) {
          case "plugin": {
            const plugins = Array.isArray(config.plugins)
              ? await loadPlugins(config.plugins, { cwd, validate: true })
              : [];

            const target = plugins.find(p => p.id === message.payload.plugin);

            if (!target) {
              console.log(
                `Received message for unknown plugin: ${message.payload.id}`
              );
              return;
            }

            const { plugin } = target;

            if (!plugin.commands.hasOwnProperty(message.payload.command)) {
              console.log(
                `Received unknown command: ${
                  message.payload.command
                } for plugin ${target.id}. Available commands: ${Object.keys(
                  target.plugin.commands || {}
                ).join(", ")}`
              );
              return;
            }

            const command = plugin.commands[message.payload.command];

            if (typeof command.command !== "function") {
              console.log(
                `Command: ${message.payload.command} for plugin ${
                  target.id
                } is malformed.`
              );
              return;
            }

            const address = server.address();
            command.command(PluginApi.from(message.state, { config, cwd, address }));
            return;
          }
          default:
            console.log(`Received unknown message from client: ${message.type}`);
        }
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
          const { config, filepath } = await loadConfig({ cwd });
          const [error, valid] = validate({ target: config, name: filepath });

          if (error) {
            configError = true;
            send({ type: "error", payload: error });
          }

          if (configError) {
            console.log(`Resolved config error, applying ${filepath}`);
            configError = false;
          }

          queues.client.stop();
          queues.server.stop();

          const [clientQueue, serverQueue] = await Promise.all([
            createCompiler({ cwd, target: "web" }),
            createCompiler({ cwd, target: "node" })
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

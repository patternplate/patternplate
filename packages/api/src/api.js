// const AggregateError = require("aggregate-error");
const path = require("path");
const loadConfig = require("@patternplate/load-config");
const loadMeta = require("@patternplate/load-meta");
const {loadPlugins} = require("@patternplate/load-plugins");
const ARSON = require("arson");
const chokidar = require("chokidar");
const commonDir = require("common-dir");
const express = require("express");
const globParent = require("glob-parent");
const micromatch = require("micromatch");
const WebSocket = require("ws");
const debug = require("util").debuglog("PATTERNPLATE");
const Observable = require("zen-observable");
const {validate} = require("@patternplate/validate-config");
const {PluginApi} = require("./plugin-api");

const createCompiler = require("./compiler");
const cover = require("./cover");
const demo = require("./demo");
const main = require("./main");
const scripts = require("./scripts");

module.exports = api;

async function api({ server, cwd }) {
  let [clientQueue, serverQueue] = await Promise.all([
    createCompiler({ cwd, target: "web" }),
    createCompiler({ cwd, target: "node" })
  ]);

  const watcher = await createWatcher({ cwd });
  const wss = new WebSocket.Server({ server });

  const mw = express()
    .get("/state.json", await main({ cwd }))
    .get("/demo/*.html", await demo({ cwd, queue: serverQueue }))
    .get("/cover.html", await cover({ cwd, queue: serverQueue }))
    .use(await scripts({ queue: clientQueue }));

  mw.subscribe = handler => {
    debug("subscribing to webpack and fs events");

    // Prevent client errors (frequently caused by Chrome disconnecting on reload)
    // from bubbling up and making the server fail, ref: https://github.com/websockets/ws/issues/1256
    wss.on("connection", ws => {
      ws.on("error", err => {
        if (err.errno === 'ECONNRESET') {
          return;
        }
        console.error(err);
      });

      ws.on("message", async (envelope) => {
        const message = ARSON.parse(envelope);
        switch (message.type) {
          case 'plugin': {
            // TODO: Refine message struct type here
            const {config, filepath} = await loadConfig({ cwd });
            const base = filepath ? path.dirname(filepath) : cwd;

            const plugins = Array.isArray(config.plugins)
              ? await loadPlugins(config.plugins, {cwd: base, validate: true})
              : [];

            const target = plugins.find(p => p.id === message.payload.plugin);

            if (!target) {
              console.log(`Received message for unknown plugin: ${message.payload.id}`);
              return;
            }

            const {plugin} = target;

            if (!plugin.commands.hasOwnProperty(message.payload.command)) {
              console.log(`Received unknown command: ${message.payload.command} for plugin ${target.id}. Available commands: ${Object.keys(target.plugin.commands || {}).join(', ')}`);
              return;
            }

            const command = plugin.commands[message.payload.command];

            if (typeof command.command !== "function") {
              console.log(`Command: ${message.payload.command} for plugin ${target.id} is malformed.`);
              return;
            }

            const address = server.address();
            command.command(PluginApi.from(message.state, {cwd, address}));
            return;
          }
          default:
            console.log(`Received unknown message from client: ${plugin.type}`);
        }
      });
    });

    const send = getSender(wss, handler);

    clientQueue.subscribe(queue => {
      const [message] = queue;
      send({type: message.type, payload: message.payload});
    });

    serverQueue.subscribe(queue => {
      const [message] = queue;
      send({type: message.type, payload: message.payload});
    });

    let configError = false;

    watcher.subscribe(message => {
      if (message.type === "change" && message.payload.contentType === "config") {
        (async () => {
          const {config, filepath} = await loadConfig({ cwd });
          const [error, valid] = validate({target: config, name: filepath});

          if (error) {
            configError = true;
            send({type: "error", payload: error});
          }

          if (configError) {
            console.log(`Resolved config error, applying ${filepath}`);
            configError = false;
          }

          clientQueue.stop();
          serverQueue.stop();

          [clientQueue, serverQueue] = await Promise.all([
            createCompiler({ cwd, target: "web" }),
            createCompiler({ cwd, target: "node" })
          ]);
        })().catch(err => {
          configError = true;
          send({type: "error", payload: err});
        });
      }

      send(message);
    });
  };

  mw.unsubscribe = () => {
    watcher.stop();
    serverQueue.stop();
    clientQueue.stop();
    wss.clients.forEach(client => {
      client.close();
    });
  };

  return mw;
}

async function createWatcher(options) {
  let watching = false;
  let stopped = false;
  let subscribers = [];
  let watcher;

  const next = message => subscribers.forEach(subs => subs.next(message));

  const obs = new Observable(subs => {
    if (!watching) {
      watching = true;

      (async () => {
        const result = await loadConfig({ cwd: options.cwd });
        const { config = {}, filepath = options.cwd } = result;
        const { entry = [], docs = [] } = config;
        const cwd = filepath ? path.dirname(filepath) : options.cwd;

        // TODO: only **list** relevant manifest paths
        // instead of reading them
        const meta = await loadMeta({
          entry,
          cwd
        });

        if (meta.errors && meta.errors.length > 0) {
          meta.errors.forEach(error => next({ type: "error", payload: error }));
        }

        const configPath = filepath ? filepath : path.join(cwd, "patternplate.config.js");

        const parents = getParents({
          globs: [...entry, ...docs],
          paths: [
            configPath,
            meta.patterns.length > 0
                ? commonDir(meta.patterns.map(m => path.join(cwd, m.path)))
                : null
          ].filter(Boolean)
        }, {cwd});

        debug(`subscribing to changes on: ${parents.map(p => path.relative(cwd, p)).join(', ')}`);

        if (stopped) {
          return;
        }

        watcher = chokidar.watch(parents, {
          ignoreInitial: true
        });

        obs.watcher = watcher;

        watcher.on('all', async (e, p) => {
          const rel = path.relative(cwd, p);

          if (p === configPath) {
            next({ type: "change", payload: { file: p, contentType: "config" }});
          }

          if (path.extname(rel) === ".md") {
            next({ type: "change", payload: { file: p, contentType: "pattern" }});
          }

          if (path.basename(rel) === "pattern.json" || path.basename(rel) === "package.json") {
            next({ type: "change", payload: { file: p, contentType: "pattern" }});
          }

          if (micromatch.some(rel, docs, {matchBase: true})) {
            next({ type: "change", payload: { file: p, contentType: "doc" }});
          }
        });
      })();
    }

    subscribers.push(subs);

    return () => {
      subscribers = subscribers.filter(s => s !== subs);
    };
  });

  obs.stop = () => {
    stopped = true;
    if (watcher) {
      watcher.close();
    }
  };

  return obs;
}

function getSender(wss, handler) {
  return message => {
    if (typeof handler === "function") {
      handler(message);
    }
    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(ARSON.stringify(message));
      }
    })
  }
}

function getParents({globs = [], paths = []}, {cwd}) {
  return [
    ...paths,
    ...globs
      .filter(g => g.charAt(0) !== "!")
      .map(g =>  path.join(cwd, globParent(g)))
  ];
}

function safeParse(message) {
  try {
    return ARSON.parse(message);
  } catch (err) {
    return {};
  }
}

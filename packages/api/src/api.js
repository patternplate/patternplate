// const AggregateError = require("aggregate-error");
const path = require("path");
const loadConfig = require("@patternplate/load-config");
const loadMeta = require("@patternplate/load-meta");
const ARSON = require("arson");
const chokidar = require("chokidar");
const commonDir = require("common-dir");
const express = require("express");
const globParent = require("glob-parent");
const micromatch = require("micromatch");
const WebSocket = require("ws");
const debug = require("util").debuglog("PATTERNPLATE");
const Observable = require("zen-observable");

const createCompiler = require("./compiler");
const demo = require("./demo");
const main = require("./main");
const cover = require("./cover");
const scripts = require("./scripts");

module.exports = api;

async function api({ server, cwd }) {
  let [clientQueue, serverQueue] = await Promise.all([
    createCompiler({ cwd, target: "web" }),
    createCompiler({ cwd, target: "node" })
  ]);


  const watcher = await createWatcher({cwd});

  const mw = express()
    .get("/state.json", await main({ cwd }))
    .get("/demo/*.html", await demo({ cwd, queue: serverQueue }))
    .get("/cover.html", await cover({ cwd, queue: serverQueue }))
    .use(await scripts({ queue: clientQueue }));

  mw.subscribe = handler => {
    debug("subscribing to webpack and fs events");
    const wss = new WebSocket.Server({ server });

    // Prevent client errors (frequently caused by Chrome disconnecting on reload)
    // from bubbling up and making the server fail, ref: https://github.com/websockets/ws/issues/1256
    wss.on("connection", ws => {
      ws.on("error", err => {
        if (err.errno === 'ECONNRESET') {
          return;
        }
        console.error(err);
      });
    });

    const send = getSender(wss, handler);

    clientQueue.subscribe(queue => {
      const [message] = queue;
      send({type: message.type});
    });

    serverQueue.subscribe(queue => {
      const [message] = queue;
      send({type: message.type});
    });

    watcher.subscribe(message => {
      if (message.type === "change" && message.payload.contentType === "config") {
        (async () => {
          clientQueue.stop();
          serverQueue.stop();

          [clientQueue, serverQueue] = await Promise.all([
            createCompiler({ cwd, target: "web" }),
            createCompiler({ cwd, target: "node" })
          ])
        })();
      }

      send(message);
    });
  };

  return mw;
}

async function createWatcher(options) {
  let watching = false;
  let subscribers = [];
  const next = message => subscribers.forEach(subs => subs.next(message));

  return new Observable(subs => {
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

        const watcher = chokidar.watch(parents, {
          ignoreInitial: true
        });

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

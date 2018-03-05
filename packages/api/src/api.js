// const AggregateError = require("aggregate-error");
const path = require("path");
const loadConfig = require("@patternplate/load-config");
const {loadMetaResult} = require("@patternplate/load-meta");
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
const pack = require("./pack");
const main = require("./main");

module.exports = api;

async function api({ server, cwd }) {
  const clientQueue = await createCompiler({ cwd, target: "web" });
  const serverQueue = await createCompiler({ cwd, target: "node" });

  const watcher = await createWatcher({cwd});

  const mw = express()
    .get("/state.json", await main({ cwd }))
    .get("/demo/*.html", await demo({ cwd, queue: serverQueue }))
    .use(await pack({ compiler: clientQueue.compiler }));

  mw.subscribe = handler => {
    debug("subscribing to webpack and fs events");
    const wss = new WebSocket.Server({ server });

    // Prevent client errors (frequently caused by Chrome disconnecting on reload)
    // from bubbling up and killing the server, ref: https://github.com/websockets/ws/issues/1256
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

    watcher.subscribe(send);
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
        const [errors, meta] = await loadMetaResult({
          entry,
          cwd
        });

        if (errors && errors.length > 0) {
          errors.forEach(err => next({ type: 'error', payload: err }));
        }

        const parents = [
          ...(meta.length > 0 ? [commonDir(meta.map(m => path.join(cwd, m.path)))] : []),
          ...docs.map(d => path.join(cwd, globParent(d))),
          ...entry.map(e => path.join(cwd, globParent(e)))
        ];

        const watcher = chokidar.watch(parents, {
          ignoreInitial: true
        });

        debug("subscribing to meta data and documentation changes");

        watcher.on('all', async (e, p) => {
          const rel = path.relative(cwd, p);

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


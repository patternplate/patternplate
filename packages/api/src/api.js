const express = require("express");
const WebSocket = require("ws");
const MemoryFS = require("memory-fs");

const cover = require("./cover");
const demo = require("./demo");
const main = require("./main");
const scripts = require("./scripts");
const hmr = require("./hmr");

const { createCompiler } = require("./create-compiler");
const { createSubscription } = require("./create-subscription");
const { createWatcher } = require("./create-watcher");

module.exports = api;

async function api({ server, config, cwd }) {
  const fs = new MemoryFS();

  const [clientQueue, serverQueue] = await Promise.all([
    createCompiler({ config, cwd, target: "web", fs }),
    createCompiler({ config, cwd, target: "node", fs })
  ]);

  const queues = {
    client: clientQueue,
    server: serverQueue
  };

  const watcher = await createWatcher({ config, cwd });
  const wss = new WebSocket.Server({ server });

  const mw = express()
    .get("/state.json", await main({ config, cwd }))
    .get("/demo/*.html", await demo({ config, cwd, queue: queues.server }))
    .get("/cover.html", await cover({ config, cwd, queue: queues.server }))
    .use("/hmr", await hmr({ queue: queues.client }))
    .use(await scripts({ queue: queues.client, fs }));

  mw.subscribe = createSubscription({
    cwd,
    config,
    queues,
    wss,
    server,
    watcher
  });

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

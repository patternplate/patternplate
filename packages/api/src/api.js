const express = require("express");
const WebSocket = require("ws");

const cover = require("./cover");
const demo = require("./demo");
const main = require("./main");
const plugins = require("./plugins");
const scripts = require("./scripts");

const { createCompiler } = require("./create-compiler");
const { createSubscription } = require("./create-subscription");
const { createWatcher } = require("./create-watcher");

module.exports = api;

async function api({ server, config, cwd }) {
  const [clientQueue, serverQueue] = await Promise.all([
    createCompiler({ config, cwd, target: "web" }),
    createCompiler({ config, cwd, target: "node" })
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
    .use("/plugins/*", await plugins({ config, cwd }))
    .use(await scripts({ queue: queues.client }));

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

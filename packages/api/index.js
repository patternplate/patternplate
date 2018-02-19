// const AggregateError = require("aggregate-error");
const express = require("express");
const WebSocket = require("ws");
const debug = require("util").debuglog("PATTERNPLATE");

const createCompiler = require("./compiler");
const demo = require("./demo");
const pack = require("./pack");
const main = require("./main");

module.exports = api;

async function api({ server, cwd }) {
  const clientQueue = await createCompiler({ cwd, target: "web" });
  const serverQueue = await createCompiler({ cwd, target: "node" });

  const mw = express()
    .get("/", await main({ cwd }))
    .get("/demo/*/index.html", await demo({ cwd, queue: serverQueue }))
    .use(await pack({ compiler: clientQueue.compiler }));

  mw.subscribe = () => {
    debug("subscribing to webpack and fs events");
    const wss = new WebSocket.Server({server});
    const send = getSender(wss);
    clientQueue.subscribe();
    serverQueue.subscribe(queue => {
      const [message] = queue;
      send(message);
    });
  };

  return mw;
}

function getSender(wss) {
  return message => {
    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(message));
      }
    })
  }
}


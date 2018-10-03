import * as ws from "ws";
import * as express from "express";
import * as Http from "http";
import * as Types from "@patternplate/types";
import * as T from "./types";
import * as Routes from "./routes";
import { createSubscription } from "./create-subscription";
import { createCompiler } from "./create-compiler";

const { createWatcher } = require("./create-watcher");

export interface ApiApplication {
  middleware: express.Express;
  subscribe(h: (msg: T.QueueMessage) => void): void;
  unsubscribe(): void;
}

export interface ApiOptions {
  cwd: string;
  config: Types.PatternplateConfig;
  server: Http.Server;
}

export async function api({ server, config, cwd }: ApiOptions): Promise<ApiApplication> {
  const [clientQueue, serverQueue] = await Promise.all([
    createCompiler({ config, cwd, target: T.CompileTarget.Web }),
    createCompiler({ config, cwd, target: T.CompileTarget.Node })
  ]);

  const queues = {
    client: clientQueue,
    server: serverQueue
  };

  const watcher = await createWatcher({ config, cwd });
  const wss = new ws.Server({ server });

  const routeOptions = { config, cwd, queue: queues.server };

  const middleware = express()
    .get("/state.json", await Routes.main(routeOptions))
    .get("/demo/*.html", await Routes.demo(routeOptions))
    .get("/cover.html", await Routes.cover(routeOptions))
    .use(await Routes.scripts({ config, cwd, queue: queues.client }));

  return {
    middleware,
    subscribe: createSubscription({
      cwd,
      config,
      queues,
      wss,
      watcher
    }),
    unsubscribe: () => {
      watcher.stop();
      serverQueue.stop();
      clientQueue.stop();
      wss.clients.forEach(client => {
        client.close();
      });
    }
  };
}

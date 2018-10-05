import * as Path from "path";
import * as Observable from "zen-observable";
import * as LoadMeta from "@patternplate/load-meta";
import * as Util from "util";
import * as chokidar from "chokidar";
import * as micromatch from "micromatch";
import * as T from "./types";
import * as Types from "@patternplate/types";

import globParent = require("glob-parent");
const commonDir = require("common-dir");

export interface WatcherOptions {
  config: Types.PatternplateConfig;
  cwd: string;
}

export const createWatcher = async function createWatcher(options: WatcherOptions): Promise<T.ObservableWatcher> {
  const debug = Util.debuglog("PATTERNPLATE");

  let watching = false;
  let stopped = false;
  let subscribers: ZenObservable.SubscriptionObserver<T.QueueMessage>[] = [];
  let watcher: chokidar.FSWatcher;

  const {config = { entry: [], docs: [] }} = options;
  const {entry = [], docs = []} = config;
  const {cwd} = options;
  const configPath = Path.join(cwd, "patternplate.config.js");

  const next = (message: T.QueueMessage) => subscribers.forEach(subs => subs.next(message));

  const rawObservable = new Observable(subs => {
    if (!watching) {
      watching = true;

      (async () => {
        // TODO: only **list** relevant manifest paths
        // instead of reading them
        const meta = await LoadMeta.loadMeta({
          entry,
          cwd
        });

        if (meta.errors && meta.errors.length > 0) {
          meta.errors.forEach(error => next({ type: "error", payload: error }));
        }

        const paths = [
          configPath,
          meta.patterns.length > 0
            ? commonDir(meta.patterns.map(m => Path.join(cwd, m.path))) as string
            : undefined
        ].filter((i): i is string => typeof i === 'string');

        const parents = getParents(
          {
            globs: [...entry, ...docs],
            paths
          },
          { cwd }
        );

        debug(
          `subscribing to changes on: ${parents
            .map(p => Path.relative(cwd, p))
            .join(", ")}`
        );

        if (stopped) {
          return;
        }

        watcher = chokidar.watch(parents, {
          ignoreInitial: true
        });

        obs.watcher = watcher;

        watcher.on("all", async (e, p) => {
          const rel = Path.relative(cwd, p);

          if (p === configPath) {
            next({
              type: "change",
              payload: { file: p, contentType: Types.ContentType.Config }
            });
          }

          if (Path.extname(rel) === ".md") {
            next({
              type: "change",
              payload: { file: p, contentType: Types.ContentType.Pattern }
            });
          }

          if (
            Path.basename(rel) === "pattern.json" ||
            Path.basename(rel) === "package.json"
          ) {
            next({
              type: "change",
              payload: { file: p, contentType: Types.ContentType.Pattern }
            });
          }

          if (micromatch.some(rel, docs, { matchBase: true })) {
            next({ type: "change", payload: { file: p, contentType: Types.ContentType.Doc } });
          }
        });
      })();
    }

    subscribers.push(subs);

    return () => {
      subscribers = subscribers.filter(s => s !== subs);
    };
  });

  const obs = rawObservable as T.ObservableWatcher;

  obs.stop = () => {
    stopped = true;
    if (watcher) {
      watcher.close();
    }
  };

  return obs;
}

function getParents({ globs = [], paths = [] }: { globs: string[], paths: string[] }, { cwd }: { cwd: string }): string[] {
  return [
    ...paths,
    ...globs
      .filter(g => g.charAt(0) !== "!")
      .map(g => Path.join(cwd, globParent(g)))
  ];
}

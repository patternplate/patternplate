const Path = require("path");
const { loadMeta } = require("@patternplate/load-meta");
const Observable = require("zen-observable");
const chokidar = require("chokidar");
const globParent = require("glob-parent");
const micromatch = require("micromatch");
const commonDir = require("common-dir");

const debug = require("util").debuglog("PATTERNPLATE");

module.exports.createWatcher = async function createWatcher(options) {
  let watching = false;
  let stopped = false;
  let subscribers = [];
  let watcher;

  const {config = {}} = options;
  const {entry = [], docs = []} = config;
  const {cwd} = options;
  const configPath = Path.join(cwd, "patternplate.config.js");

  const next = message => subscribers.forEach(subs => subs.next(message));

  const obs = new Observable(subs => {
    if (!watching) {
      watching = true;

      (async () => {
        // TODO: only **list** relevant manifest paths
        // instead of reading them
        const meta = await loadMeta({
          entry,
          cwd
        });

        if (meta.errors && meta.errors.length > 0) {
          meta.errors.forEach(error => next({ type: "error", payload: error }));
        }

        const parents = getParents(
          {
            globs: [...entry, ...docs],
            paths: [
              configPath,
              meta.patterns.length > 0
                ? commonDir(meta.patterns.map(m => Path.join(cwd, m.path)))
                : null
            ].filter(Boolean)
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
              payload: { file: p, contentType: "config" }
            });
          }

          if (Path.extname(rel) === ".md") {
            next({
              type: "change",
              payload: { file: p, contentType: "pattern" }
            });
          }

          if (
            Path.basename(rel) === "pattern.json" ||
            Path.basename(rel) === "package.json"
          ) {
            next({
              type: "change",
              payload: { file: p, contentType: "pattern" }
            });
          }

          if (micromatch.some(rel, docs, { matchBase: true })) {
            next({ type: "change", payload: { file: p, contentType: "doc" } });
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

function getParents({ globs = [], paths = [] }, { cwd }) {
  return [
    ...paths,
    ...globs
      .filter(g => g.charAt(0) !== "!")
      .map(g => Path.join(cwd, globParent(g)))
  ];
}

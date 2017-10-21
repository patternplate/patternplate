const path = require("path");
const loadConfig = require("@patternplate/load-config");
const { loadDocsTree } = require("@patternplate/load-docs");
const { loadMetaTree } = require("@patternplate/load-meta");
const chokidar = require("chokidar");
const { isEqual } = require("lodash");

module.exports = options => {
  const watch = watcher({ cwd: options.cwd });

  const api = async (req, res) => {
    const type = req.accepts("json", "text/event-stream");

    switch (type) {
      case "text/event-stream": {
        await watch(req, res);
        return;
      }
      case "json":
      default: {
        const { config, filepath } = await loadConfig({ cwd: options.cwd });
        const { entry = [] } = config;
        const cwd = path.dirname(filepath);

        const docs = await loadDocsTree({
          cwd,
          docs: config.docs,
          readme: config.readme
        });

        const meta = await loadMetaTree({
          cwd,
          entry
        });

        res.send({ docs, meta });
      }
    }
  };

  return async function main(req, res, next) {
    try {
      await api(req, res);
    } catch (err) {
      next(err);
    }
  };
};

function watcher(options) {
  const connections = new Set();

  const broadcast = (id, payload) => {
    connections.forEach(send => send(id, payload));
  };

  const watchPath = path.join(options.cwd, "./patterns");
  const sentinel = chokidar.watch(watchPath, { ignoreInitial: true });
  let patterns = { id: "root", children: [] };

  const onChange = async (type, file) => {
    broadcast("change", { type, file });
    const meta = { id: "root", children: [] };
    patterns = await affected(file, meta, patterns);
    patterns.forEach(pattern => broadcast("reload", { pattern }));
  };

  setInterval(() => {
    broadcast("heartbeat", Date.now());
  }, 10000);

  return async (req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive"
    });

    const send = (type, data) => {
      if (res.finished) {
        return;
      }
      res.write(sse(type, data));
    };

    Array(3)
      .fill(true)
      .forEach((item, i) => {
        setTimeout(() => {
          send("heartbeat", Date.now());
        }, i * 1000);
      });

    connections.add(send);

    const end = () => {
      connections.delete(send);
      res.end();
    };

    req.on("close", () => {
      end();
    });

    req.on("finish", () => {
      end();
    });

    req.on("error", error => {
      console.error(error);
      end();
    });

    sentinel.on("all", onChange);
  };
}

function sse(event, data) {
  return `event:${event}\ndata: ${JSON.stringify(data)}\n\n`;
}

function affected(file, patterns, previous) {
  const b = strip(file);
  const basename = path.basename(file);

  if (!["demo", "index"].includes(b) && basename !== "pattern.json") {
    return [];
  }

  const guess = path.dirname(
    file
      .split(path.sep)
      .slice(1)
      .join("/")
  );

  const match = find(patterns, guess);
  const prev = find(previous, guess);

  if (!match) {
    return [];
  }

  if (
    basename === "pattern.json" &&
    isEqual(prev.manifest.patterns, match.manifest.patterns)
  ) {
    return [];
  }

  if (b === "demo") {
    return [match.id];
  }

  const dependents = [
    ...deps(match, patterns, "dependents"),
    ...deps(match, patterns, "demoDependents")
  ];

  return [match.id, ...dependents];
}

function deps(pattern, patterns, key) {
  return pattern[key].reduce((d, p) => {
    const match = find(patterns, p);
    return [...d, p, ...deps(match, patterns, key)];
  }, []);
}

function find(tree, id, depth = 1) {
  if (!tree || !id) {
    return;
  }

  const frags = id.split("/").filter(Boolean);
  const sub = frags.slice(0, depth).map(strip);
  const match = tree.children.find(child =>
    child.path.every((s, i) => sub[i] === strip(s))
  );

  if (match && depth < frags.length) {
    return find(match, id, depth + 1);
  }

  return match;
}

function strip(b) {
  return path.basename(b, path.extname(b));
}

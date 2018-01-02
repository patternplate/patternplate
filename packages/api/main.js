const path = require("path");
const commondir = require("commondir");
const globby = require("globby");
const loadConfig = require("@patternplate/load-config");
const { loadDocsTree } = require("@patternplate/load-docs");
const loadMeta = require("@patternplate/load-meta");
const chokidar = require("chokidar");
const { uniq } = require("lodash");

module.exports = async options => {
  const watch = await watcher({ cwd: options.cwd });

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
        const cwd = filepath ? path.dirname(filepath) : process.cwd();

        const docs = await loadDocsTree({
          cwd,
          docs: config.docs,
          readme: config.readme
        });

        const meta = await loadMeta.loadMetaTree({
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
      const type = req.accepts("json", "text/event-stream");
      switch (type) {
        case "json":
          return res.json(err);
        case "text/event-stream":
        default:
          next(err);
      }
    }
  };
};

async function watcher(options) {
  const connections = new Set();
  const { config, filepath } = await loadConfig({ cwd: options.cwd });
  const cwd = filepath ? path.dirname(filepath) : process.cwd();
  const { entry = [] } = config;

  const [err, meta] = await nodeish(loadMeta)({ cwd, entry });

  if (err) {
    console.error("Failed initializing file watcher on with errors:");
    console.error(err);
    return (req, res) => {};
  }

  const metaGroups = dirGroup(meta.map(m => m.path), { cwd });
  const docsGroups = await globGroup(config.docs, { cwd });
  const groups = [...metaGroups, ...docsGroups];

  const broadcast = (id, payload) => {
    connections.forEach(send => send(id, payload));
  };

  const sentinel = chokidar.watch(groups, { ignoreInitial: true });

  const onChange = async (type, abs) => {
    const file = path.relative(options.cwd, abs);
    broadcast("change", { type, file });
    const patterns = affected(file, meta);
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

async function globGroup(patterns, { cwd }) {
  const list = await globby(patterns, { cwd });
  const dirs = list.map(i => (path.extname(i) ? path.dirname(i) : i));
  return dirGroup(dirs, { cwd });
}

function dirGroup(files, { cwd }) {
  return uniq(files.map(e => e.split(path.sep)[0]))
    .map(dir => files.filter(e => e.startsWith(dir)))
    .map(group => commondir(cwd, group));
}

function sse(event, data) {
  return `event:${event}\ndata: ${JSON.stringify(data)}\n\n`;
}

function affected(file, patterns) {
  const match = patterns.find(p => p.files.includes(file));

  if (!match) {
    return [];
  }

  return [match.id].concat(dependents(match, patterns));
}

function dependents(pattern, patterns) {
  return pattern.dependents.reduce((acc, id) => {
    acc.push(id);
    const match = patterns.find(p => p.id === id);
    Array.prototype.push.apply(acc, dependents(match, patterns));
    return acc;
  }, []);
}

function nodeish(fn) {
  return async (...args) => {
    try {
      const result = await fn(...args);
      return [null, result];
    } catch (err) {
      return [err];
    }
  };
}

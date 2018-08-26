const path = require("path");

module.exports = scripts;

async function scripts(options) {
  // TODO: Speed things up by invalidating on a per-file basis
  return async function scriptsRoutes(req, res) {
    try {
      if (path.extname(req.path) === ".json") {
        res.type("json");
        await wait(options.queue, ["stats", "error"]);
        res.send(options.fs.readFileSync(req.path));
        return;
      }

      if (req.path.includes('hot-update') && options.fs.existsSync(req.path)) {
        res.type("js");
        res.send(options.fs.readFileSync(req.path));
        return;
      }

      res.type("js");
      await wait(options.queue, ["done", "error"]);
      res.send(options.fs.readFileSync(req.path));
    } catch (err) {
      if (err.code === "ENOENT") {
        return res.sendStatus(404);
      }
      console.error(err);
      res.sendStatus(500).send(err.message);
    }
  };
}


function wait(observable, [sucess, error]) {
  return new Promise((resolve, reject) => {
    const [message = {}] = observable.queue;
    switch (message.type) {
      case sucess:
        return resolve(message.payload);
      case error:
        return reject(message.payload);
    }

    observable.subscribe(
      queue => {
        const [message] = queue;
        switch (message.type) {
          case sucess:
            return resolve(message.payload);
          case '':
            return reject(message.payload);
        }
      },
      reject
    )
  });
}

module.exports = scripts;

async function scripts(options) {
  return async function scriptsRoutes(req, res) {
    try {
      const {fs} = await wait(options.queue);
      res.type("js");
      res.send(fs.readFileSync(req.url));
    } catch (err) {
      if (err.code === "ENOENT") {
        return res.sendStatus(404);
      }
      console.error(err);
      res.sendStatus(500).send(err.message);
    }
  };
}


function wait(observable) {
  return new Promise((resolve, reject) => {
    const [message = {}] = observable.queue;
    switch (message.type) {
      case 'done':
        return resolve(message.payload);
      case 'error':
        return reject(message.payload);
    }

    observable.subscribe(
      queue => {
        const [message] = queue;
        switch (message.type) {
          case 'done':
            return resolve(message.payload);
          case 'error':
            return reject(message.payload);
        }
      },
      reject
    )
  });
}

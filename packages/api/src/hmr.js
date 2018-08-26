module.exports = hmr;

async function hmr(options) {
  let latestStats = null;
  const eventStream = createEventStream(10 * 1000);

  const onInvalid = () => {
    latestStats = null;
    eventStream.publish({ action: "building" });
  };

  const onStats = (stats) => {
    latestStats = stats;
    publishStats("built", latestStats, eventStream);
  };

  options.queue.subscribe((queue) => {
    const [message] = queue;
    switch (message.type) {
      case "stats":
        onStats(message.payload);
        break;
      case "invalid":
        onInvalid();
    }
  });

  return (req, res, next) => {
    eventStream.handler(req, res);

    if (latestStats) {
      publishStats("sync", latestStats, eventStream);
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


// Lifted from https://github.com/webpack-contrib/webpack-hot-middleware/commit/22e922bccb570944741e5022c7db7ca48c7a8d37
function createEventStream(heartbeat) {
  var clientId = 0;
  var clients = {};
  function everyClient(fn) {
    Object.keys(clients).forEach(function(id) {
      fn(clients[id]);
    });
  }
  setInterval(function heartbeatTick() {
    everyClient(function(client) {
      client.write("data: \uD83D\uDC93\n\n");
    });
  }, heartbeat).unref();
  return {
    handler: function(req, res) {
      var headers = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'text/event-stream;charset=utf-8',
        'Cache-Control': 'no-cache, no-transform',
        // While behind nginx, event stream should not be buffered:
        // http://nginx.org/docs/http/ngx_http_proxy_module.html#proxy_buffering
        'X-Accel-Buffering': 'no'
      };

      var isHttp1 = !(parseInt(req.httpVersion) >= 2);
      if (isHttp1) {
        req.socket.setKeepAlive(true);
        Object.assign(headers, {
          'Connection': 'keep-alive',
        });
      }

      res.writeHead(200, headers);
      res.write('\n');
      var id = clientId++;
      clients[id] = res;
      req.on("close", function(){
        delete clients[id];
      });
    },
    publish: function(payload) {
      everyClient(function(client) {
        client.write("data: " + JSON.stringify(payload) + "\n\n");
      });
    }
  };
}

function publishStats(action, statsResult, eventStream) {
  // For multi-compiler, stats will be an object with a 'children' array of stats
  extractBundles(stats, false).forEach(function(stats) {
    if (log) {
      log("webpack built " + (stats.name ? stats.name + " " : "") +
        stats.hash + " in " + stats.time + "ms");
    }
    eventStream.publish({
      name: stats.name,
      action: action,
      time: stats.time,
      hash: stats.hash,
      warnings: stats.warnings || [],
      errors: stats.errors || [],
      modules: buildModuleMap(stats.modules)
    });
  });
}

function extractBundles(stats) {
  // Stats has modules, single bundle
  if (stats.modules) return [stats];

  // Stats has children, multiple bundles
  if (stats.children && stats.children.length) return stats.children;

  // Not sure, assume single
  return [stats];
}

function buildModuleMap(modules) {
  var map = {};
  modules.forEach(function(module) {
    map[module.id] = module.name;
  });
  return map;
}

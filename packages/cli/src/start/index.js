const fs = require("fs");
const ora = require("ora");
const patternplate = require("./serve");

module.exports = start;

async function start({flags}) {
  const spinner = ora({ text: "Starting patternplate server" }).start();

  const port = selectNumberFromKeys([flags.port, process.env.PORT], 1337);
  const listen = selectStringFromKeys([flags.listen, process.env.LISTEN], 'localhost');
  const privateKey = await readFileFromKeys([flags.privateKeyFname, process.env.PRIVATEKEYFNAME], spinner);
  const certChain = await readFileFromKeys([flags.certChainFname, process.env.CERTCHAINFNAME], spinner);

  const hostName = selectStringFromKeys([flags.hostName, process.env.HOSTNAME], 'localhost');
  const httpsRedirectPort = selectNumberFromKeys([flags.httpsRedirectPort, process.env.HTTPSREDIRECTPORT]);

  try {
    const app = await patternplate({
      port,
      listen,
      privateKey: privateKey.data,
      certChain: certChain.data,
      hostName,
      httpsRedirectPort,
      cwd: flags.cwd || process.cwd()
    });

    if (httpsRedirectPort) {
      spinner.text = `HttpsRedirectPort on http://${app.listen}:${httpsRedirectPort} redirect to https://${hostName}:${port}`;
      spinner.succeed();
    }
    if (privateKey.data) {
      spinner.text = `Privatekey from ${privateKey.fname}`;
      spinner.succeed();
    }
    if (certChain.data) {
      spinner.text = `ChainCert from ${certChain.fname}`;
      spinner.succeed();
    }

    spinner.text = `Started on ${schemaFromOptions(app)}://${app.listen}:${app.port}`;
    spinner.succeed();
    app.subscribe(message => {
      if (message.type === "error" && message.payload && typeof message.payload.message === "string") {
        spinner.text = message.payload.message;
        spinner.fail();
      }
    });
  } catch (err) {
    switch (err.code) {
      case "EADDRINUSE":
        spinner.text = `Starting patternplate server failed`;
        spinner.fail();
        err.message = `Server could not be started, free the port: ${err.message}`;
        err.patternplate = true;
        throw err;
      default:
        throw err;
    }
  }
}

function schemaFromOptions(ops) {
  if (ops.privateKey && ops.certChain) {
    return 'https';
  }
  return 'http'
}

function selectNumberFromKeys(keys, def) {
  const number = keys.map(i => Number(i)).find(i => !isNaN(i));
  if (number > 0) {
    return number;
  }
  return def;
}

function selectStringFromKeys(keys, def) {
  const str = keys.find(i => typeof(i) == "string");
  if (str) {
    return str;
  }
  return def;
}


function readFileFromKeys(keys, spinner, def) {
  return new Promise((resolve, _) => {
    const fname = selectStringFromKeys(keys, def);
    if (fname) {
      fs.readFile(fname, (err, data) => {
        if (err) {
          spinner.text = `can't read ${fname}`;
          data = def;
        } else {
          spinner.text = `read read ${fname}`;
        }
        resolve({
          data,
          fname
        });
      });
    } else {
      resolve(def || {});
    }
  });
}

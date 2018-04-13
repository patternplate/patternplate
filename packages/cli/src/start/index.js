const ora = require("ora");
const patternplate = require("./serve");
const debug = require("util").debuglog("PATTERNPLATE");
const loadConfig = require("@patternplate/load-config");

module.exports = start;

async function start({flags}) {
  const spinner = ora({ text: "Starting patternplate server" }).start();

  let beat = Date.now();
  let failures = 0;

  if (process.connected) {
    setInterval(() => {
      const age = Date.now() - beat;
      if (age >= 1000) {
        failures++;
        debug(`start: beat is ${age}ms old, failure ${failures}/3.`);
      } else if (failures !== 0) {
        debug(`start: beat limit met, reset failure to 0/3.`);
        failures = 0;
      }
      if (failures >= 3) {
        console.log(`start: beat failed ${failures} times, shutting down.`);
        process.exit(0);
      }
    }, 1000);
  }

  process.on("message", (envelope) => {
    try {
      const message = JSON.parse(envelope);
      if (message.type === "heartbeat") {
        beat = Date.now();
      }
    } catch (err) {
      console.error(err);
    }
  });

  const cwd = flags.cwd || process.cwd();
  const port = selectPort(flags);

  try {
    const app = await patternplate({
      port,
      cwd
    });

    spinner.text = `Started on http://localhost:${app.port}`;
    spinner.succeed();
    app.subscribe(message => {
      if (message.type === "exception") {
        spinner.text = `Could not start patternplate`;
        spinner.fail();
        console.error(message.payload.stderr);
        process.exit(1);
      }

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

function selectPort(flags) {
  if (!isNaN(Number(flags.port))) {
    return Number(flags.port);
  }

  if (!isNaN(Number(process.env.PORT))) {
    return (process.env.PORT);
  }

  return 1337;
}

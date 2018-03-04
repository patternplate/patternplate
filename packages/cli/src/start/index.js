const ora = require("ora");
const patternplate = require("./serve");

module.exports = start;

async function start({flags}) {
  const spinner = ora({ text: "Starting patternplate server" }).start();

  const port = selectPort(flags);

  try {
    const app = await patternplate({
      port,
      cwd: flags.cwd || process.cwd()
    });

    spinner.text = `Started on http://localhost:${app.port}`;
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

function selectPort(flags) {
  if (!isNaN(Number(flags.port))) {
    return Number(flags.port);
  }

  if (!isNaN(Number(process.env.PORT))) {
    return (process.env.PORT);
  }

  return 1337;
}

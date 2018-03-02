#!/usr/bin/env node
import chalk from "chalk";
import meow from "meow";
import ora from "ora";
import patternplate from ".";

const cli = meow(
  `
	Usage
	$ patternplate [command=start] [options]

	Commands
	  start   - start a patternplate instance in cwd
	  help    - show this help

	Examples
	  $ patternplate
	`
);

async function main({ input, flags }) {
  const [command] = input;

  if (command === "help") {
    cli.showHelp(0);
    return;
  }

  const spinner = ora("Starting patternplate server").start();

  const port = selectPort(cli.flags);

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

main(cli).catch(err => {
  if (err.patternplate) {
    console.log(cli.help);
    console.error(chalk.red(err.message));
    process.exit(1);
  }
  setTimeout(() => {
    throw err;
  });
});

process.on("unhandledRejection", reason => {
  throw reason;
});

function selectPort(flags) {
  if (!isNaN(Number(flags.port))) {
    return Number(flags.port);
  }

  if (!isNaN(Number(process.env.PORT))) {
    return (process.env.PORT);
  }

  return 1337;
}

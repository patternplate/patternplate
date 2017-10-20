#!/usr/bin/env node
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

  const spinner = ora("Starting").start();

  const port = isNaN(Number(flags.port)) ? 1337 : Number(flags.port);

  try {
    const app = await patternplate({
      port,
      cwd: flags.cwd || process.cwd()
    });
    spinner.stop();
    console.log(`Started on http://localhost:${app.port}`);
  } catch (err) {
    spinner.stop();
    throw err;
  }
}

main(cli).catch(err => {
  if (err.patternplate) {
    console.log(cli.help);
    console.error(err.message);
    process.exit(1);
  }
  setTimeout(() => {
    throw err;
  });
});

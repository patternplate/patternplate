#!/usr/bin/env node
const chalk = require("chalk");
const meow = require("meow");

const cli = meow(
  `
  Usage
  $ patternplate [command=start] [options]

  Commands
    start   - Start a patternplate instance in cwd
    help    - Show this help

  Start options
    --port  - Port to start patternplate server on, defaults to 1337, $PORT
    --open  - Open the interface in system default browser

  Examples
    $ patternplate
`
);

async function main({ input, flags }) {
  const [command] = input;

  switch (command) {
    case 'help':
      return cli.showHelp(0);
    case 'start':
    default:
      const start = require("./commands/start");
      return start({input, flags});
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


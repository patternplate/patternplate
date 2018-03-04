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
    --cwd      - Working directory to search patternplate.config.js in
    --open     - Open the interface in system default browser
    --port     - Port to start patternplate server on, defaults to 1337, $PORT

  Build options
    --base     - Base path to assume for static hosting, e.g. "patternplate" in git.io/patternplate
    --cwd      - Working directory to search patternplate.config.js in
    --open     - Open the build in sytem default browser
    --out      - Directory to save the build in, defaults to "docs"
    --port     - Port to start static server on with --open, defaults to 1337, $PORT

  Examples
    $ patternplate
    ✔ Started on http://localhost:1337

    $ patternplate --port 1338
    ✔ Started on http://localhost:1337

    $ patterplate build
    ✔ Built to ./docs
`
);

async function main({ input, flags }) {
  const [command] = input;

  switch (command) {
    case 'help':
      return cli.showHelp(0);
    case 'build':
      const build = require("./build");
      return build({input, flags});
    case 'start':
    default:
      const start = require("./start");
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


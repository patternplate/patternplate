#!/usr/bin/env node
const path = require("path");
const chalk = require("chalk");
const meow = require("meow");
const loadConfig = require("@patternplate/load-config");
const {validate} = require("@patternplate/validate-config");

const cli = meow(
  `
  Usage
  patternplate [command=start] [options]

  Commands
    start        - Start a patternplate instance in cwd
    build        - Create a static interface build
    create       - Create a new patternplate project
    help         - Show this help

  Start options
    --cwd        - Working directory to search patternplate.config.js in
    --port       - Port to start patternplate server on, defaults to 1337, $PORT

  Build options
    --base       - [REQUIRED] Base path to assume for static hosting, e.g. "patternplate" in git.io/patternplate
    --cwd        - Working directory to search patternplate.config.js in
    --out        - Directory to save the build in, defaults to "docs"

  Create options
    --cwd        - Working directory to operate in
    --force      - Overwrite existing directories
    --out        - Directory to create the new project in
    --template   - Template to use, defaults to @patternplate/create-default
    --no-git     - Skip git init
    --no-install - Skip installation of npm packages

  Examples
    patternplate
    ✔ Started on http://localhost:1337

    patternplate --port 1338
    ✔ Started on http://localhost:1338

    patterplate build --base="/"
    ✔ Built to ./docs
`
);

async function main({ input, flags, pkg }) {
  const [command] = input;

  if (command !== "help") {
    const { config, filepath } = await loadConfig({
      cwd: flags.cwd || process.cwd()
    });

    if (filepath) {
      const relativePath = path.relative(process.cwd(), filepath);
      const userPath = relativePath.length < filepath.length ? relativePath : filepath;
      const [error, valid] = validate({ target: config, name: filepath });

      if (!valid && error) {
        if (typeof error.format === "function") {
          console.log(`\nInvalid config at ${chalk.bold(userPath)}:`);
          console.error(error.format());
        } else {
          console.error(error);
        }
        return process.exit(1);
      }
    }
  }

  switch (command) {
    case "help":
      return cli.showHelp(0);
    case "build":
      const build = require("./build");
      return build({ input, flags });
    case "create":
      const create = require("./create");
      return create({ input, flags, pkg });
    case "start":
    case undefined:
      const start = require("./start");
      return start({ input, flags });
    default: {
      throw error(`Unknown command "${command}"`);
    }
  }
}

function error(message) {
  const err = new Error(message);
  err.patternplate = true;
  return err;
}

main(cli).catch(err => {
  if (err && err.patternplate) {
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

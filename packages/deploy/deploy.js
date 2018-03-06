#!/usr/bin/env node
const meow = require("meow");
const execa = require("execa");

const git = (args, {cwd}) => {
  execa("git", args, { cwd, stdout: "inherit", stderr: "inherit" })
};

async function main(cli) {
  const hash = await git(["rev-parse", "--short", "HEAD"], {cwd: process.cwd()});
  const cwd = cli.input[0];

  if (!cwd) {
    console.log("Directory to deploy is required.");
    return cli.help(1);
  }

  await git(["init"], {cwd});
  git(["remote", "add", "target"], {cwd});
  git(["commit", "-m", `Deploy "${hash}"`])
}

main(meow(`
  Options
    --remote git remote url to push to
`));

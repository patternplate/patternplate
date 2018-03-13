#!/usr/bin/env node
const path = require("path");
const meow = require("meow");
const execa = require("execa");
const sander = require("@marionebl/sander");

const git = (args, opts) => {
  return execa("git", args, opts);
};

async function main(cli) {
  const {stdout: hash} = await git(["rev-parse", "--short", "HEAD"], {cwd: process.cwd()});
  const cwd = cli.flags.source;
  const target = cli.flags.target;
  const identity = cli.flags.identity ? path.resolve(process.cwd(), cli.flags.identity) : null;

  if (!cwd) {
    console.log("--source directory deploy is required.");
    return cli.help(1);
  }

  if (!target) {
    console.log("--target git url is required.");
    return cli.help(1);
  }

  if (!await sander.exists(cwd)) {
    console.log(`--source ${cwd} could not be found`);
    return process.exit(1);
  }

  if (identity && !await sander.exists(identity)) {
    console.log(`--identity ${identity} could not be found from ${process.cwd()}`);
    return process.exit(1);
  }


  await sander.rimraf(cwd, ".git");
  await git(["init"], {cwd, stdout: "inherit", stderr: "inherit"});
  await git(["remote", "add", "target", target], {cwd, stdout: "inherit", stderr: "inherit"});
  await git(["add", "."], {cwd, stderr: "inherit"});
  await git(["commit", "-m", `Deploy "${hash}" at ${new Date()}`], {cwd, stderr: "inherit"});

  const env = {};

  if (identity) {
    const cp = await execa("ssh-agent", ["-s"]);
    env.SSH_AUTH_SOCK = cp.stdout.split('SSH_AUTH_SOCK=')[1].split(';')[0];
    env.SSH_AGENT_PID = cp.stdout.split('SSH_AGENT_PID=')[1].split(';')[0];
    await execa.shell(`ssh-add ${identity}`, {stdout: "inherit", stdin: "inherit", env});
  }

  await git(["push", "-f", "--set-upstream", "target", "master"], {cwd, stderr: "inherit", env});

  if (identity) {
    await execa("ssh-add", ["-D"], {cwd, stderr: "inherit", env});
  }
}

main(meow(`
  Options
    --source    - path to source folder to upload
    --target    - git remote url to push to
`));

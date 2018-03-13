#!/usr/bin/env node
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

  if (!cwd) {
    console.log("--source directory deploy is required.");
    return cli.help(1);
  }

  if (!target) {
    console.log("--target git url is required.");
    return cli.help(1);
  }

  await sander.rimraf(cwd, ".git");
  await git(["init"], {cwd, stdout: "inherit", stderr: "inherit"});
  await git(["remote", "add", "target", target], {cwd, stdout: "inherit", stderr: "inherit"});
  await git(["add", "."], {cwd, stdout: "inherit", stderr: "inherit"});
  await git(["commit", "-m", `Deploy "${hash}" at ${new Date()}`], {cwd, stdout: "inherit", stderr: "inherit"});

  await execa("ssh-agent", [`bash -c 'ssh-add ${cli.flags.identity}; git push -f --set-upstream target master'`]);

  await git([
    "push", "-f",
    "--set-upstream", "target", "master",
    ...(cli.flags.identity ?  ["-i", cli.flags.identity] : [])
  ], {cwd, stdout: "inherit", stderr: "inherit"});
}

main(meow(`
  Options
    --source    - path to source folder to upload
    --target    - git remote url to push to
`));

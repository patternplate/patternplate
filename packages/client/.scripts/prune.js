#!/usr/bin/env node
const Path = require("path");
const sander = require("@marionebl/sander");
const parseJson = require("parse-json");
const globby = require("globby");
const yargsParser = require("yargs-parser");

main(yargsParser(process.argv.slice(2)))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

async function main(flags) {
  const missing = ["base", "manifest"].filter(flag => !flags.hasOwnProperty(flag));

  if (missing.length > 0) {
    throw new Error(`Missing required flags: ${missing.join(", ")}.`);
  }

  const malformed = ["base", "manifest"].filter(flag => typeof flags[flag] !== "string");

  if (malformed.length > 0) {
    throw new Error(`Malformed flags.\n${malformed.map(flag => `--${flag} was ${typeof flags[flag]}, expected string`).join("\n")}`);
  }

  const cwd = typeof flags.cwd === "string" ? flags.cwd : process.cwd();
  const base = Path.resolve(cwd, flags.base);

  const manifest = parseJson(String(await sander.readFile(cwd, flags.manifest)));
  const files = await globby("**/*", {cwd: base});
  const candidates = Object.keys(manifest).map(file => toCandidate(file));
  const whitelist = Object.values(manifest);

  const filesToDelete = files.filter(file => {
    const candidateName = toCandidate(file);
    const matches = candidates.includes(candidateName);
    const whitelisted = whitelist.includes(file);
    return matches && !whitelisted;
  });

  await Promise.all(filesToDelete.map(async toDelete => sander.rimraf(base, toDelete)));
}

const toCandidate = file => Path.basename(file).split(".")[0];

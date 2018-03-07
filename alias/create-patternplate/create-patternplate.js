#!/usr/bin/env node
const path = require('path');
const resolvePkg = require('resolve-pkg');
const readPkg = require('read-pkg');
const execa = require("execa");

const pkgDir = resolvePkg('@patternplate/cli', {cwd: __dirname});
const manifest = readPkg.sync(path.join(pkgDir, 'package.json'));
const bin = path.join(pkgDir, manifest.bin.patternplate);

execa(bin, ["create"].concat(process.argv.slice(2)), {
  stdout: "inherit",
  stderr: "inherit"
}).catch(err => {
  if (typeof err.code === "number") {
    process.exit(err.code);
  }
  console.error(err);
  process.exit(1);
});

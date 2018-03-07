#!/usr/bin/env node
const path = require('path');
const resolvePkg = require('resolve-pkg');
const readPkg = require('read-pkg');

const pkgDir = resolvePkg('@patternplate/cli', {cwd: __dirname});
const manifest = readPkg.sync(path.join(pkgDir, 'package.json'));
const bin = path.join(pkgDir, manifest.bin.patternplate);

require(bin);

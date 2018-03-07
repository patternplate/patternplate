const path = require("path");
const ora = require("ora");
const execa = require("execa");
const createDefault = require("@patternplate/create-default");
const sander = require("@marionebl/sander");
const MemoryFilesystem = require("memory-fs");
const importFrom = require("import-from");
const resolveFrom = require("resolve-from");
const resolvePkg = require("resolve-pkg");

module.exports = create;

async function create({flags, pkg}) {
  if (typeof flags.out !== "string") {
    throw error("create: --out flag is required");
  }

  const resolved = resolvePkg("@patternplate/cli")
  const self = typeof resolved === "string" ? resolved : path.dirname(__dirname);
  const cwd = flags.cwd || process.cwd();
  const rel = path.relative(cwd, path.resolve(cwd, flags.out));

  const template = typeof flags.template === "string"
    ? importFrom(cwd, templateId)
    : createDefault;

  const spinner = ora(`Creating patternplate project at "${rel}"`);

  if (typeof template !== "function") {
    throw error(`create: template "${templateId}" is not a function.`);
  }

  if (!flags.force && await sander.exists(cwd, flags.out)) {
    throw error(`create: target "${flags.out}" already exists at "${rel}", aborting.`);
  }

  if (flags.force && await sander.exists(cwd, flags.out)) {
    await sander.rimraf(cwd, flags.out);
  }

  await sander.mkdir(cwd, flags.out);

  const data = {
    name: path.basename(flags.out),
    cliVersion: pkg.version
  };

  const fs = template(data, new MemoryFilesystem());

  const target = path.join(cwd, flags.out);
  await dump(fs, "/", target);

  if (flags.git !== false) {
    await execa("git", ["init"], {cwd: target});
  }

  if (flags.npm !== false) {
    await execa("npm", ["install"], {cwd: target});
  }

  spinner.succeed(`Created patternplate project at "${rel}"`);
  console.log(`\nProceed via`);

  console.log(`- cd ${rel}`);

  if (flags.npm === false) {
    console.log(`- npm install`);
  }

  console.log(`- npm start`);
}

function error(message) {
  const err = new Error(message);
  err.patternplate = true;
  return err;
}

async function dump(fs, base, target) {
  const files = list(fs, base);
  return Promise.all(files.map(async file => {
    sander.writeFile(target, file.slice(1), fs.readFileSync(file));
  }));
}

function list(fs, base) {
  return fs.readdirSync(base)
    .reduce((acc, name) => {
      const p = path.join(base, name);
      const stat = fs.statSync(p);
      if (stat.isFile()) {
        acc.push(p);
      } else {
        acc = acc.concat(list(fs, p));
      }
      return acc;
    }, []);
}

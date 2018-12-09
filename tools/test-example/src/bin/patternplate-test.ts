import * as execa from "execa";
import * as Fs from "fs";
import * as getPort from "get-port";
import * as Os from "os";
import * as Path from "path";
import * as uuid from "uuid";
import * as yargs from "yargs-parser";
import * as Static from "node-static";
import * as puppeteer from "puppeteer";
import * as TestExample from "../";
import * as Util from "../utils";
import { groupBy } from "lodash";
import * as Utils from "util";

const debug = Utils.debuglog('@patternplate/test-example');

const ip = require("ip");
const chalk = require("chalk");

async function main(raw: unknown): Promise<void> {
  const flags = Util.validate(raw);
  const projectPath = Path.resolve(flags.cwd, flags.project);

  const outPath = flags.build
    ? Path.resolve(Os.tmpdir(), uuid.v4(), flags.base !== "/" ? flags.base : "")
    : Path.resolve(projectPath, ".tmp", flags.base !== "/" ? flags.base : "");

  const docRoot = flags.base !== "/" ? Path.dirname(outPath) : outPath;

  const port = await getPort({ port: flags.port });
  const host = process.env.TEST_HOST ? process.env.TEST_HOST : ip.address();

  if (!await Util.access(projectPath)) {
    console.error(`Could not read from ${projectPath}, does it exist?`);
    process.exit(1);
  }

  const fileServer = new Static.Server(docRoot);
  const starting = Util.start(fileServer, host, port);

  if (flags.build) {
    await execa(
      "patternplate",
      ["build", "--out", outPath, "--base", flags.base],
      { stdio: "inherit" }
    );
  } else {
    debug(`Skipping build due to --no-build flag`);
  }

  const [stop] = await Promise.all([starting]);
  console.log(`Started test server on http://${host}:${port}`);

  debug(`Reading state from ${Path.join(outPath, "api", "state.json")}`);
  const state = JSON.parse(
    Fs.readFileSync(Path.join(outPath, "api", "state.json")).toString()
  );
  debug(`Read state from ${Path.join(outPath, "api", "state.json")}`);

  debug(`Launching headless browser`);
  const browser = await puppeteer.launch({
    args: [
      '--disable-gpu',
      '-–no-sandbox',
      '--single-process',
      '-–disable-setuid-sandbox',
      '--disable-web-security',
      '--disable-dev-profile'
    ]
  });
  debug(`Launched headless browser`);

  debug(`Creating browser page`);
  const page = await browser.newPage();
  debug(`Created browser page`);

  const patternUrls = state.meta.children.map((pattern: any) => `http://${host}:${port}${flags.base}api/demo/${pattern.id}.html`);
  const docUrls = state.docs.children.map((doc: any) => `http://${host}:${port}${flags.base}doc/${doc.id}.html`);
  const urls = [`http://${host}:${port}`, ...patternUrls, ...docUrls];

  debug(`Testing references on ${urls.length} pages`);
  const result = await TestExample.all(urls, { page, ignore: flags.ignore });
  debug(`Tested references on ${urls.length} pages`);

  if (!result.valid) {
    const broken = groupBy(result.failed, 'base');

    console.log('\nFound broken references on the following urls:\n');

    Object.keys(broken).forEach(base => {
      console.log(chalk.underline(`${base}:`));
      broken[base].map(item => console.log(item.url));
      console.log('');
    });
  }

  if (flags.inspect && !result.valid) {
    console.log(`Keeping server up for inspection at http://${host}:${port}`);
  } else {
    console.log(`No broken references found`);
    process.exit(result.valid ? 0 : 1);
  }
}

main(yargs(process.argv.slice(2), { array: ['ignore'] })).catch(err => {
  console.trace(err);
  process.exit(1);
});

process.on("unhandledRejection", (_, reason) => {
  console.trace(reason);
  process.exit(1);
});

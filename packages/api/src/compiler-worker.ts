import * as Fs from "fs";
import * as Compiler from "@patternplate/compiler";
import * as Config from "@patternplate/validate-config";
import * as Util from "util";
import * as T from "./types";
import * as Types from "@patternplate/types";
import * as webpack from "webpack";
import * as MessageValidation from "./is-message";

const ARSON = require("arson");
const debug = Util.debuglog("PATTERNPLATE");

startCompilerWorker().catch(err => {
  setTimeout(() => {
    throw err;
  });
});

async function startCompilerWorker() {
  const yargsParser = require("yargs-parser");
  const validation = validateFlags(yargsParser(process.argv.slice(2)));

  if (!validation.valid) {
    console.error(validation.result);
    return;
  }

  const flags = validation.result;
  const {target} = flags;

  const compiler = await Compiler.compiler(flags);
  const fs = compiler.outputFileSystem;

  compiler.hooks.compile.tap("patternplate", () => {
    debug(`worker: compiler starting for ${target}`);
    send({ type: "start", target });
  });

  compiler.hooks.done.tap("patternplate", (stats: webpack.Stats) => {
    try {
      if (stats.compilation.errors && stats.compilation.errors.length > 0) {
        debug(`worker: compiler errored for ${target}: ${stats.compilation.errors.toString()}`);

        stats.compilation.errors.forEach(err => {
          return send({ type: "error", target, payload: err });
        });
        return send({ type: "error", target, payload: stats.compilation.errors });
      }

      debug(`worker: compiler done for ${target}`);

      const outputFs = fs as unknown as typeof Fs;

      const files = outputFs
        .readdirSync('/')
        .reduce((acc, f) => {
          const fileName = `/${f}`;
          acc[fileName] = outputFs.readFileSync(fileName, 'utf-8');
          return acc;
        }, {} as { [fileName: string]: string });

      send({ type: "worker-done", target, payload: { files }});
    } catch (err) {
      send({ type: "error", target, payload: err });
    }
  });

  compiler.hooks.failed.tap("patternplate", (err: Error) => {
    debug(`worker: compiler failed for ${target}: ${err}`);
    send({ type: "error", target, payload: err });
  });

  process.on("uncaughtException", (err) => {
    send({ type: "error", target, payload: err });
  });

  process.on("unhandledRejection", (err) => {
    send({ type: "error", target, payload: err });
  });

  receive(async message => {
    switch (message.type) {
      case "start": {
        debug(`worker: start ${target}`);
        return compiler.watch({ ignored: "**/pattern.json" }, () => {});
      }
      case "stop": {
        debug(`worker: stop ${target}`);
        process.exit(0);
      }
    }
  });

  send({ type: "ready" });
}

interface Flags {
  cwd: string;
  target: Types.CompileTarget;
  config: Types.PatternplateConfig;
}

type Validation =
  | ValidationSuccess
  | ValidationFailure;

interface ValidationSuccess {
  valid: true;
  result: Flags;
}

interface ValidationFailure {
  valid: false;
  result: Error;
}

function validateFlags(flags: { [key: string]: unknown }): Validation {
  const errors = [];

  const { cwd: rawCwd, target: rawTarget } = flags;

  if (typeof rawCwd !== 'string' || rawCwd.trim() === '') {
    errors.push(`flag cwd must be of type string an non-empty, received "${rawCwd}" of type ${typeof rawCwd}`);
  }

  if (typeof rawCwd !== 'string' || ['node', 'web'].indexOf(rawCwd) > -1) {
    errors.push(`flag target must be on of ["node", "web"], received "${rawCwd}"`);
  }

  const rawConfig = ARSON.parse(flags.config);

  const [err] = Config.validate({ target: rawConfig, name: `${rawTarget}-worker` });

  if (err) {
    errors.push(err.message);
  }

  if (errors.length > 0) {
    return {
      valid: false,
      result: new Error(errors.join('\n'))
    };
  }

  const config = rawConfig as Types.PatternplateConfig;
  const cwd = rawCwd as string;
  const target = rawTarget as Types.CompileTarget;

  return {
    valid: true,
    result: {
      cwd,
      target,
      config
    }
  }
}

function send(m: T.QueueMessage): void {
  if (typeof process.send === "function" && process.connected) {
    if (MessageValidation.isMessage(m)) {
      process.send(ARSON.stringify(m));
    }
  }
};

function receive(handler: (m: T.QueueMessage) => void): void {
  process.on("message", async envelope => {
    const ARSON = require("arson");
    const message: unknown = ARSON.parse(envelope);

    if (MessageValidation.isMessage(message)) {
      handler(message);
    }
  });
}

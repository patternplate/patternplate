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

const FAILURE_COUNT = 5;

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

  let beat = Date.now();
  let failures = 0;

  setInterval(() => {
    const age = Date.now() - beat;
    if (age >= 2000) {
      failures++;
      debug(
        `worker: ${target} beat is ${age}ms old, failure ${failures}/${FAILURE_COUNT}.`
      );
    } else if (failures !== 0) {
      debug(
        `worker: ${target} beat limit met, reset failure to 0/${FAILURE_COUNT}.`
      );
      failures = 0;
    }
    if (failures >= FAILURE_COUNT) {
      send({
        type: "shutdown",
        target
      });
      process.exit(0);
    }
  }, 1000);

  compiler.hooks.compile.tap("patternplate", () => {
    send({ type: "start", target });
  });

  compiler.hooks.done.tap("patternplate", (stats: webpack.Stats) => {
    if (stats.compilation.errors && stats.compilation.errors.length > 0) {
      stats.compilation.errors.forEach(err => {
        return send({ type: "error", target, payload: err });
      });
      return send({ type: "error", target, payload: stats.compilation.errors });
    }
    send({ type: "done", target, payload: { fs: (fs as any).data }});
  });

  compiler.hooks.failed.tap("patternplate", (err: Error) => {
    send({ type: "error", target, payload: err });
  });

  receive(async message => {
    switch (message.type) {
      case "heartbeat": {
        beat = Date.now();
        return;
      }
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

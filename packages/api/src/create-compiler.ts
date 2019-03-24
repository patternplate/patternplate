import * as ChildProcess from "child_process";
import * as Path from "path";
import * as Types from "@patternplate/types";
import * as T from "./types";
import * as Observable from "zen-observable";
import * as Util from "util";
import * as dargs from "dargs";
import * as MessageValidation from "./is-message";

const MemoryFilesystem = require("memory-fs");
const ARSON = require("arson");
const debug = Util.debuglog("PATTERNPLATE");

export interface CreateCompilerOptions {
  config: Types.PatternplateConfig;
  cwd: string;
  target: Types.CompileTarget;
  inspect: {
    port: number;
    enabled: boolean;
    break: boolean;
  }
}

export const createCompiler = async function createCompiler({
  config,
  cwd,
  inspect,
  target
}: CreateCompilerOptions ) {
  let worker: ChildProcess.ChildProcess;

  const send = (payload: T.QueueMessage) => {
    if (!worker || !worker.send || !worker.connected) {
      return;
    }
    if (!MessageValidation.isMessage(payload)) {
      return;
    }
    worker.send(ARSON.stringify(payload));
  };

  let watching = false;

  const queue: T.QueueMessage[] = [];
  let listeners: ZenObservable.SubscriptionObserver<T.QueueMessage[]>[] = [];

  const next = (q: T.QueueMessage[]) =>
    listeners.forEach(listener => listener.next(q));

  const portOffset = target === 'node' ? 1 : 2;
  const inspectPort = inspect.port !== 0 ? inspect.port + portOffset : 0;

  const start = () => {
    const workerPath = Path.join(__dirname, "compiler-worker.js");
    debug(`starting compiler worker at ${workerPath}`);
    const cp = ChildProcess.fork(
      workerPath,
      dargs({ cwd, target, config: ARSON.stringify(config) }),
      {
        stdio: ["pipe", "pipe", "pipe", "ipc"],
        execArgv: inspect.enabled
          ? [`--inspect=${inspectPort}`, inspect.break ? `--inspect-brk` : ''].filter(Boolean)
          : process.execArgv
      }
    );

    let stderr = ``;
    let stdout = ``;

    cp.stdout.pipe(process.stdout);
    cp.stderr.pipe(process.stderr);

    cp.once("close", code => {
      if (code !== 0) {
        queue.unshift({
          type: "exception",
          payload: {
            code,
            stdout,
            stderr: [
              `Could not start compiler worker for "${target}"`,
              stderr
            ].join("\n")
          }
        });
        next(queue);
      }
    });

    return cp;
  };

  worker = start();

  const logErrorMessage = (payload: { message?: string; details?: string })  => {
    if (!payload.message && payload.details) {
      const posLF = `${payload.details}\n`.indexOf('\n');
      return console.error(payload.details.substr(0, posLF));
    }

    return console.error(payload.message)
  };

  const onMessage = whenMessage((message: T.QueueMessage) => {
    switch (message.type) {
      case "ready": {
        return send({ type: "start", target });
      }
      case "worker-done": {
        const fs = new MemoryFilesystem();

        Object.keys(message.payload.files).forEach(fileName => {
          fs.writeFileSync(fileName, message.payload.files[fileName]!);
        });

        queue.unshift({ type: "done", target, payload: { fs } });
        return next(queue);
      }
      case "start": {
        queue.unshift({ type: "start", target });
        return next(queue);
      }
      case "error": {
        if (Array.isArray(message.payload)) {
          return message.payload.forEach(logErrorMessage);
        }
        return logErrorMessage(message.payload);
      }
      case "shutdown": {
        send({ type: "stop", target });

        worker = start();

        worker.on("message", onMessage);

        if (watching) {
          send({ type: "watch", target });
        }
      }
    }
  });

  worker.on("message", onMessage);

  const rawObservable = new Observable(observer => {
    if (!watching) {
      watching = true;
      send({ type: "watch", target });
    }

    listeners.push(observer);
    return () => {
      listeners = listeners.filter(listener => listener !== observer);
    };
  });

  const observable = rawObservable as T.MsgQueue;

  observable.queue = queue;

  observable.stop = () => {
    send({ type: "stop", target });
  };

  return observable;
};

function whenMessage(handler: (message: T.QueueMessage) => void): (envelope: unknown) => void {
  return (envelope: unknown) => {
    const message = ARSON.parse(envelope);

    if (MessageValidation.isMessage(message)) {
      handler(message);
    }
  };
};

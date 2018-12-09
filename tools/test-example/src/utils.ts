import * as Ajv from "ajv";
import * as Schema from "ts-transform-json-schema";
import * as Fs from "fs";
import * as Http from "http";
import * as Static from "node-static";

export interface CLIFlags {
  readonly _: string[];
  readonly project: string;
  /** @default . */
  readonly cwd: string;
  /** @default true */
  readonly build: boolean;
  /** @default 1337 */
  readonly port: number;
  /** @default / */
  readonly base: string;
  /** @default false */
  readonly inspect: boolean;
  /** @default [] */
  readonly ignore: string[];
}

export function validate(raw: unknown): CLIFlags {
  const ajv = new Ajv({
    allErrors: true,
    removeAdditional: "failing",
    useDefaults: true
  });
  const schema = Schema.fromType<CLIFlags>()!;
  const valid = ajv.validate(schema, raw);

  if (!valid) {
    console.error(ajv.errorsText());
    return process.exit(1);
  }

  return raw as CLIFlags;
}

export function access(path: string): Promise<boolean> {
  return new Promise(resolve => {
    Fs.access(path, err => {
      if (err !== null) {
        return resolve(false);
      }
      resolve(true);
    });
  });
}

export function start(
  fileServer: Static.Server,
  host: string,
  port: number
): Promise<() => Promise<void>> {
  return new Promise((resolve, reject) => {
    const server = Http.createServer((req, res) => {
      req.addListener("end", () => fileServer.serve(req, res)).resume();
    });

    server.listen(port, host, () => {
      resolve(() => new Promise(res => server.close(res)));
    });

    server.once("error", reject);
  });
}

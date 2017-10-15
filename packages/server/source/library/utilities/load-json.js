import codeFrame from "babel-code-frame";
import * as sander from "sander";
import parse from "parse-json";

export default loadJson;

async function loadJson(file) {
  const contents = String(await sander.readFile(file));
  try {
    return [null, parse(contents, file)];
  } catch (error) {
    const message = error.message;
    const [numbers] = /(\d+:\d+)/.exec(message) || [""];

    const [line = 0, column = 0] = numbers
      .split(":")
      .map(n => Number(n))
      .filter(n => !isNaN(n));

    const frame = codeFrame(contents, line, column);

    const err = new Error(["", frame, message].join("\n"));
    err.filename = file;
    return [err];
  }
}

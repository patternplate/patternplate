import { merge } from "lodash";

export function getFile(extender) {
  const file = {
    path: "mocks/index.jsx",
    fs: {
      node: {
        mtime: 0
      }
    },
    pattern: {
      manifest: {
        name: "test"
      }
    },
    dependencies: {},
    meta: {
      dependencies: [],
      react: {}
    }
  };
  return merge({}, file, extender);
}

export function trap() {
  const errors = [];
  const warnings = [];
  const infos = [];

  function release() {
    delete console.error;
    delete console.log;
    delete console.warn;
    return { errors, infos, warnings };
  }

  console.error = (...args) => errors.push(args);
  console.log = (...args) => infos.push(args);
  console.warn = (...args) => warnings.push(args);

  return release;
}

export async function nodeish(fn, ...args) {
  try {
    return [null, await fn(...args)];
  } catch (err) {
    return [err];
  }
}

import {createContext as Context} from 'vm';

import {merge} from 'lodash';
import {sync as resolve} from 'resolve';

const cwd = process.cwd();

function attemptResolve(id, options) {
  try {
    return [null, resolve(id, merge({}, {basedir: cwd}, options))];
  } catch (err) {
    const badResolveError =
      !err.message.includes(options.fileName) &&
      err.message.startsWith(`Cannot find module '${id}'`);

    err.message = badResolveError
      ? `Can not find module '${id}' from '${options.fileName}'`
      : err.message;

    err.fileName = badResolveError ? options.fileName : err.fileName;

    return [err];
  }
}

function getSandboxedRequire(file, dependencies, run) {
  return name => {
    const dependency = dependencies[name];

    if (dependency) {
      return run(dependency);
    }

    const [error, resolved] = attemptResolve(name, {
      fileName: file.path
    });

    if (error) {
      throw error;
    }

    return require(resolved); // eslint-disable-line import/no-dynamic-require
  };
}

export default (file, run) => {
  const {env} = process;

  const {dependencies} = file;

  const sanboxedRequire = getSandboxedRequire(file, dependencies, run);

  const sandbox = {
    module: {
      exports: {},
      filename: file.path,
      id: file.path,
      loaded: true,
      require: sanboxedRequire
    },
    console,
    process: {
      env
    },
    exports: {},
    require: sanboxedRequire
  };

  sandbox.global = sandbox;
  return new Context(sandbox);
};

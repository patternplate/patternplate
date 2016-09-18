import {createContext as Context} from 'vm';

import {merge} from 'lodash';
import {sync as resolve} from 'resolve';

const cwd = process.cwd();

function attemptResolve(id, options) {
	try {
		return [null, resolve(id, merge({}, {basedir: cwd}, options))];
	} catch (error) {
		const badResolveError = !error.message.includes(options.fileName) &&
			error.message.startsWith(`Cannot find module '${id}'`);

		error.message = badResolveError ?
			`Can not find module '${id}' from '${options.fileName}'` :
			error.message;

		error.fileName = badResolveError ?
			options.fileName :
			error.fileName;

		return [error];
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

		return require(resolved);
	};
}

export default (file, run) => {
	const {
		env
	} = process;

	const {
		dependencies
	} = file;

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

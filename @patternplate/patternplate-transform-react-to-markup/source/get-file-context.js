import {
	createContext as Context
} from 'vm';

import {
	sync as resolve
} from 'resolve';

const cwd = process.cwd();

function getSandboxedRequire(dependencies, run) {
	return name => {
		const dependency = dependencies[name];

		if (dependency) {
			return run(dependency);
		}

		const resolved = resolve(name, {
			basedir: cwd
		});

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

	const sandbox = {
		module,
		console,
		process: {
			env
		},
		exports: {},
		require: getSandboxedRequire(dependencies, run)
	};

	sandbox.global = sandbox;
	return new Context(sandbox);
};

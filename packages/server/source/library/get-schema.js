import path from 'path';
import getPackageJSON from 'find-and-read-package-json';
import {getDocsTree} from './get-docs';
import getEnvironments from './utilities/get-environments';
import {getPatternTree} from './utilities/get-pattern-tree';

const DEFAULT_SUB = {
	configuration: {
		pkg: {

		},
		server: {

		},
		routes: {
		},
		router: {
			url: null
		},
		runtime: {

		}
	}
};

export default async function getSchema(application, client = DEFAULT_SUB, server = DEFAULT_SUB) {
	const {
		configuration: {
			pkg: {
				name: appName,
				version: appVersion
			}
		}
	} = application;

	const {
		configuration: {
			environment,
			pkg: {
				name: serverName,
				version: serverVersion
			},
			server: {
				host,
				port
			}
		},
		runtime: {
			patterncwd,
			cwd
		}
	} = server;

	const {
		configuration: {
			pkg: {
				name: clientName,
				version: clientVersion
			}
		}
	} = client;

	const base = path.resolve(patterncwd || cwd, 'patterns');
	const pkg = await getPackageJSON(patterncwd || cwd);

	return Object.assign({}, {
		appName,
		appVersion,
		clientName,
		clientVersion,
		docs: await getDocsTree(base),
		environment,
		envs: await getEnvironments(base),
		host,
		meta: await getPatternTree(base),
		name: pkg.name,
		port,
		serverName,
		serverVersion,
		version: pkg.version
	});
}

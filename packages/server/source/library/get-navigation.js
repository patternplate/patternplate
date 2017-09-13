import {resolve} from 'path';
import {getPatternTree} from './utilities/get-pattern-tree';

export default async function getNavigation(application, client, server) {
	const {
		configuration: {
			patterns
		},
		runtime: {
			cwd,
			patterncwd
		}
	} = server;
	const path = resolve(patterncwd || cwd, patterns.path);
	return await getPatternTree(path);
}

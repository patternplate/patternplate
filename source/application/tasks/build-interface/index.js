import path from 'path';

import {merge} from 'lodash';
import {get, max, padEnd} from 'lodash/fp';
import Listr from 'listr';
import minimatch from 'minimatch';

import buildComponents from './build-components';
import buildData from './build-data';
import buildDemoFiles from './build-demo-files';
import buildDemos from './build-demos';
import buildEntry from './build-entry';
import buildPages from './build-pages';
import buildSources from './build-sources';
import buildStatics from './build-statics';
import getPatternDatasets from './get-pattern-datasets';
import getPatternIds from './get-pattern-ids';
import getRewriter from './get-rewriter';
import isPattern from './is-pattern';
import serverRequire from './server-require';
import trap from './trap';

const getEnvironments = serverRequire('get-environments');

const defaults = {
	target: 'build/build-interface'
};

const jobPrefixes = [
	'read', 'render entry', 'write entry', 'entry', 'pages', 'data', 'demo',
	'demo files', 'source'
];

const selectAutoMount = get('configuration.transforms.react-to-markup.opts.automount');

export default buildInterface;
/**
 * Create a static build of a patternplate instance ready to be deployed on a static web server
 * @param {Object} application
 * @param {Object} configuration
 * @return {Promise<void>}
 */
async function buildInterface(application, configuration) {
	const settings = merge({}, defaults, configuration);
	const targetPath = path.resolve(process.cwd(), settings.target);

	const app = application.parent;
	const client = application.parent.client;
	const server = application.parent.server;

	// const release = trap(application);
	const automount = selectAutoMount(server);

	const patterns = (await getPatternIds(app, client, server)).filter(isPattern);

	const environments = await getEnvironments('./patterns', {
		cache: server.cache
	});

	const patternSets = patterns.map(pattern => {
		pattern.environmentNames = environments
			.filter(env => {
				return env.applyTo
					.filter(glob => glob[0] !== '!')
					.some(glob => minimatch(pattern.id, glob));
			})
			.filter(env => {
				return !env.applyTo
					.filter(glob => glob[0] === '!')
					.some(glob => minimatch(pattern.id, glob));
			})
			.map(env => env.name);

		return pattern;
	});

	const jobMax = 1 + max(jobPrefixes.map(i => i.length));
	const jobPad = padEnd(jobMax);

	const rewriter = await getRewriter(targetPath);
	const serverContext = {app: server, automount, rewriter, jobPad};
	const clientContext = {app: client, rewriter, jobPad};

	const apiTargetPath = path.resolve(targetPath, 'api', 'pattern');
	const patternTargetPath = path.resolve(targetPath, 'pattern');
	const demoTargetPath = path.resolve(targetPath, 'demo');

	const data = getPatternDatasets(patterns, server);

	const release = trap(app);

	const tasks = new Listr([
		{
			title: 'Entry files',
			task() {
				return buildEntry('/', targetPath, clientContext);
			}
		},
		{
			title: 'Static files',
			task() {
				return buildStatics('patternplate-client', targetPath, serverContext);
			}
		},
		{
			title: 'Page files',
			task() {
				return buildPages(patterns, patternTargetPath, clientContext);
			}
		},
		{
			title: 'Automount components',
			task() {
				return buildComponents(patternSets, demoTargetPath, serverContext);
			}
		},
		{
			title: 'Meta data',
			task: () => data.filter(d => d.message).map(d => d.message)
		},
		{
			title: 'Demos',
			task() {
				return buildDemos(patternSets, demoTargetPath, serverContext);
			}
		},
		{
			title: 'Data',
			task() {
				return buildData(patternSets, apiTargetPath, serverContext);
			}
		},
		{
			title: 'Demo Files',
			task() {
				return data
					.filter(d => d.data)
					.map(d => d.data)
					.flatMap(d => buildDemoFiles(d, demoTargetPath, serverContext));
			}
		},
		{
			title: 'Sources',
			task() {
				const fileTargetPath = path.resolve(targetPath, 'api', 'file');
				return data
					.filter(d => d.data)
					.map(d => d.data)
					.flatMap(d => buildSources([d], fileTargetPath, serverContext));
			}
		}
	], {concurrent: true});

	return tasks.run()
		.then(() => {
			release(messages => {
				messages.forEach(message => {
					console.log(message);
				});
			});
		});
}

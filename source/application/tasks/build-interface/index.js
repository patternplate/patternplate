import path from 'path';

import {merge} from 'lodash';
import {get, max, padEnd} from 'lodash/fp';
import Listr from 'listr';
import isci from 'is-ci';

import buildComponents from './build-components';
import buildData from './build-data';
import buildDemoFiles from './build-demo-files';
import buildDemos from './build-demos';
import buildDocs from './build-docs';
import buildEntry from './build-entry';
import buildPages from './build-pages';
import buildResources from './build-resources';
import buildSources from './build-sources';
import buildStatics from './build-statics';
import getPatternDatasets from './get-pattern-datasets';
import getRewriter from './get-rewriter';
import serverRequire from './server-require';
import trap from './trap';

const getEnvironments = serverRequire('get-environments');

const defaults = {
	out: 'build/build-interface'
};

const jobPrefixes = [
	'read', 'render entry', 'write entry', 'entry', 'pages', 'data', 'demo',
	'demo files', 'source'
];

const selectAutoMount = get('configuration.transforms.react-to-markup.opts.automount');
const CWD = process.cwd();
const cwd = path.resolve.bind(null, CWD);

export default buildInterface;
/**
 * Create a static build of a patternplate instance ready to be deployed on a static web server
 * @param {Object} application
 * @param {Object} configuration
 * @return {Promise<void>}
 */
async function buildInterface(application, configuration) {
	const verbose = typeof configuration.verbose === 'boolean' ? configuration.verbose : isci;
	const renderer = verbose ? 'verbose' : 'default';
	const concurrent = Boolean(configuration.concurrent);

	const settings = merge({}, defaults, configuration);
	const targetPath = cwd(settings.out || settings.target);
	const patternsPath = cwd('./patterns');

	const app = application.parent;
	const client = application.parent.client;
	const server = application.parent.server;

	const automount = selectAutoMount(server);

	const environments = await getEnvironments(patternsPath, {
		cache: server.cache
	});

	const flags = settings.flags || [];
	const filterPatternData = flags.length > 0 ? i => flags.includes(i.manifest.flag) : () => true;

	const jobMax = 1 + max(jobPrefixes.map(i => i.length));
	const jobPad = padEnd(jobMax);

	const rewriter = await getRewriter(targetPath);
	const serverContext = {app: server, automount, rewriter, jobPad, flags, verbose};
	const clientContext = {app: client, rewriter, jobPad, flags, verbose};

	const apiPatternTargetPath = path.resolve(targetPath, 'api', 'pattern');
	const apiResourceTargetPath = path.resolve(targetPath, 'api', 'resource');
	const patternTargetPath = path.resolve(targetPath, 'pattern');
	const demoTargetPath = path.resolve(targetPath, 'demo');

	const dataStream = getPatternDatasets(app, client, server);
	const rawPatternData = [];

	const dataTask = new Listr([
		{
			title: 'Pattern data',
			task() {
				return dataStream
					.map(d => {
						if (d.data) {
							rawPatternData.push(d.data);
						}
						return d;
					})
					.map(d => d.message)
					.filter(Boolean)
					.map(m => `${verbose ? 'Pattern data: ' : ''}${m}`);
			}
		}
	], {renderer});

	await dataTask.run();

	const patternData = rawPatternData
		.filter(filterPatternData)
		.map(p => {
			p.environmentNames = environments
				.filter(env => env.display !== false)
				.map(env => env.name);
			return p;
		});

	const release = verbose ? () => {} : trap(app);

	const tasks = new Listr([
		{
			title: 'Entry files',
			task() {
				return buildEntry('/', targetPath, clientContext);
			}
		},
		{
			title: 'Docs',
			task() {
				return buildDocs(patternsPath, targetPath, clientContext);
			}
		},
		{
			title: 'Static files',
			task() {
				return buildStatics('patternplate-client', targetPath, serverContext);
			}
		},
		{
			title: 'Data',
			task() {
				return buildData(patternData, apiPatternTargetPath, serverContext);
			}
		},
		{
			title: 'Page files',
			task() {
				return buildPages(patternData, patternTargetPath, clientContext);
			}
		},
		{
			title: 'Sources',
			task() {
				return buildSources(patternData, path.resolve(targetPath, 'api', 'file'), serverContext);
			}
		},
		{
			title: 'Demo Files',
			task() {
				return buildDemoFiles(patternData, demoTargetPath, serverContext);
			}
		},
		{
			title: 'Demos',
			task() {
				return buildDemos(patternData, demoTargetPath, serverContext);
			}
		},
		{
			title: 'Automount components',
			task() {
				return buildComponents(patternData, demoTargetPath, serverContext);
			}
		}
	], {concurrent, renderer});

	await tasks.run();

	const resourceTask = new Listr([
		{
			title: 'Pattern resources',
			task() {
				return buildResources(application.resources, apiResourceTargetPath, serverContext);
			}
		}
	], {renderer});

	await resourceTask.run();


	release(m => m.forEach(message => console.log(message)));
}

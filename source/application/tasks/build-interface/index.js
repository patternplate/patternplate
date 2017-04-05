import fs from 'fs';
import path from 'path';

import {merge} from 'lodash';
import {get, max, padEnd} from 'lodash/fp';
import Listr from 'listr';
import Observable from 'zen-observable';

import buildComponents from './build-components';
import buildData from './build-data';
import buildDemoFiles from './build-demo-files';
import buildDemos from './build-demos';
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

export default buildInterface;
/**
 * Create a static build of a patternplate instance ready to be deployed on a static web server
 * @param {Object} application
 * @param {Object} configuration
 * @return {Promise<void>}
 */
async function buildInterface(application, configuration) {
	const settings = merge({}, defaults, configuration);
	const targetPath = path.resolve(CWD, settings.out || settings.target);
	const patternsPath = path.resolve(CWD, './patterns');

	const app = application.parent;
	const client = application.parent.client;
	const server = application.parent.server;

	// const release = trap(application);
	const automount = selectAutoMount(server);

	const environments = await getEnvironments(patternsPath, {
		cache: server.cache
	});

	const flags = settings.flags || [];
	const filterPatternData = flags.length > 0 ? i => flags.includes(i.manifest.flag) : () => true;

	const jobMax = 1 + max(jobPrefixes.map(i => i.length));
	const jobPad = padEnd(jobMax);

	const rewriter = await getRewriter(targetPath);
	const serverContext = {app: server, automount, rewriter, jobPad, flags};
	const clientContext = {app: client, rewriter, jobPad, flags};

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
					.map(d => d.message).filter(Boolean);
			}
		}
	]);

	await dataTask.run();

	const patternData = rawPatternData
		.filter(filterPatternData)
		.map(p => {
			p.environmentNames = environments
				.filter(env => env.display !== false)
				.map(env => env.name);
			return p;
		});

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
				return buildPages(patternData, patternTargetPath, clientContext);
			}
		},
		{
			title: 'Automount components',
			task() {
				return buildComponents(patternData, demoTargetPath, serverContext);
			}
		},
		{
			title: 'Demos',
			task() {
				return buildDemos(patternData, demoTargetPath, serverContext);
			}
		},
		{
			title: 'Data',
			task() {
				return buildData(patternData, apiPatternTargetPath, serverContext);
			}
		},
		{
			title: 'Demo Files',
			task() {
				return Observable.from(patternData)
					.flatMap(data => buildDemoFiles(data, demoTargetPath, serverContext));
			}
		},
		{
			title: 'Sources',
			task() {
				const fileTargetPath = path.resolve(targetPath, 'api', 'file');
				return Observable.from(patternData)
					.flatMap(data => buildSources([data], fileTargetPath, serverContext));
			}
		},
	], {concurrent: true});

	await tasks.run();

	const resourceTask = new Listr([
		{
			title: 'Pattern resources',
			task() {
				return buildResources(application.resources, apiResourceTargetPath);
			}
		}
	]);

	await resourceTask.run();


	release(m => m.forEach(message => console.log(message)));
}

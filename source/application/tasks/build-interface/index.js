import path from 'path';

import {merge} from 'lodash';
import {max, padEnd} from 'lodash/fp';
// import ora from 'ora';

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
import trap from './trap';

const defaults = {
	target: 'build/build-interface'
};

const jobPrefixes = [
	'read', 'render entry', 'write entry', 'entry', 'pages', 'data', 'demo',
	'demo files', 'source'
];

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

	const release = trap(application);
	const automount = ((server.configuration.transforms['react-mount'] || {}).opts || {}).autmount;

	const ids = await getPatternIds(app, client, server);
	const patterns = ids.filter(isPattern);

	const jobMax = 1 + max(jobPrefixes.map(i => i.length));
	const jobPad = padEnd(jobMax);
	const datasets = await getPatternDatasets(patterns, server, {jobPad});
	const rewriter = await getRewriter(targetPath);

	// Build entry file
	const serverContext = {app: server, automount, rewriter, jobPad};
	const clientContext = {app: client, rewriter, jobPad};
	await buildEntry('/', targetPath, clientContext);

	// Build pattern pages
	const patternTargetPath = path.resolve(targetPath, 'pattern');
	await buildPages(ids, patternTargetPath, clientContext);

	// Build pattern json data
	const apiTargetPath = path.resolve(targetPath, 'api', 'pattern');
	await buildData(datasets, apiTargetPath, serverContext);

	// Build pattern demos
	const demoTargetPath = path.resolve(targetPath, 'demo');
	await buildDemos(datasets, demoTargetPath, serverContext);
	await buildDemoFiles(datasets, demoTargetPath, serverContext);
	await buildComponents(datasets, demoTargetPath, serverContext);

	// Build pattern sources
	const fileTargetPath = path.resolve(targetPath, 'api', 'file');
	await buildSources(datasets, fileTargetPath, serverContext);

	// Copy static files
	await buildStatics('patternplate-client', targetPath, serverContext);

	// Log out trapped warnings
	release(messages => messages.forEach(m => console.log(m)));
}

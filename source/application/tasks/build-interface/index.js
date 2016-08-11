import fs from 'mz/fs';
import path from 'path';
import exists from 'path-exists';
import {sync as resolveSync} from 'resolve';
import {find, merge} from 'lodash';
import mkdirp from 'mkdirp-promise';
import ncp from 'ncp';
import findRoot from 'find-root';

const defaults = {
	target: 'build/build-interface'
};

const cwd = process.cwd();

const resolve = id => resolveSync(id, {basedir: cwd});
const packageResolve = (id, directory) => path.resolve(findRoot(resolve(id)), directory);

const renderPage = require(resolve('patternplate-client/library/render-page'));
const getNavigation = require(resolve('patternplate-server/library/get-navigation'));
const getPatternData = require(resolve('patternplate-server/library/get-pattern-data'));
const getPatternDemo = require(resolve('patternplate-server/library/get-pattern-demo'));

function getNavigationUrls(tree) {
	return Object.values(tree || {})
		.reduce((pool, item) => {
			const fragments = item.id.split('/');
			const baseName = fragments[fragments.length - 1];
			const relative = fragments.slice(0, fragments.length - 1);

			const children = getNavigationUrls(item.children);
			return [...pool, {
				id: item.id,
				type: item.type,
				relative,
				baseName,
				name: `${baseName}/index.html`
			}, ...children];
		}, []);
}

function isPattern({type}) {
	return type === 'pattern';
}

/**
 * Create a static build of a patternplate instance ready to be deployed on a static web server
 * @param {Object} application
 * @param {Object} configuration
 * @return {Promise<void>}
 */
async function buildInterface(application, configuration) {
	const settings = merge({}, defaults, configuration);
	const targetPath = path.resolve(cwd, settings.target);
	const patternTargetPath = path.resolve(targetPath, 'pattern');
	const apiTargetPath = path.resolve(targetPath, 'api', 'pattern');
	const demoTargetPath = path.resolve(targetPath, 'demo');
	const indexPath = path.resolve(targetPath, 'index.html');
	const notFoundPath = path.resolve(targetPath, '404.html');
	const htaccessPath = path.resolve(targetPath, '.htaccess');
	const staticSourcePath = packageResolve('patternplate-client', 'static');
	const staticTargetPath = path.resolve(targetPath, 'static');
	const assetSourcePath = packageResolve('patternplate-client', 'assets');

	const client = application.parent.client;
	const server = application.parent.server;

	const navigation = await getNavigation(server);
	const ids = getNavigationUrls(navigation);
	const patterns = ids.filter(isPattern);

	// Build the index page
	const index = await renderPage(client, '/');
	await mkdirp(targetPath);
	await fs.writeFile(indexPath, index);

	// Place a copy of index at 404.html
	await fs.writeFile(notFoundPath, index);

	const htaccess = `
		ErrorDocument 404 404.html
	`.replace(/\t/g, '');

	// Write a template .htaccess
	await fs.writeFile(htaccessPath, htaccess);

	// Build pattern and category pages
	const patternPageJobs = ids.map(async id => {
		const renderingPage = renderPage(client, `/pattern/${id.id}`);
		const pagePath = path.resolve(...[patternTargetPath, ...id.relative, id.name]);
		const pageDirectory = path.dirname(pagePath);

		if (!(await exists(pageDirectory))) {
			await mkdirp(path.dirname(pagePath));
		}

		const pageContent = await renderingPage;
		await fs.writeFile(pagePath, pageContent);
		return pageContent;
	});

	// Build pattern json data
	const patternDataJobs = patterns.map(async pattern => {
		const gettingData = getPatternData(server, pattern.id);
		const dataPath = path.resolve(...[apiTargetPath, ...pattern.relative, `${pattern.baseName}.json`]);
		const dataDirectory = path.dirname(dataPath);

		if (!(await exists(dataDirectory))) {
			await mkdirp(path.dirname(dataPath));
		}
		const patternData = await gettingData;
		await fs.writeFile(dataPath, JSON.stringify(patternData));
		return patternData;
	});

	// Build pattern demos
	const patternDemoJobs = patterns.map(async pattern => {
		const gettingDemo = getPatternDemo(server, pattern.id);
		const demoPath = path.resolve(...[demoTargetPath, ...pattern.relative, pattern.name]);
		const demoDirectory = path.dirname(demoPath);

		if (!(await exists(demoDirectory))) {
			await mkdirp(path.dirname(demoPath));
		}
		const patternDemo = await gettingDemo;
		await fs.writeFile(demoPath, patternDemo);
		return patternDemo;
	});

	// Get pattern files
	const patternDatasets = await Promise.all(patternDataJobs);

	const patternFileJobs = patternDatasets.map(async dataset => {
		return Promise.all(['script', 'style'].map(async type => {
			const format = find(dataset.outFormats, {type});
			if (!format) {
				return '';
			}
			const result = dataset.results.index[format.name] || {buffer: ''};

			const fragments = dataset.id.split('/');
			const tail = fragments[fragments.length - 1];
			const relative = fragments.slice(0, fragments.length - 1);
			const baseName = path.basename(tail, path.extname(tail));
			const patternFilePath = path.resolve(...[patternTargetPath, ...relative, `${baseName}/index.${result.out}`]);
			const patternDirectory = path.dirname(patternFilePath);

			if (!(await exists(patternDirectory))) {
				await mkdirp(patternDirectory);
			}

			await fs.writeFile(patternFilePath, result.buffer);
			return result.buffer;
		}));
	});

	await Promise.all([...patternPageJobs, ...patternFileJobs, ...patternDemoJobs]);

	// Copy static assets
	await ncp(staticSourcePath, staticTargetPath);
	await ncp(assetSourcePath, targetPath);
}

export default buildInterface;

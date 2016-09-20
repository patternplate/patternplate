import path from 'path';
import {padEnd, max} from 'lodash/fp';
import fs from 'mz/fs';
import ora from 'ora';
import mkdirp from 'mkdirp-promise';
import clientRequire from './client-require';
const renderPage = clientRequire('render-page');

export default buildEntry;

async function buildEntry(url, target, context) {
	const spinner = ora().start();
	const {app, rewriter, jobPad} = context;
	const indexPath = path.resolve(target, 'index.html');
	const htaccessPath = path.resolve(target, '.htaccess');
	const notFoundPath = path.resolve(target, '404.html');

	const paths = [url, indexPath, notFoundPath, htaccessPath];
	const padPath = padEnd(max(paths.map(p => p.length)));

	spinner.text = `${jobPad('render entry')} ${padPath(url)} 0/4`;
	const index = await renderPage(app, url);

	spinner.text = `${jobPad('write entry')} ${padPath(indexPath)} 1/4`;
	await mkdirp(target);
	await fs.writeFile(indexPath, rewriter(index, indexPath));

	// Place a copy of index at 404.html
	spinner.text = `${jobPad('write entry')} ${padPath(notFoundPath)} 2/4`;
	await fs.writeFile(notFoundPath, rewriter(index, notFoundPath));

	const htaccess = `
		ErrorDocument 404 404.html
	`.replace(/\t/g, '');

	// Write a template .htaccess
	spinner.text = `${jobPad('write entry')} ${padPath(htaccess)} 3/4`;
	await fs.writeFile(htaccess, htaccessPath);

	spinner.text = `${jobPad('entry')} 4/4`;
	spinner.succeed();
	spinner.stop();
	return;
}

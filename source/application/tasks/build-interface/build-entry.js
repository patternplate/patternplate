import path from 'path';
import fs from 'mz/fs';
import mkdirp from 'mkdirp-promise';

import clientRequire from './client-require';
const renderPage = clientRequire('render-page');

export default buildEntry;

async function buildEntry(url, target, context) {
	const {app, rewriter} = context;
	const indexPath = path.resolve(target, 'index.html');
	const htaccessPath = path.resolve(target, '.htaccess');
	const notFoundPath = path.resolve(target, '404.html');

	const index = await renderPage(app, url);

	await mkdirp(target);
	await fs.writeFile(indexPath, rewriter(index, indexPath));

	// Place a copy of index at 404.html
	const notFound = await renderPage(app, '//');
	await fs.writeFile(notFoundPath, rewriter(notFound, notFoundPath));

	const htaccess = `
		ErrorDocument 404 404.html
	`.replace(/\t/g, '');

	// Write a template .htaccess
	await fs.writeFile(htaccessPath, htaccess);
	return;
}

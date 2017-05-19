import path from 'path';
import * as sander from 'sander';

import clientRequire from './client-require';
const renderPage = clientRequire('render-page');

export default buildEntry;

async function buildEntry(url, target, context) {
	const {app, rewriter} = context;
	const indexPath = path.resolve(target, 'index.html');
	const htaccessPath = path.resolve(target, '.htaccess');
	const notFoundPath = path.resolve(target, '404.html');
	const renderFilters = {flags: context.flags};

	const index = await renderPage(app, url, renderFilters);

	await sander.writeFile(indexPath, rewriter(index, indexPath));

	// Place a copy of index at 404.html
	const notFound = await renderPage(app, url, renderFilters);
	await sander.writeFile(notFoundPath, rewriter(notFound, notFoundPath));

	const htaccess = `
		ErrorDocument 404 404.html
	`.replace(/\t/g, '');

	// Write a template .htaccess
	await sander.writeFile(htaccessPath, htaccess);
	return;
}

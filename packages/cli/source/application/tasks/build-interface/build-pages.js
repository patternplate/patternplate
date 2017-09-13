import path from 'path';
import {max, padEnd} from 'lodash/fp';
import {values} from 'lodash';
import Observable from 'zen-observable';

import build from './build';
import clientRequire from './client-require';
import writeEach from './write-each';
// const renderPage = clientRequire('render-page');

export default buildPages;

function buildPages(ids, target, context) {
	return new Observable(observer => {
		const {app, rewriter} = context;
		const idPad = padEnd(max(ids.map(id => id.id.length)));
		const renderFilters = {flags: context.flags};

		const pages = ids.reduce((pages, page) => {
			page.relative.forEach((_, index) => {
				const relative = page.relative.slice(0, index + 1);
				const id = relative.join('/');
				pages[id] = {id, name: `${id}/index.html`, relative: []};
			});

			pages[page.id] = page;
			return pages;
		}, {});

		build(values(pages), {
			async read(id, ids, count) {
				observer.next(`${context.verbose ? 'Page files: ' : ''}${idPad(id.id)} ${count}/${ids.length}`);
				return renderPage(app, `/pattern/${id.id}`, renderFilters);
			},
			async write(page, id) {
				const pagePath = path.resolve(...[target, ...id.relative, id.name]);
				return writeEach(page, [pagePath], rewriter);
			},
			done() {
				observer.next(`${context.verbose ? 'Page files: ' : ''}${ids.length}/${ids.length}`);
				observer.complete();
			}
		}).catch(err => observer.error(err));
	});
}

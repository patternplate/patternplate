import path from 'path';
import {max, padEnd} from 'lodash/fp';
import Observable from 'zen-observable';

import build from './build';
import clientRequire from './client-require';
import writeEach from './write-each';
const renderPage = clientRequire('render-page');

export default buildPages;

function buildPages(ids, target, context) {
	return new Observable(observer => {
		const {app, rewriter} = context;
		const idPad = padEnd(max(ids.map(id => id.id.length)));

		const pages = ids.reduce((pages, page) => {
			page.relative.forEach((_, index) => {
				const relative = page.relative.slice(0, index + 1);
				const id = relative.join('/');
				pages[id] = {id, name: `${id}/index.html`, relative: []};
			});

			pages[page.id] = page;
			return pages;
		}, {});

		build(pages, {
			async read(id, ids, count) {
				observer.next(`${idPad(id.id)} ${count}/${ids.length}`);
				return renderPage(app, `/pattern/${id.id}`);
			},
			async write(page, id, ids, count) {
				observer.next(`${idPad(id.id)} ${count}/${ids.length}`);
				const pagePath = path.resolve(...[target, ...id.relative, id.name]);
				return writeEach(page, [pagePath], rewriter);
			},
			done() {
				observer.next(`${ids.length}/${ids.length}`);
				observer.complete();
			}
		}).catch(err => observer.error(err));
	});
}

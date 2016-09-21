import path from 'path';
import {max, padEnd} from 'lodash/fp';
import ora from 'ora';
import build from './build';
import clientRequire from './client-require';
import writeEach from './write-each';
const renderPage = clientRequire('render-page');

export default buildPages;

async function buildPages(ids, target, context) {
	const spinner = ora().start();
	const {app, rewriter, jobPad} = context;
	const idPad = padEnd(max(ids.map(id => id.id.length)));
	return await build(ids, {
		async read(id, ids, count) {
			spinner.text = `${jobPad('pages')} ${idPad(id.id)} ${count}/${ids.length}`;
			return renderPage(app, `/pattern/${id.id}`);
		},
		async write(page, id, ids, count) {
			spinner.text = `${jobPad('pages')} ${idPad(id.id)} ${count}/${ids.length}`;
			const pagePath = path.resolve(...[target, ...id.relative, id.name]);
			return writeEach(page, [pagePath], rewriter);
		},
		done() {
			spinner.text = `${jobPad('pages')} ${ids.length}/${ids.length}`;
			spinner.succeed();
		}
	});
}

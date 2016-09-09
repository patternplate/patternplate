import path from 'path';
import build from './build';
import clientRequire from './client-require';
import writeEach from './write-each';
const renderPage = clientRequire('render-page');

export default buildPages;

async function buildPages(ids, target, context) {
	const {spinner, app, rewriter} = context;
	return await build(ids, {
		async read(id, ids, count) {
			spinner.text = `page ${id.id} ${count}/${ids.length}`;
			return renderPage(app, `/pattern/${id.id}`);
		},
		async write(page, id) {
			const pagePath = path.resolve(...[target, ...id.relative, id.name]);
			return writeEach(page, [pagePath], rewriter);
		},
		done() {
			spinner.text = `pages`;
			spinner.succeed();
		}
	});
}

import path from 'path';
import escapeHtml from 'escape-html';
import exists from 'path-exists';
import * as sander from 'sander';
import vfile from 'vfile';

const resolve = path.resolve.bind(null, 'patterns', '@docs');

export default function docsRouteFactory() {
	return async function docsRoute() {
		const doc = await getDoc(this.params.id);
		this.type = 'json';

		if (doc === null) {
			return this.throw(404);
		}

		this.body = {
			path: doc.path,
			contents: doc.contents
		};
	};
}

async function getDoc(id) {
	if (!id) {
		return null;
	}

	const file = resolve(id);

	if (!await exists(file)) {
		return null;
	}

	return vfile({
		path: path.posix.relative('./patterns', resolve(id)),
		contents: escapeHtml(await sander.readFile(file))
	});
}

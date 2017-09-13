import {createReadStream} from 'fs';
import {dirname, resolve} from 'path';

import {readFile} from 'mz/fs';
import exists from 'path-exists';

function devRequire(id, fallback = {}) {
	if (process.env.NODE_ENV !== 'production') {
		return require(id);
	}
	return fallback;
}

function styleRouteFactory(application) {
	const {runtime: {cwd}} = application;

	return async function styleRoute() {
		const staticPath = resolve(cwd, 'assets', 'style', this.params.path);

		this.type = 'css';

		if (await exists(staticPath)) {
			this.body = createReadStream(staticPath);
			return;
		}

		if (process.env.NODE_ENV === 'production') {
			this.throw(404);
		}

		const name = (this.params.path || '').replace('.css', '.less');
		const path = resolve(application.runtime.cwd, 'assets', 'style', name);

		if (!await exists(path)) {
			this.throw(404);
		}

		try {
			const less = devRequire('less');
			const Autoprefix = devRequire('less-plugin-autoprefix', () => {});
			const Cleancss = devRequire('less-plugin-clean-css', () => {});
			const NpmImport = devRequire('less-plugin-npm-import', () => {});

			const autoprefix = new Autoprefix({browser: ['IE 8', 'last 2 versions']});
			const cleancss = new Cleancss({advanced: true});
			const npmimport = new NpmImport();

			const buffer = await readFile(path);
			const results = await less.render(buffer.toString(), {
				paths: [dirname(path)],
				plugins: [npmimport, autoprefix, cleancss]
			});

			this.type = 'css';
			this.body = results.css;
		} catch (err) {
			application.log.error(err);
			this.throw(err, 500);
		}
	};
}

export default styleRouteFactory;

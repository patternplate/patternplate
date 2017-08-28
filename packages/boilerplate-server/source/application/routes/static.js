import {resolve} from 'path';
import send from 'koa-send';

export default function staticRouteFactory (application, configuration) {
	let root = resolve( application.runtime.base, application.configuration.paths.static );
	let roots = Array.isArray(configuration.options.root) ? configuration.options.root : [configuration.options.root];

	roots = [resolve(process.cwd(), application.configuration.paths.static), ...roots];
	roots = roots.map((item) => resolve(application.runtime.cwd, item));
	roots.push(root);

	return function * staticRoute () {
		this.assert(this.params.path, 404);

		for (let root of roots) {
			yield send(this, this.params.path, {root});

			if (this.status === 200) {
				application.log.debug(`Matched ${this.params.path} on ${root}`);
				break;
			} else {
				application.log.debug(`No match for ${this.params.path} on ${root}`);
			}
		}
	};
}

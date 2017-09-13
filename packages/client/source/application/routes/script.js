import {createReadStream} from 'fs';
import exists from 'path-exists';
import {resolve} from 'path';

function scriptRouteFactory(application) {
	return async function scriptRoute() {
		const path = resolve(application.runtime.cwd, 'assets', 'script', this.params.path);

		if (!await exists(path)) {
			return;
		}

		this.type = 'js';
		this.body = createReadStream(path);
	};
}

export default scriptRouteFactory;

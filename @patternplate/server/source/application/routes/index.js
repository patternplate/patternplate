import path from 'path';
import {PassThrough} from 'stream';
import {isEqual, values} from 'lodash';
import getSchema from '../../library/get-schema';
import {getPatternTree} from '../../library/utilities/get-pattern-tree';

export default function indexRouteFactory(application) {
	return async function indexRoute() {
		switch (this.accepts('json', 'text/event-stream')) {
			case 'text/event-stream': {
				this.body = await watch(this, application);
				return;
			}
			case 'json':
			default:
				this.type = 'json';
				this.body = await getSchema(application.parent, application.client, application);
				return;
		}
	};
}

async function watch(context, application) {
	const stream = new PassThrough();
	const send = (type, data) => stream.write(sse(type, data));
	const heartbeat = setInterval(() => {
		send('heartbeat', Date.now());
	}, 1000);

	const end = () => {
		clearInterval(heartbeat);
		context.res.end();
	};

	context.type = 'text/event-stream';
	context.req.on('close', end);
	context.req.on('finish', end);
	context.req.on('error', error => {
		console.error(error);
		end();
	});

	if (application.watcher) {
		let previous = await getPatternTree('./patterns');

		application.watcher.on('all', async (type, file) => {
			send('change', {type, file});
			const patterns = await getPatternTree('./patterns');
			(await affected(file, patterns, previous)).forEach(pattern => send('reload', {pattern}));
			previous = patterns;
		});
	}

	return stream;
}

function sse(event, data) {
	return `event:${event}\ndata: ${JSON.stringify(data)}\n\n`;
}

function affected(file, patterns, previous) {
	const b = strip(file);
	const basename = path.basename(file);

	if (!['demo', 'index'].includes(b) && basename !== 'pattern.json') {
		return [];
	}

	const guess = path.dirname(file.split(path.sep).slice(1).join('/'));

	const match = find(patterns, guess);
	const prev = find(previous, guess);

	if (!match) {
		return [];
	}

	if (basename === 'pattern.json' && isEqual(prev.manifest.patterns, match.manifest.patterns)) {
		return [];
	}

	if (b === 'demo') {
		return [match.id];
	}

	return [match.id, ...deps(match, 'dependents'), ...deps(match, 'demoDependents')];
}

function deps(p, key) {
	return values(p[key])
		.reduce((d, p) => [...d, p.id, ...deps(p, key)], []);
}

function find(tree, id, depth = 1) {
	if (!tree || !id) {
		return;
	}

	const frags = id.split('/').filter(Boolean);
	const sub = frags.slice(0, depth).map(strip);
	const match = tree.children.find(child => child.path.every((s, i) => sub[i] === strip(s)));

	if (match && depth < frags.length) {
		return find(match, id, depth + 1);
	}

	return match;
}

function strip(b) {
	return path.basename(b, path.extname(b));
}

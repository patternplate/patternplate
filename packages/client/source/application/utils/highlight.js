import ARSON from 'arson';
import {memoize} from 'lodash';

export default highlight;

const startWorker = memoize(url => {
	const {Worker} = global;
	return new Worker(url);
});

function highlight(options) {
	return new Promise((resolve, reject) => {
		const worker = startWorker(options.worker);

		const onWorkerMessage = e => {
			const data = ARSON.parse(e.data);

			if (data.id !== options.id) {
				return;
			}

			if (data.payload.type === 'error') {
				return reject(data.payload.error);
			}

			resolve(data);
			worker.removeEventListener('message', onWorkerMessage);
		};

		worker.addEventListener('message', onWorkerMessage);
		worker.postMessage(ARSON.stringify(options));
	});
}

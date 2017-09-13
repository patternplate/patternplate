import {
	createReadStream,
	createWriteStream
} from 'fs';

export default function copyFile(source, target) {
	return new Promise((resolver, reject) => {
		const reading = createReadStream(source);
		const writing = createWriteStream(target);
		reading.on('error', reject);
		writing.on('error', reject);
		writing.on('finish', resolver);
		reading.pipe(writing);
	});
}

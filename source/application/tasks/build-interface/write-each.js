import fs from 'mz/fs';
import path from 'path';
import isStream from 'is-stream';
import mkdirp from 'mkdirp-promise';
import streamToString from 'stream-to-string';

export default writeEach;

async function writeEach(input, targets) {
	const content = isStream(input) ? await streamToString(input) : input;
	const jobs = targets.map(async target => {
		await mkdirp(path.dirname(target));
		return fs.writeFile(target, content);
	});

	return Promise.all(jobs);
}

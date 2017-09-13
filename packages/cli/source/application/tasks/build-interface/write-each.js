import isStream from 'is-stream';
import streamToString from 'stream-to-string';
import * as sander from 'sander';

export default writeEach;
const ident = i => i;

async function writeEach(input, targets, rewriter = ident) {
	const content = isStream(input) ? await streamToString(input) : input;
	const jobs = targets.map(async target => sander.writeFile(target, rewriter(content, target)));
	return Promise.all(jobs);
}

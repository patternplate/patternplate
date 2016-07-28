import path from 'path';
import {readFile} from 'mz/fs';

function increment(line) {
	return line[0] === '#' ? `#${line}` : line;
}

export default async function getReadmeData(context = {}) {
	const readmePath = path.resolve(__dirname, '../../documentation/pattern-development.md');
	const readmeSource = await readFile(readmePath, 'utf-8');

	const readmeLines = readmeSource
		.split('\n')
		.map(increment);

	return [`# ${context.name}`, readmeLines.join('\n')].join('\n');
}

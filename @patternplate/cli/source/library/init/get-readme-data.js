import path from 'path';
import * as sander from 'sander';

function increment(line) {
	return line[0] === '#' ? `#${line}` : line;
}

export default async function getReadmeData(context = {}) {
	const readmePath = path.resolve(__dirname, '../../documentation/first-steps.md');
	const readmeSource = await sander.readFile(readmePath, 'utf-8');

	const readmeLines = readmeSource
		.split('\n')
		.map(increment);

	return [`# ${context.name}`, readmeLines.join('\n')].join('\n');
}

import {transform} from 'babel-core';
import md5 from 'md5';

const stash = {};

export default applyTransform;

function applyTransform(file, opts) {
	const source = typeof file.buffer === 'string' ?
		file.buffer :
		file.buffer.toString('utf-8');

	const id = md5(source);

	const buffer = stash[id] || transform(source, opts).code;
	stash[id] = buffer;

	return {
		buffer
	};
}

import {isEmpty, isPlainObject} from 'lodash';
import {find} from 'lodash/fp';
import {Script} from 'vm';

const findExport = find(isExport);

export default (file, context) => {
	const source = file.buffer.toString('utf-8');
	const script = new Script(source);

	script.runInContext(context, {
		filename: file.path,
		lineOffset: 1,
		columnOffset: 1,
		displayErrors: true
	});

	return findExport([context.exports, context.module.exports]);
};

function isExport(o) {
	if (isPlainObject(o) && !isEmpty(o)) {
		return true;
	}
	if (!isPlainObject(o)) {
		return Boolean(o);
	}
}

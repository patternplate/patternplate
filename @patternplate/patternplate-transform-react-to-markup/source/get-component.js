import {merge} from 'lodash';
import executeFile from './execute-file';
import getFileContext from './get-file-context';

export default function run(file) {
	const context = getFileContext(file, run);

	try {
		const result = executeFile(file, context);
		return typeof result.default === 'object' || typeof result.default === 'function' ?
			merge(result.default, result) :
			result;
	} catch (error) {
		const errorFile = file || {pattern: {}};
		const message = `Error during parsing of file ${errorFile.path} in pattern ${errorFile.pattern.id}:`;
		error.message = [
			message,
			error.message
		].join('\n');
		throw error;
	}
}

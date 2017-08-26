import path from 'path';
import copyDirectory from '../../../library/filesystem/copy-directory';
export default copyStatic;

function copyStatic(cwd, targetRoot) {
	const staticRoot = path.resolve(cwd, 'static');
	return copyDirectory(staticRoot, path.resolve(targetRoot, 'static'));
}

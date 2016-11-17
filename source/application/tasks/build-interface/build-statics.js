import path from 'path';
import exists from 'path-exists';
import findRoot from 'find-root';
import sander from 'sander';
import {sync} from 'resolve';

const cwd = process.cwd();
const resolve = id => sync(id, {basedir: cwd});
const packageResolve = (id, directory) => path.resolve(findRoot(resolve(id)), directory);

export default buildStatic;

async function buildStatic(pkg, target) {
	const assetSourcePath = packageResolve(pkg, 'assets');
	const assetTargetPath = path.resolve(target);
	const clientStaticSourcePath = packageResolve(pkg, 'static');
	const clientStaticTargetPath = path.resolve(target, 'static');
	const staticSourcePath = path.resolve(cwd, 'static');
	const staticTargetPath = path.resolve(target, 'api', 'static');

	await sander.copydir(assetSourcePath).to(assetTargetPath);
	await sander.copydir(clientStaticSourcePath).to(clientStaticTargetPath);

	if (await exists(staticSourcePath)) {
		await sander.copydir(staticSourcePath).to(staticTargetPath);
	}
}

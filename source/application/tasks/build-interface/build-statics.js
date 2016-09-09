import path from 'path';
import findRoot from 'find-root';
import ncp from 'ncp';
import {sync} from 'resolve';

const cwd = process.cwd();
const resolve = id => sync(id, {basedir: cwd});
const packageResolve = (id, directory) => path.resolve(findRoot(resolve(id)), directory);

export default buildStatic;

async function buildStatic(pkg, target, context) {
	const {spinner} = context;
	const assetSourcePath = packageResolve(pkg, 'assets');
	const assetTargetPath = path.resolve(target);
	const clientStaticSourcePath = packageResolve(pkg, 'static');
	const clientStaticTargetPath = path.resolve(target, 'static');
	const staticSourcePath = path.resolve(cwd, 'static');
	const staticTargetPath = path.resolve(target, 'api', 'static');

	spinner.text = `${path.relative(cwd, assetSourcePath)} => ${path.relative(cwd, assetTargetPath)}`;
	await ncp(assetSourcePath, assetTargetPath);
	spinner.succeed();

	spinner.text = `${path.relative(cwd, clientStaticSourcePath)} => ${path.relative(cwd, clientStaticTargetPath)}`;
	await ncp(clientStaticSourcePath, clientStaticTargetPath);
	spinner.succeed();

	spinner.text = `${path.relative(cwd, staticSourcePath)} => ${path.relative(cwd, staticTargetPath)}`;
	await ncp(staticSourcePath, staticTargetPath);
	spinner.succeed();
	return;
}

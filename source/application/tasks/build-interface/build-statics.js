import path from 'path';
import exists from 'path-exists';
import findRoot from 'find-root';
import sander from 'sander';
import ora from 'ora';
import {sync} from 'resolve';

const cwd = process.cwd();
const resolve = id => sync(id, {basedir: cwd});
const packageResolve = (id, directory) => path.resolve(findRoot(resolve(id)), directory);

export default buildStatic;

async function buildStatic(pkg, target) {
	const spinner = ora().start();
	const assetSourcePath = packageResolve(pkg, 'assets');
	const assetTargetPath = path.resolve(target);
	const clientStaticSourcePath = packageResolve(pkg, 'static');
	const clientStaticTargetPath = path.resolve(target, 'static');
	const staticSourcePath = path.resolve(cwd, 'static');
	const staticTargetPath = path.resolve(target, 'api', 'static');

	try {
		spinner.text = `${path.relative(cwd, assetSourcePath)} => ${path.relative(cwd, assetTargetPath)}`;
		await sander.copydir(assetSourcePath).to(assetTargetPath);

		spinner.text = `${path.relative(cwd, clientStaticSourcePath)} => ${path.relative(cwd, clientStaticTargetPath)}`;
		await sander.copydir(clientStaticSourcePath).to(clientStaticTargetPath);

		if (await exists(staticSourcePath)) {
			spinner.text = `${path.relative(cwd, staticSourcePath)} => ${path.relative(cwd, staticTargetPath)}`;
			await sander.copydir(staticSourcePath).to(staticTargetPath);
		}

		spinner.text = 'statics';
		spinner.succeed();
		return;
	} catch (error) {
		spinner.text = error.message || error;
		spinner.fail();
		throw error;
	}
}

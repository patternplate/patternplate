import resolvePackage from './resolve-package';
export default loadTransform;

async function loadTransform(name) {
	const id = await resolvePackage(`patternplate-transform-${name}`, {
		basedir: process.cwd()
	});
	return {
		name,
		id,
		export: require(id)
	};
}
